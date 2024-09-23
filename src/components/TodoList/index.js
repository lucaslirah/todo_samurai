import React from 'react';
import PropTypes from 'prop-types';
import {MdDelete} from "react-icons/md";

import { Container } from './styles';

function TodoList({ todos, todoToggleCheck, todoDelete }) {
  return(
  // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li key={todo.id.toString()}>
                  <span
                    className={
                      // `todo ${todo.checked? "checked" : ""}`
                      ['todo', todo.checked ? 'checked' : ''].join(' ')
                    }
                    onClick={() => todoToggleCheck && todoToggleCheck(todo)}
                    onKeyDown={() => todoToggleCheck && todoToggleCheck(todo)}
                    role="button"
                    tabIndex={0}
                  >{todo.title}</span>
              <button
                type="button"
                className="remove"
                onClick={() => todoDelete && todoDelete(todo)}
              >
                <MdDelete size={28}/>
              </button>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

// prop-types validation
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  })).isRequired,
  todoToggleCheck: PropTypes.func.isRequired,
  todoDelete: PropTypes.func.isRequired,
};

export default TodoList;
