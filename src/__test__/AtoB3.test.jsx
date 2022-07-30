import { render, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenA from '../views/screenA';
import ScreenB3 from '../views/screenB3';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'screenB3', status: 200 })
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

it('screenA redirect to screenB3', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenA sessionId={'uuid'} />} />
          <Route path="/screenB3" element={<ScreenB3 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });
  await waitFor(() => {
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
