import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: [['html', { open: 'always' }], ['list']],
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        // viewport: { width: 1280, height: 720 }
    },
    projects: [
        {
            //For running on different browser
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],

};
export default config;