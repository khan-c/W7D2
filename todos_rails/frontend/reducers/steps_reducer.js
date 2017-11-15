import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP }
  from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: 'fill bathtub',
    done: false,
    todoId: 2
  },
  2: {
    id: 2,
    title: 'catch dog',
    done: false,
    todoId: 2
  }
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STEPS:
      let newState = {};
      action.steps.forEach( (step) => {
        newState[step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      newState = Object.assign({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
