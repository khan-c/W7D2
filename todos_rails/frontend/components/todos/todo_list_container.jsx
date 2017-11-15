import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import * as TodoActions from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(TodoActions.createTodo(todo)),
  removeTodo: (todo) => dispatch(TodoActions.removeTodo(todo)),
  fetchTodos: () => dispatch(TodoActions.fetchTodos()),
  updateTodo: (todo) => dispatch(TodoActions.updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
