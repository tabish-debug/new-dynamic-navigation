import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenB1 from '../views/screenB1';
import ScreenC1 from '../views/screenC1';

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

it('screenB1 redirect to screenC1', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenB1 />} />
          <Route path="/screenC1" element={<ScreenC1 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });

  const choice = screen.getByText('Choice C');
  userEvent.type(choice, choice.textContent);

  const rightButton = await screen.findByTitle('nextButton');
  userEvent.type(rightButton, 'clicked');

  await waitFor(async () => {
    const heading = screen.getByRole('heading');
    const loading = screen.getByRole('status');
    expect(heading.textContent).toEqual('Choice C');
    expect(loading).toBeInTheDocument();
    expect(document.querySelector('#screenC1')).toBeInTheDocument();
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
