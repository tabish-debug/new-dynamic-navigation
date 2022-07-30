import React from 'react';

import { arrowInterface } from '../interfaces/interfaces';

function ArrowLeft(props: arrowInterface) {
  return (
    <div onClick={props.onClick} title="previousButton">
      <i className="fa fa-chevron-left arrowLeft" aria-hidden="true"></i>
    </div>
  );
}

export default ArrowLeft;
