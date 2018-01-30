# iota-seed
[![Build Status](https://travis-ci.org/alexpods/iota-seed.svg?branch=master)](https://travis-ci.org/alexpods/iota-seed)

Generates secure [IOTA](https://iota.org/) seeds.

This package just uses [officially recommended commands](https://iota.readme.io/docs/securely-generating-a-seed) to generate a seed. If you don't trust
this package or npm (**and you shouldn't**) you can execute the commands manually (see [Security](#security) section). If you decided to use this package, **check the downloaded source codes after `npm install` (node_modules/iota-seed)**. They should be identical to the ones from this github repository.

## Usage

You can generate a seed using Command Line Interface:
```
> npm install -g iota-seed # check node_modules/iota-seed source codes after this
> iota-seed

YOURIOTASEED9999999999999999999999999 <- This is your IOTA seed

>
```

Or you can generate a seed inside of your program:
```js
const iotaSeed = require('iota-seed')

let seed = iotaSeed() // <- This is you IOTA seed
```

## Security

This package uses the next commands for seed generation:

### Linux
```
cat /dev/urandom | tr -dc A-Z9 | head -c${1:-81}
```

### Mac
```
cat /dev/urandom | LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```

### Windows

It's not implemented and an error will be thrown if you try to generate a seed on Windows OS.

> Unfortunately I don't know a really secure way to generate a seed on Windows OS.
> `crypto.randomBytes` is preudo random and `powershell` has it's own flaws.
