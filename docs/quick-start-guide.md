# Quick Start Guide

Welcome to the BDD React Demo with Cucumber.js and Playwright! This guide will help you quickly set up and run the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v22.15.1 or later)
- **npm** (v10 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bdd-react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:3000` by default.

## Building the Project

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

### Install Playwright Browsers

Before running tests for the first time, install the required Playwright browsers:

```bash
npm run e2e:install
```

### Run All Tests

To execute all BDD tests:

```bash
npm run test:bdd
```

### Run a Specific Feature

To run a specific feature file:

```bash
npm run test:bdd ./tests/assurance/features/your-feature-file.feature
```

## Additional Resources

For more details, refer to the [README.md](../README.md) file.
