"use strict";

/*;
	@license:module:
		MIT License

		Copyright (c) 2020-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2020-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

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
	@license:module;
*/

const TRIGGER_CONTEXT = (
	Symbol( "trigger-context" )
);

const Trigger = (
	function Trigger( contextData, providerList ){
		/*;
			@definition:
				@class:#Trigger
					@description:
						Trigger class interface for procedure issue.
					@description;
				@class;

				@parameter:#contextData
					@type:
							object
					@type;

					@description:
					@description;

					@optional;
				@parameter;

				@parameter:#providerList
					@type:
							object:as:Array:of:function
					@type;

					@description:
					@description;

					@optional;
				@parameter;

				@result:#result
					@type:
							object:as:Trigger
					@type;

					@description:
					@description;
				@trigger;

				@trigger:#trigger
					@type:
							object:as:Error
					@type;

					@description:
					@description;
				@trigger;
			@definition;
		*/

		const resolveParameterList = (
			function resolveParameterList( ){
				const parameterList = (
					Array
					.from(
						(
							arguments
						)
					)
				);

				const contextCache = (
					Object
					.assign(
						...	(
								parameterList
								.filter(
									(
										( parameter ) => (
												(
														typeof
														parameter
													==	"object"
												)

											&&	(
														parameter
													!==	null
												)

											&&	(
														Array
														.isArray(
															(
																parameter
															)
														)
													!==	true
												)
										)
									)
								)
								.concat(
									(
										[
											{ }
										]
									)
								)
							)
					)
				);

				const providerCache = (
					parameterList
					.reduce(
						(
							( list, parameter ) => {
								if(
										(
												typeof
												parameter
											==	"function"
										)
								){
									list
									.push(
										(
											parameter
										)
									);
								}
								else if(
										(
												Array
												.isArray(
													(
														parameter
													)
												)
											===	true
										)
								){
									parameter
									.forEach(
										(
											( provider ) => {
												if(
														(
																typeof
																provider
															==	"function"
														)
												){
													list
													.push(
														(
															provider
														)
													);
												}
											}
										)
									);
								}

								return	(
											list
										);
							}
						),

						(
							[ ]
						)
					)
				);

				return	(
							[
								contextCache,
								providerCache
							]
						);
			}
		);

		if(
				(
						(
										this
							instanceof	Trigger
						)
					===	true
				)
		){
			(
					[
						contextData,
						providerList
					]
				=	(
						resolveParameterList
						.apply(
							(
								this
							),

							(
								Array
								.from(
									(
										arguments
									)
								)
							)
						)
					)
			);

			if(
					(
							typeof
							contextData
						==	"object"
					)

				&&	(
							contextData
						!==	null
					)
			){
				(
						this[ TRIGGER_CONTEXT ]
					=	(
							contextData
						)
				);
			}
			else{
				(
						this[ TRIGGER_CONTEXT ]
					=	(
							{ }
						)
				);
			}

			providerList
			.forEach(
				(
					( provider ) => {
						this
						.dispatchTrigger(
							(
								provider
							)
						);
					}
				)
			);

			return	(
						this
					);
		}
		else{
			(
					[
						contextData,
						providerList
					]
				=	(
						resolveParameterList
						.apply(
							(
								null
							),

							(
								Array
								.from(
									(
										arguments
									)
								)
							)
						)
					)
			);

			const trigger = (
				new	Trigger(
						(
							contextData
						),

						(
							providerList
						)
					)
			);

			const	{
						proxy: dispatchTrigger,
						revoke: revokeDispatchTrigger
					}
				=	(
						Proxy
						.revocable(
							(
								trigger
								.dispatchTrigger
							),

							(
								{
									"apply": (
										function apply( dispatchTrigger, scope, parameterList ){
											return	(
														dispatchTrigger
														.apply(
															(
																trigger
															),

															(
																parameterList
															)
														)
													);
										}
									),

									"get": (
										function get( dispatchTrigger, property, target ){
											if(
													(
															typeof
															property
														==	"string"
													)

												&&	(
															property
															.length
														>	0
													)

												&&	(
															(
																	property
																in	dispatchTrigger
															)
														!==	true
													)
											){
												return	(
																(
																	dispatchTrigger
																	.call(
																		(
																			trigger
																		)
																	)[ property ]
																)

															||	(
																	false
																)
														);
											}
											else if(
													(
															property
														===	"revokeDispatchTrigger"
													)
											){
												return	(
															trigger
															.revokeDispatchTrigger
														);
											}
											else{
												throw	(
															new	Error(
																	(
																		[
																			"#unsupported-trigger-state;",

																			"unsupported trigger state;",

																			"@state:",
																			`${ property };`
																		]
																	)
																)
														);
											}
										}
									),

									"getPrototypeOf": (
										function getPrototypeOf( target ){
											return	(
														Trigger
														.prototype
													);
										}
									)
								}
							)
						)
					);


			(
					trigger
					.revokeDispatchTrigger
				=	(
						revokeDispatchTrigger
					)
			);

			return	(
						{
							"trigger": (
								trigger
							),

							"dispatchTrigger": (
								dispatchTrigger
							),

							"revokeDispatchTrigger": (
								revokeDispatchTrigger
							)
						}
					);
		}
	}
);

