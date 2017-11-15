export const allTodos = (state) => (
  Object.keys(state.todos).map((todo) => (
    state.todos[todo]
  ))
);

export const stepsByTodoId = (state, todoId) => {
  const steps = Object.keys(state.steps).map( (step) => (
    state.steps[step]
  ));
  return steps.filter( (stepObj) => (
    stepObj.todoId === todoId
  ));
};
