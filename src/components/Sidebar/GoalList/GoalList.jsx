/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import GoalItem from '../GoalItem/GoalItem';
import s from './GoalList.module.css';

const GoalList = ({ goalsArray }) => {
  return (
    <ul className={s.List}>
      {goalsArray.map(el => (
        <GoalItem data={el} />
      ))}
    </ul>
  );
};

function MSTP(state) {
  return {
    goalsArray: state.goals,
  };
}

export default connect(
  MSTP,
  null,
)(GoalList);
