import React from 'react';

import { arrowInterface } from '../interfaces/interfaces';

function ArrowRight(props: arrowInterface) {
  return (
    <div title="nextButton" onClick={props.onClick}>
      <i className="fa fa-chevron-right arrowRight" aria-hidden="true"></i>
    </div>
  );
}

export default ArrowRight;
