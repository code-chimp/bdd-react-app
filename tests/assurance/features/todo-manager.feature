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
