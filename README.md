# to install dependencies

To get started, run the following commands in your terminal:

```bash
npm install
npx playwright install
```

To run tests without UI, use the command:

```bash
npm run test:headless
```

To run tests and open the browser, use the command:

```bash
npm run test:headed
```

To run tests in debug mode, use the command:

```bash
npm run test:debug
```

To run tests with a specific title, use the command:

```bash
npx playwright test -g "your id title"
```

To use eslint:

```bash
npx eslint .
```

To fix eslint issues:

```bash
npx eslint --fix
```
