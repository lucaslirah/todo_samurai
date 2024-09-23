import styled from "styled-components";

export const Container = styled.div`
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
  .todo.checked{
    text-decoration: line-through;
    color: #b2bec3;
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
