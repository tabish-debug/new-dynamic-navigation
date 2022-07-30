import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowLeft from '../components/arrowleft';
import Loading from '../components/loading';

function ScreenC1() {
  const location: any = useLocation();
  const navigate = useNavigate();

  const [clickButton, setClickButton] = useState(false);
  const [timeComplete, setTimeComplete] = useState(false);

  function ClickHandle() {
    setClickButton(true);
  }

  useEffect(() => {
    if (clickButton) {
      navigate(`../screenB1`, { replace: true });
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

    !location?.state?.back &&
      setTimeout(() => {
        setTimeComplete(true);
      }, 3000);
  }, [location, navigate, timeComplete]);

  return (
    <div id="screenC1">
      <ArrowLeft onClick={ClickHandle} />
      <div className="c1Conatiner">
        <h1>{location?.state?.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis consequatur placeat
          amet, vero tenetur perferendis. Qui, doloremque odio! Asperiores amet sapiente fugiat
          officiis suscipit, iure repellat repellendus vero temporibus? Sunt fuga culpa aliquam
          perspiciatis inventore reiciendis tenetur provident illo odit nostrum iste saepe quidem
          quidem laboriosam, reprehenderit labore veniam sed! Explicabo aspernatur vel expedita
          deleniti blanditiis perspiciatis, voluptates delectus? Ea magnam sunt esse soluta eos
          fugiat vel, aliquid minima, nisi earum libero hic incidunt dignissimos delectus natus
          eaque quis provident repudiandae et velit tempore expedita. Neque assumenda sed, similique
          cum a ipsa porro, ab sint sapiente, ratione culpa fuga provident? Veritatis cupiditate
          eligendi numquam nam magni ducimus assumenda eaque tenetur dolor dolorem consequatur at,
          voluptates veniam quidem laudantium repudiandae ad ut inventore quas reprehenderit soluta
          officiis porro ipsum. Suscipit incidunt numquam quisquam! Repellendus iure animi at vero
          temporibus soluta, quo maiores illo labore dolores, quia adipisci ipsum, mollitia amet
          cumque libero cupiditate modi explicabo deleniti enim quam laboriosam! Dolore nulla ipsam
          veniam voluptas omnis hic. Eius aliquid dolorum laborum autem cupiditate alias doloremque
          perspiciatis modi sint ab assumenda fuga aliquam, rem quod incidunt molestias odit, illum,
          laboriosam iure voluptatem esse voluptatum! Aspernatur consequuntur nesciunt sapiente
          accusamus obcaecati perferendis, debitis est vero animi, voluptates ipsam distinctio
          molestias, omnis odio. Mollitia debitis veniam consequuntur expedita sequi quasi odit
          exercitationem hic eaque non tempore saepe commodi quaerat quibusdam soluta, rem
          recusandae numquam omnis temporibus impedit illum! Magni velit praesentium sequi aperiam
          earum recusandae necessitatibus maxime ipsa, commodi a, facere dolorem? Ex, optio!
          Obcaecati et eum qui officiis explicabo. Delectus saepe culpa totam deserunt? Quae ut quo,
          laborum cupiditate commodi obcaecati porro ipsa exercitationem soluta, rerum voluptas
          corrupti. Veniam voluptatum dignissimos eos eveniet culpa! Eos sed iure voluptatem esse,
          deleniti unde cupiditate veniam asperiores nemo architecto, aut vero doloremque.
        </p>
        <div className="loading">
          {!location?.state?.back && <Loading width={'2rem'} height={'2rem'} />}
        </div>
      </div>
    </div>
  );
}

export default ScreenC1;
