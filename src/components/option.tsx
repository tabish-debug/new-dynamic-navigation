import React, { useState } from 'react';

import { optionInterface } from '../interfaces/interfaces';

function Option(props: optionInterface) {
  const [check, setCheck] = useState(false);
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckChecked"
        value={props.name}
        checked={check && props.checked}
        onChange={(e) => {
          props.getValue(e.target.value);
          setCheck(e.target.checked);
        }}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {props.name}
      </label>
    </div>
  );
}

export default Option;
