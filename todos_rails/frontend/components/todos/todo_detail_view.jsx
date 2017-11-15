import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.destroyTodo = this.destroyTodo.bind(this);
  }

  destroyTodo(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    const { id, body } = this.props.todo;
    return (
      <div>
        <StepListContainer todoId={ id } />
        { id }:&nbsp;
        { body }
        <button onClick={ this.destroyTodo }>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
