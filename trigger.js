!function(global,factory){if("function"==typeof define&&define.amd)define([],factory);else if("undefined"!=typeof exports)factory();else{factory(),global.trigger={}}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(){"use strict";const SYMBOL_NAMESPACE_PATTERN=/\((.+?)\)/,Trigger=function Trigger(trigger){if(this instanceof Trigger!=1)return trigger instanceof Trigger==1?trigger:new Trigger(trigger);trigger instanceof Error==1?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze({trigger:trigger,state:Object.freeze([Trigger.ERROR_STATE])})),configurable:!1,enumerable:!1,writable:!1}):"symbol"==typeof trigger?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze({trigger:Symbol.for(trigger.toString().match(SYMBOL_NAMESPACE_PATTERN)[1]),state:Object.freeze([Trigger.ABORTED_STATE])})),configurable:!1,enumerable:!1,writable:!1}):"string"==typeof trigger&&trigger.length>0?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze({trigger:Symbol.for(trigger),state:Object.freeze([Trigger.ABORTED_STATE])})),configurable:!1,enumerable:!1,writable:!1}):"boolean"==typeof trigger?Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,Object.freeze({trigger:trigger,state:Object.freeze([Trigger.ABORTED_STATE,!1===trigger?Trigger.UNDEFINED_STATE:void 0].filter(state=>void 0!==state))})),configurable:!1,enumerable:!1,writable:!1}):Object.defineProperty(this,"$triggerData",{value:(new WeakMap).set(this,{}),configurable:!1,enumerable:!1,writable:!1})};Object.defineProperty(Trigger,"namespace",{value:"Trigger",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"type",{value:Object.freeze(["class","object","trigger"]),configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"checkTrigger",{value:function(entity){return"object"==typeof entity&&(entity instanceof Trigger==1||"string"==typeof option.constructor.namespace&&option.constructor.namespace.length>0&&option.constructor.namespace===Trigger.namespace||"object"==typeof entity.$type&&null!==entity.$type&&!0===Array.isArray(entity.$type)&&!0===Trigger.type.every(type=>entity.$type.includes(type)))},configurable:!1,enumerable:!1,writable:!1}),Object.defineProperty(Trigger,"ABORTED_STATE",{value:"aborted",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"ERROR_STATE",{value:"error",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Trigger,"UNDEFINED_STATE",{value:"undefined",configurable:!1,enumerable:!0,writable:!1}),Trigger.prototype.setTrigger=function(trigger){if(void 0!==this.getScope().trigger)throw new Error(["#set-trigger-done;","cannot set trigger","set trigger done","@trigger: "+this.getScope().trigger]);if("boolean"!=typeof trigger&&("object"!=typeof trigger||null===trigger||trigger instanceof Error!=1)&&"symbol"!=typeof trigger&&("string"!=typeof trigger||trigger.length<=0))throw new Error(["#invalid-set-trigger","cannot set trigger","invalid trigger","@trigger: "+trigger]);if(trigger instanceof Error==1)this.setScope(Object.freeze({trigger:trigger,state:Object.freeze([Trigger.ERROR_STATE])}));else if("symbol"==typeof trigger)this.setScope(Object.freeze({trigger:Symbol.for(trigger.toString().match(SYMBOL_NAMESPACE_PATTERN)[1]),state:Object.freeze([Trigger.ABORTED_STATE])}));else if("string"==typeof trigger)this.setScope(Object.freeze({trigger:Symbol.for(trigger),state:Object.freeze([Trigger.ABORTED_STATE])}));else{if("boolean"!=typeof trigger)throw new Error(["#undefined-set-trigger-flow","cannot set trigger","undefined behavior","@trigger: "+trigger]);this.setScope(Object.freeze({trigger:trigger,state:Object.freeze([Trigger.ABORTED_STATE,!1===trigger?Trigger.UNDEFINED_STATE:void 0].filter(state=>void 0!==state))}))}return this},Trigger.prototype.getTrigger=function(){return this.getScope().trigger},Trigger.prototype.checkTrigger=function(triggerQuery){const trigger=this.getTrigger();return void 0===triggerQuery||0===arguments.length?trigger instanceof Error==1||"symbol"==typeof trigger||"boolean"==typeof trigger:triggerQuery===Error?trigger instanceof Error==1:triggerQuery===Symbol?"symbol"==typeof trigger:triggerQuery===Boolean?"boolean"==typeof trigger:"symbol"!=typeof triggerQuery?"string"==typeof triggerQuery&&triggerQuery.length>0?trigger===Symbol.for(triggerQuery):trigger===triggerQuery:void 0},Trigger.prototype.checkState=function(stateQuery){return"string"==typeof stateQuery&&stateQuery.length>0?stateQuery===Trigger.ERROR_STATE||stateQuery===Trigger.ABORTED_STATE||stateQuery===Trigger.UNDEFINED_STATE:void 0},Trigger.prototype.setScope=function(scopeData){if("object"!=typeof scopeData||null===scopeData)throw new Error(["#invalid-set-trigger-scope-data;","cannot set trigger scope data","invalid scope data","@scope-data: "+scopeData]);return this.$triggerData.set(this,scopeData),this},Trigger.prototype.getScope=function(){return this.$triggerData.get(this)},Trigger.prototype.valueOf=function(){return Object.freeze(Object.assign({},this.getScope()))},Trigger.prototype.toString=function(){if("function"==typeof require){const util=require("util");if("function"==typeof util.inspect)return util.inspect(this.getScope())}return JSON.stringify(this.getScope())},module.exports=Trigger}));