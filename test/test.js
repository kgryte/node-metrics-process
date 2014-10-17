
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	lib = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'metrics-process', function tests() {
	'use strict';

	// SETUP //

	var metrics = lib();


	// TESTS //

	it( 'should export a function', function test() {
		expect( lib ).to.be.a( 'function' );
	});

	it( 'should return an object with metrics', function test() {
		expect( metrics ).to.be.an( 'object' );
	});

	it( 'should return the process id', function test() {
		expect( metrics.pid ).to.be.a( 'number' );
	});

	it( 'should return the process runtime', function test() {
		expect( metrics.uptime ).to.be.a( 'number' );
	});

	it( 'should return the average request wait time', function test() {
		expect( metrics.lag ).to.be.a( 'number' );
	});

	it( 'should return heap metrics', function test() {
		expect( metrics.heapFree ).to.be.a( 'number' );
		expect( metrics.heapTotal ).to.be.a( 'number' );
		expect( metrics.heapUtilization ).to.be.a( 'number' );
	});

	it( 'should return RAM usage', function test() {
		expect( metrics.rss ).to.be.a( 'number' );
	});

});