# vardict

> Get a dictionary consisting of CLI arguments, parsed and statically typed.

[![Travis (.org)](https://img.shields.io/travis/maacpiash/vardict?logo=travis&style=flat-square)](https://travis-ci.org/maacpiash/vardict) [![npm version](https://img.shields.io/npm/v/vardict.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vardict) [![npm Downloads](https://img.shields.io/npm/dt/vardict.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vardict) [![David](https://img.shields.io/david/maacpiash/vardict.svg?logo=yarn&style=flat-square)](https://david-dm.org/maacpiash/vardict) [![npm bundle size](https://img.shields.io/bundlephobia/min/vardict?logo=node.js&style=flat-square)](https://www.npmjs.com/package/vardict) [![Codeclimate maintainability](https://img.shields.io/codeclimate/maintainability/maacpiash/vardict?logo=code-climate&style=flat-square)](https://codeclimate.com/github/maacpiash/vardict)

## What does it do?

Sometimes, a Node.js program needs to receive arguments from the CLI, like this:

```Shell
node index.js usa hamburger react
```

If there is a large number of arguments, they can be annotated in a [getopt](https://en.wikipedia.org/wiki/Getopt)-ish fashion, like this:

```Shell
node index.js -country usa -food hamburger -library react
```

`vardict` parses the arguments passed on to CLI and makes a dictionary/map object that can be used elsewhere in the program. For the previous example, it would work like this:

```JavaScript
{ country: 'usa', food: 'hamburger', library: 'react' }
```
## Rules of parsing

As mentioniod above, the rule of parsing is "getopt-ish", meaning that this package does not work in the exact same way as getopt does.

- Annotations with double hyphens or quotation marks are treated as single entities.
  - `node index.js -name Noyan --home Narayanganj` will produce `{ name: 'Noyan', home: 'Narayanganj' }`
- Whitespaces and equal signs ('`=`') are treated as a separator between the annotation and the value.
  - `node index.js --state NSW --capital=Sydney` will generate `{ state: 'NSW', capital: 'Sydney' }`
- Static typing is enforced on the values, based on the literal inputs. For example, `true`/`false` is `boolean`, and numeric values are `number`.
  - `node index.js -country BD -popDensPerSqKM 1116 -overPop true` will yield `{ country: 'BD', popDensPerSqKM: 1116, overPop: true }`
- If there is no value provided after an annotation, it is considered a `boolean` value and set to `true`.
  - `node index.js -country NZ -covidFree -pop 4886000 -neighbour` will output `{ country: 'NZ', covidFree: true, pop: 4886000, neighbour: true }`.

## Installation

Add the package via command line.

| NPM | Yarn |
| --- | --- |
| `npm i vardict` | `yarn add vardict` |

## How to use

Just import and use the object:

```JavaScript
// script.js
import vardict from 'vardict' // ES6
const { default: vardict } = require('vardict') // CommonJS

console.log(vardict)
```

Here are the input and the output of the code.

```Shell
node script.js                    \
  --'full name' 'Anirudha Paul'   \
  --age 25                        \
  --single                        \
  -c 'Samsung R&D'                \
  --home Mymensingh               \
  --coolWithLadies false          \
  -wantsToGoTo=USA                \
  --IELTS=7.5                     \
  --favoriteFood kachchi          \
  -nick-name Prasun
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

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=github&style=flat-square)](https://github.com/maacpiash/vardict/compare) [![GitHub follow](https://img.shields.io/github/followers/maacpiash?label=Follow%20maacpiash&style=social)](https://github.com/maacpiash)
[![Twitter Follow](https://img.shields.io/twitter/follow/maacpiash?style=social)](https://twitter.com/maacpiash)
