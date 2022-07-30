import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenD from '../views/screenD';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
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

it('screenD redirect to screenC1', async () => {
  act(() => {
    render(
      <MemoryRouter
        initialEntries={[
          { state: { prevPath: 'screenC2', title: 'Option 1', previousPath: 'screenB2' } }
        ]}>
        <Routes>
          <Route path="*" element={<ScreenD />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });

  const title = screen.getByTitle('previousButton');
  userEvent.type(title, 'clicked');

  expect(mockedUsedNavigate.mockResolvedValue()).toHaveBeenCalledWith('../screenC2', {
    replace: true,
    state: { back: true, name: 'Option 1', previousPath: 'screenB2' }
  });
});
