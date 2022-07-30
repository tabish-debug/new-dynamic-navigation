import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenC1 from '../views/screenC1';

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

test('test loading existing in this screen', () => {
  act(() => {
    render(
      <BrowserRouter>
        <ScreenC1 />
      </BrowserRouter>,
      container
    );
  });
  const loading = screen.getByRole('status');
  expect(loading).toBeInTheDocument();
  expect(document.querySelector('#screenC1')).toBeInTheDocument();
  expect(document.querySelector('p')).toBeInTheDocument();
});
