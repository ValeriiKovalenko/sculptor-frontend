/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

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

const TaskItem = ({ data }) => {
  // eslint-disable-next-line no-console
  // console.log('data', data);
  //   goalId: "5cb9c6ae3a3716ba53565874"
  // isComplete: false
  // taskActiveDates: []
  // taskCreateDate: "2019-04-19T13:01:32.751Z"
  // taskTitle: "Task3"
  // taskWeekRange: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // __v: 0
  // _id: "5cb9c6ae3a3716ba53565876"
  return (
    <>
      <Item key={data.id}>
        {/* <ItemStatus color={data.color} /> */}

        <CustomCheckbox
          goalID={data.goalId}
          taskID={data.id}
          checkboxType={'dashboardCheckbox'}
        />

        <ItemDescription>{data.title}</ItemDescription>

        <MoveToTrash>
          <IconButtons />
        </MoveToTrash>
      </Item>
    </>
  );
};

export default TaskItem;
