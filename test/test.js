
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

	var metrics;

	before( function ( done ) {
		lib( function onMetrics( error, m ) {
			if ( error ) {
				throw new Error( error );
			}
			metrics = m;
			done();
		});
	});


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
		expect( metrics.mem.heapFree ).to.be.a( 'number' );
		expect( metrics.mem.heapTotal ).to.be.a( 'number' );
		expect( metrics.mem.heapUtilization ).to.be.a( 'number' );
	});

	it( 'should return RAM usage', function test() {
		expect( metrics.mem.rss ).to.be.a( 'number' );
	});

	it( 'should return memory utilization', function test() {
		expect( metrics.mem.utilization ).to.be.a( 'number' );
	});

	it( 'should return CPU utilization', function test() {
		expect( metrics.cpu.utilization ).to.be.a( 'number' );
	});

	it( 'should throw an error if unable to collect CPU and memory data' );

});