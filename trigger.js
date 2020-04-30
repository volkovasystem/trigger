!function(global,factory){if("function"==typeof define&&define.amd)define([],factory);else if("undefined"!=typeof exports)factory();else{factory(),global.trigger={}}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(){"use strict";
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
  */const SYMBOL_NAMESPACE_PATTERN=/\((.+?)\)/,Trigger=function Trigger(trigger){
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
if(this instanceof Trigger!=1)return trigger instanceof Trigger==1?trigger:new Trigger(trigger);trigger instanceof Error==1?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze(Object.defineProperties({},{trigger:{value:trigger,enumerable:!1},state:{value:Object.freeze([Trigger.ERROR_STATE]),enumerable:!1}}))),configurable:!1,enumerable:!1,writable:!1}):"symbol"==typeof trigger?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze(Object.defineProperties({},{trigger:{value:Symbol.for(trigger.toString().match(SYMBOL_NAMESPACE_PATTERN)[1]),enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE]),enumerable:!1}}))),configurable:!1,enumerable:!1,writable:!1}):"string"==typeof trigger&&trigger.length>0?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze(Object.defineProperties({},{trigger:{value:Symbol.for(trigger),enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE]),enumerable:!1}}))),configurable:!1,enumerable:!1,writable:!1}):"boolean"==typeof trigger?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze(Object.defineProperties({},{trigger:{value:trigger,enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE,!1===trigger?Trigger.UNDEFINED_STATE:void 0].filter(state=>void 0!==state)),enumerable:!1}}))),configurable:!1,enumerable:!1,writable:!1}):Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,{}),configurable:!1,enumerable:!1,writable:!1})};Object.defineProperty(Trigger,"namespace",{value:"Trigger",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"type",{value:Object.freeze(["class","object","trigger"]),configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"checkTrigger",{value:function(entity){
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
return"object"==typeof entity&&(entity instanceof Trigger==1||"string"==typeof entity.constructor.namespace&&entity.constructor.namespace.length>0&&entity.constructor.namespace===Trigger.namespace||"object"==typeof entity.$type&&null!==entity.$type&&!0===Array.isArray(entity.$type)&&!0===Trigger.type.every(type=>entity.$type.includes(type)))},configurable:!1,enumerable:!1,writable:!1}),Object.defineProperty(Trigger,"ABORTED_STATE",{value:"aborted",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"ERROR_STATE",{value:"error",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"UNDEFINED_STATE",{value:"undefined",configurable:!1,enumerable:!0,writable:!1}),Trigger.prototype.setTrigger=function(trigger){
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
if(void 0!==this.getScope().trigger)throw new Error(["#set-trigger-done;","cannot set trigger","set trigger done","@trigger: "+this.getScope().trigger]);if("boolean"!=typeof trigger&&("object"!=typeof trigger||null===trigger||trigger instanceof Error!=1)&&"symbol"!=typeof trigger&&("string"!=typeof trigger||trigger.length<=0))throw new Error(["#invalid-set-trigger;","cannot set trigger","invalid trigger","@trigger: "+trigger]);if(trigger instanceof Error==1)this.setScope(Object.freeze(Object.defineProperties({},{trigger:{value:trigger,enumerable:!1},state:{value:Object.freeze([Trigger.ERROR_STATE]),enumerable:!1}})));else if("symbol"==typeof trigger)this.setScope(Object.freeze(Object.defineProperties({},{trigger:{value:Symbol.for(trigger.toString().match(SYMBOL_NAMESPACE_PATTERN)[1]),enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE]),enumerable:!1}})));else if("string"==typeof trigger)this.setScope(Object.freeze(Object.defineProperties({},{trigger:{value:Symbol.for(trigger),enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE]),enumerable:!1}})));else{if("boolean"!=typeof trigger)throw new Error(["#undefined-set-trigger-flow;","cannot set trigger","undefined behavior","@trigger: "+trigger]);this.setScope(Object.freeze(Object.defineProperties({},{trigger:{value:trigger,enumerable:!1},state:{value:Object.freeze([Trigger.ABORTED_STATE,!1===trigger?Trigger.UNDEFINED_STATE:void 0].filter(state=>void 0!==state)),enumerable:!1}})))}return this},Trigger.prototype.getTrigger=function(){
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
return this.getScope().trigger},Trigger.prototype.checkTrigger=function(triggerQuery){
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
const trigger=this.getTrigger();return void 0===triggerQuery||0===arguments.length?trigger instanceof Error==1||"symbol"==typeof trigger||"boolean"==typeof trigger:triggerQuery===Error?trigger instanceof Error==1:triggerQuery===Symbol?"symbol"==typeof trigger:triggerQuery===Boolean?"boolean"==typeof trigger:"symbol"!=typeof triggerQuery?"string"==typeof triggerQuery&&triggerQuery.length>0?trigger===Symbol.for(triggerQuery):trigger===triggerQuery:void 0},Trigger.prototype.checkState=function(stateQuery){
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
return"string"==typeof stateQuery&&stateQuery.length>0?stateQuery===Trigger.ERROR_STATE||stateQuery===Trigger.ABORTED_STATE||stateQuery===Trigger.UNDEFINED_STATE:void 0},Trigger.prototype.setScope=function(scopeData){
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
if("object"!=typeof scopeData||null===scopeData)throw new Error(["#invalid-set-trigger-scope-data;","cannot set trigger scope data","invalid scope data","@scope-data: "+scopeData]);return this.$triggerData.set(this,scopeData),this},Trigger.prototype.getScope=function(){
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
return this.$triggerData.get(this)},Trigger.prototype.valueOf=function(){
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
return Object.freeze(Object.assign({},this.getScope()))},Trigger.prototype.toString=function(){
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
if("function"==typeof require){const util=require("util");if("function"==typeof util.inspect)return util.inspect(this.getScope())}return JSON.stringify(this.getScope())},module.exports=Trigger}));