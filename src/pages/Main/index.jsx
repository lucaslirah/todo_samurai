import React from "react";

import { Container } from "./styles";

export default function Main() {
  return (
    <Container>
      <section id="app" className="container">
        <header>
          <h1 className="title">todo</h1>
        </header>
        <section className="main">
          <input className="new-todo" placeholder="o que precisa ser feito?" />
        </section>
      </section>
    </Container>
  );
}
