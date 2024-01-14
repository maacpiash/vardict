# vardict

> Get a dictionary consisting of CLI arguments, parsed and statically typed.

[![npm version](https://img.shields.io/npm/v/vardict.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vardict)
[![Node.js bundle size](https://img.shields.io/bundlephobia/min/vardict/2.0.0?style=flat-square&logo=node.js)](https://www.npmjs.com/package/vardict)
[![Types](https://img.shields.io/npm/types/vardict?style=flat-square&logo=typescript)](https://github.com/maacpiash/vardict/blob/master/vardict.ts)
[![FLOSS](https://img.shields.io/github/license/maacpiash/vardict?style=flat-square&logo=open-source-initiative)](https://github.com/maacpiash/vardict/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/vardict.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vardict)
[![Codeclimate maintainability percentage](https://img.shields.io/codeclimate/maintainability-percentage/maacpiash/vardict?logo=code-climate&style=flat-square)](https://codeclimate.com/github/maacpiash/vardict)

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
- If the same key is supplied twice, they are merged into an array.
  - `node index.js -country Australia -easternStates QLD -easternStates NSW -easternStates VIC -easternStates TAS` will give `{ country: 'Australia', easternStates: ['QLD', 'NSW', 'VIC', 'TAS'] }`.
  - `node index.js -asl 28 -asl false -asl Sydney` will generate `{ asl: [28, false, 'Sydney'] }`.

## Installation

Add the package via command line.

| NPM | Yarn | PNPM | Bun |
| --- | --- | --- | --- |
| `npm i vardict` | `yarn add vardict` | `pnpm add vardict` | `bun add vardict` |

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

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=github&style=flat-square)](https://github.com/maacpiash/vardict/compare)
[![GitHub follow](https://img.shields.io/github/followers/maacpiash?label=Follow%20maacpiash&style=social)](https://github.com/maacpiash)
[![X Follow](https://img.shields.io/twitter/follow/maacpiash?style=social)](https://twitter.com/maacpiash)
