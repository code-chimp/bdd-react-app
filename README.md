# BDD React Demo with Cucumber.js and Playwright

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io) [![license](https://img.shields.io/badge/license-0BSD-green.svg)](https://github.com/code-chimp/bdd-ng-app/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/npm) [![react](https://img.shields.io/badge/react-19.1.0-red.svg)](https://react.dev/) [![tailwindcss](https://img.shields.io/badge/tailwindcss-3.3.2-blue.svg)](https://tailwindcss.com/) [![cucumber](https://img.shields.io/badge/cucumber-8.7.0-yellow.svg)](https://cucumber.io/) [![playwright](https://img.shields.io/badge/playwright-1.38.0-orange.svg)](https://playwright.dev/)

<table style="border:none">
<tbody>
  <tr>
    <td style="border:none;min-width:205px;text-align:center">
      <img src="assets/taming-assurance.jpg" alt="Taming Assurance Tests" width=400 height=200 style="min-width:300px;min-height:300px">
    </td>
    <td style="border:none">
      <p>
        This project is a demonstration of the integration of Behavior-Driven Development (BDD) practices with a modern
        React 19 application, utilizing Cucumber.js for BDD testing and Playwright for automated browser testing.
      </p>
    </td>
  </tr>
</tbody>
</table>

## Technologies Used

- **[React 19](https://react.dev)**: Modern web application framework
- **[Zustand](https://zustand-demo.pmnd.rs)**: State management library for React
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed JavaScript for enhanced developer experience
- **[Cucumber.js](https://cucumber.io/)**: BDD test automation framework ([see for more info](https://cucumber.io/docs/guides/10-minute-tutorial))
- **[Playwright](https://playwright.dev/)**: Browser automation library for end-to-end testing
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for efficient styling

## The Value of BDD and Living Documentation

Behavior-Driven Development bridges the gap between technical and non-technical stakeholders by:

1. **Creating a common language**: Gherkin syntax (Given-When-Then) provides readable test scenarios that business stakeholders can understand
2. **Documenting specifications**: Test scenarios serve as living documentation that evolves with the application
3. **Validating acceptance criteria**: Ensures development meets business requirements
4. **Facilitating collaboration**: Promotes shared understanding across the entire team

This approach results in:

- Better alignment between business goals and development efforts
- Clearer requirements documentation
- More effective regression testing
- Improved communication between all stakeholders

## The Value of TailwindCSS

TailwindCSS provides significant advantages to development teams by:

1. **Accelerating UI Development**: Utility-first approach eliminates the need to write custom CSS, allowing faster implementation of designs.
2. **Maintaining Consistency**: Pre-defined design system with constraints for spacing, colors, typography, and more ensures visual consistency.
3. **Reducing CSS Complexity**:
  - No need to create and maintain complex CSS class naming systems
  - Minimizes CSS specificity issues and selector conflicts
  - Results in smaller bundle sizes through optimized production builds
4. **Improving Developer Experience**:
  - Write styles directly in your markup without context switching
  - IntelliSense support in modern IDEs provides autocomplete
  - Predictable styling behavior with direct control over every element
5. **Supporting Responsive Design**: Built-in responsive modifiers (sm:, md:, lg:, etc.) make creating adaptive interfaces straightforward.

This project demonstrates how TailwindCSS integrates with Angular components to create maintainable, consistent UI patterns while
reducing style-related technical debt.

## Development Guide

### Development server

To start a local development server, run:

```bash
npm run dev
```

### Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### End-to-End / Assurance Tests

First-time setup requires install Playwright browsers:

```bash
npm run e2e:install
```

#### Running All Tests

To run the BDD tests with Cucumber.js and Playwright:

```bash
npm run test:e2e
```

#### Executing a Specific Feature

To run a specific feature file, use the following command:

```bash
npm run test:e2e ./tests/assurance/features/your-feature-file.feature
```
