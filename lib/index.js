/**
*
*	METRICS: process
*
*
*	DESCRIPTION:
*		- Small utility to get current process metrics.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// MODULES //

	var toobusy = require( 'toobusy-js' ),
		pidusage = require( 'pidusage' ),
		os = require( 'os' );


	// METRICS //

	/**
	* FUNCTION: metrics( clbk )
	*	Returns process metrics.
	*
	* @param {Function} clbk - callback to invoke after collecting process metrics. Function should accept two arguments: [ error, metrics ].
	* @returns {Object} process metrics
	*/
	function metrics( clbk ) {
		var m = {},
			mem,
			used,
			total;

		// Get the process id:
		m.pid = process.pid;

		// Get the number of milliseconds the process has been running:
		m.uptime = process.uptime() * 1000; // ms
		
		// Extract process memory usage:
		mem = process.memoryUsage();
		used = mem.heapUsed;
		total = mem.heapTotal;

		m.mem = {
			'rss': mem.rss / 1000, // KB
			'heapFree': (total-used) / 1000, // KB
			'heapTotal': total / 1000, // KB
			'heapUtilization': used / total
		};

		// Get the average amount of time requests have to wait in Node's event queue before being processed:
		m.lag = toobusy.lag(); // ms

		// Get the CPU and memory consumption:
		pidusage.stat( m.pid, onStats );

		/**
		* FUNCTION: onStats( error, stat )
		*	Callback invoked upon collecting CPU and memory data for the current process.
		*
		* @param {Object} error
		* @param {Object} stat - process data
		*/
		function onStats( error, stat ) {
			if ( error ) {
				return clbk( error );
			}
			m.mem.memUsed = stat.memory / 1000; // KB
			m.mem.utilization = stat.memory / os.totalmem();
			m.cpu = {
				'utilization': stat.cpu / 100
			};
			clbk( null, m );
		}
	} // end FUNCTION metrics()


	// EXPORTS //

	module.exports = metrics;

})();
