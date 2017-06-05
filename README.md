[![Build Status](https://travis-ci.org/labs-js/cli-logo.svg?)](https://travis-ci.org/labs-js/cli-logo)
[![codecov](https://codecov.io/gh/labs-js/cli-logo/branch/master/graph/badge.svg)](https://codecov.io/gh/labs-js/cli-logo)
[![npm](https://img.shields.io/npm/v/cli-logo.svg?style=flat)](https://www.npmjs.com/package/cli-logo)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/labs-js/cli-logo/badges/score.svg)](https://www.bithound.io/github/labs-js/cli-logo)
[![Code Climate](https://codeclimate.com/github/labs-js/cli-logo/badges/gpa.svg)](https://codeclimate.com/github/labs-js/cli-logo)

# cli-logo

A standar way to create logos for CLIs using ASCII art and the package version.

## Install
```
npm install --save cli-logo
```


## How to use it:

```javascript

var logoCli = require('cli-logo'),
    version = 'v' + require('./package.json').version,
	description = require('./package.json').description;
    logoConfig = {
        "name": "tool name",
        "description": description,
        "version": version
    };

logoCli.print(LogoConfig);

```

> As optional parameters on the **logoConfig** you can use also: `"type":"Standard"` & `"color":"green"`


#### This package was genareted with [envinator](https://github.com/sfabrizio/envinator) -> Fast develoment 😎🙌

