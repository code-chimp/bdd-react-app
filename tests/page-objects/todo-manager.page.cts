import { Locator, Page } from 'playwright';

export class TodoManagerPage {
  readonly page: Page;
  readonly url = 'http://localhost:3000';
  readonly taskInput: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.taskInput = page.getByPlaceholder('Add a new task');
    this.addButton = page.getByRole('button', { name: 'Add Task' });
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async addTask(task: string) {
    await this.taskInput.fill(task);
    await this.addButton.click();
  }

  async markTaskComplete(taskName: string) {
    // NOTE: This will only grab a checkbox that is unchecked - therefore it is brittle
    //       Prefer using the toggleTask method to flip a task's state
    const checkbox = this.page.getByRole('checkbox', {
      name: `Mark ${taskName} as complete`, // When unchecked, aria-label says "Mark as complete"
    });
    await checkbox.click();
  }

  async toggleTask(taskName: string) {
    // NOTE: This will locate the label that is tied to the checkbox, therefore clicking it is
    //       the same as clicking the checkbox directly
    const taskLabel = await this.getTaskLocator(taskName);
    await taskLabel.click();
  }

  async getTaskLocator(task: string) {
    return this.page.getByText(task, { exact: true });
  }

  async getTaskCheckbox(taskName: string, completed = false) {
    const name = completed ? `Mark ${taskName} as incomplete` : `Mark ${taskName} as complete`;
    return this.page.getByRole('checkbox', { name });
  }
}
