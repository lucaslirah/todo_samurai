import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { Container } from "./styles";
import NewTodo from "../../components/NewTodo";

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
          <ul className="todo-list">
            {
              todos.map((todo) => (
                <li key={todo.id.toString()}>
                  <span
                    className={
                    // `todo ${todo.checked? "checked" : ""}`
                      ['todo', todo.checked ? 'checked' : ''].join(' ')
                    }
                    onClick={() => todoToggleCheck(todo)}
                    onKeyDown={() => todoToggleCheck(todo)}
                    role="button"
                    tabIndex={0}
                  >{todo.title}</span>
                  <button
                    type="button"
                    className="remove"
                    onClick={() => todoDelete(todo)}
                  >
                    <MdDelete size={28}/>
                  </button>
                </li>
              ))
            }
          </ul>
        </section>
      </section>
    </Container>
  );
}
