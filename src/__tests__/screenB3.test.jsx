import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenB3 from '../views/screenB3';

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

it('test screenB3', async () => {
  act(() => {
    render(
      <BrowserRouter>
        <ScreenB3 />
      </BrowserRouter>,
      container
    );
  });
  expect(document.querySelector('p')).toBeInTheDocument();
});
