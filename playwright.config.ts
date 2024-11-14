import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  testDir: 'tests',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on',
    screenshot: 'only-on-failure',
    launchOptions:{
      args: ['--ignore-certificate-errors'],
    },
    navigationTimeout: 30000 //by default 0
  },
  timeout: 30000, //by default

  expect:{
    timeout:20000
  },
  projects: [
    {
      name: 'chrome_web',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: ['--ignore-certificate-errors'],
        },
      },
    },
  ],
});
