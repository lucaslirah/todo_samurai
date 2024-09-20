import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

export default function Main() {
  const [value, setValue] = useState("");
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const initialTodos = [
    {id: 1, title: "estudar programação", checked: false},
    {id: 2, title: "estudar violão", checked: true}
  ]

  const [ todos] = useState(initialTodos);

  const erase = () => {
    setValue("");
  }
  const submit = () => {
    erase();
  }
  const onChange = (e) => {
    setValue(e.target.value);
  }
  const verifyKey = (e) => {
    if (e.which === ENTER_KEY) {
      submit();
    } else if(e.which === ESCAPE_KEY){
      erase();
    }
  }

  return (
    <Container>
      <section id="app" className="container">
        <header>
          <h1 className="title">todo</h1>
        </header>
        <section className="main">
          <input
            className="new-todo"
            placeholder="o que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={verifyKey}
          />
          <ul className="todo-list">
            {
              todos.map((todo) => (
                <li key={todo.id.toString()}>
                  <span className="todo">{todo.title}</span>
                  <button
                    type="button"
                    className="remove"
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
