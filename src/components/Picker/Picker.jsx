/*eslint-disable*/

import React, { Component, Fragment } from 'react';

import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
  defaultMultipleDateInterpolation,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Picker.css';
import { connect } from 'react-redux';
import selectedData from '../../redux/actions/selectedDataAction';
import userTaskDate from '../../redux/actions/userTaskDateAction';
import calendarButton from '../../redux/actions/calendarButtonAction';

class Picker extends Component {
  render() {
    const actionData = (e, selectedData) => {
      this.props.dataHandler(e, this.props.selectedData);
    };
    const { actionCalendar, tasks, taskId } = this.props;

    const userWeeks = tasks.taskWeekRange.filter(el => el.status);

    const numUserWeeks = userWeeks.map(el => el.week);

    const taskCreationDate = tasks.taskCreateDate;

    // console.log(numUserWeeks, taskCreationDate);

    function taskDatesFilter(taskCreationDate, numUserWeeks) {
      const allWeeks = [
        {
          date: Date.parse(taskCreationDate),
          week: 1,
        },
      ];

      let date = Date.parse(taskCreationDate);
      let weekCounter = 1;
      let dayCounter = 1;

      while (dayCounter !== 63) {
        date += 86401000;

        const dateObj = {
          date: date,
          week: weekCounter,
        };

        allWeeks.push(dateObj);

        dayCounter += 1;

        if (dayCounter % 7 === 0) {
          weekCounter += 1;
        }
      }

      const userDisabledWeeks = allWeeks.filter(
        el => !numUserWeeks.includes(el.week),
      );

      const datesObject = {
        allWeeks,
        userDisabledWeeks,
        taskId,
      };

      return datesObject;
    }

    const userDates = taskDatesFilter(taskCreationDate, numUserWeeks);

    // console.log(new Date(userDates.allWeeks[0].date));
    // console.log('gfhfhf: ', userPickedWeeks);

    // const taskActiveDates = tasks.find(el => el.id === taskId);

    console.log(tasks.taskActiveDates);

    return (
      <div className="calendar">
        <button onClick={actionCalendar} className={'calendar__button'}>
          X
        </button>
        <InfiniteCalendar
          min={userDates.allWeeks[0].date}
          max={userDates.allWeeks[62].date}
          minDate={userDates.allWeeks[0].date}
          maxDate={userDates.allWeeks[62].date}
          Component={withMultipleDates(Calendar)}
          selected={this.props.selectedData}
          disabledDates={userDates.userDisabledWeeks.map(el => el.date)}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={actionData}
          keyboardSupport={true}
          width={window.innerWidth <= 650 ? window.innerWidth : 350}
          height={250}
          rowHeight={70}
          theme={{
            selectionColor: '#223653',
            textColor: {
              default: '#333',
              active: '#FFF',
            },
            weekdayColor: '#223653',
            headerColor: '#223653',
            floatingNav: {
              background: '#223653',
              color: '#FFF',
              chevron: '#FFA726',
            },
          }}
          displayOptions={{ hideYearsOnSelect: false }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedData: state.selectedData,
    userTaskDate: state.userTaskDate,
    calendarButton: state.calendarButton,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataHandler: function(event, selected) {
      dispatch(selectedData(event, selected));
    },
    userTaskDateFunc: function(taskCreationDate) {
      dispatch(userTaskDate(taskCreationDate));
    },
    calendarButtonFunc: function() {
      dispatch(calendarButton());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picker);