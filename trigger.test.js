"use strict";

const assert = require( "assert" );

const strictAssert = assert.strict;

const Trigger = require( "./trigger.js" );

(
	function( ){
		strictAssert
		.equal(
			(
							Trigger( )
				instanceof	Trigger
			),

			true,

			"Trigger function call must return an instance of Trigger."
		);
	}
)( );
