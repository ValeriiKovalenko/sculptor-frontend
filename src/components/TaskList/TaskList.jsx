/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

// list item
import TaskItem from '../TaskItem/TaskItem';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const TaskList = ({ items }) => {
  return (
    <List>
      {items.map((item, indx) => (
        <TaskItem data={item} indx={indx} />
      ))}
    </List>
  );
};

export default TaskList;
