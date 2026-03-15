// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FixtureMonkey title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FixtureMonkey/i);
    expect(titleElement).toBeInTheDocument();
});
