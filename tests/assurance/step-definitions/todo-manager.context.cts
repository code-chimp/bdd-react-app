import { Before, DataTable, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Locator } from 'playwright';

const url = 'http://localhost:3000';
let taskInput: Locator;
let addButton: Locator;

Before(() => {
  taskInput = page.getByPlaceholder('Add a new task');
  addButton = page.getByRole('button', { name: 'Add Task' });
});

// Given
Given('a user is on the homepage', async () => {
  await page.goto(url);
});

Given('the page contains the following tasks:', async (table: DataTable) => {
  const data = table.hashes();

  for (const row of data) {
    await taskInput.fill(row['TASK']);
    await addButton.click();
  }
});

// When
When('the user adds {string} to the todo list using the input field', async (task: string) => {
  await taskInput.fill(task);
  await addButton.click();
});

When(
  'the user clicks the checkbox for the task labeled {string}',
  async (taskName: string) => {
    const checkbox = page.getByRole('checkbox', {
      name: `Mark ${taskName} as complete`, // When unchecked, aria-label says "Mark as complete"
    });
    await checkbox.click();
  },
);

// Then
Then('card {string} should be displayed in the todo list', async (task: string) => {
  const text = page.getByText(task, { exact: true });
  await expect(text).toBeVisible();
});

Then('the task labeled {string} should be marked as completed', async (taskName: string) => {
  const checkbox = page.getByRole('checkbox', {
    name: `Mark ${taskName} as incomplete`, // When checked, aria-label says "Mark as incomplete"
  });

  await expect(checkbox).toBeChecked();
});

Then(
  'the task labeled {string} should not be marked as completed',
  async (taskName: string) => {
    const checkbox = page.getByRole('checkbox', {
      name: `Mark ${taskName} as complete`, // When unchecked, aria-label says "Mark as complete"
    });

    await expect(checkbox).not.toBeChecked();
  },
);
