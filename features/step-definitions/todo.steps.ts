import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('a user is on the login page', async ({ page }) => {
  await page.goto('/');
});

When('the user logs in with valid credentials', async ({ page }) => {
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
});

Then('the user should see the welcome message', async ({ page }) => {
  await expect(page.locator('text=Welcome, test@example.com')).toBeVisible();
});

When(
  'the user creates a new todo with title {string}',
  async ({ page }, todoText) => {
    await page.fill('input[placeholder="Add TODO"]', todoText);
    await page.click('button:has-text("Add")');
  },
);

Then(
  'the user should see the todo with title {string}',
  async ({ page }, todoText) => {
    const todoExists = await page.locator(`text=${todoText}`).isVisible();
    expect(todoExists).toBeTruthy();
  },
);

When(
  'the user edits the todo with title {string} to have title {string}',
  async ({ page }, oldText, newText) => {
    const todoLocator = page.locator(`text=${oldText}`);
    await todoLocator
      .locator('xpath=../..')
      .locator('button:has-text("Edit")')
      .click();
    await page.fill(`input[type='text'][value='${oldText}']`, newText);
    await page.click('button:has-text("Save")');
  },
);

When(
  'the user deletes the todo with title {string}',
  async ({ page }, todoText) => {
    const todoLocator = page.locator(`text=${todoText}`);
    await todoLocator
      .locator('xpath=../..')
      .locator('button:has-text("Delete")')
      .click();
  },
);

Then(
  'the user should not see the todo with title {string}',
  async ({ page }, todoText) => {
    const todoExists = await page.locator(`text=${todoText}`).isVisible();
    expect(todoExists).toBeFalsy();
  },
);

When('the user clicks the sign out button', async ({ page }) => {
  await page.click('button:has-text("Sign Out")');
});

Then('the user should be redirected to the login page', async ({ page }) => {
  await expect(page.locator('form')).toBeVisible();
});
