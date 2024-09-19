import React, { useState } from "react";

import { Container } from "./styles";

export default function Main() {
  const [value, setValue] = useState("");
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const erase = () => {
    setValue("");
  }
  const submit = () => {
    console.log(value);
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
        </section>
      </section>
    </Container>
  );
}
