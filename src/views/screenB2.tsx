import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowRight from '../components/arrowright';
import Option from '../components/option';
import { notifyError } from '../components/toast';
import otherService from '../services/other.service';

const options = [1, 2, 3, 4, 5];

function ScreenB2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [checkValue, setCheckValue] = useState('');

  function getCheckValue(value: string) {
    setCheckValue(value);
  }

  async function ButtonClick() {
    const submit = await otherService.rSubmitSelection();

    if (submit.status === 200) {
      return navigate('../screenC2', {
        replace: true,
        state: { name: checkValue, prevPath: location.pathname }
      });
    }

    notifyError(`${submit.data}! Data Submittion Error`);
  }

  return (
    <div id="screenB2">
      <div className="screenB2C">
        {options.map((option) => (
          <Option
            checked={'Option ' + option === checkValue}
            key={option}
            name={'Option ' + option}
            getValue={getCheckValue}
          />
        ))}
      </div>
      <ArrowRight onClick={ButtonClick} />
    </div>
  );
}

export default ScreenB2;
