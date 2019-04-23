/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './SetGoalModal.css';
import ModalGoalTitle from '../ModalGoalTitle/ModalGoalTitle';
// import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';
import ModalGoalTasks from '../ModalGoalTasks/ModalGoalTasks';
import ModalGoalMotivation from '../ModalGoalMotivation/ModalGoalMotivation';

import GoalActions from '../../redux/actions/saveGoalActions';

const SetGoalModal = ({
  saveGoal,
  goalTitle,
  goalColor = 'a',
  goals,
  goalMotivation,
  goalTasks,
  activeGoalID,
}) => {
  return (
    <div className="SetGoalModal" onClick={e => e.stopPropagation()}>
      <h3 className="SetGoalModal__title">Set a Goal</h3>
      <ModalGoalTitle />
      {/* <ModalGoalIconSelect from Yulia/> */}
      <div className="temp-select">select</div>
      <ModalGoalTasks />
      <ModalGoalMotivation />

      <button
        type="button"
        onClick={() =>
          saveGoal(
            goalTitle,
            goalColor,
            goalTasks,
            goalMotivation,
            goals,
            activeGoalID,
          )
        }
        disabled={!goalTitle.length || !goalColor.length}
      >
        Save
      </button>
    </div>
  );
};

SetGoalModal.propTypes = {
  goalTitle: PropTypes.string.isRequired,
  saveGoal: PropTypes.func.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  goalColor: PropTypes.string.isRequired,
  goalMotivation: PropTypes.string,
  goalTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGoalID: PropTypes.string.isRequired,
};

SetGoalModal.defaultProps = {
  goalMotivation: '',
};

function mapStateToProps(state) {
  return {
    goals: state.goals,
    goalTitle: state.goalTitle,
    goalColor: state.goalColor,
    goalMotivation: state.goalMotivation,
    goalTasks: state.goalTasks,
    activeGoalID: state.activeGoalID,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveGoal: (
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      goals,
      activeGoalID,
    ) =>
      dispatch(
        GoalActions.saveGoal(
          goalTitle,
          goalColor,
          goalTasks,
          goalMotivation,
          goals,
          activeGoalID,
        ),
      ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetGoalModal);
