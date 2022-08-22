import { Observable } from 'rxjs'
import * as Y from 'yjs'

import { ArrayDiffResult, ObjectDiffResult, UpdatedDiffResult } from './diff-patch'

import { SerializableType } from './types'

export const fromSerializableArray = (value: unknown[], yarray?: Y.Array<unknown>): Y.Array<unknown> => {
  const array = yarray ?? new Y.Array()

  for (const item of value) {
    array.push([fromSerializable(item)])
  }

  return array
}

export const fromSerializableObject = (value: object, ymap?: Y.Map<unknown>): Y.Map<unknown> => {
  const map = ymap ?? new Y.Map()

  for (const [key, item] of Object.entries(value)) {
    map.set(key, fromSerializable(item))
  }

  return map
}

export const fromSerializable = (value: unknown) => {
  if (Array.isArray(value)) {
    return fromSerializableArray(value)
  }

  if (typeof value === 'object' && value !== null) {
    return fromSerializableObject(value)
  }

  if (value === undefined) {
    return null
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return value as string | number | boolean
  }

  throw new Error(`Cannot convert ${value} to Yjs type`)
}

export const patchYjsArray = (yarray: Y.Array<unknown>, diffResult: ArrayDiffResult) => {
  // update first
  for (const updatedResult of diffResult.updatedResults) {
    if (typeof updatedResult.key !== 'number') {
      throw new Error(`Expected key to be a number, got ${updatedResult.key}`)
    }

    const oldValue = yarray.get(updatedResult.key)
    const updatedValue = patchYjs(oldValue, updatedResult)

    if (updatedValue !== oldValue) {
      yarray.delete(updatedResult.key, 1)
      yarray.insert(updatedResult.key, [updatedValue])
    }
  }

  // delete next
  for (let i = diffResult.deletedResults.length - 1; i >= 0; i--) {
    const deletedResult = diffResult.deletedResults[i]
    if (typeof deletedResult.key !== 'number') {
      throw new Error(`Expected key to be a number, got ${deletedResult.key}`)
    }
    yarray.delete(deletedResult.key, 1)
  }

  // add last to keep the indexes correct
  if (diffResult.addedResults.length > 0) {
    const list = diffResult.addedResults.map((addedResult) => fromSerializable(addedResult.value))
    yarray.push(list)
  }
}

export const patchYjsObject = (ymap: Y.Map<unknown>, diffResult: ObjectDiffResult) => {
  for (const addedResult of diffResult.addedResults) {
    if (typeof addedResult.key !== 'string') {
      throw new Error(`Expected key to be a string, got ${addedResult.key}`)
    }
    ymap.set(addedResult.key, fromSerializable(addedResult.value))
  }

  for (const updatedResult of diffResult.updatedResults) {
    if (typeof updatedResult.key !== 'string') {
      throw new Error(`Expected key to be a string, got ${updatedResult.key}`)
    }
    const oldValue = ymap.get(updatedResult.key)
    const updatedValue = patchYjs(oldValue, updatedResult)

    if (updatedValue !== oldValue) {
      ymap.set(updatedResult.key, updatedValue)
    }
  }

  for (const deletedResult of diffResult.deletedResults) {
    if (typeof deletedResult.key !== 'string') {
      throw new Error(`Expected key to be a string, got ${deletedResult.key}`)
    }
    ymap.delete(deletedResult.key)
  }
}

export const patchYjs = (value: unknown, diffResult: UpdatedDiffResult) => {
  if (diffResult === null) {
    return value
  }

  if (diffResult.type === 'object') {
    if (value instanceof Y.Map) {
      patchYjsObject(value, diffResult)
      return value
    }
    throw new Error(`Expected value to be a Y.Map, got ${value}`)
  }

  if (diffResult.type === 'array') {
    if (value instanceof Y.Array) {
      patchYjsArray(value, diffResult)
      return value
    }

    throw new Error(`Expected value to be a Y.Array, got ${value}`)
  }

  if (diffResult.type === 'changed') {
    return fromSerializable(diffResult.value)
  }

  throw new Error(`Unknown diff result: ${diffResult}`)
}

const yjsJsonWeakMap = new WeakMap<Y.AbstractType<any>, SerializableType>()

const yjsWeakSet = new WeakSet<Y.AbstractType<any>>()

export const yjsToJson = (yjsValue: Y.AbstractType<any>): SerializableType => {
  if (!yjsWeakSet.has(yjsValue)) {
    yjsValue.observeDeep(() => {
      yjsJsonWeakMap.delete(yjsValue)
    })
    yjsWeakSet.add(yjsValue)
  }

  if (yjsJsonWeakMap.has(yjsValue)) {
    return yjsJsonWeakMap.get(yjsValue)!
  }

  if (yjsValue instanceof Y.Array) {
    const value = yjsValue.toJSON()
    yjsJsonWeakMap.set(yjsValue, value)
    return value
  }

  if (yjsValue instanceof Y.Map) {
    const value = yjsValue.toJSON()
    yjsJsonWeakMap.set(yjsValue, value)
    return value
  }

  throw new Error(`Cannot convert ${yjsValue} to JSON`)
}

export const fromYjs = (yjsValue: Y.AbstractType<any>) => {
  return new Observable<SerializableType>((subscriber) => {
    const handler = (_yevents: Y.YEvent<Y.AbstractType<unknown>>[], transaction: Y.Transaction) => {
      if (transaction.origin !== origin) {
        const value = yjsToJson(yjsValue)
        subscriber.next(value)
      }
    }

    const listen = () => {
      yjsValue.observeDeep(handler)
    }

    const unlisten = () => {
      yjsValue.unobserveDeep(handler)
    }

    listen()

    return () => {
      unlisten()
    }
  })
}
