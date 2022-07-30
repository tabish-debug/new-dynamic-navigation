import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowRight from '../components/arrowright';
import Choice from '../components/choice';
import otherService from '../services/other.service';
import { notifyError } from '../components/toast';

const choices = ['A', 'B', 'C', 'D', 'E'];

function ScreenB1() {
  const navigate = useNavigate();

  const [choiceValue, setChoiceValue] = useState('');

  function getChoiceValue(value: string) {
    setChoiceValue(value);
  }

  async function ButtonClick() {
    const submit = await otherService.rSubmitSelection();

    if (submit.status === 200) {
      return navigate('../screenC1', {
        replace: true,
        state: { name: choiceValue }
      });
    }

    notifyError(`${submit.data}! Data Submittion Error`);
  }

  return (
    <div id="screenB1">
      <div id="screenB1C">
        {choices.map((choice) => (
          <Choice
            key={choice}
            className={'Choice ' + choice === choiceValue ? 'newBorder' : ''}
            name={'Choice ' + choice}
            getValue={getChoiceValue}
          />
        ))}
      </div>
      <ArrowRight onClick={ButtonClick} />
    </div>
  );
}

export default ScreenB1;
