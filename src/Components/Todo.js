import React from 'react';
import { Checkbox, Header, Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div className={'todos-list-container'}>
      <Header as="h2" color="green">
        Todo List
      </Header>
      {props.todoStore.todos.map((todo) => {
        return (
          <Checkbox
            toggle
            key={todo.title}
            label={<label>{todo.title}</label>}
            checked={todo.done}
            onChange={todo.toggle}
          />
        );
      })}
      {/* <Button
        color="green"
        content="Get Completed Tasks"
        onClick={props.todoStore.getCompleted}
      /> */}
    </div>
  );
};

export default inject('todoStore')(observer(Todo));
