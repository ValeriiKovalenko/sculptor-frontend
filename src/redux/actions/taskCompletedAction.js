// eslint-disable-next-line import/prefer-default-export
export const dashboardCheckboxAction = (e, goalID, tasks, date) => {
  // eslint-disable-next-line no-console
  console.log('e.target', e.target);
  // eslint-disable-next-line no-console
  console.log('tasks ======= ', tasks);
  return {
    type: 'DASHBOARD_TASK_COMPLETED',
    taskID: e.target.id,
    checked: e.target.checked,
    goalID,
    tasks,
    date,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const sidebarCheckboxAction = e => ({
  type: 'SIDEBAR_TASK_COMPLETED',
  id: e.target.value,
  name: e.target.name,
  checked: e.target.checked,
});
