import React from 'react';

import { loadingInterface } from '../interfaces/interfaces';

function Loading(props: loadingInterface) {
  return (
    <div
      className="spinner-border"
      style={{ width: props.width, height: props.height }}
      role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
