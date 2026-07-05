import { render, screen } from '@testing-library/react';
import Toolbar from './Toolbar';

describe('Toolbar Component', () => {
  it('renders toolbar', () => {
    render(<Toolbar />);
    expect(screen.getByText('Toolbar')).toBeInTheDocument();
  });
});