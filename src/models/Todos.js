import { types } from 'mobx-state-tree';

const Todo = types
  .model('Todo', {
    title: types.string,
    deadline: types.string,
    description: types.string,
    done: false,
  })
  .actions((self) => {
    return {
      toggle() {
        self.done = !self.done;
      },
    };
  });

export default Todo;
