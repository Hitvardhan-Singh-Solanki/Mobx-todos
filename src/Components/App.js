import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './Todo';
import AddTodos from './AddTodos';
import Navbar from './Navbar';

export default (props) => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/home">
          <Todo />
        </Route>
        <Route path="/add-todo">
          <AddTodos />
        </Route>
      </Switch>
    </Router>
  );
};
