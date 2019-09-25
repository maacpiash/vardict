# vardict

> Get a dictionary consisting of CLI arguments

[![Travis (.org)](https://img.shields.io/travis/maacpiash/vardict?logo=travis&style=flat-square)](https://travis-ci.org/maacpiash/vardict)
[![npm version](https://img.shields.io/npm/v/vardict.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vardict)
[![npm Downloads](https://img.shields.io/npm/dt/vardict.svg?logo=node.js&style=flat-square)](https://www.npmjs.com/package/vardict)
![GitHub top language](https://img.shields.io/github/languages/top/maacpiash/vardict.svg?logo=typescript&style=flat-square)
[![License](https://img.shields.io/github/license/maacpiash/vardict.svg?logo=open-source-initiative&style=flat-square)](https://github.com/maacpiash/vardict/blob/master/LICENSE)
[![PR welcome](https://img.shields.io/badge/PR-welcome-brightgreen.svg?logo=github&style=flat-square)](https://github.com/maacpiash/vardict/compare)

## Example

### JavaScript

```TypeScript
const vardict = require('vardict').default;

console.log(vardict);
```

```Shell
node script.js --name Anirudha --age 25 --single -c 'Samsung R&D' --home Mymensingh --coolWithLadies false
```

### TypeScript

```TypeScript
import vardict from 'vardict';

console.log(vardict);
```

```Shell
ts-node script.ts --name Anirudha --age 25 --single -c 'Samsung R&D' --home Mymensingh --coolWithLadies false
```

### Output

```Shell
{ name: 'Anirudha',
  age: 25,
  single: true,
  c: 'Samsung R&D',
  home: 'Mymensingh',
  coolWithLadies: false }
```


## Installation

Add the package via command line.

| NPM | Yarn |
| --- | --- |
| `npm i vardict` | `yarn add vardict` |
