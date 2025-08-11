import { render, screen, waitFor } from '@testing-library/react';
import { expect, it } from 'vitest';
import Posts from '../../src/components/posts';
it('loads data and displays it', async () => {
  render(<Posts />);

  await waitFor(() => screen.getByText(/Data loaded/i));

  expect(screen.getByText(/Data loaded/i)).toBeInTheDocument();
});
