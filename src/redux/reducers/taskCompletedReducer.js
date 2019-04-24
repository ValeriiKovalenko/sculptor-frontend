/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */

// const week = [
//   {
//     color: '',
//     completed: false,
//     _id: '123',
//     checkboxType: 'dashboardCheckbox',
//   },
//   {
//     color: '',
//     completed: false,
//     _id: '456',
//     checkboxType: 'dashboardCheckbox',
//   },
// ];

function taskCompleted(state = [], action) {
  switch (action.type) {
    case 'DASHBOARD_TASK_COMPLETED':
      const targetDay = action.date.toString().slice(0, 3);
      const dayData = action.tasks.find(
        day => day.data.toString().slice(0, 3) === targetDay,
      );
      const dayTasks = dayData.tasks;
      const targetTask = dayTasks.find(task => task.id === action.taskID);
      targetTask.isComplete = action.checked;
      // eslint-disable-next-line no-console
      console.log(targetTask);
      return targetTask;

    // update color in weekTasks
    // update color in Tasks

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
// UPD task completed status
// state.goals[0].goalTasks[0].isComplete //false
// goal color
// state.goalData.goalColor //""
// state.goalData.activeGoalId //""

// goal completed status
// state.goals[0].goalCompleted //false
// owner ID
// state.goals[0].ownerId //"5cb9963d06b961a1025d6000"
