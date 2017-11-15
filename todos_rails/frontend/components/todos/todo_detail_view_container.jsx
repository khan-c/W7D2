import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { deleteTodo } from '../../actions/todo_actions';
import * as StepActions from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  receiveSteps: (steps) => dispatch(StepActions.receiveSteps(steps))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
