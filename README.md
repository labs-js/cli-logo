[![Build Status](https://travis-ci.org/labs-js/logo-cli.svg?)](https://travis-ci.org/labs-js/logo-cli)
[![codecov](https://codecov.io/gh/labs-js/logo-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/labs-js/logo-cli)
[![npm](https://img.shields.io/npm/v/logo-cli.svg?style=flat)](https://www.npmjs.com/package/logo-cli)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/labs-js/logo-cli/badges/score.svg)](https://www.bithound.io/github/labs-js/logo-cli)
[![Code Climate](https://codeclimate.com/github/labs-js/logo-cli/badges/gpa.svg)](https://codeclimate.com/github/labs-js/logo-cli)

# logo-cli

A standar way to create logos for CLIs using ASCII art and the package version.

## Install
```
npm install --save logo-cli
```


## How to use it:

```javascript

var logo = require('logo-cli'),
    version = require('package.json').version;

logo.print({'name': 'my tool name', 'color':'green', 'version': version})

```

#### This package was genareted with [envinator](https://github.com/sfabrizio/envinator) -> Fast develoment 😎🙌

