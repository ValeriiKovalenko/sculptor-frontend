// eslint-disable-next-line import/prefer-default-export
export const dashboardCheckboxAction = e => {
  // eslint-disable-next-line no-console
  console.log(e.target.value, e.target.checked, e.target.name);
  return {
    type: 'DASHBOARD_TASK_COMPLETED',
    id: e.target.value,
    name: e.target.name,
    checked: e.target.name,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const sidebarCheckboxAction = e => ({
  type: 'SIDEBAR_TASK_COMPLETED',
  id: e.target.value,
  name: e.target.name,
  checked: e.target.checked,
});
