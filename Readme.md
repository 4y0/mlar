# 🌵🌴A simple Experiment🌴🌵

[`Module Loader And Resolver`](https://www.npmjs.com/package/mlar)

Simple UTIL to help manage loading/resolving requires in large code bases. 
[
`require("../../../xyz/blabla/iek.js")` :pensive:
`require('mlar')('iek')` :smile:
]

## Usage
Requires that an `r.json` file be present in the root directory of your project. `r.json` is just a path map of your libraries, services, routes e.t.c. Anything "require-able" basically.

Sample `r.json` content
```
{
	"create_api":"/services/apis/create",
	"models":"/models/sequelize",
	"utils":"/libs/utils"
}
```
`create_api`            ===== Module Alias
`/services/apis/create` ===== Path to module

A few assumptions:
* Every path in `r.json` is relative to the root directory of your project
* The Module alias are not in conflict with any 3rd party libraries installed using NPM
* If the module alias is not present in `r.json`, mlar assumes it's a third party library and attempts a direct require.

In-code example
```
// Single use
var sequelize_models = require('mlar')('models'); //sequelize_models is now whatever was exported at /models/sequelize
var crypto = require('mlar')('crypto'); //same as doing require('crypto');

//Multi use
var modules = require('mlar')(['models', 'utils', 'crypto']);
//modules.models, modules.utils, modules.crypto e.t.c.
```

 