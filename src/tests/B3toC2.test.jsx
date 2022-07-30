import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenB3 from '../views/screenB3';
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

it('screenB3 redirect to screenC2', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenB3 />} />
          <Route path="/screenC2" element={<ScreenC2 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });

  const rightButton = await screen.findByTitle('nextButton');
  userEvent.type(rightButton, 'clicked');

  await waitFor(async () => {
    const heading = screen.getByRole('heading');
    const loading = screen.getByRole('status');
    expect(heading.textContent).toEqual('');
    expect(loading).toBeInTheDocument();
    expect(document.querySelector('#screenC2')).toBeInTheDocument();
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
