# Live Demo

## Demonstrate the flow implementing a simple scenario

### First: Define the scenario

Paste this scenario at the end of the existing feature file `./tests/assurance/features/todo-manager.feature`:

```gherkin
Scenario: Delete an existing task item from the task list
  Given a user is on the homepage
    And the page contains the following tasks:
      | TASK         |
      | do not touch |
      | complete me  |
      | filler task  |
  When the user clicks the delete button for the task labeled "filler task"
  Then card "filler task" should be removed from the todo list
    And card "do not touch" should be displayed in the todo list
    And card "complete me" should be displayed in the todo list
```

Make sure everything is indented correctly, the entire feature should now look like:

```gherkin
Feature: Todo List Manager
  As a user
  I want to be able to add, mark complete, and delete items to my todo list
  So that I can keep track of my tasks

  Scenario: Add an item to the todo list
    Given a user is on the homepage
    When the user adds "test" to the todo list using the input field
    Then card "test" should be displayed in the todo list

  Scenario: Mark an existing task item as complete in the task list
    Given a user is on the homepage
      And the page contains the following tasks:
        | TASK         |
        | do not touch |
        | complete me  |
        | filler task  |
    When the user clicks the checkbox for the task labeled "complete me"
    Then the task labeled "complete me" should be marked as completed
      And the task labeled "do not touch" should not be marked as completed
      And the task labeled "filler task" should not be marked as completed

  Scenario: Delete an existing task item from the task list
    Given a user is on the homepage
      And the page contains the following tasks:
        | TASK         |
        | do not touch |
        | complete me  |
        | filler task  |
    When the user clicks the delete button for the task labeled "filler task"
    Then card "filler task" should be removed from the todo list
      And card "do not touch" should be displayed in the todo list
      And card "complete me" should be displayed in the todo list
```

If you see errors or warnings on two of the lines, that is merely your IDE informing you we have not implemented
a step definition in code for those lines yet.

### Second: Get feedback from cucumber-js

Try to run the new scenario and pay attention to the output in the terminal.

```shell
npm run test:bdd ./tests/assurance/features/todo-manager.feature -- --dry-run --name "Delete an existing task item from the task list"
```

You should see something similar to this in the output:

```shell
Feature: Todo List Manager # tests/assurance/features/todo-manager.feature:1

  As a user
  I want to be able to add, mark complete, and delete items to my todo list
  So that I can keep track of my tasks

  Scenario: Delete an existing task item from the task list # tests/assurance/features/todo-manager.feature:23
    Given a user is on the homepage
    And the page contains the following tasks:
      │ TASK         │
      │ do not touch │
      │ complete me  │
      │ filler task  │
    When the user clicks the delete button for the task labeled "filler task"
    ? undefined
    Then card "filler task" should be removed from the todo list
    ? undefined
    And card "do not touch" should be displayed in the todo list
    - skipped
    And card "complete me" should be displayed in the todo list
    - skipped

Failures:

1) Scenario: Delete an existing task item from the task list # tests/assurance/features/todo-manager.feature:23
   √ Before # tests/cucumber.hooks.cts:19
   √ Before # tests/assurance/step-definitions/todo-manager.steps.cts:9
   √ Given a user is on the homepage # tests/assurance/step-definitions/todo-manager.steps.cts:15
   √ And the page contains the following tasks: # tests/assurance/step-definitions/todo-manager.steps.cts:19
       | TASK         |
       | do not touch |
       | complete me  |
       | filler task  |
   ? When the user clicks the delete button for the task labeled "filler task"
       Undefined. Implement with the following snippet:

         When('the user clicks the delete button for the task labeled {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then card "filler task" should be removed from the todo list
       Undefined. Implement with the following snippet:

         Then('card {string} should be removed from the todo list', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   - And card "do not touch" should be displayed in the todo list # tests/assurance/step-definitions/todo-manager.steps.cts:45
   - And card "complete me" should be displayed in the todo list # tests/assurance/step-definitions/todo-manager.steps.cts:45
   √ After # tests/cucumber.hooks.cts:26

1 scenario (1 undefined)
6 steps (2 undefined, 2 skipped, 2 passed)
0m05.184s (executing steps: 0m04.436s)
```

If you look at the output carefully it is giving you the code needed in your feature's context to implement the step definition logic:

```diff
-   ? When the user clicks the delete button for the task labeled "filler task"
-       Undefined. Implement with the following snippet:
-
+         When('the user clicks the delete button for the task labeled {string}', async function (string) {
+           // Write code here that turns the phrase above into concrete actions
+           return 'pending';
+         });
-
-   ? Then card "filler task" should be removed from the todo list
-       Undefined. Implement with the following snippet:
-
+         Then('card {string} should be removed from the todo list', async function (string) {
+           // Write code here that turns the phrase above into concrete actions
+           return 'pending';
+         });
```

### Last: Implement your test logic

First we will need to add a new locator for the target delete button to the Todo Manager page object in `./tests/page-objects/todo-manager.page.cts`:

```typescript
async getTaskDeleteButton(taskName: string) {
  return this.page.getByRole('button', {
    name: `Delete task: ${taskName}`,
  });
}
```

Then we can add the suggested code to the step definitions in the feature's context in
`./tests/assurance/step-definitions/todo-manager.steps.cts`. Adjust any suggested parameters for TypeScript and implement your Playwright test code:

```typescript

When('the user clicks the delete button for the task labeled {string}', async (taskName: string) => {
  const deleteButton = await todoManagerPage.getTaskDeleteButton(taskName);
  await deleteButton.click();
});


Then('card {string} should be removed from the todo list', async (task: string) => {
  const taskLocator = await todoManagerPage.getTaskLocator(task);
  await expect(taskLocator).not.toBeVisible();
});

```

Which should result in a successful run if we did everything correctly:

```shell
❯ npm run test:bdd ./tests/assurance/features/todo-manager.feature -- --name "Delete an existing task item from the task list"

> bdd-react-app@1.0.0 test:bdd
> cucumber-js ./tests/assurance/features/todo-manager.feature --name Delete an existing task item from the task list

Feature: Todo List Manager # tests/assurance/features/todo-manager.feature:1

  As a user
  I want to be able to add, mark complete, and delete items to my todo list
  So that I can keep track of my tasks

  Scenario: Delete an existing task item from the task list # tests/assurance/features/todo-manager.feature:23
    Given a user is on the homepage
    And the page contains the following tasks:
      │ TASK         │
      │ do not touch │
      │ complete me  │
      │ filler task  │
    When the user clicks the delete button for the task labeled "filler task"
    Then card "filler task" should be removed from the todo list
    And card "do not touch" should be displayed in the todo list
    And card "complete me" should be displayed in the todo list

1 scenario (1 passed)
6 steps (6 passed)
0m06.876s (executing steps: 0m05.137s)

```
