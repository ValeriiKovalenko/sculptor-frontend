/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */

const weekTasks = [
  {
    color: '',
    completed: false,
    _id: '123',
    checkboxType: 'dashboardCheckbox',
  },
  {
    color: '',
    completed: false,
    _id: '456',
    checkboxType: 'dashboardCheckbox',
  },
];

function taskCompleted(state = weekTasks, action) {
  switch (action.type) {
    case 'DASHBOARD_TASK_COMPLETED':
      // eslint-disable-next-line no-console
      console.log('DASHBOARD_TASK_COMPLETED', state);
      return state;

    // const targetTask = state.find(
    //   el => el._id === action.id || el.name === action.id,
    // );
    // targetTask.taskWeekRange[action.name].status = action.checked;
    // return state.map(el => (el._id === action.id ? targetTask : el));
    case 'SIDEBAR_TASK_COMPLETED':
      // eslint-disable-next-line no-console
      console.log('SIDEBAR_TASK_COMPLETED', state);
      return state;

    default:
      return state;
  }
}

export default taskCompleted;

// goal ID
// state.goals[0]._id //"5cb9c6ae3a3716ba53565874"
// goal ID saved in the Task
// state.goals[0].goalTasks[0].goalId //"5cb9c6ae3a3716ba53565874"
// task ID
// state.goals[0].goalTasks[0]._id //"5cb9c6ae3a3716ba53565876"
// name and id of the task saved in the Goal
// state.goalData.goalTasks[0].name //"1556098808857"
// state.goalData.goalTasks[0].id //"1556098808857"
// owner ID
// state.goals[0].ownerId //"5cb9963d06b961a1025d6000"
// task completed status
// state.goals[0].goalTasks[0].isComplete //false
// goal completed status
// state.goals[0].goalCompleted //false
// goal color
// state.goalData.goalColor //""
// state.goalData.activeGoalId //""
