import {test,expect} from '@playwright/test';

test('User await in the Playwright',async({page})=>{

    await page.goto('https://www.playwright.dev/');
    //page.locator
});