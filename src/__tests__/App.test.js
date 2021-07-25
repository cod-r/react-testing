import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Greeting} from '../components/Home.js'
import Login from "../components/Login";
import {fireEvent} from "@testing-library/dom";
import {Builder, By} from "selenium-webdriver";

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

test('successful login', () => {
    const component = render(<Login/>);
    const usernameField = screen.getByRole('textbox');
    const passwordField = component.container.querySelector('#password');
    const button = screen.getByRole('button');

    // fill out and submit form
    fireEvent.change(usernameField, {target: {value: 'patron'}});
    fireEvent.change(passwordField, {target: {value: 'password'}});
    fireEvent.click(button);

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

describe('end to end login', () => {
    let driver;

    beforeAll(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .usingServer('http://localhost:4444/wd/hub')
            .build();
        await driver.manage().window().maximize();

        await driver.get(
            `http://localhost:3000`,
        );
    }, 10000);

    afterAll(async () => {
        await driver.quit();
    }, 15000);

    test('login', async () => {
        await driver.findElement(By.css('#username')).sendKeys('codrut');
        await sleep(3000);
        await driver.findElement(By.css('#password')).sendKeys('pass146');
        await sleep(3000);
        await driver.findElement(By.css('.btn')).click();
        await sleep(3000);

        const welcomeMessage = await driver.findElement(By.css('#greeting')).getText();

        expect(welcomeMessage).toEqual("Welcome\ncodrut");

    }, 10000);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


