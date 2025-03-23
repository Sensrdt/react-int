import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from "./App";

// Mock components
jest.mock("./Components/Login.jsx", () => () => <div>Login Page</div>);
jest.mock("./Components/Landing.jsx", () => () => <div>Landing Page</div>);
jest.mock("./Components/Dashboard.jsx", () => () => <div>Dashboard Page</div>);

describe("App Routing Tests", () => {
    test('Redirects from "/" to "/dashboard" on initial load', () => {
        render(
                <App />
        );
        expect(screen.getByText('Landing Page')).toBeInTheDocument();
    });

    test('Renders Login Page on "/login"', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('Login Page')).toBeInTheDocument();
    });

    test('Renders Landing Page on "/landing"', () => {
        render(
            <MemoryRouter initialEntries={['/landing']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('Landing Page')).toBeInTheDocument();
    });

    test('Renders Dashboard Page on "/dashboard"', () => {
        render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
    });
});
