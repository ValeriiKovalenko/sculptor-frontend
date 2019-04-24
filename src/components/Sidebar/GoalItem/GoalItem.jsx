/*eslint-disable*/
import React from 'react';
import TaskList from '../TaskList/TaskList';
import s from './GoalItem.module.css';
import EditBtn from '../../BtnEditGoal/BtnEditGoal';

const GoalItem = ({ data }) => {
  return (
    <li className={s.List}>
      <div className={s.Title}>
        <span className={s.Color} />
        <h2 className={s.SubTitle}>{data.goalTitle}</h2>
        <EditBtn id={data._id} />
      </div>

      <p className={s.Description}>{data.goalMotivation}</p>
      <TaskList data={data.goalTasks} />
    </li>
  );
};

export default GoalItem;
