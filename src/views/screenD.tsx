import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowLeft from '../components/arrowleft';

function ScreenD() {
  const location: any = useLocation();
  const navigate = useNavigate();

  const [clickButton, setClickButton] = useState(false);

  function handleClick() {
    setClickButton(true);
  }

  useEffect(() => {
    if (clickButton) {
      navigate(`../${location?.state?.prevPath}`, {
        replace: true,
        state: {
          name: location?.state?.title,
          back: true,
          previousPath: location?.state?.previousPath
        }
      });
    }
  }, [clickButton]);

  return (
    <>
      <ArrowLeft onClick={handleClick} />
      <div id="screenD">
        <i className="fa fa-check checkIcon" aria-hidden="true"></i>
      </div>
    </>
  );
}

export default ScreenD;
