import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    timeout: 5 * 60 * 1000,
    reporter: [['html', { open: 'always' }], ['list']],
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
          name: 'chrome web',
          use: {
              browserName: 'chromium',
              launchOptions: {
                  args: ['--ignore-certificate-errors']
              }
          }
        },
      ],

};
export default config;