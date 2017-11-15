import { connect } from 'react-redux';
import StepList from './step_list';
import * as StepActions from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(todoId),
  todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(StepActions.receiveStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepList);
