/* eslint-disable */

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

const asyncTasksAction = () => dispatch => {
  fetch('http://5.58.94.188:8000/api/goal/5cb9963d06b961a1025d6000', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOTk2M2QwNmI5NjFhMTAyNWQ2MDAwIiwiZW1haWwiOiJnb29nbGVAZ28uY29tIiwiaWF0IjoxNTU2Mjg5NTE3fQ.ztLOPjE_MQgxhNrSDVGn4Go6ZRPdh0DwFD6rvEelRSE',
    },
  })
    .then(response => response.json())
    .then(data => dispatch(getTasks(data)))
    .catch(error => console.log(error));
};

export default asyncTasksAction;
