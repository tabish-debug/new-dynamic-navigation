import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenD from '../views/screenD';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test screenD', () => {
  act(() => {
    render(
      <BrowserRouter>
        <ScreenD />
      </BrowserRouter>,
      container
    );
  });
  expect(document.querySelector('#screenD')).toBeInTheDocument();
});
