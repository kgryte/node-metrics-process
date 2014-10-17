var getMetrics = require( './../lib' );

// Get the process metrics:
var metrics = getMetrics();

console.log( JSON.stringify( metrics ) );

// Force the process to exit (toobusy will continue to run):
process.exit( -1 );