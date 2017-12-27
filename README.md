# iota-seed
[![Build Status](https://travis-ci.org/alexpods/iota-seed.svg?branch=master)](https://travis-ci.org/alexpods/iota-seed)

Generates secure [IOTA](https://iota.org/) seed.

## Usage

You can generate a seed using Command Line Interface:
```
> npm install -g iota-seed
> iota-seed

YOURIOTASEED9999999999999999999999999 <- This is your IOTA seed

>
```

Or you can generate a seed inside of your program:
```js
const iotaSeed = require('iotaSeed')

let seed = iotaSeed() // <- This is you IOTA seed
```

## Docker

To generate a seed using Docker just run:
```
> docker run alexpods/iota-seed

YOURIOTASEED9999999999999999999999999 <- This is your IOTA seed

>
```

## Security

This package uses the next algorithms for seed generation:

### Linux

It executes:
```
cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}
```

### Mac

It executs:
```
cat /dev/urandom | LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```

### Windows

It's not implemented and an error will be thrown if you try to generate a seed on Windows OS.
Unfortunately I don't know a really secure way to generate a seed on Windows OS.
`crypto.randomBytes` is preudo random and `powershell` has it's own flaws.

But you still can use Docker to generate a seed on a Windows OS (see the example above)