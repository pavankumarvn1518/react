import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from './MyComponents/AddTodo'; // Corrected import
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]
);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0){
      sno = 0;

    }
    else{
     sno = todos[todos.length - 1].sno + 1 ;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  }

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      {/* Pass addTodo function as a prop to AddTodo component */}
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
