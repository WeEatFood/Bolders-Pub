import React from 'react';
import { Clock } from 'react-feather';
import '../../scss/info.scss';

const Schedule = () => (
  <div className="hours__container">
    <div className="info__hours-container">
      <h1>Hours</h1>
      <h6>We are located at 315 pine st. in Boulder CO.</h6>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Monday 2 - 12
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Tuesday 2 - 12
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Wednesday 2 - 12
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Thursday 2 - 12
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Friday 2 - 2
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Saturday 2 - 2
        </li>
      </ul>
      <ul className="info__hours-list">
        <li>
          <Clock className="info__hours-clock" />
          Sunday Closed
        </li>
      </ul>
    </div>
  </div>
);

export default Schedule;
