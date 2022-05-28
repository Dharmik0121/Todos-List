import React from 'react'
import { TodoItem } from "../MyComponent/TodoItem";

export const Todos = (props) => {
  let mystyle ={
    minHeight : "70vh"
  }
  return (
    <div className='container' style={mystyle}>
      <hr />
      <h2 className='my-3'>Todos List</h2>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.rollNo} onDelete={props.onDelete} /><hr />
            </>
          )
        })
      }
    </div>
  )
}
