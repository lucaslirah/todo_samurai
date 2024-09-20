import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

export default function Main() {
  const [value, setValue] = useState("");
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [ todos, setTodos ] = useState([]);

  const erase = () => {
    setValue("");
  }
  const submit = () => {
    // colocar os valores insertados do input em setTodos como uma nova tarefa
    const newTodo = {
      id: Date.now(),
      title: value,
      checked: false
    }

    setTodos([
      newTodo,
     ...todos
    ]);

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
  const todoToggleCheck = (todo) => {
    // alterar o estado checked da tarefa com uso do operador !
    setTodos(todos.map((t) => (
      t.id === todo.id? {...t, checked:!t.checked} : t
    )));
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
