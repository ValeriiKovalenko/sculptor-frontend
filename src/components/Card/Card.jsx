/* eslint-disable */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle';
import TaskList from '../TaskList/TaskList';

const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 0 0 6px 1px #b9b9b9;
  border-radius: 2px;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  width: 29.5rem;
`;

const Card = ({ data }) => {
  const title = String(data.data).substr(0, 10);

  return (
    <CardItem>
      <CardTitle title={title} />
      <TaskList data={data} />
    </CardItem>
  );
};

export default Card;
