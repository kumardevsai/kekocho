import merge from 'lodash/merge';
import { RECEIVE_ALL_QUESTIONS } from '../actions/session_actions';
import { RECEIVE_QUESTION } from '../actions/question_actions';

const defaultState = { };

const EntityReducer = (state = defaultState, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.entities);
    case RECEIVE_QUESTION:
      debugger
      return merge({}, state, { questions: action.entities });
    default:
      return state;
  }
};

export default EntityReducer;
