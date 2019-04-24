import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Lens from '@material-ui/icons/Lens';
import CheckCircle from '@material-ui/icons/CheckCircle';

import {
  sidebarCheckboxAction,
  dashboardCheckboxAction,
} from '../../redux/actions/taskCompletedAction';

import './CustomCheckbox.css';

const CustomCheckbox = ({
  id,
  goalID,
  tasks,
  date,
  checkboxType,
  // eslint-disable-next-line no-shadow
  sidebarCheckboxAction,
  // eslint-disable-next-line no-shadow
  dashboardCheckboxAction,
  goalColor,
  color,
  // taskCompleted,
}) => {
  // // eslint-disable-next-line no-console
  // console.log('data', data);

  const styles = {
    small: {
      width: 36,
      height: 36,
      color: color || goalColor || '#dee5e8',
    },
    medium: {
      width: 48,
      height: 48,
      color: color || goalColor || '#dee5e8',
    },
    large: {
      width: 60,
      height: 60,
      color: color || goalColor || '#dee5e8',
    },
  };

  const returnCheckbox = type => {
    if (type === 'dashboardCheckbox') {
      return (
        <div className="dashboardCheckbox">
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUnchecked fontSize="small" />}
                checkedIcon={<CheckCircle fontSize="small" />}
                onChange={e => dashboardCheckboxAction(e, goalID, tasks, date)}
                style={styles.small}
                id={id}
                tasks={tasks}
                date={date}
              />
            }
          />
        </div>
      );
    }
    if (type === 'sidebarCheckbox') {
      return (
        <div className="sidebarCheckbox">
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUnchecked fontSize="small" />}
                checkedIcon={<CheckCircle fontSize="small" />}
                onChange={sidebarCheckboxAction}
                style={styles.small}
              />
            }
          />
        </div>
      );
    }
    return (
      <div className="circleCheckbox">
        <FormControlLabel
          control={
            <Checkbox
              icon={<Lens fontSize="large" />}
              disabled
              style={styles.large}
            />
          }
        />
      </div>
    );
  };
  // eslint-disable-next-line no-console
  return returnCheckbox(checkboxType);
};

function MSTP(state) {
  return {
    goalColor: state.goalData.goalColor,
    // taskCompleted: state.taskCompleted,
    // data: state.data,
  };
}

function MDTP(dispatch) {
  return {
    sidebarCheckboxAction(e) {
      dispatch(sidebarCheckboxAction(e));
    },
    dashboardCheckboxAction(e, goalID, tasks, date) {
      dispatch(dashboardCheckboxAction(e, goalID, tasks, date));
    },
  };
}

CustomCheckbox.propTypes = {
  sidebarCheckboxAction: PropTypes.func.isRequired,
  dashboardCheckboxAction: PropTypes.func.isRequired,
  goalColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checkboxType: PropTypes.string.isRequired,
};

export default connect(
  MSTP,
  MDTP,
)(CustomCheckbox);
