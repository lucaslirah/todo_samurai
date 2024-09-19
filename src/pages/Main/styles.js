import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: block;
    max-width: 480px;
    margin: 0 auto;
    padding: 1rem;

    height: 100vh;
  }

  .title {
    color: #fab1a0;
    font-size: 64px;
    font-weight: 100;
    text-align: center;
  }

  .main{
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

    >.new-todo {
      background-color: rgba(0, 0, 0, 0.03);
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
      font-size: 1.5rem;
      font-style: italic;
      width: 100%;
      padding: 16px 16px 18px 16px;
    }
  }

  ul.todo-list li {
    display: flex;
    border-top: 1px solid #dfe6e9;
    border-bottom: 1px solid #dfe6e9;
  }

  .todo {
    flex: 1;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    word-break: break-all;
    line-height: 1.2;
    transition: color 0.3s;
    padding: 15px 15px 17px 15px;
  }

  .remove {
    background-color: transparent;
    border: none;
    color: #ff7675;
    cursor: pointer;
    outline: none;
    width: 50px;
  }
`;
