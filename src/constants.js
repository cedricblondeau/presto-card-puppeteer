const dashboardBalanceClass = 'dashboard__quantity';

module.exports = {
  defaultPageLoadTimeoutInMilliseconds: 10 * 1000,
  loginPageUrl: 'https://www.prestocard.ca/en-US/Pages/TransactionalPages/AccountLogin.aspx',
  loginPageUsernameInputSelector: 'input[id=SignIn_Username]',
  loginPagePasswordInputSelector: 'input[id=SignIn_Password]',
  loginPageSubmitSelector: 'button[id=btnsubmit]',
  dashboardBalanceClass,
  dashboardBalanceSelector: `p.${dashboardBalanceClass}`,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
};
