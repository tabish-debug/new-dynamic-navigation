import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScreenB2 from '../views/screenB2';

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

it('test all the option existing', () => {
  act(() => {
    render(
      <BrowserRouter>
        <ScreenB2 />
      </BrowserRouter>,
      container
    );
  });
  const checkboxes = screen.queryAllByRole('checkbox');
  expect(checkboxes.map((checkbox) => checkbox.value)).toEqual([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ]);
});
