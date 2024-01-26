import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

describe('App', () => {
    test('renders App component', () => {
        render(<App />);
        
        expect(screen.getAllByText(/resume/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/about/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/skill/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/contact/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/work/i)[0]).toBeInTheDocument();

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })
})