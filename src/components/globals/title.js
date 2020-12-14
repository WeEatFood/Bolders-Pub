import React from 'react';
import '../../scss/layout.scss';

export default function Title({ title }) {
  return (
    <div className="row text-start pr-3">
      <div className="float-end text-end text-sm-center mr-3">
        <h1 className="display-3 text-capitalize">{title}</h1>
      </div>
    </div>
  );
}
