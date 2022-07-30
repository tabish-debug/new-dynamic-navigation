import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenC2 from '../views/screenC2';

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
        <ScreenC2 />
      </BrowserRouter>,
      container
    );
  });
  const loading = screen.getByRole('status');
  expect(loading).toBeInTheDocument();
});
