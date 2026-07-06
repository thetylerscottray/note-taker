import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toolbar from './Toolbar';

describe('Toolbar Component', () => {
  it('renders toolbar with expected buttons', () => {
    render(<Toolbar />);

    // Define mode buttons
    const noteButton = screen.getByRole('button', { name: /notes/i });
    const quizButton = screen.getByRole('button', { name: /quiz/i });

    // Define state buttons
    const definitionButton = screen.getByRole('button', { name: /definition/i });
    const factButton = screen.getByRole('button', { name: /fact/i });
    const exampleButton = screen.getByRole('button', { name: /example/i });

    // Ensure the buttons exist
    expect(noteButton).toBeInTheDocument();
    expect(quizButton).toBeInTheDocument();
    expect(definitionButton).toBeInTheDocument();
    expect(factButton).toBeInTheDocument();
    expect(exampleButton).toBeInTheDocument();
  });

  it('check initial annotation mode and clicks', async () => {
    render(<Toolbar />);

    // Define annotation state buttons
    const definitionButton = screen.getByRole('button', { name: /definition/i });
    const factButton = screen.getByRole('button', { name: /fact/i });
    const exampleButton = screen.getByRole('button', { name: /example/i });
    const clearButton = screen.getByRole('button', { name: /clear/i });

    // Clear is disabled
    expect(clearButton.disabled).toBe(true);
    
    // Test annotation state change
    await userEvent.click(definitionButton);
    expect(definitionButton.classList.contains('active')).toBe(true);
    expect(clearButton.disabled).toBe(false);
    
    // Click the same button again
    await userEvent.click(definitionButton);
    expect(definitionButton.classList.contains('active')).toBe(false);
    expect(clearButton.disabled).toBe(true);

  });
});