import React from 'react';
import { useForm } from 'react-hook-form';
import './AddTodos.css';
import { Header, Button } from 'semantic-ui-react';
import { inject } from 'mobx-react';

export default inject('todoStore')((props) => {
  console.log(props);
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onSubmit = (data) => {
    props.todoStore.add({
      title: data.title,
      description: data.desc,
      deadline: data.deadline,
    });
    reset();
  };

  return (
    <div className={'form-container'}>
      <Header as="h2" color="green">
        Add Todo
      </Header>
      <p>Total Todos: {props.todoStore.todoCount()}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'form-input-container'}>
          <input
            name="title"
            ref={register({ required: true })}
            placeholder="Title"
          />
          {errors.title && (
            <span className={'error'}>This field is required</span>
          )}
        </div>
        <div className={'form-input-container'}>
          <input
            name="desc"
            ref={register({ required: true })}
            placeholder="Desc"
          />
          {errors.desc && (
            <span className={'error'}>This field is required</span>
          )}
        </div>
        <div className={'form-input-container'}>
          <input
            name="deadline"
            ref={register({ required: true })}
            placeholder="Complete by"
          />
          {errors.deadline && (
            <span className={'error'}>This field is required</span>
          )}
        </div>
        <Button color="green" content="Add Todo" />
      </form>
    </div>
  );
});
