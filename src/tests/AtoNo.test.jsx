import { render, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenA from '../views/screenA';
import ScreenC2 from '../views/screenC2';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'noScreenB', status: 200 })
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

it('screenA redirect to noScreenB', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenA sessionId={'uuid'} />} />
          <Route path="/screenC2" element={<ScreenC2 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });
  await waitFor(() => {
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
