import { render, screen, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScreenA from '../views/screenA';
import ScreenB1 from '../views/screenB1';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'screenB1', status: 200 })
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

it('screenA redirect to screenB1', async () => {
  act(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<ScreenA sessionId={'uuid'} />} />
          <Route path="/screenB1" element={<ScreenB1 />} />
        </Routes>
      </MemoryRouter>,
      container
    );
  });
  await waitFor(() => {
    const heading = screen.getAllByRole('heading');
    expect(heading.map((head) => head.textContent)).toEqual([
      'Choice A',
      'Choice B',
      'Choice C',
      'Choice D',
      'Choice E'
    ]);
  });
});
