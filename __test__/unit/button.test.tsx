import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../src/components/button';

describe('Button component', () => {
  it('renders button with children with event', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const buttonElem = screen.getByText(/Click/i);

    fireEvent.click(buttonElem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('spies on a button click', () => {
    const spy = vi.spyOn(console, 'log');
    render(<Button onClick={() => console.log('Hello World')}>Click</Button>);

    const button = screen.getByText(/Click/i);
    fireEvent.click(button);

    expect(spy).toHaveBeenCalledWith('Hello World');
    spy.mockRestore();
  });
});
