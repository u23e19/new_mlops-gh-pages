(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{360:function(e,t,r){"use strict";r.r(t);var n={props:{size:{type:String,default:"default"},theme:{type:String,default:"purple"},tag:{type:String,default:"button"},type:{type:String,default:""}},computed:{sizeClasses:function(){var e="";switch(this.size){case"default":e="px-6 lg:px-3 py-3 lg:py-2 text-sm lg:text-xs lg:font-medium";break;case"small":e="px-3 py-2 text-xs font-medium"}return e},themeClasses:function(){var e="";switch(this.theme){case"purple":e="text-white bg-purple-600 hover:bg-purple-700";break;case"black":e="text-white bg-gray-900 hover:bg-gray-800";break;case"gray":e="text-gray-500 bg-gray-50 hover:bg-gray-100";break;case"gray-transparent":e="text-gray-500 hover:bg-gray-50"}return e}}},l=r(53),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"component",staticClass:"rounded transition-colors",class:[e.sizeClasses,e.themeClasses],attrs:{type:e.type},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);