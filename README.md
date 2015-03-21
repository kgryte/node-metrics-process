Process Metrics
===============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Utility to get current process metrics.


## Installation

``` bash
$ npm install metrics-process
```

## Usage

``` javascript
var getMetrics = require( 'metrics-process' );
```

#### getMetrics( clbk )

Gets the current process metrics and invokes a provided callback. The callback should accept two arguments: `error` and `metrics`.

``` javascript
function onMetrics( error, metrics ) {
	if ( error ) {
		throw new Error( error );
	}
	console.log( JSON.stringify( metrics ) );
}

getMetrics( onMetrics );
```

If no `error` is encountered while getting process metrics, `error` is `null`. The `metrics` object is comprised as follows:

``` javascript
{
	"pid": 14847,
	"uptime": 0,
	"mem": {
		"rss": 10932.224,
		"heapFree": 1934.048,
		"heapTotal": 4083.456,
		"heapUtilization": 0.5263698200739766,
		"memUsed": 13017.088,
		"utilization": 0.00151824951171875
	},
	"cpu": {
		"utilization": 0
	},
	"lag": 0
}
```



### Metrics

The following metrics are reported...


#### pid

The process id.


#### uptime

The number of milliseconds the process has been running.


#### mem.rss

The [resident set size](http://en.wikipedia.org/wiki/Resident_set_size), which is the portion of memory held in RAM, as opposed to swap or disk. This metric is reported in `kilobytes`.


#### mem.heapFree

The amount of memory remaining from which newly created objects will originate. This metric is reported in `kilobytes`.


#### mem.heapTotal

The total amount of memory from which newly created objects can originate. This metric is reported in `kilobytes`.


#### mem.heapUtilization

The decimal percentage of utilized [heap](http://en.wikipedia.org/wiki/Memory_management) space.


#### mem.memUsed

The amount of memory used by the process. This metric is reported in `kilobytes`.


#### mem.utilization

Used memory as a fraction of total system memory.


#### cpu.utilization

A decimal percentage describing how much the process utilizes the CPU.


#### lag

The average number of milliseconds a request has to wait in Node's event queue before being processed. An excess lag means that the process is overloaded. See [node-toobusy](https://github.com/lloyd/node-toobusy) for more information.



## Examples

``` javascript
var getMetrics = require( 'metrics-process' );

for ( var i = 0; i < 10; i++ ) {
	setTimeout( onTimeout, 1000*i );
}

function onTimeout() {
	getMetrics( onMetrics );
}

function onMetrics( error, metrics ) {
	if ( error ) {
		throw new Error( error );
	}
	console.log( JSON.stringify( metrics ) );
}
```

To run an example from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

Metrics names mirror the conventions set forth in [doc-metrix](https://github.com/doc-metrix).



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```



---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/metrics-process.svg
[npm-url]: https://npmjs.org/package/metrics-process

[travis-image]: http://img.shields.io/travis/kgryte/node-metrics-process/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-metrics-process

[coveralls-image]: https://img.shields.io/coveralls/kgryte/node-metrics-process/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/node-metrics-process?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-metrics-process.svg
[dependencies-url]: https://david-dm.org/kgryte/node-metrics-process

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-metrics-process.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-metrics-process

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-metrics-process.svg
[github-issues-url]: https://github.com/kgryte/node-metrics-process/issues
