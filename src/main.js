const puppeteer = require('puppeteer');

const constants = require('./constants');

async function getPuppeteerPage(browser) {
  const page = await browser.newPage();
  page.setUserAgent(constants.userAgent);
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (
      request.resourceType === 'stylesheet' ||
      request.resourceType === 'font' ||
      request.resourceType === 'image'
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  return page;
}

async function loginAndFindBalance(page, username, password) {
  await page.goto(
    constants.loginPageUrl,
    { waitUntil: 'load', timeout: constants.defaultPageLoadTimeoutInMilliseconds },
  );

  await page.waitFor(constants.loginPageUsernameInputSelector);
  await page.type(constants.loginPageUsernameInputSelector, username);

  await page.waitFor(constants.loginPagePasswordInputSelector);
  await page.type(constants.loginPagePasswordInputSelector, password);

  await page.click(constants.loginPageSubmitSelector);

  const opts = { timeout: constants.defaultPageLoadTimeoutInMilliseconds };
  return page.waitForSelector(constants.dashboardBalanceSelector, opts).then(() => {
    const balance = page.evaluate(() => {
      const htmlCollection = document.getElementsByClassName('dashboard__quantity'); // eslint-disable-line
      const balanceParagraph = htmlCollection.item(0);
      return balanceParagraph.innerText;
    });
    return balance;
  });
}

async function getBalance(username, password) {
  const browser = await puppeteer.launch();
  try {
    const page = await getPuppeteerPage(browser);
    const balance = await loginAndFindBalance(page, username, password);
    return balance;
  } finally {
    await browser.close();
  }
}

module.exports = {
  getBalance,
};
