import React from 'react';
import { Card } from 'react-bootstrap';
import { Clock } from 'react-feather';
import '../../scss/info.scss';

const Hours = () => (
  <Card className="text-center">
    <Card.Header>Hours of Operation</Card.Header>
    <Card.Body>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Monday 2 - 12</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Tuesday 2 - 12</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Wednesday 2 - 12</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Thursday 2 - 12</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Friday 2 - 2</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Saturday 2 - 2</span>
        </ul>
      </div>
      <div className="hours-wrap">
        <Clock className="info__hours-clock" />
        <ul className="">
          <span>Sunday Closed</span>
        </ul>
      </div>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
);

export default Hours;
