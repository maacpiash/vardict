# vardict

> Get a dictionary consisting of CLI arguments

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
