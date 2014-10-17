/**
*
*	METRICS: process
*
*
*	DESCRIPTION:
*		- Small utility to get process metrics.
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

	var toobusy = require( 'toobusy' );


	// METRICS //

	/**
	* FUNCTION: metrics()
	*	Returns process metrics.
	*
	* @returns {Object} process metrics
	*/
	function metrics() {
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

		m.rss = mem.rss / 1000; // KB
		m.heapFree = (total-used) / 1000; // KB
		m.heapTotal = total / 1000; // KB
		m.heapUtilization = used / total;

		// Get the average amount of time requests have to wait in Node's event queue before being processed:
		m.lag = toobusy.lag(); // ms

		return m;
	} // end FUNCTION metrics()


	// EXPORTS //

	module.exports = metrics;

})();