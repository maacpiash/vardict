# vardict

> Get a dictionary consisting of CLI arguments

[![Travis (.org)](https://img.shields.io/travis/maacpiash/vardict?logo=travis&style=flat-square)](https://travis-ci.org/maacpiash/vardict)
[![npm version](https://img.shields.io/npm/v/vardict.svg?logo=npm&style=flat-square)](https://npm.im/vardict)
[![npm Downloads](https://img.shields.io/npm/dt/vardict.svg?logo=node.js&style=flat-square)](https://npm.im/vardict)
[![David](https://img.shields.io/david/dev/maacpiash/vardict?logo=node.js&style=flat-square)](https://github.com/maacpiash/vardict/blob/master/package.json#L25)
![GitHub top language](https://img.shields.io/github/languages/top/maacpiash/vardict.svg?logo=typescript&style=flat-square)
[![License](https://img.shields.io/github/license/maacpiash/vardict.svg?logo=open-source-initiative&style=flat-square)](https://github.com/maacpiash/vardict/blob/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=github&style=flat-square)](https://github.com/maacpiash/vardict/compare)

## Example

### Code

```TypeScript
import vardict from 'vardict'; // TypeScript
const vardict = require('vardict').default; // JavaScript
console.log(vardict);
```

### CLI

```Shell
node script.js --'full name' 'Anirudha Paul' --age 25 --single -c 'Samsung R&D' --home Mymensingh --coolWithLadies false -wantsToGoTo=USA --IELTS=7.5 --favoriteFood kachchi -nick-name Prasun
```

```JavaScript
{
  'full name': 'Anirudha Paul',
  age: 25,
  single: true,
  c: 'Samsung R&D',
  home: 'Mymensingh',
  coolWithLadies: false,
  wantsToGoTo: 'USA',
  IELTS: 7.5,
  favoriteFood: 'kachchi',
  'nick-name': 'Prasun'
}
```

## Installation

Add the package via command line.

| NPM | Yarn |
| --- | --- |
| `npm i vardict` | `yarn add vardict` |
