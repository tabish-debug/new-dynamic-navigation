import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenB1 from '../views/screenB1';

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

it('check all choices be existing', () => {
  act(() => {
    render(
      <BrowserRouter>
        <ScreenB1 />
      </BrowserRouter>,
      container
    );
  });
  const heading = screen.getAllByRole('heading');
  expect(heading.map((head) => head.textContent)).toEqual([
    'Choice A',
    'Choice B',
    'Choice C',
    'Choice D',
    'Choice E'
  ]);
});
