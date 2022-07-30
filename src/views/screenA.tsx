import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import otherService from '../services/other.service';
import Loading from '../components/loading';
import { notifySuccess, notifyError } from '../components/toast';
import { SessionInterface } from '../interfaces/interfaces';

function ScreenA(props: SessionInterface) {
  const navigate = useNavigate();
  const localStorageData = localStorage.getItem('screenName');

  const [redirectScreen, setRedirectScreen] = useState(localStorageData);

  useEffect(() => {
    if (redirectScreen) {
      navigate(`../${redirectScreen}`, { replace: true });
    }
  }, [redirectScreen]);

  async function getScreen() {
    if (props.sessionId) {
      const res = await otherService.rFetchExperiments();

      if (res.status === 200) {
        const response = res.data === 'noScreenB' ? 'screenC2' : res.data;
        setRedirectScreen(response);
        localStorage.setItem('screenName', response || '');
        return;
      }

      notifyError(`${res.data}`);
      notifyError('No Screen Redirect');
      return;
    }
  }

  useLayoutEffect(() => {
    getScreen();
    props.sessionId && notifySuccess(`${props.sessionId} is login successfuly`);
  }, [props.sessionId]);

  return (
    <div id="screenA">
      <Loading width={'4rem'} height={'4rem'} />
    </div>
  );
}

export default ScreenA;
