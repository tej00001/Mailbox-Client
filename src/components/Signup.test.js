import React from 'react';
import { render, screen } from '@testing-library/react';
import SignupDetails from './signup';

describe('Signup component', () => {
  test('renders email, password, and confirm password input fields', () => {
    render(<SignupDetails />);
    const emailInput = screen.getByPlaceholderText('Enter email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });
});