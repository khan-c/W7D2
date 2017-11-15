import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    const todoList = todos.map( (todo) => {
      return (<TodoListItem
                key={ todo.id }
                todo={ todo }
                removeTodo={ this.props.removeTodo }
                updateTodo={ this.props.updateTodo }
              />
      );
    });

    return(
      <div>
        <TodoForm
          createTodo={ this.props.createTodo }
          errors={ this.props.errors }
        />
        <ul>
          { todoList }
        </ul>
      </div>
    );
  }
}

export default TodoList;


// module.exports = (props) => {
//   const { todos } = props;
//   const todoList = todos.map( (el) => {
//     let klass = "";
//     if ( el.done ) {
//       klass = "done";
//     }
//
//     return (<li key={ el.id } className={ klass }>
//               <h3>{ el.title }</h3>
//               <p>{ el.body }</p>
//             </li>
//     );
//   });
//
//   return(
//     <ul>
//       { todoList }
//     </ul>
//   );
// };
