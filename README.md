Process Metrics
===============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Utility to get process metrics.


## Installation

``` bash
$ npm install metrics-process
```

## Usage

The module exports a single method, which returns an `object` containing `pid`, `heap`, `lag`, `RAM`, and `uptime` metrics. To use the utility,

``` javascript
var getMetrics = require( 'metrics-process' ),
	metrics = getMetrics();
```

The following is an example metrics output...

``` javascript
{
	"pid": 14847,
	"uptime": 0,
	"rss": 10932.224,
	"heapFree": 1934.048,
	"heapTotal": 4083.456,
	"heapUtilization": 0.5263698200739766,
	"lag": 0
}
```



### Metrics

The following metrics are reported...


#### pid

The process id.


#### uptime

The number of milliseconds the process has been running.


#### rss

The [resident set size](http://en.wikipedia.org/wiki/Resident_set_size), which is the portion of memory held in RAM, as opposed to swap or disk. This metric is reported in `kilobytes`.


#### heapFree

The amount of memory remaining from which newly created objects will originate. This metric is reported in `kilobytes`.


#### heapTotal

The total amount of memory from which newly created objects can originate. This metric is reported in `kilobytes`.


#### heapUtilization

The decimal percentage of utilized [heap](http://en.wikipedia.org/wiki/Memory_management) space.


#### lag

The average number of milliseconds a request has to wait in Node's event queue before being processed. An excess lag means that the process is overloaded. See [node-toobusy](https://github.com/lloyd/node-toobusy) for more information.


## Examples

``` javascript
var getMetrics = require( 'metrics-process' );

for ( var i = 0; i < 10; i++ ) {
	setTimeout( onTimeout, 1000*i );
}

function onTimeout() {
	JSON.stringify( getMetrics() );
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

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


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