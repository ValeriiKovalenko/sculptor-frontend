/* eslint-disable */

// delete task from store
const deleteTask = (indx, taskDate) => ({
  type: 'DASHBOARD_DELETE_TASK',
  payload: {
    indx,
    taskDate,
  },
});

export default deleteTask;
