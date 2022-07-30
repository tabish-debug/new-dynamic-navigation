import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenC1 from '../views/screenC1';
import ScreenD from '../views/screenD';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});

it('screenC1 redirect to screenD', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenC1 />} />
          <Route path="/screenD" element={<ScreenD />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  const title = screen.getByTitle('previousButton');

  expect(document.querySelector('#screenD')).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
