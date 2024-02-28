// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const deleteTodos = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={deleteTodos}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
