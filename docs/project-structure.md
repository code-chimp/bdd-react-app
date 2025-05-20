# Project Structure

This document provides an overview of the project's folder and file structure to help you navigate and understand the codebase.

## Root Directory

- **cucumber.mjs**: Entry point for Cucumber.js configuration.
- **eslint.config.js**: ESLint configuration file for linting.
- **index.html**: Main HTML file for the application.
- **LICENSE**: License information for the project.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Main documentation file for the project.
- **tsconfig.*.json**: TypeScript configuration files for different environments.
- **vite.config.ts**: Configuration file for Vite, the build tool.

## Folders

### `assets/`

Contains project level assets not used in application.

- **taming-assurance.jpg**: Image used in the documentation.

### `docs/`

Contains project documentation.

- **development-guide.md**: Detailed guide for developers working on the project.
- **live-demo.md**: Documentation for the live demo.
- **project-structure.md**: Overview of the project's folder and file structure.
- **quick-start-guide.md**: Quick start guide for setting up and running the project.
- **would-you-like-to-know-more.md**: Additional learning resources and references.

### `public/`

Contains public assets served directly by the server. All files and folders created here will exist in the root directory of the compiled application.

- **favicon.ico**: Favicon for the application.
- **favicon.svg**: SVG version of the favicon.

### `src/`

Contains the source code for the application.

- **App.tsx**: Main application component.
- **index.css**: Global CSS styles.
- **main.tsx**: Entry point for the React application.
- **vite-env.d.ts**: TypeScript environment declarations.

#### `src/assets/`

Contains additional static assets for the application.

- **react.svg**: React logo used in the application.

#### `src/components/`

Contains reusable React components.

##### `TaskManager/`

Components related to task management.

- **TaskForm/**: Contains the task creation form.
  - **index.ts**: Entry point for the TaskForm component.
  - **TaskForm.module.css**: CSS module for TaskForm styles.
  - **TaskForm.tsx**: TaskForm component implementation.
- **TaskList/**: Contains the task list component.
  - **index.ts**: Entry point for the TaskList component.
  - **TaskList.tsx**: TaskList component implementation.
  - **TaskItem/**: Contains individual task item components.
    - **index.ts**: Entry point for the TaskItem component.
    - **TaskItem.module.css**: CSS module for TaskItem styles.
    - **TaskItem.tsx**: TaskItem component implementation.

#### `src/models/`

Contains TypeScript interfaces and type definitions.

- **Task.ts**: Interface definition for task data.

#### `src/store/`

Contains state management using Zustand.

- **useTaskStore.ts**: Zustand store implementation for task management.

### `reports/`

Contains test execution reports and artifacts.

- **bdd-report-basic.html**: Basic HTML report of test execution.
- **bdd-report-deluxe.html**: Enhanced HTML report with additional details.
- **bdd-report.json**: JSON format test results.
- **bdd-report.xml**: JUnit format test results.
- **bdd-report-multiple/**: Directory containing multiple-format HTML reports.

### `scripts/`

Contains utility scripts for the project.

- **cucumber-html-reporter.mjs**: Generates HTML reports from Cucumber test results.
- **multiple-cucumber-html-reporter.mjs**: Generates enhanced HTML reports.
- **notify-lockfile-changed.js**: Notifies when package-lock.json changes.
- **validate-lockfile.cjs**: Validates package manager lock files.

### `tests/`

Contains test-related files and configurations.

#### `tests/assurance/`

Contains BDD test features and step definitions.

- **features/**: Contains Gherkin feature files.
  - **todo-manager.feature**: Feature file for the task manager.
- **hooks/**: Contains test hooks and global configurations.
  - **cucumber.hooks.cts**: Configuration and lifecycle hooks for Cucumber.js.
  - **global.d.ts**: Global TypeScript declarations for tests.
- **step-definitions/**: Contains step definition files.
  - **todo-manager.steps.cts**: Step definitions for the task manager feature.

#### `tests/page-objects/`

Contains Playwright page object models.

- **todo-manager.page.cts**: Page object model for the todo manager interface.

#### `tests/assurance/`

Contains BDD test features and step definitions.

- **features/**: Contains Gherkin feature files.
  - **todo-manager.feature**: Feature file for the task manager.
- **step-definitions/**: Contains step definition files.
  - **todo-manager.steps.cts**: Step definitions for the task manager feature.
