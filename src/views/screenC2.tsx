import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowLeft from '../components/arrowleft';
import Loading from '../components/loading';

function ScreenC2() {
  const location: any = useLocation();
  const navigate = useNavigate();

  const [clickButton, setClickButton] = useState(false);
  const [timeComplete, setTimeComplete] = useState(false);

  function ClickHandle() {
    setClickButton(true);
  }

  useEffect(() => {
    if (clickButton) {
      const previous = location?.state?.previousPath;
      previous && navigate(`../${previous}`, { replace: true });
    }
  }, [clickButton]);

  useEffect(() => {
    if (timeComplete) {
      navigate('../screenD', {
        replace: true,
        state: {
          previousPath: location?.state?.prevPath,
          prevPath: location.pathname,
          title: location?.state?.name
        }
      });
    }
  }, [timeComplete]);

  useEffect(() => {
    if (!location?.state?.back) {
      setTimeout(() => {
        setTimeComplete(true);
      }, 3000);
    }
  }, [location, timeComplete]);

  return (
    <div id="screenC2">
      <ArrowLeft onClick={ClickHandle} />
      <div className="c2Container">
        <h1>{location?.state?.name}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ad nobis dolores veritatis
          hic! Veritatis voluptates odio error hic fuga perspiciatis obcaecati officia impedit
          architecto quis quam eaque totam nobis reiciendis corporis quidem, explicabo fugiat, earum
          distinctio libero at sit, dolor autem aperiam. Ea consequatur repellendus non ipsa
          recusandae aperiam enim vero rem minima blanditiis. Neque accusamus obcaecati quae iure
          quaerat quo saepe dicta vitae animi odit inventore culpa nesciunt veritatis impedit, error
          error sed minus amet quas, vel consequatur nostrum nemo sint voluptatum? Voluptas, qui
          nulla incidunt blanditiis provident impedit culpa aut saepe tempore, distinctio
          voluptatibus labore corporis illum dolor magnam quam odit. Hic aliquam dolor vero
          laudantium, necessitatibus ullam fuga unde maxime assumenda nam soluta molestiae odit
          blanditiis nostrum eaque? Nulla nostrum ex, praesentium sit magni dolores corporis esse
          autem quas consequatur doloremque dicta voluptas, blanditiis pariatur? Esse hic excepturi
          voluptatibus odit, pariatur quas, dicta maxime non corporis, reprehenderit nostrum id
          porro beatae dolorum.
        </p>
        <div className="loading">
          {!location?.state?.back && <Loading width={'2rem'} height={'2rem'} />}
        </div>
      </div>
    </div>
  );
}

export default ScreenC2;
