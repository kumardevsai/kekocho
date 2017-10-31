import merge from 'lodash/merge';
import { RECEIVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_ANSWER } from '../actions/answer_actions';

const defaultState = { };

const QuestionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      //This is ugly, I need to be more considerate
      
      return merge({}, state, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case RECEIVE_ANSWER:
      
      return merge({}, state, action.newAnswer.questions );
    default:
      return state;
  }
};

export default QuestionReducer;
