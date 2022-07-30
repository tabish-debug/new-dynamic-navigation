import { render, screen, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenA from '../views/screenA';
import ScreenB2 from '../views/screenB2';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'screenB2', status: 200 })
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

it('screenA redirect to screenB2 ', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenA sessionId={'uuid'} />} />
          <Route path="/screenB2" element={<ScreenB2 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });
  await waitFor(() => {
    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes.map((checkbox) => checkbox.value)).toEqual([
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      'Option 5'
    ]);
  });
});
