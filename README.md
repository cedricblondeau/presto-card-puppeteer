# presto-card-puppeteer

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://forthebadge.com)

Get your presto card balance using [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## Usage

#### Get and print balance

```js
const prestoCard = require('presto-card-puppeteer');

const username = 'YOUR_PRESTO_ACCOUNT_USERNAME';
const password = 'YOUR_PRESTO_ACCOUNT_PASSWORD';

prestoCard.getBalance(username, password)
  .then(balance => console.log(`Your balance is ${balance}`))
  .catch(e => console.log(`Error: ${e.message}`));
```

`getBalance` is an [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) function. When called it returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Dev

#### Install dependencies

```bash
yarn install
```

#### Debugging tips

See https://github.com/GoogleChrome/puppeteer#debugging-tips.
