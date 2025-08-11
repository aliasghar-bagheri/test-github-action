import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../../src/App';

describe('app main for render', () => {
  it('render', () => {
    render(<App />);

    const element = screen.getByText('Count: 0');

    expect(element).toBeInTheDocument();
  });
});
