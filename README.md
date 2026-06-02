Setup Playwright on local
node -v
npm - v
npm init -y
npm init playwright@latest

There are two way to write test cases

1. Using Test Runner >> config.ts provide to all config to test so this is recomended headless, retry, video, screenshot...etc.

2. Using IIFE --(Here config.js will not support in this way)  browser, page, assertion, close.


run test
npx playwright test
npx playwright test -g "test title name"

Q. if projects array is removed in playwright.config.ts ans we run test will it work ? 
Yes it will work in default browser chromium.

Q. What if projects array size is zero then ? 
it will give error.


npx playwright show-report

- for debug on console 
DEBUG=pw:protocol npx playwright test
DEBUG=pw:api npx playwright test
DEBUG= pw:api, pw:protocol npx playwright test
DEBUG=pw:api npx playwright test > log.txt // this will genrate log file