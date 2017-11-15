import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };


    this.updateTodo = this.updateTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    this.setState({ detail: !this.state.detail });
  }

  updateTodo(e){
    e.preventDefault();
    const doneTodo = Object.assign({}, this.props.todo);
    doneTodo.done = !doneTodo.done;
    this.props.updateTodo(doneTodo);
  }

  render() {
    const { todo } = this.props;
    let klass = "";
    let button = "Done";
    if ( todo.done ) {
      klass = "done";
      button = "Undo";
    }
    let detail = "";
    if ( this.state.detail ) {
      detail = <TodoDetailViewContainer
                  todo={ this.props.todo }
                />;
    }

    return(
      <li className={ klass }>
        <button onClick={ this.updateTodo }>{ button }</button>
        <h3 onClick={ this.toggleDetail }>{ todo.title }</h3>
        { detail }
      </li>
    );
  }
}


export default TodoListItem;