const TriggerPrototype = (
		Trigger
		.prototype
	=	(
			Object
			.create(
				(
					Array
					.prototype
				)
			)
		)
);

TriggerPrototype.getContext = (
	function getContext( ){
		return	(
					this[ TRIGGER_CONTEXT ]
				);
	}
);

TriggerPrototype.dispatchTrigger = (
	function dispatchTrigger( state, provider ){
		const parameterList = (
			Array
			.from(
				(
					arguments
				)
			)
		);

		(
				state
			=	(
					parameterList
					.find(
						(
							( parameter ) => (
									(
											parameter
										===	true
									)

								||	(
											typeof
											parameter
										==	"symbol"
									)

								||	(
											(
													typeof
													parameter
												==	"string"
											)

										&&	(
													state
													.length
												>	0
											)
									)

								||	(
											(
															state
												instanceof	Error
											)
										===	true
									)
							)
						)
					)
				)
		);

		(
				provider
			=	(
					parameterList
					.find(
						(
							( parameter ) => (
									(
											typeof
											parameter
										==	"function"
									)
							)
						)
					)
				)
		);

		let stateConstantNamespace = (
			undefined
		);

		if(
				(
						state
					===	true
				)
		){
			(
					stateConstantNamespace
				=	(
						"ABORTED"
					)
			);

			if(
					(
							typeof
							provider
						!=	"function"
					)

				&&	(
							this
							.some(
								(
									( provider ) => (
											(
													typeof
													provider
												==	"function"
											)

										&&	(
													provider
													.name
												===	"dispatch"
											)

										&&	(
													provider
													.property
												===	stateConstantNamespace
											)
									)
								)
							)
						!==	true
					)
			){
				const dispatchProvider = (
					function dispatch( { property, value, source, target } ){
						(
								source[ stateConstantNamespace ]
							=	(
									true
								)
						);

						(
								target[ stateConstantNamespace ]
							=	(
									true
								)
						);

						return	(
									source
								);
					}
				);

				(
						dispatchProvider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						dispatchProvider
					)
				);
			}
		}
		else if(
				(
						typeof
						state
					==	"string"
				)

			&&	(
						state
						.length
					>	0
				)
		){
			if(
					(
							(
								/^[A-Za-z\$\@][A-Za-z0-9\$\@\_\-\s]*?[A-Za-z0-9]$/
							)
							.test(
								(
									state
								)
							)
						===	true
					)
			){
				(
						stateConstantNamespace
					=	(
							state
							.replace(
								(
									/([a-z0-9])([A-Z])/g
								),

								(
									"$1 $2"
								)
							)
							.replace(
								(
									/[\-]+?/g
								),

								(
									' '
								)
							)
							.replace(
								(
									/[\_]+?/g
								),

								(
									' '
								)
							)
							.split(
								(
									/[\s]+?/g
								)
							)
							.map(
								(
									( stateToken ) => (
										stateToken
										.toUpperCase( )
									)
								)
							)
							.join(
								(
									'_'
								)
							)
						)
				);
			}
			else{
				throw	(
							new	Error(
									(
										[
											"#invalid-state-namespace-format;",

											"invalid state namespace format;",

											"@state:",
											`${ state };`
										]
									)
								)
						);
			}

			if(
					(
							typeof
							provider
						!=	"function"
					)

				&&	(
							this
							.some(
								(
									( provider ) => (
											(
													typeof
													provider
												==	"function"
											)

										&&	(
													provider
													.name
												===	"dispatch"
											)

										&&	(
													provider
													.property
												===	stateConstantNamespace
											)
									)
								)
							)
						!==	true
					)
			){
				const dispatchProvider = (
					function dispatch( { property, value, source, target } ){
						(
								source[ stateConstantNamespace ]
							=	(
									true
								)
						);

						(
								target[ stateConstantNamespace ]
							=	(
									true
								)
						);

						return	(
									source
								);
					}
				);

				(
						dispatchProvider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						dispatchProvider
					)
				);
			}
		}
		else if(
				(
						(
										state
							instanceof	Error
						)
					===	true
				)
		){
			(
					stateConstantNamespace
				=	(
						"ERROR"
					)
			);

			if(
					(
							typeof
							provider
						!=	"function"
					)

				&&	(
							this
							.some(
								(
									( provider ) => (
											(
													typeof
													provider
												==	"function"
											)

										&&	(
													provider
													.name
												===	"dispatch"
											)

										&&	(
													provider
													.property
												===	stateConstantNamespace
											)
									)
								)
							)
						!==	true
					)
			){
				const dispatchProvider = (
					function dispatch( { property, value, source, target } ){
						(
								source[ stateConstantNamespace ]
							=	(
									state
								)
						);

						(
								target[ stateConstantNamespace ]
							=	(
									state
								)
						);

						return	(
									source
								);
					}
				);

				(
						dispatchProvider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						dispatchProvider
					)
				);
			}
		}

		if(
				(
						typeof
						provider
					==	"function"
				)
		){
			if(
					(
							provider
							.name
						===	"handle"
					)
			){
				(
						provider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						provider
					)
				);
			}
			else if(
					(
							provider
							.name
						===	"dispatch"
					)
			){
				(
						provider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						provider
					)
				);
			}
			else{
				const handleProvider = (
					function handle( { property, value, source, target } ){
						return	(
									provider(
										(
											{
												"property": (
													property
												),

												"value": (
													value
												),

												"source": (
													source
												),

												"target": (
													target
												)
											}
										)
									)
								);
					}
				);

				(
						handleProvider
						.property
					=	(
							stateConstantNamespace
						)
				);

				this
				.push(
					(
						handleProvider
					)
				);
			}
		}

		if(
				(
						arguments
						.length
					<=	0
				)

			||	(
						(
								typeof
								stateConstantNamespace
							==	"string"
						)

					&&	(
								stateConstantNamespace
								.length
							>	0
						)
				)
		){
			return	(
						Object
						.assign(
							(
								Object
								.create(
									(
										this
									)
								)
							),

							(
								this
								.reduce(
									(
										( source, provider ) => {
											if(
													(
															typeof
															provider
														==	"function"
													)

												&&	(
															provider
															.name
														===	"dispatch"
													)
											){
												if(
														(
																typeof
																stateConstantNamespace
															==	"string"
														)

													&&	(
																stateConstantNamespace
																.length
															>	0
														)
												){
													if(
															(
																	provider
																	.property
																===	stateConstantNamespace
															)
													){
														return	(
																	provider(
																		(
																			{
																				"source": (
																					source
																				),

																				"target": (
																					this
																					.getContext( )
																				)
																			}
																		)
																	)
																);
													}
													else{
														return	(
																	source
																);
													}
												}

												return	(
															provider(
																(
																	{
																		"source": (
																			source
																		),

																		"target": (
																			this
																			.getContext( )
																		)
																	}
																)
															)
														);
											}
											else{
												return	(
															source
														);
											}
										}
									),

									(
										{ }
									)
								)
							)
						)
					);
		}

		return	(
					this
				);
	}
);

TriggerPrototype.cleanTrigger = (
	function cleanTrigger( ){
		while(
				(
						this
						.length
					>	0
				)
		){
			this
			.pop( )
		}

		return	(
					this
				);
	}
);

TriggerPrototype.valueOf = (
	function valueOf( ){
		return	(
					this
					.dispatchTrigger( )
				);
	}
);

TriggerPrototype.toJSON = (
	function toJSON( ){
		return	(
					Object
					.entries(
						(
							this
							.valueOf( )
						)
					)
					.reduce(
						(
							( source, [ property, value ] ) => (
								(
										source[ property ]
									=	(
											value
											.toString( )
										)
								),

								(
									source
								)
							)
						),

						(
							{ }
						)
					)
				);
	}
);

TriggerPrototype.toString = (
	function toString( ){
		return	(
					JSON
					.stringify(
						(
							this
							.toJSON( )
						)
					)
				);
	}
);

module.exports = Trigger;
