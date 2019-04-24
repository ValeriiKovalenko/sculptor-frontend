// eslint-disable-next-line import/prefer-default-export
export const dashboardCheckboxAction = e => ({
  type: 'DASHBOARD_TASK_COMPLETED',
  id: e.target.value,
  name: e.target.name,
  checked: e.target.checked,
});

// eslint-disable-next-line import/prefer-default-export
export const sidebarCheckboxAction = e => ({
  type: 'SIDEBAR_TASK_COMPLETED',
  id: e.target.value,
  name: e.target.name,
  checked: e.target.checked,
});
