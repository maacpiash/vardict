# vardict

> Get a dictionary consisting of CLI arguments

## Example

### `script.js`

```JavaScript
import vardict from 'vardict';

console.log(vardict);
```

### Run the script

```Shell
node script.js --name Anirudha --age 25 --single -c 'Samsung R&D' --home Mymensingh --coolWithLadies false
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
