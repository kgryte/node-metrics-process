var getMetrics = require( './../lib' );

// Get the process metrics:
getMetrics( onMetrics );

function onMetrics( error, metrics ) {
	if ( error ) {
		throw new Error( error );
	}
	console.log( JSON.stringify( metrics ) );

	// Force the process to exit (toobusy will continue to run):
	process.exit( -1 );
}