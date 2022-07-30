import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenB2 from '../views/screenB2';
import ScreenC2 from '../views/screenC2';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ status: 200 })
}));

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

it('screenB2 redirect to screenC2', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenB2 />} />
          <Route path="/screenC2" element={<ScreenC2 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });

  const option = screen.getAllByRole('checkbox');
  const option3 = option[2];
  userEvent.type(option3, option3.value);

  const rightButton = await screen.findByTitle('nextButton');
  userEvent.type(rightButton, 'clicked');

  await waitFor(async () => {
    const heading = screen.getByRole('heading');
    const loading = screen.getByRole('status');
    expect(heading.textContent).toEqual('Option 3');
    expect(loading).toBeInTheDocument();
    expect(document.querySelector('#screenC2')).toBeInTheDocument();
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
