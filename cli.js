#!/usr/bin/env node

const argv = require('optimist').argv
const iotaSeed = require('./index')

if (argv.h || argv.help) {
  process.stdout.write([
    'Usage: iota-seed [options]',
    '',
    'options:',
    '  -t --trim Generate a seed without line breaks',
    '  -h --help Print this message and exit',
  ].join('\n') + '\n\n')
  process.exit()
}

const seed = iotaSeed()

if (argv.t || argv.trim) {
  process.stdout.write(seed)
  process.exit()
}

process.stdout.write('\n' +  seed + '\n\n')
