import { types } from 'mobx-state-tree';
import Todos from './Todos';

const store = types
  .model('store', {
    todos: types.array(Todos),
  })
  .actions((self) => {
    return {
      add({ title, description, deadline }) {
        self.todos.push({ title, description, deadline });
      },
      getCompleted() {
        return self.todos.filter((todo) => todo.done);
      },
    };
  })
  .views((self) => ({
    todoCount() {
      return self.todos.length;
    },
  }));

export default store;
