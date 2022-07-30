import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import ScreenA from '../views/screenA';

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

it('testing is loading element exist', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <ScreenA />
      </MemoryRouter>,
      container
    );
  });
  const LoadingElement = screen.getByRole('status');
  expect(LoadingElement).toBeInTheDocument();
});
