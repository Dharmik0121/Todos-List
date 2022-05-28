// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { AddTodo } from "./MyComponent/AddTodo";
// import { About } from "./MyComponent/About";
import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (Name, School) => {
    let rollNo;
    if (todos.length === 0) {
      rollNo = 0;
    }
    else {
      rollNo = todos[todos.length - 1].rollNo + 1;
    }
    const myTodo = {
      rollNo: rollNo,
      Name: Name,
      school: School,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      {/* <Router>
        <Header title="My Todos List" searchbar={true} />
        <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
        <Footer />
      </Router> */}
      <Header title="My Todos List" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>

    </>
  );
}

export default App;
