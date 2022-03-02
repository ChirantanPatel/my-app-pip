import './../App.css'
import { Todos } from './Todos';
import React, { useEffect, useState } from 'react'; 
import { AddToDo } from './AddToDo';


const TodoMain = () => {

    let initTodo = [];
    if (localStorage.getItem("todos")) {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
  
    const onDelete = (todo) => {
      console.log("I am on delete", todo);
  
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
    }
  
    const addTodo = (title, desc) => {
      console.log("I am adding this todo", title, desc);
      let sno = todos.length + 1;
      const myTodo = {
        title: title,
        desc: desc,
        sno: sno
      }
      setTodos([...todos, myTodo]);
    }
  
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <>
            <AddToDo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </>
    );
}

export default TodoMain;
