import React, { useState } from "react";

import { Container } from "./styles";
import NewTodo from "../../components/NewTodo";
import TodoList from "../../components/TodoList";

export default function Main() {

  const [ todos, setTodos ] = useState([]);

  const todoToggleCheck = (todo) => {
    // alterar o estado checked da tarefa com uso do operador !
    setTodos(todos.map((t) => (
      t.id === todo.id? {...t, checked:!t.checked} : t
    )));
  }
  const todoDelete = (todo) => {
    // remover a tarefa da lista com uso do filter
    setTodos(todos.filter((t) => t.id!== todo.id));
  }
  const onNewTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      title: value,
      checked: false
    }
    setTodos([
      newTodo,
      ...todos
    ]);
  }

  return (
    <Container>
      <section id="app" className="container">
        <header>
          <h1 className="title">todo</h1>
        </header>
        <section className="main">
          <NewTodo onNewTodo={onNewTodo}/>
          <TodoList todos={todos} todoDelete={todoDelete} todoToggleCheck={todoToggleCheck}/>
        </section>
      </section>
    </Container>
  );
}
