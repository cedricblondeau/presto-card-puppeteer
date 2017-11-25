# presto-card-puppeteer

Get your presto card balance using [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## Usage

#### Get balance

````
const prestoCard = require('presto-card-puppeteer');
prestoCard.getBalance('username', 'password').then(balance => console.log(balance));
```
