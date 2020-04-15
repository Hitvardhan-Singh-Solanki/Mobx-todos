import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Provider } from 'mobx-react';
import store from './models/Store';

const todoStore = store.create({
  todos: [
    {
      title: `Get some coffee`,
      description: `Go to market and get some cappuccino`,
      deadline: `EOB`,
    },
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
