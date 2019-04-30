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
      // updating "isComplete" flag in store.weekTasks
      const dayData = action.tasks.find(
        day => day.data.toString().slice(0, 3) === targetDay,
      );
      const dayTasks = dayData.tasks;
      const targetTask = dayTasks.find(task => task.id === action.taskID);
      targetTask.isComplete = action.checked;
      // eslint-disable-next-line no-console
      console.log(targetTask);
      // ===============THIS REDUCER SHOULD ALSO PERFORM THE FOLLOWING UPDATES===================
      // updating 2 flags:
      // "isComplete" flag in store.goals[0].goalTasks[0]
      // and "status" flag in store.goals[0].goalTasks[0].taskWeekRange[0].status

      // the first array element can be found by store.goals[0]._id (goal id)
      // the second array element can be found by store.goals[0].goalTasks[0]._id (task id)
      // TO BE UPDATED on this level: store.goals[0].goalTasks[0].isComplete (boolean)
      // the third array element can be found by store.goals[0].goalTasks[0].taskWeekRange[0].week (1-7, where 1 corresponds to the element with index 0)
      // TO BE UPDATED on this level: store.goals[0].goalTasks[0].taskWeekRange[0].status (boolean)

      // TO BE UPDATED (conditional): store.goals[0].goalCompleted (boolean), if all the tasks for this goal have been checked out

      // OTHER POTENTIAL UPDATES
      // updating a flag in store.tasks (empty array by now)
      // updating store.taskCompleted (empty array by now)
      // updating store.taskArray (empty array by now)
      // ======================================================================================

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
