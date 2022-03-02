import React from 'react' 
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <div className="container m-b-10">
        <h3 className="text-center my-3">Todos List</h3>
        {/* {props.todos} */}
        {props.todos.length === 0 ? "No Todos to display" : 
          props.todos.map((todo,index) => {
              return (
                <div key={index}>
                  <TodoItem  todo={todo} key={index} onDelete={props.onDelete} /> <hr/>
                </div>
              )
          })
        }        
    </div>
  )
}
