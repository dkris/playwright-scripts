# playwright-scripts

A collection of automation scripts using Playwright for web testing and browser automation.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/playwright-scripts.git
cd playwright-scripts
```

2. Install dependencies:
```bash
npm install
```

## Prerequisites

- Node.js 14 or higher
- npm or yarn
- Playwright

## Usage

Run tests using the following command:
```bash
npx playwright test
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Project Structure

```
playwright-scripts/
├── tests/          # Test files
├── pages/          # Page object models
├── fixtures/       # Test fixtures and data
└── utils/          # Helper utilities
```

## Committing and Pushing Changes

To commit your changes and push them to the remote repository:

```bash
# Add your changes
git add .

# Create a commit with a descriptive message
git commit -m "feat: add new test cases for login functionality"

# Push changes to remote repository
git push origin main
```

Make sure to follow conventional commit messages format:
- feat: new feature
- fix: bug fix
- docs: documentation changes
- test: adding or modifying tests
- refactor: code refactoring
- style: formatting changes
- chore: maintenance tasks

## License

This project is licensed under the MIT License - see the LICENSE file for details.