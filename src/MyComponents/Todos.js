import React from 'react'
import TodoItem from "./TodoItem"
const Todos = (props) => {
  return (
    <div className="cointainer" >
      <h3>Todos List</h3>
     {/* { props.todos} */}
     <TodoItem todo = {props.todos}/>
     
    </div>
  )
}

export default Todos;
