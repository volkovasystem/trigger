"use strict";

/*;
	@module-license:
		MIT License

		Copyright (c) 2020 Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@copyright:
			Richeve S. Bebedor
			<
				@year:
					2020
				@end-year
			>
			<
				@contact:
					richeve.bebedor@gmail.com
				@end-contact
			>
		@end-copyright

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license
*/

const SYMBOL_NAMESPACE_PATTERN = (
	/\((.+?)\)/
);

const Trigger = (
	function Trigger( trigger ){
		/*;
			@class-procedure-definition:
			@end-class-procedure-definition

			@parameter-definition:
				{
					"trigger": "
						[
							@type:
									boolean
								|	object as Error
								|	string
								|	symbol
							@end-type
						]
					"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									object as Trigger
							@end-type
						]
					"
				}
			@end-result-definition

			@static-property-definition:
				{
					"namespace": "
						[
							@type:
									string

								<
									@default-value:
										Trigger
									@end-default-value
								>
							@end-type

							<
								@property-definition:
								@end-property-definition
							>
						]
					",

					"type": "
						[
							@type:
									object as Array of string

								<
									@default-value:
										class
										object
										trigger
									@end-default-value
								>
							@end-type

							<
								@property-definition:
								@end-property-definition
							>
						]
					",
				}
			@end-static-property-definition

			@static-procedure-definition:
				{
					"checkTrigger": "
						[
							@type:
									function as checkTrigger
							@end-type

							<
								@procedure-definition:
									Check if object instance of Trigger class.
								@end-procedure-definition
							>
						]
					"
				}
			@end-static-procedure-definition
		*/

		if(
				(
						(
										this
							instanceof	Trigger
						)
					===	true
				)
		){
			if(
					(
							(
											trigger
								instanceof	Error
							)
						===	true
					)
			){
				Object
				.defineProperty(
					this,

					"$triggerData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								(
									Object
									.freeze(
										{
											"trigger": (
												trigger
											),

											"state": (
												Object
												.freeze(
													[
														Trigger
														.ERROR_STATE
													]
												)
											)
										}
									)
								)
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
			else if(
					(
							typeof
							trigger
						==	"symbol"
					)
			){
				Object
				.defineProperty(
					this,

					"$triggerData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								(
									Object
									.freeze(
										{
											"trigger": (
												Symbol
												.for(
													trigger
													.toString( )
													.match(
														SYMBOL_NAMESPACE_PATTERN
													)[ 1 ]
												)
											),

											"state": (
												Object
												.freeze(
													[
														Trigger
														.ABORTED_STATE
													]
												)
											)
										}
									)
								)
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
			else if(
					(
							typeof
							trigger
						== "string"
					)

				&&	(
							trigger
							.length
						>	0
					)
			){
				Object
				.defineProperty(
					this,

					"$triggerData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								(
									Object
									.freeze(
										{
											"trigger": (
												Symbol
												.for(
													trigger
												)
											),

											"state": (
												Object
												.freeze(
													[
														Trigger
														.ABORTED_STATE
													]
												)
											)
										}
									)
								)
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
			else if(
					(
							typeof
							trigger
						==	"boolean"
					)
			){
				Object
				.defineProperty(
					this,

					"$triggerData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								(
									Object
									.freeze(
										{
											"trigger": (
												trigger
											),

											"state": (
												Object
												.freeze(
													[
														(
															Trigger
															.ABORTED_STATE
														),

														(
																(
																		(
																				trigger
																			===	false
																		)
																)
															?	(
																	Trigger
																	.UNDEFINED_STATE
																)
															:	(
																	undefined
																)
														)
													]
													.filter(
														( state ) => (
															(
																	(
																			typeof
																			state
																		!=	"undefined"
																	)
															)
														)
													)
												)
											)
										}
									)
								)
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
			else{
				Object
				.defineProperty(
					this,

					"$triggerData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								{ }
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
		}
		else{
			if(
					(
							(
											trigger
								instanceof	Trigger
							)
						===	true
					)
			){
				return	trigger;
			}
			else{
				return	(
							new	Trigger(
									trigger
								)
						);
			}
		}
	}
);

Object
.defineProperty(
	Trigger,

	"namespace",

	{
		"value": "Trigger",

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Trigger,

	"type",

	{
		"value": (
			Object
			.freeze(
				[
					"class",
					"object",
					"trigger"
				]
			)
		),

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Trigger,

	"checkTrigger",

	{
		"value": (
			function checkTrigger( entity ){
				/*;
					@procedure-definition:
					@end-procedure-definition

					@parameter-definition:
						{
							"entity":"
								[
									@type:
											boolean
										|	function
										|	object
										|	number
										|	string
										|	symbol
										|	undefined
									@end-type

									<@required;>
								]
							"
						}
					@end-parameter-definition

					@result-definition:
						{
							"result": "
								[
									@type:
											boolean
								]
							"
						}
					@end-result-definition
				*/

				return	(
								(
										typeof
										entity
									==	"object"
								)

							&&	(
										(
												(
																entity
													instanceof	Trigger
												)
											===	true
										)

									||	(
												(
														typeof
														(
															(
																entity
																.constructor
															)
															.namespace
														)
													==	"string"
												)

											&&	(
														(
															(
																entity
																.constructor
																.namespace
															)
															.length
														)
													>	0
												)

											&&	(
														(
															(
																entity
																.constructor
															)
															.namespace
														)
													===	(
															Trigger
															.namespace
														)
												)
										)

									||	(
												(
														typeof
														(
															entity
															.$type
														)
													==	"object"
												)

											&&	(
														entity
														.$type
													!==	null
												)

											&&	(
														Array
														.isArray(
															entity
															.$type
														)
													===	true
												)

											&&	(
														(
															(
																Trigger
																.type
															)
															.every(
																( type ) => (
																	(
																		entity
																		.$type
																	)
																	.includes(
																		type
																	)
																)
															)
														)
													===	true
												)
										)
								)
						);
			}
		),

		"configurable": false,
		"enumerable": false,
		"writable": false
	}
);

Object
.defineProperty(
	Trigger,

	"ABORTED_STATE",

	{
		"value": "aborted",

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Trigger,

	"ERROR_STATE",

	{
		"value": "error",

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Trigger,

	"UNDEFINED_STATE",

	{
		"value": "undefined",

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Trigger.prototype.setTrigger = (
	function setTrigger( trigger ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@parameter-definition:
				{
					"trigger": "
						[
							@type:
									boolean
								|	object as Error
								|	string
								|	symbol
							@end-type
						]
					"
				}
			@end-parameter-definition

			@trigger-definition:
				{
					"trigger": "
						[
							@type:
									object as Error
							@end-type

							<@tag: set-trigger-done;>
							<@tag: invalid-set-trigger;>
							<@tag: undefined-set-trigger-flow;>
						]
					"
				}
			@end-trigger-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									object as Trigger
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		if(
				(
						typeof
						(
							this
							.getScope( )
						)
						.trigger
					!=	"undefined"
				)
		){
			throw	(
						new	Error(
								[
									"#set-trigger-done;",

									"cannot set trigger",
									"set trigger done",

									`@trigger: ${ this.getScope( ).trigger }`
								]
							)
					);
		}

		if(
				(
						typeof
						trigger
					!=	"boolean"
				)

			&&	(
						(
								typeof
								trigger
							!=	"object"
						)

					||	(
								trigger
							===	null
						)

					||	(
								(
												trigger
									instanceof	Error
								)
							!==	true
						)
				)

			&&	(
						typeof
						trigger
					!=	"symbol"
				)

			&&	(
						(
								typeof
								trigger
							!=	"string"
						)

					||	(
								trigger
								.length
							<=	0
						)
				)
		){
			throw	(
						new	Error(
								[
									"#invalid-set-trigger",

									"cannot set trigger",
									"invalid trigger",

									`@trigger: ${ trigger }`
								]
							)
					);
		}

		if(
				(
						(
										trigger
							instanceof	Error
						)
					===	true
				)
		){
			this
			.setScope(
				Object
				.freeze(
					{
						"trigger": (
							trigger
						),

						"state": (
							Object
							.freeze(
								[
									Trigger
									.ERROR_STATE
								]
							)
						)
					}
				)
			);
		}
		else if(
				(
						typeof
						trigger
					==	"symbol"
				)
		){
			this
			.setScope(
				Object
				.freeze(
					{
						"trigger": (
							Symbol
							.for(
								trigger
								.toString( )
								.match(
									SYMBOL_NAMESPACE_PATTERN
								)[ 1 ]
							)
						),

						"state": (
							Object
							.freeze(
								[
									Trigger
									.ABORTED_STATE
								]
							)
						)
					}
				)
			);
		}
		else if(
				(
						typeof
						trigger
					==	"string"
				)
		){
			this
			.setScope(
				Object
				.freeze(
					{
						"trigger": (
							Symbol
							.for(
								trigger
							)
						),

						"state": (
							Object
							.freeze(
								[
									Trigger
									.ABORTED_STATE
								]
							)
						)
					}
				)
			);
		}
		else if(
				(
						typeof
						trigger
					==	"boolean"
				)
		){
			this
			.setScope(
				Object
				.freeze(
					{
						"trigger": (
							trigger
						),

						"state": (
							Object
							.freeze(
								[
									(
										Trigger
										.ABORTED_STATE
									),

									(
											(
													(
															trigger
														===	false
													)
											)
										?	(
												Trigger
												.UNDEFINED_STATE
											)
										:	(
												undefined
											)
									)
								]
								.filter(
									( state ) => (
										(
												(
														typeof
														state
													!=	"undefined"
												)
										)
									)
								)
							)
						)
					}
				)
			);
		}
		else{
			throw	(
						new	Error(
								[
									"#undefined-set-trigger-flow",

									"cannot set trigger",
									"undefined behavior",

									`@trigger: ${ trigger }`
								]
							)
					);
		}

		return	this;
	}
);

Trigger.prototype.getTrigger = (
	function getTrigger( ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									boolean
								|	object as Error
								|	symbol
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		return	(
					(
						this
						.getScope( )
					)
					.trigger
				);
	}
);

Trigger.prototype.checkTrigger = (
	function checkTrigger( triggerQuery ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@parameter-definition:
				{
					"triggerQuery": "
						[
							@type:
									boolean
								|	function as Boolean,Error,Symbol
								|	object as Error
								|	string
								|	symbol
							@end-type

							<@optional;>
						]
					"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									boolean
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		const trigger = (
			this
			.getTrigger( )
		);

		if(
				(
						typeof
						triggerQuery
					==	"undefined"
				)

			||	(
						arguments
						.length
					===	0
				)
		){
			return	(
							(
									(
													trigger
										instanceof	Error
									)
								===	true
							)

						||	(
									typeof
									trigger
								==	"symbol"
							)

						||	(
									typeof
									trigger
								==	"boolean"
							)
					);
		}
		else{
			if(
					(
							triggerQuery
						===	Error
					)
			){
				return	(
								(
										(
														trigger
											instanceof	Error
										)
									===	true
								)
						);
			}
			else if(
					(
							triggerQuery
						===	Symbol
					)
			){
				return	(
								(
										typeof
										trigger
									==	"symbol"
								)
						);
			}
			else if(
					(
							triggerQuery
						===	Boolean
					)
			){
				return	(
								(
										typeof
										trigger
									==	"boolean"
								)
						);
			}
			else{
				if(
						(
								typeof
								triggerQuery
							==	"symbol"
						)
				){

				}
				else if(
						(
								typeof
								triggerQuery
							==	"string"
						)

					&&	(
								triggerQuery
								.length
							>	0
						)
				){
					return	(
									(
											trigger
										===	(
												Symbol
												.for(
													triggerQuery
												)
											)
									)
							);
				}
				else{
					return	(
									(
											trigger
										===	triggerQuery
									)
							);
				}
			}
		}
	}
);

Trigger.prototype.checkState = (
	function checkState( stateQuery ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@parameter-definition:
				{
					"stateQuery": "
						[
							@type:
									string
							@end-type

							<@optional;>
						]
					"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									boolean
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		if(
				(
						typeof
						stateQuery
					==	"string"
				)

			&&	(
						stateQuery
						.length
					>	0
				)
		){
			return	(
							(
									stateQuery
								===	(
										Trigger
										.ERROR_STATE
									)
							)

						||	(
									stateQuery
								===	(
										Trigger
										.ABORTED_STATE
									)
							)

						||	(
									stateQuery
								===	(
										Trigger
										.UNDEFINED_STATE
									)
							)
					);
		}
		else{
			return	undefined;
		}
	}
);

Trigger.prototype.setScope = (
	function setScope( scopeData ){
		/*;
			@procedure-definition:
				Set trigger data container scope.
			@end-procedure-definition

			@parameter-definition:
				{
					"scopeData": "
						[
							@type:
									object
							@end-type

							<@required;>
						]
					"
				}
			@end-parameter-definition

			@trigger-definition:
				{
					"trigger": "
						[
							@type:
									object as Error
							@end-type

							<@tag: invalid-set-trigger-scope-data;>
						]
					"
				}
			@end-trigger-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									object as Trigger
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		if(
				(
						typeof
						scopeData
					==	"object"
				)

			&&	(
						scopeData
					!==	null
				)
		){
			(
				this
				.$triggerData
			)
			.set(
				this,
				scopeData
			);
		}
		else{
			throw	(
						new	Error(
								[
									"#invalid-set-trigger-scope-data;",

									"cannot set trigger scope data",
									"invalid scope data",

									`@scope-data: ${ scopeData }`
								]
							)
					);
		}

		return	this;
	}
);

Trigger.prototype.getScope = (
	function getScope( ){
		/*;
			@procedure-definition:
				Get trigger data container scope.
			@end-procedure-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									object
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		return	(
					(
						this
						.$triggerData
					)
					.get(
						this
					)
				);
	}
);

Trigger.prototype.valueOf = (
	function valueOf( ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									object
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		return	(
					Object
					.freeze(
						Object
						.assign(
							{ },

							(
								this
								.getScope( )
							)
						)
					)
				);
	}
);

Trigger.prototype.toString = (
	function toString( ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@result-definition:
				{
					"result": "
						[
							@type:
									string
							@end-type
						]
					"
				}
			@end-result-definition
		*/

		if(
				(
						typeof
						require
					==	"function"
				)
		){
			const util = require( "util" );

			if(
					(
							typeof
							(
								util
								.inspect
							)
						==	"function"
					)
			){
				return	(
							util
							.inspect(
								this
								.getScope( )
							)
						);
			}
		}

		return	(
					JSON
					.stringify(
						this
						.getScope( )
					)
				);
	}
);

module.exports = Trigger;
