import { Before, DataTable, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TodoManagerPage } from '../../page-objects/todo-manager.page.cts';

let todoManagerPage: TodoManagerPage;

Before(() => {
  todoManagerPage = new TodoManagerPage(page);
});

// Given
Given('a user is on the homepage', async () => {
  await todoManagerPage.navigate();
});

Given('the page contains the following tasks:', async (table: DataTable) => {
  const data = table.hashes() as { TASK: string }[];

  for (const row of data) {
    await todoManagerPage.addTask(row.TASK);
  }
});

// When
When('the user adds {string} to the todo list using the input field', async (task: string) => {
  await todoManagerPage.addTask(task);
});

When(
  'the user clicks the checkbox for the task labeled {string}',
  async (taskName: string) => {
    // await todoManagerPage.markTaskComplete(taskName);
    await todoManagerPage.toggleTask(taskName);
  },
);

// Then
Then('card {string} should be displayed in the todo list', async (task: string) => {
  const taskLocator = await todoManagerPage.getTaskLocator(task);
  await expect(taskLocator).toBeVisible();
});

Then('the task labeled {string} should be marked as completed', async (taskName: string) => {
  const checkbox = await todoManagerPage.getTaskCheckbox(taskName, true);
  await expect(checkbox).toBeChecked();
});

Then(
  'the task labeled {string} should not be marked as completed',
  async (taskName: string) => {
    const checkbox = await todoManagerPage.getTaskCheckbox(taskName, false);
    await expect(checkbox).not.toBeChecked();
  },
);
