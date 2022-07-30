import React from 'react';

import { choiceInterface } from '../interfaces/interfaces';

function Choice(props: choiceInterface) {
  function setValue() {
    props.getValue(props.name);
  }

  return (
    <div className={`choice ${props.className}`}>
      <li className="list-group-item">
        <h2 onClick={setValue}>{props.name}</h2>
      </li>
    </div>
  );
}

export default Choice;
