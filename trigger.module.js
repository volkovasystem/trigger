"use strict";

/*;
	@module-license:
		MIT License

		Copyright (c) 2020 Richeve S. Bebedor <richeve.bebedor@gmail.com>
		@copyright: Richeve S. Bebedor <@year: 2020> <@contact: richeve.bebedor@gmail.com>

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
			@parameter-definition:
				{
					"trigger": "
						[
							@type:
									boolean
								|	object as Error
								|	string
								|	symbol
						]
					"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "[@type: object as Trigger]"
				}
			@end-result-definition
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

								{
									"trigger": trigger,
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

								{
									"trigger": trigger,

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
														),
													:	undefined
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
					@parameter-definition:
						{
							"entity": "
								[
									@type:
											boolean
										|	function
										|	object
										|	number
										|	string
										|	symbol
										|	undefined

									<@required>
								]
							"
						}
					@end-parameter-definition

					@result-definition:
						{
							"result": "[@type: boolean]"
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
															option
															.constructor
															.namespace
														)
													==	"string"
												)

											&&	(
														(
															option
															.constructor
															.namespace
															.length
														)
													>	0
												)

											&&	(
														(
															option
															.constructor
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
															Trigger
															.type
															.every(
																( type ) => (
																	entity
																	.$type
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
			@parameter-definition:
				{
					"trigger": "
						[
							@type:
									boolean
								|	object as Error
								|	string
								|	symbol
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

							<@tag: invalid-set-trigger>
						]
					"
				}
			@end-trigger-definition

			@result-definition:
				{
					"result": "[@type: object as Trigger]"
				}
			@end-result-definition
		*/

		if(
				(
						typeof
						trigger
					!= "boolean"
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
						typeof
						trigger
					==	"symbol"
				)
		){
			trigger = (
				Symbol
				.for(
					trigger
					.toString( )
					.match(
						SYMBOL_NAMESPACE_PATTERN
					)[ 1 ]
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
			trigger = (
				Symbol
				.for(
					trigger
				)
			);
		}

			this
			.getScope( )
			.trigger
		=	trigger;

		return	this;
	}
);

Trigger.prototype.getTrigger = (
	function getTrigger( ){
		/*;
			@result-definition:
				{
					"result": "
						[
							@type:
									boolean
								|	object as Error
								|	symbol
						]
					"
				}
			@end-result-definition
		*/

		return	(
					this
					.getScope( )
					.trigger
				);
	}
);

Trigger.prototype.checkTrigger = (
	function checkTrigger( triggerQuery ){
		/*;
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

							<@optional>
						]
					"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "[@type: boolean]"
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

			@trigger-definition:
				{
					"trigger": "
						[
							@type:
								object as Error

							<@tag: invalid-set-trigger-scope-data>
						]
					"
				}
			@end-trigger-definition

			@result-definition:
				{
					"result": "[@type: object as Trigger]"
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
			this
			.$triggerData
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
					"result": "[@type: object]"
				}
			@end-result-definition
		*/

		return	(
					this
					.$triggerData
					.get(
						this
					)
				);
	}
);

Trigger.prototype.valueOf = (
	function valueOf( ){
		/*;
			@result-definition:
				{
					"result": "[@type: object]"
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
			@result-definition:
				{
					"result": "[@type: string]"
				}
			@end-result-definition
		*/

		if(
				typeof
				require
			==	"function"
		){
			const util = require( "util" );

			if(
					typeof
					(
						util
						.inspect
					)
				==	"function"
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
