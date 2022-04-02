import React from 'react'

import { useRemeshDomain, useRemeshQuery } from 'remesh-react'

import { TodoAppDomain } from '../domains/TodoApp'
import { TodoListDomain } from '../domains/TodoList'

import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoAppDomain = useRemeshDomain(TodoAppDomain())
  const todoListDomain = useRemeshDomain(TodoListDomain())

  const filteredTodoKeyList = useRemeshQuery(todoAppDomain.query.FilteredTodoKeyListQuery())
  const isAllCompleted = useRemeshQuery(todoListDomain.query.IsAllCompletedQuery())

  const handleToggleAll = () => {
    todoListDomain.command.toggleAllTodos()
  }

  console.log('render list')

  return (
    <section className="main">
      <input
        id="toggle-all"
        type="checkbox"
        className="toggle-all"
        checked={isAllCompleted}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {filteredTodoKeyList.map((todoId) => (
          <TodoItem key={todoId} id={todoId} />
        ))}
      </ul>
    </section>
  )
}
