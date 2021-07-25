import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Greeting} from '../components/Home.js'
import Login from "../components/Login";
import {fireEvent, waitFor} from "@testing-library/dom";


function sum(a, b) {
    return a + b;
}

test('sums up two numbers', () => {
    expect(sum(2, 5)).toBe(7);
});

test('welcome the user', () => {
    render(<Greeting username='codrut'/>);
    expect(screen.getByText('codrut')).toBeInTheDocument();
})

test('successful login', async () => {
    const component = render(<Login/>);
    const usernameField = screen.getByRole('textbox');
    const passwordField = component.container.querySelector('#password');
    const button = screen.getByRole('button');

    // fill out and submit form
    fireEvent.change(usernameField, {target: {value: 'patron'}});
    fireEvent.change(passwordField, {target: {value: 'password'}});
    fireEvent.click(button);
    await waitFor(() => {
        // it hides form elements
        expect(button).not.toBeInTheDocument();
        expect(usernameField).not.toBeInTheDocument();
        expect(passwordField).not.toBeInTheDocument();

        // it displays success text and email address
        const loggedInText = screen.getByText('Welcome');
        expect(loggedInText).toBeInTheDocument();
        const emailAddressText = screen.getByText('patron');
        expect(emailAddressText).toBeInTheDocument();
    });
});