import { Remesh, RemeshDomainPayload, RemeshInspectorDomain, RemeshStoreOptions } from 'remesh'
import { RemeshDebuggerHelper, RemeshDebugOptions } from 'remesh-debugger-helper'

import type { Config as _Config } from '@redux-devtools/extension'
import type { Action } from 'redux'

const getReduxDevtools = () => {
  if (typeof window !== 'undefined') {
    return window.__REDUX_DEVTOOLS_EXTENSION__
  }
}

export type RemeshReduxDevtoolsOptions = RemeshStoreOptions & RemeshDebugOptions

export const RemeshReduxDevtools = (options?: RemeshReduxDevtoolsOptions) => {
  const reduxDevtools = getReduxDevtools()

  if (!reduxDevtools) {
    return
  }

  const helper = RemeshDebuggerHelper(options)

  const devtools = reduxDevtools.connect({
    name: options?.name,
    features: {
      pause: false, // start/pause recording of dispatched actions
      lock: false, // lock/unlock dispatching actions and side effects
      persist: false, // persist states on page reloading
      export: false, // export history of actions in a file
      import: false, // import history of actions from a file
      jump: false, // jump back and forth (time travelling)
      skip: false, // skip (cancel) actions
      reorder: false, // drag and drop actions in the history list
      dispatch: false, // dispatch custom actions or action creators
      test: false, // generate tests for the selected actions
    },
  })

  const send = (_type: string, action: Action<unknown>) => {
    devtools.send(action, null)
  }

  const store = Remesh.store({
    name: `RemeshReduxDevtools(${options?.name ?? ''})`,
  })

  const inspectorDomain = store.getDomain(RemeshInspectorDomain())

  const getOwnerInfo = <T, U>(owner: RemeshDomainPayload<T, U>) => {
    const ownerInfo = {
      domainId: owner.Domain.domainId,
      domainName: owner.Domain.domainName,
    }

    if (owner.arg !== undefined) {
      return {
        ...ownerInfo,
        domainArg: owner.arg,
      }
    }

    return ownerInfo
  }

  helper.onActive('domain', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshDomainStorageCreatedEvent, (event) => {
      const Domain = event.storage.Domain
      const info = {
        type: `Domain::Created::${Domain.domainName}`,
        domainId: Domain.domainId,
        domainName: Domain.domainName,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          domainArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })

    store.subscribeEvent(inspectorDomain.event.RemeshDomainStorageDestroyedEvent, (event) => {
      const Domain = event.storage.Domain
      const info = {
        type: `Domain::Destroyed::${Domain.domainName}`,
        domainId: Domain.domainId,
        domainName: Domain.domainName,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          domainArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })

    store.subscribeEvent(inspectorDomain.event.RemeshStateStorageCreatedEvent, (event) => {
      const State = event.storage.State
      const info = {
        type: `State::Created::${State.stateName}`,
        owner: getOwnerInfo(State.owner),
        stateId: State.stateId,
        stateName: State.stateName,
        stateValue: event.storage.currentState,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          stateArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  helper.onActive('state', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshStateStorageUpdatedEvent, (event) => {
      const State = event.storage.State
      const info = {
        type: `State::Updated::${State.stateName}`,
        owner: getOwnerInfo(State.owner),
        stateId: State.stateId,
        stateName: State.stateName,
        stateValue: event.storage.currentState,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          stateArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })

    store.subscribeEvent(inspectorDomain.event.RemeshStateStorageDestroyedEvent, (event) => {
      const State = event.storage.State
      const info = {
        type: `State::Destroyed::${State.stateName}`,
        owner: getOwnerInfo(State.owner),
        stateId: State.stateId,
        stateName: State.stateName,
        stateValue: event.storage.currentState,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          stateArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  helper.onActive('query', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshQueryStorageCreatedEvent, (event) => {
      const Query = event.storage.Query
      const info = {
        type: `Query::Created::${Query.queryName}`,
        owner: getOwnerInfo(Query.owner),
        queryId: Query.queryId,
        queryName: Query.queryName,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          queryArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })

    store.subscribeEvent(inspectorDomain.event.RemeshQueryStorageUpdatedEvent, (event) => {
      const Query = event.storage.Query
      const info = {
        type: `Query::Updated::${Query.queryName}`,
        owner: getOwnerInfo(Query.owner),
        queryId: Query.queryId,
        queryName: Query.queryName,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          queryArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })

    store.subscribeEvent(inspectorDomain.event.RemeshQueryStorageDestroyedEvent, (event) => {
      const Query = event.storage.Query
      const info = {
        type: `Query::Destroyed::${Query.queryName}`,
        owner: getOwnerInfo(Query.owner),
        queryId: Query.queryId,
        queryName: Query.queryName,
      }

      if (event.storage.arg !== undefined) {
        send(info.type, {
          ...info,
          queryArg: event.storage.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  helper.onActive('command', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshCommandReceivedEvent, (event) => {
      const Command = event.payload.Command
      const info = {
        type: `Command::Received::${Command.commandName}`,
        owner: getOwnerInfo(Command.owner),
        commandId: Command.commandId,
        commandName: Command.commandName,
      }

      if (event.payload.arg !== undefined) {
        send(info.type, {
          ...info,
          commandArg: event.payload.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  helper.onActive('command$', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshCommand$ReceivedEvent, (event) => {
      const Command$ = event.payload.Command$
      const info = {
        type: `Command::Received::${Command$.command$Name}`,
        owner: getOwnerInfo(Command$.owner),
        command$Id: Command$.command$Id,
        command$Name: Command$.command$Name,
      }

      if (event.payload.arg !== undefined) {
        send(info.type, {
          ...info,
          command$Arg: event.payload.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  helper.onActive('event', () => {
    store.subscribeEvent(inspectorDomain.event.RemeshEventEmittedEvent, (event) => {
      const Event = event.payload.Event

      const info = {
        type: `Event::Emitted::${Event.eventName}`,
        owner: getOwnerInfo(Event.owner),
        eventId: Event.eventId,
        eventName: Event.eventName,
      }

      if (event.payload.arg !== undefined) {
        send(info.type, {
          ...info,
          eventArg: event.payload.arg,
        })
      } else {
        send(info.type, info)
      }
    })
  })

  return store
}
