import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

interface TodoListItemProps {
  todo: Todo
  toggleComplete: ToggleComplete
  onRemoveTodo: RemoveTodo
  editTodo: EditTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>(todo.text)

  const onDelete = () => {
    onRemoveTodo(todo)
  }

  const onEdit = () => {
    setIsEditOn(true)
  }

  ;<div className="icons">
    <RiCloseCircleLine onClick={() => onDelete()} className="delete-icon" />
    <TiEdit onClick={() => onEdit()} className="edit-icon" />
  </div>

  const onTodoUpdate = (e: any) => {
    let text = e.target.value
    setInputText(text)
    editTodo(text)
  }

  return (
    <li className={todo.complete ? 'todo-row completed' : 'todo-row'}>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {isEditOn ? (
          <input
            className="edit-input"
            type="text"
            value={inputText}
            onChange={(e) => onTodoUpdate(e)}
          />
        ) : (
          todo.text
        )}
      </label>

      <div className="icons">
        <RiCloseCircleLine onClick={() => onDelete()} className="delete-icon" />
        <TiEdit onClick={() => onEdit()} className="edit-icon" />
      </div>
    </li>
  )
}
