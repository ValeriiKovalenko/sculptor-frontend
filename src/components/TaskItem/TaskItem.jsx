/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import deleteTask from '../Dashboard/deleteAction';
import IconButtons from '../TrashButton';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

// icon status
const ItemStatus = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${props => props.color || '#fff'};
  border: 1px solid ${props => props.color || '#ccc'};
`;
// text
const ItemDescription = styled.p`
  padding-left: 1.5rem;
  color: #454545;
  font-size: 1.4rem;
  font-family: 'Roboto Light';
  flex: 1;
`;

const MoveToTrash = styled.div`
  opacity: 0;
  transition: 0.5s;

  ${Item}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

const TaskItem = ({ data, remove, indx, tasks }) => {
  // console.log('data =========== ', data);
  // console.log('indx =========== ', indx);
  // console.log('data.date =========== ', data.date);
  return (
    <>
      <Item key={data.id}>
        {/* <ItemStatus color={data.color} /> */}

        <CustomCheckbox
          id={data.id}
          checkboxType={'dashboardCheckbox'}
          goalID={data.goalId}
          tasks={tasks}
          date={data.date}
          color={data.color}
        />

        <ItemDescription>{data.title}</ItemDescription>

        <MoveToTrash onClick={() => remove(indx, data.date)}>
          <IconButtons />
        </MoveToTrash>
      </Item>
    </>
  );
};

const mstp = store => ({
  tasks: store.weekTasks,
});

const mdtp = dispatch => ({
  remove: (id, taskDate) => dispatch(deleteTask(id, taskDate)),
});

export default connect(
  mstp,
  mdtp,
)(TaskItem);
