import { combineReducers } from 'redux';

import editGoal from './goalEditModeReducer';
// import goals from './saveGoalReducer';
import goals from './initData';
import goalData from './goalReducer';
import taskCompleted from './taskCompletedReducer';

const rootReducer = combineReducers({
  goalData,
  editGoal,
  goals,
  taskCompleted,
});

export default rootReducer;
