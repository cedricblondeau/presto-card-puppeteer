# presto-card-puppeteer

Get your presto card balance using [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## Usage

#### Get and print balance

```js
const prestoCard = require('presto-card-puppeteer');
prestoCard.getBalance('username', 'password')
  .then(balance => console.log(`Your balance is ${balance}`))
  .catch(e => console.log(`Error: ${e.message}`));
```
