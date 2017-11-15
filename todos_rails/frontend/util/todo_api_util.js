const APIUtil = {
  fetchTodos: () => (
    $.ajax({
      method: 'GET',
      url: '/api/todos'
    })
  ),

  createTodo: (todo) => (
    $.ajax({
      method: 'POST',
      url: '/api/todos',
      data: {
        todo: {
          title: todo.title,
          body: todo.body
        }
      }
    })
  ),

  updateTodo: (todo) => (
    $.ajax({
      method: 'PATCH',
      url: `/api/todos/${todo.id}`,
      data: {
        todo: {
          done: todo.done
        }
      }
    })
  ),

  deleteTodo: (todo) => (
    $.ajax({
      method: 'DELETE',
      url: `/api/todos/${todo.id}`
    })
  )
};

export default APIUtil;
