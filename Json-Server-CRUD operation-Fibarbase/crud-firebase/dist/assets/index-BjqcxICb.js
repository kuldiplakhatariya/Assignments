function x1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function D1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var av={exports:{}},Eu={},lv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),O1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),V1=Symbol.for("react.strict_mode"),L1=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),F1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),j1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),z1=Symbol.for("react.lazy"),ng=Symbol.iterator;function $1(t){return t===null||typeof t!="object"?null:(t=ng&&t[ng]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cv=Object.assign,hv={};function hs(t,e,n){this.props=t,this.context=e,this.refs=hv,this.updater=n||uv}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dv(){}dv.prototype=hs.prototype;function Yd(t,e,n){this.props=t,this.context=e,this.refs=hv,this.updater=n||uv}var Xd=Yd.prototype=new dv;Xd.constructor=Yd;cv(Xd,hs.prototype);Xd.isPureReactComponent=!0;var rg=Array.isArray,fv=Object.prototype.hasOwnProperty,Jd={current:null},pv={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fv.call(e,r)&&!pv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:t,key:s,ref:o,props:i,_owner:Jd.current}}function W1(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function q1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ig=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q1(""+t.key):e.toString(36)}function al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case O1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kc(o,0):r,rg(i)?(n="",t!=null&&(n=t.replace(ig,"$&/")+"/"),al(i,e,n,"",function(c){return c})):i!=null&&(Zd(i)&&(i=W1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+kc(s,l);o+=al(s,e,n,u,i)}else if(u=$1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+kc(s,l++),o+=al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var r=[],i=0;return al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function H1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},ll={transition:null},G1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Jd};function gv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=hs;Z.Fragment=M1;Z.Profiler=L1;Z.PureComponent=Yd;Z.StrictMode=V1;Z.Suspense=j1;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1;Z.act=gv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fv.call(e,u)&&!pv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:na,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:F1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b1,_context:t},t.Consumer=t};Z.createElement=mv;Z.createFactory=function(t){var e=mv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:U1,render:t}};Z.isValidElement=Zd;Z.lazy=function(t){return{$$typeof:z1,_payload:{_status:-1,_result:t},_init:H1}};Z.memo=function(t,e){return{$$typeof:B1,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};Z.unstable_act=gv;Z.useCallback=function(t,e){return yt.current.useCallback(t,e)};Z.useContext=function(t){return yt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return yt.current.useEffect(t,e)};Z.useId=function(){return yt.current.useId()};Z.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return yt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};Z.useRef=function(t){return yt.current.useRef(t)};Z.useState=function(t){return yt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return yt.current.useTransition()};Z.version="18.3.1";lv.exports=Z;var z=lv.exports;const _v=D1(z),K1=x1({__proto__:null,default:_v},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=z,Y1=Symbol.for("react.element"),X1=Symbol.for("react.fragment"),J1=Object.prototype.hasOwnProperty,Z1=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eS={key:!0,ref:!0,__self:!0,__source:!0};function yv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)J1.call(e,r)&&!eS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Y1,type:t,key:s,ref:o,props:i,_owner:Z1.current}}Eu.Fragment=X1;Eu.jsx=yv;Eu.jsxs=yv;av.exports=Eu;var b=av.exports,Eh={},vv={exports:{}},Vt={},Ev={exports:{}},wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var Se=J-1>>>1,de=$[Se];if(0<i(de,Q))$[Se]=Q,$[J]=de,J=Se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var Se=0,de=$.length,xe=de>>>1;Se<xe;){var Tn=2*(Se+1)-1,In=$[Tn],Sn=Tn+1,Cn=$[Sn];if(0>i(In,J))Sn<de&&0>i(Cn,In)?($[Se]=Cn,$[Sn]=J,Se=Sn):($[Se]=In,$[Tn]=J,Se=Tn);else if(Sn<de&&0>i(Cn,J))$[Se]=Cn,$[Sn]=J,Se=Sn;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,v=!1,A=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O($){if(P=!1,C($),!A)if(n(u)!==null)A=!0,Ss(F);else{var Q=n(c);Q!==null&&wn(O,Q.startTime-$)}}function F($,Q){A=!1,P&&(P=!1,T(_),_=-1),v=!0;var J=m;try{for(C(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!R());){var Se=p.callback;if(typeof Se=="function"){p.callback=null,m=p.priorityLevel;var de=Se(p.expirationTime<=Q);Q=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),C(Q)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var Tn=n(c);Tn!==null&&wn(O,Tn.startTime-Q),xe=!1}return xe}finally{p=null,m=J,v=!1}}var j=!1,w=null,_=-1,E=5,S=-1;function R(){return!(t.unstable_now()-S<E)}function N(){if(w!==null){var $=t.unstable_now();S=$;var Q=!0;try{Q=w(!0,$)}finally{Q?I():(j=!1,w=null)}}else j=!1}var I;if(typeof y=="function")I=function(){y(N)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Ar=bt.port2;bt.port1.onmessage=N,I=function(){Ar.postMessage(null)}}else I=function(){x(N,0)};function Ss($){w=$,j||(j=!0,I())}function wn($,Q){_=x(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,Ss(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var Se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Se+J:Se):J=Se,$){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=J+de,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:de,sortIndex:-1},J>Se?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(P?(T(_),_=-1):P=!0,wn(O,J-Se))):($.sortIndex=de,e(u,$),A||v||(A=!0,Ss(F))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(wv);Ev.exports=wv;var tS=Ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=z,Mt=tS;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tv=new Set,Ao={};function oi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Tv.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function iS(t){return wh.call(og,t)?!0:wh.call(sg,t)?!1:rS.test(t)?og[t]=!0:(sg[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),Cv=Symbol.for("react.offscreen"),ag=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Nc;function Js(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var xc=!1;function Dc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function aS(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Si:return"Portal";case Th:return"Profiler";case rf:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sv:return(t.displayName||"Context")+".Consumer";case Iv:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case of:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=uS(t))}function Rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pv(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function Rh(t,e){Pv(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Zs(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function kv(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function Ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hS=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xh(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mh=null,Ui=null,ji=null;function dg(t){if(t=sa(t)){if(typeof Mh!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Cu(e),Mh(t.stateNode,t.type,e))}}function Mv(t){Ui?ji?ji.push(t):ji=[t]:Ui=t}function Vv(){if(Ui){var t=Ui,e=ji;if(ji=Ui=null,dg(t),e)for(t=0;t<e.length;t++)dg(e[t])}}function Lv(t,e){return t(e)}function bv(){}var Oc=!1;function Fv(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Lv(t,e,n)}finally{Oc=!1,(Ui!==null||ji!==null)&&(bv(),Vv())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Vh=!1;if(Vn)try{var js={};Object.defineProperty(js,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Vh=!1}function dS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var lo=!1,Rl=null,Pl=!1,Lh=null,fS={onError:function(t){lo=!0,Rl=t}};function pS(t,e,n,r,i,s,o,l,u){lo=!1,Rl=null,dS.apply(fS,arguments)}function mS(t,e,n,r,i,s,o,l,u){if(pS.apply(this,arguments),lo){if(lo){var c=Rl;lo=!1,Rl=null}else throw Error(L(198));Pl||(Pl=!0,Lh=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fg(t){if(ai(t)!==t)throw Error(L(188))}function gS(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fg(i),t;if(s===r)return fg(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function jv(t){return t=gS(t),t!==null?Bv(t):null}function Bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bv(t);if(e!==null)return e;t=t.sibling}return null}var zv=Mt.unstable_scheduleCallback,pg=Mt.unstable_cancelCallback,_S=Mt.unstable_shouldYield,yS=Mt.unstable_requestPaint,De=Mt.unstable_now,vS=Mt.unstable_getCurrentPriorityLevel,lf=Mt.unstable_ImmediatePriority,$v=Mt.unstable_UserBlockingPriority,kl=Mt.unstable_NormalPriority,ES=Mt.unstable_LowPriority,Wv=Mt.unstable_IdlePriority,wu=null,pn=null;function wS(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(wu,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:SS,TS=Math.log,IS=Math.LN2;function SS(t){return t>>>=0,t===0?32:31-(TS(t)/IS|0)|0}var Ba=64,za=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=eo(l):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=CS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qv(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gv,cf,Kv,Qv,Yv,Fh=!1,$a=[],nr=null,rr=null,ir=null,ko=new Map,No=new Map,Yn=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&cf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kS(t,e,n,r,i){switch(e){case"focusin":return nr=Bs(nr,t,e,n,r,i),!0;case"dragenter":return rr=Bs(rr,t,e,n,r,i),!0;case"mouseover":return ir=Bs(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ko.set(s,Bs(ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,Bs(No.get(s)||null,t,e,n,r,i)),!0}return!1}function Xv(t){var e=Vr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Uv(n),e!==null){t.blockedOn=e,Yv(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=sa(n),e!==null&&cf(e),t.blockedOn=n,!1;e.shift()}return!0}function gg(t,e,n){ul(t)&&n.delete(e)}function NS(){Fh=!1,nr!==null&&ul(nr)&&(nr=null),rr!==null&&ul(rr)&&(rr=null),ir!==null&&ul(ir)&&(ir=null),ko.forEach(gg),No.forEach(gg)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,NS)))}function xo(t){function e(i){return zs(i,t)}if(0<$a.length){zs($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&zs(nr,t),rr!==null&&zs(rr,t),ir!==null&&zs(ir,t),ko.forEach(e),No.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Xv(n),n.blockedOn===null&&Yn.shift()}var Bi=zn.ReactCurrentBatchConfig,xl=!0;function xS(t,e,n,r){var i=ce,s=Bi.transition;Bi.transition=null;try{ce=1,hf(t,e,n,r)}finally{ce=i,Bi.transition=s}}function DS(t,e,n,r){var i=ce,s=Bi.transition;Bi.transition=null;try{ce=4,hf(t,e,n,r)}finally{ce=i,Bi.transition=s}}function hf(t,e,n,r){if(xl){var i=Uh(t,e,n,r);if(i===null)Wc(t,e,r,Dl,n),mg(t,r);else if(kS(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<PS.indexOf(t)){for(;i!==null;){var s=sa(i);if(s!==null&&Gv(s),s=Uh(t,e,n,r),s===null&&Wc(t,e,r,Dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wc(t,e,r,null,n)}}var Dl=null;function Uh(t,e,n,r){if(Dl=null,t=af(r),t=Vr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function Jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case lf:return 1;case $v:return 4;case kl:case ES:return 16;case Wv:return 536870912;default:return 16}default:return 16}}var Jn=null,df=null,cl=null;function Zv(){if(cl)return cl;var t,e=df,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function _g(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:_g,this.isPropagationStopped=_g,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=Lt(ds),ia=Re({},ds,{view:0,detail:0}),OS=Lt(ia),Vc,Lc,$s,Tu=Re({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Vc=t.screenX-$s.screenX,Lc=t.screenY-$s.screenY):Lc=Vc=0,$s=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),yg=Lt(Tu),MS=Re({},Tu,{dataTransfer:0}),VS=Lt(MS),LS=Re({},ia,{relatedTarget:0}),bc=Lt(LS),bS=Re({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=Lt(bS),US=Re({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jS=Lt(US),BS=Re({},ds,{data:0}),vg=Lt(BS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WS[t])?!!e[t]:!1}function pf(){return qS}var HS=Re({},ia,{key:function(t){if(t.key){var e=zS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=Lt(HS),KS=Re({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=Lt(KS),QS=Re({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),YS=Lt(QS),XS=Re({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Lt(XS),ZS=Re({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=Lt(ZS),tC=[9,13,27,32],mf=Vn&&"CompositionEvent"in window,uo=null;Vn&&"documentMode"in document&&(uo=document.documentMode);var nC=Vn&&"TextEvent"in window&&!uo,e0=Vn&&(!mf||uo&&8<uo&&11>=uo),wg=" ",Tg=!1;function t0(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function rC(t,e){switch(t){case"compositionend":return n0(e);case"keypress":return e.which!==32?null:(Tg=!0,wg);case"textInput":return t=e.data,t===wg&&Tg?null:t;default:return null}}function iC(t,e){if(Ai)return t==="compositionend"||!mf&&t0(t,e)?(t=Zv(),cl=df=Jn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e0&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function r0(t,e,n,r){Mv(r),e=Ol(e,"onChange"),0<e.length&&(n=new ff("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,Do=null;function oC(t){p0(t,0)}function Iu(t){var e=ki(t);if(Rv(e))return t}function aC(t,e){if(t==="change")return e}var i0=!1;if(Vn){var Fc;if(Vn){var Uc="oninput"in document;if(!Uc){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),Uc=typeof Sg.oninput=="function"}Fc=Uc}else Fc=!1;i0=Fc&&(!document.documentMode||9<document.documentMode)}function Cg(){co&&(co.detachEvent("onpropertychange",s0),Do=co=null)}function s0(t){if(t.propertyName==="value"&&Iu(Do)){var e=[];r0(e,Do,t,af(t)),Fv(oC,e)}}function lC(t,e,n){t==="focusin"?(Cg(),co=e,Do=n,co.attachEvent("onpropertychange",s0)):t==="focusout"&&Cg()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(Do)}function cC(t,e){if(t==="click")return Iu(e)}function hC(t,e){if(t==="input"||t==="change")return Iu(e)}function dC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:dC;function Oo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wh.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Ag(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ag(n)}}function o0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=a0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o0(n.ownerDocument.documentElement,n)){if(r!==null&&gf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=Vn&&"documentMode"in document&&11>=document.documentMode,Ri=null,jh=null,ho=null,Bh=!1;function Pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Ri==null||Ri!==Al(r)||(r=Ri,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Oo(ho,r)||(ho=r,r=Ol(jh,"onSelect"),0<r.length&&(e=new ff("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},jc={},l0={};Vn&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function Su(t){if(jc[t])return jc[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l0)return jc[t]=e[n];return t}var u0=Su("animationend"),c0=Su("animationiteration"),h0=Su("animationstart"),d0=Su("transitionend"),f0=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){f0.set(t,e),oi(e,[t])}for(var Bc=0;Bc<kg.length;Bc++){var zc=kg[Bc],mC=zc.toLowerCase(),gC=zc[0].toUpperCase()+zc.slice(1);Tr(mC,"on"+gC)}Tr(u0,"onAnimationEnd");Tr(c0,"onAnimationIteration");Tr(h0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(d0,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_C=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mS(r,e,void 0,t),t.currentTarget=null}function p0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ng(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ng(i,l,c),s=u}}}if(Pl)throw t=Lh,Pl=!1,Lh=null,t}function _e(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(m0(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),m0(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[Ha]){t[Ha]=!0,Tv.forEach(function(n){n!=="selectionchange"&&(_C.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,$c("selectionchange",!1,e))}}function m0(t,e,n,r){switch(Jv(e)){case 1:var i=xS;break;case 4:i=DS;break;default:i=hf}n=i.bind(null,e,n,t),i=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Fv(function(){var c=s,d=af(n),p=[];e:{var m=f0.get(t);if(m!==void 0){var v=ff,A=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":v=GS;break;case"focusin":A="focus",v=bc;break;case"focusout":A="blur",v=bc;break;case"beforeblur":case"afterblur":v=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=YS;break;case u0:case c0:case h0:v=FS;break;case d0:v=JS;break;case"scroll":v=OS;break;case"wheel":v=eC;break;case"copy":case"cut":case"paste":v=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Eg}var P=(e&4)!==0,x=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var y=c,C;y!==null;){C=y;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,T!==null&&(O=Po(y,T),O!=null&&P.push(Vo(y,O,C)))),x)break;y=y.return}0<P.length&&(m=new v(m,A,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Oh&&(A=n.relatedTarget||n.fromElement)&&(Vr(A)||A[Ln]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?Vr(A):null,A!==null&&(x=ai(A),A!==x||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(P=yg,O="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Eg,O="onPointerLeave",T="onPointerEnter",y="pointer"),x=v==null?m:ki(v),C=A==null?m:ki(A),m=new P(O,y+"leave",v,n,d),m.target=x,m.relatedTarget=C,O=null,Vr(d)===c&&(P=new P(T,y+"enter",A,n,d),P.target=C,P.relatedTarget=x,O=P),x=O,v&&A)t:{for(P=v,T=A,y=0,C=P;C;C=vi(C))y++;for(C=0,O=T;O;O=vi(O))C++;for(;0<y-C;)P=vi(P),y--;for(;0<C-y;)T=vi(T),C--;for(;y--;){if(P===T||T!==null&&P===T.alternate)break t;P=vi(P),T=vi(T)}P=null}else P=null;v!==null&&xg(p,m,v,P,!1),A!==null&&x!==null&&xg(p,x,A,P,!0)}}e:{if(m=c?ki(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=aC;else if(Ig(m))if(i0)F=hC;else{F=uC;var j=lC}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=cC);if(F&&(F=F(t,c))){r0(p,F,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Ph(m,"number",m.value)}switch(j=c?ki(c):window,t){case"focusin":(Ig(j)||j.contentEditable==="true")&&(Ri=j,jh=c,ho=null);break;case"focusout":ho=jh=Ri=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Pg(p,n,d);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":Pg(p,n,d)}var w;if(mf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ai?t0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(e0&&n.locale!=="ko"&&(Ai||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ai&&(w=Zv()):(Jn=d,df="value"in Jn?Jn.value:Jn.textContent,Ai=!0)),j=Ol(c,_),0<j.length&&(_=new vg(_,t,null,n,d),p.push({event:_,listeners:j}),w?_.data=w:(w=n0(n),w!==null&&(_.data=w)))),(w=nC?rC(t,n):iC(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(d=new vg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}p0(p,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Po(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Po(n,s),u!=null&&o.unshift(Vo(n,u,l))):i||(u=Po(n,s),u!=null&&o.push(Vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yC=/\r\n?/g,vC=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(yC,`
`).replace(vC,"")}function Ga(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(L(425))}function Ml(){}var zh=null,$h=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,EC=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,wC=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(TC)}:qh;function TC(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),hn="__reactFiber$"+fs,Lo="__reactProps$"+fs,Ln="__reactContainer$"+fs,Hh="__reactEvents$"+fs,IC="__reactListeners$"+fs,SC="__reactHandles$"+fs;function Vr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mg(t);t!==null;){if(n=t[hn])return n;t=Mg(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[hn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Cu(t){return t[Lo]||null}var Gh=[],Ni=-1;function Ir(t){return{current:t}}function we(t){0>Ni||(t.current=Gh[Ni],Gh[Ni]=null,Ni--)}function pe(t,e){Ni++,Gh[Ni]=t.current,t.current=e}var _r={},dt=Ir(_r),Tt=Ir(!1),qr=_r;function Ki(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Vl(){we(Tt),we(dt)}function Vg(t,e,n){if(dt.current!==_r)throw Error(L(168));pe(dt,e),pe(Tt,n)}function g0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,lS(t)||"Unknown",i));return Re({},n,r)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,qr=dt.current,pe(dt,t),pe(Tt,Tt.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=g0(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,we(Tt),we(dt),pe(dt,t)):we(Tt),pe(Tt,n)}var kn=null,Au=!1,Hc=!1;function _0(t){kn===null?kn=[t]:kn.push(t)}function CC(t){Au=!0,_0(t)}function Sr(){if(!Hc&&kn!==null){Hc=!0;var t=0,e=ce;try{var n=kn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Au=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),zv(lf,Sr),i}finally{ce=e,Hc=!1}}return null}var xi=[],Di=0,bl=null,Fl=0,Ft=[],Ut=0,Hr=null,Nn=1,xn="";function xr(t,e){xi[Di++]=Fl,xi[Di++]=bl,bl=t,Fl=e}function y0(t,e,n){Ft[Ut++]=Nn,Ft[Ut++]=xn,Ft[Ut++]=Hr,Hr=t;var r=Nn;t=xn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-nn(e)+i|n<<i|r,xn=s+t}else Nn=1<<s|n<<i|r,xn=t}function _f(t){t.return!==null&&(xr(t,1),y0(t,1,0))}function yf(t){for(;t===bl;)bl=xi[--Di],xi[Di]=null,Fl=xi[--Di],xi[Di]=null;for(;t===Hr;)Hr=Ft[--Ut],Ft[Ut]=null,xn=Ft[--Ut],Ft[Ut]=null,Nn=Ft[--Ut],Ft[Ut]=null}var xt=null,Nt=null,Ie=!1,Jt=null;function v0(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Nt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Nn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Nt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Ie){var e=Nt;if(e){var n=e;if(!bg(t,e)){if(Kh(t))throw Error(L(418));e=sr(n.nextSibling);var r=xt;e&&bg(t,e)?v0(r,n):(t.flags=t.flags&-4097|2,Ie=!1,xt=t)}}else{if(Kh(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ie=!1,xt=t}}}function Fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Ka(t){if(t!==xt)return!1;if(!Ie)return Fg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=Nt)){if(Kh(t))throw E0(),Error(L(418));for(;e;)v0(t,e),e=sr(e.nextSibling)}if(Fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=xt?sr(t.stateNode.nextSibling):null;return!0}function E0(){for(var t=Nt;t;)t=sr(t.nextSibling)}function Qi(){Nt=xt=null,Ie=!1}function vf(t){Jt===null?Jt=[t]:Jt.push(t)}var AC=zn.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ug(t){var e=t._init;return e(t._payload)}function w0(t){function e(T,y){if(t){var C=T.deletions;C===null?(T.deletions=[y],T.flags|=16):C.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=ur(T,y),T.index=0,T.sibling=null,T}function s(T,y,C){return T.index=C,t?(C=T.alternate,C!==null?(C=C.index,C<y?(T.flags|=2,y):C):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,y,C,O){return y===null||y.tag!==6?(y=Zc(C,T.mode,O),y.return=T,y):(y=i(y,C),y.return=T,y)}function u(T,y,C,O){var F=C.type;return F===Ci?d(T,y,C.props.children,O,C.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kn&&Ug(F)===y.type)?(O=i(y,C.props),O.ref=Ws(T,y,C),O.return=T,O):(O=yl(C.type,C.key,C.props,null,T.mode,O),O.ref=Ws(T,y,C),O.return=T,O)}function c(T,y,C,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=eh(C,T.mode,O),y.return=T,y):(y=i(y,C.children||[]),y.return=T,y)}function d(T,y,C,O,F){return y===null||y.tag!==7?(y=zr(C,T.mode,O,F),y.return=T,y):(y=i(y,C),y.return=T,y)}function p(T,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zc(""+y,T.mode,C),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fa:return C=yl(y.type,y.key,y.props,null,T.mode,C),C.ref=Ws(T,null,y),C.return=T,C;case Si:return y=eh(y,T.mode,C),y.return=T,y;case Kn:var O=y._init;return p(T,O(y._payload),C)}if(Zs(y)||Us(y))return y=zr(y,T.mode,C,null),y.return=T,y;Qa(T,y)}return null}function m(T,y,C,O){var F=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return F!==null?null:l(T,y,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fa:return C.key===F?u(T,y,C,O):null;case Si:return C.key===F?c(T,y,C,O):null;case Kn:return F=C._init,m(T,y,F(C._payload),O)}if(Zs(C)||Us(C))return F!==null?null:d(T,y,C,O,null);Qa(T,C)}return null}function v(T,y,C,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(C)||null,l(y,T,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Fa:return T=T.get(O.key===null?C:O.key)||null,u(y,T,O,F);case Si:return T=T.get(O.key===null?C:O.key)||null,c(y,T,O,F);case Kn:var j=O._init;return v(T,y,C,j(O._payload),F)}if(Zs(O)||Us(O))return T=T.get(C)||null,d(y,T,O,F,null);Qa(y,O)}return null}function A(T,y,C,O){for(var F=null,j=null,w=y,_=y=0,E=null;w!==null&&_<C.length;_++){w.index>_?(E=w,w=null):E=w.sibling;var S=m(T,w,C[_],O);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(T,w),y=s(S,y,_),j===null?F=S:j.sibling=S,j=S,w=E}if(_===C.length)return n(T,w),Ie&&xr(T,_),F;if(w===null){for(;_<C.length;_++)w=p(T,C[_],O),w!==null&&(y=s(w,y,_),j===null?F=w:j.sibling=w,j=w);return Ie&&xr(T,_),F}for(w=r(T,w);_<C.length;_++)E=v(w,T,_,C[_],O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),y=s(E,y,_),j===null?F=E:j.sibling=E,j=E);return t&&w.forEach(function(R){return e(T,R)}),Ie&&xr(T,_),F}function P(T,y,C,O){var F=Us(C);if(typeof F!="function")throw Error(L(150));if(C=F.call(C),C==null)throw Error(L(151));for(var j=F=null,w=y,_=y=0,E=null,S=C.next();w!==null&&!S.done;_++,S=C.next()){w.index>_?(E=w,w=null):E=w.sibling;var R=m(T,w,S.value,O);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(T,w),y=s(R,y,_),j===null?F=R:j.sibling=R,j=R,w=E}if(S.done)return n(T,w),Ie&&xr(T,_),F;if(w===null){for(;!S.done;_++,S=C.next())S=p(T,S.value,O),S!==null&&(y=s(S,y,_),j===null?F=S:j.sibling=S,j=S);return Ie&&xr(T,_),F}for(w=r(T,w);!S.done;_++,S=C.next())S=v(w,T,_,S.value,O),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?_:S.key),y=s(S,y,_),j===null?F=S:j.sibling=S,j=S);return t&&w.forEach(function(N){return e(T,N)}),Ie&&xr(T,_),F}function x(T,y,C,O){if(typeof C=="object"&&C!==null&&C.type===Ci&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Fa:e:{for(var F=C.key,j=y;j!==null;){if(j.key===F){if(F=C.type,F===Ci){if(j.tag===7){n(T,j.sibling),y=i(j,C.props.children),y.return=T,T=y;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kn&&Ug(F)===j.type){n(T,j.sibling),y=i(j,C.props),y.ref=Ws(T,j,C),y.return=T,T=y;break e}n(T,j);break}else e(T,j);j=j.sibling}C.type===Ci?(y=zr(C.props.children,T.mode,O,C.key),y.return=T,T=y):(O=yl(C.type,C.key,C.props,null,T.mode,O),O.ref=Ws(T,y,C),O.return=T,T=O)}return o(T);case Si:e:{for(j=C.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(T,y.sibling),y=i(y,C.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=eh(C,T.mode,O),y.return=T,T=y}return o(T);case Kn:return j=C._init,x(T,y,j(C._payload),O)}if(Zs(C))return A(T,y,C,O);if(Us(C))return P(T,y,C,O);Qa(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,C),y.return=T,T=y):(n(T,y),y=Zc(C,T.mode,O),y.return=T,T=y),o(T)):n(T,y)}return x}var Yi=w0(!0),T0=w0(!1),Ul=Ir(null),jl=null,Oi=null,Ef=null;function wf(){Ef=Oi=jl=null}function Tf(t){var e=Ul.current;we(Ul),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){jl=t,Ef=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(jl===null)throw Error(L(308));Oi=t,jl.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var Lr=null;function If(t){Lr===null?Lr=[t]:Lr.push(t)}function I0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,If(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,If(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uf(t,n)}}function jg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(m=e,v=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){p=A.call(v,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,m=typeof A=="function"?A.call(v,p,m):A,m==null)break e;p=Re({},p,m);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=p}}function Bg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var oa={},mn=Ir(oa),bo=Ir(oa),Fo=Ir(oa);function br(t){if(t===oa)throw Error(L(174));return t}function Cf(t,e){switch(pe(Fo,e),pe(bo,t),pe(mn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}we(mn),pe(mn,e)}function Xi(){we(mn),we(bo),we(Fo)}function C0(t){br(Fo.current);var e=br(mn.current),n=Nh(e,t.type);e!==n&&(pe(bo,t),pe(mn,n))}function Af(t){bo.current===t&&(we(mn),we(bo))}var Ce=Ir(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function Rf(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var fl=zn.ReactCurrentDispatcher,Kc=zn.ReactCurrentBatchConfig,Gr=0,Ae=null,Ue=null,$e=null,$l=!1,fo=!1,Uo=0,RC=0;function rt(){throw Error(L(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function kf(t,e,n,r,i,s){if(Gr=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?xC:DC,t=n(r,i),fo){s=0;do{if(fo=!1,Uo=0,25<=s)throw Error(L(301));s+=1,$e=Ue=null,e.updateQueue=null,fl.current=OC,t=n(r,i)}while(fo)}if(fl.current=Wl,e=Ue!==null&&Ue.next!==null,Gr=0,$e=Ue=Ae=null,$l=!1,e)throw Error(L(300));return t}function Nf(){var t=Uo!==0;return Uo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Ht(){if(Ue===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=$e===null?Ae.memoizedState:$e.next;if(e!==null)$e=e,Ue=t;else{if(t===null)throw Error(L(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function jo(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Gr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ae.lanes|=d,Kr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,an(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A0(){}function R0(t,e){var n=Ae,r=Ht(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,xf(N0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Bo(9,k0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(L(349));Gr&30||P0(n,e,i)}return i}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,r){e.value=n,e.getSnapshot=r,x0(e)&&D0(t)}function N0(t,e,n){return n(function(){x0(e)&&D0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function D0(t){var e=bn(t,1);e!==null&&rn(e,t,1,-1)}function zg(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,Ae,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function O0(){return Ht().memoizedState}function pl(t,e,n,r){var i=cn();Ae.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Pf(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function $g(t,e){return pl(8390656,8,t,e)}function xf(t,e){return Ru(2048,8,t,e)}function M0(t,e){return Ru(4,2,t,e)}function V0(t,e){return Ru(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b0(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,L0.bind(null,e,t),n)}function Df(){}function F0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j0(t,e,n){return Gr&21?(an(n,e)||(n=qv(),Ae.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function PC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ce=n,Kc.transition=r}}function B0(){return Ht().memoizedState}function kC(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z0(t))$0(e,n);else if(n=I0(t,e,n,r),n!==null){var i=_t();rn(n,t,r,i),W0(n,e,r)}}function NC(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z0(t))$0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(i.next=i,If(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=I0(t,e,i,r),n!==null&&(i=_t(),rn(n,t,r,i),W0(n,e,r))}}function z0(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function $0(t,e){fo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uf(t,n)}}var Wl={readContext:qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},xC={readContext:qt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kC.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:zg,useDebugValue:Df,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=zg(!1),e=t[0];return t=PC.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=cn();if(Ie){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),qe===null)throw Error(L(349));Gr&30||P0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$g(N0.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,k0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=qe.identifierPrefix;if(Ie){var n=xn,r=Nn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DC={readContext:qt,useCallback:F0,useContext:qt,useEffect:xf,useImperativeHandle:b0,useInsertionEffect:M0,useLayoutEffect:V0,useMemo:U0,useReducer:Qc,useRef:O0,useState:function(){return Qc(jo)},useDebugValue:Df,useDeferredValue:function(t){var e=Ht();return j0(e,Ue.memoizedState,t)},useTransition:function(){var t=Qc(jo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:R0,useId:B0,unstable_isNewReconciler:!1},OC={readContext:qt,useCallback:F0,useContext:qt,useEffect:xf,useImperativeHandle:b0,useInsertionEffect:M0,useLayoutEffect:V0,useMemo:U0,useReducer:Yc,useRef:O0,useState:function(){return Yc(jo)},useDebugValue:Df,useDeferredValue:function(t){var e=Ht();return Ue===null?e.memoizedState=t:j0(e,Ue.memoizedState,t)},useTransition:function(){var t=Yc(jo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:R0,useId:B0,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=lr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(rn(e,t,i,r),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=lr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(rn(e,t,i,r),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=lr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(rn(e,t,r,n),dl(e,t,r))}};function Wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function q0(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=It(e)?qr:dt.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=It(e)?qr:dt.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pu.enqueueReplaceState(i,i.state,null),Bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=aS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hl||(Hl=!0,ud=r),Zh(t,e)},n}function G0(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function Gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var VC=zn.ReactCurrentOwner,wt=!1;function gt(t,e,n,r){e.child=t===null?T0(e,null,n,r):Yi(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=kf(t,e,n,r,s,i),n=Nf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ie&&n&&_f(e),e.flags|=1,gt(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K0(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function K0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return ed(t,e,n,r,i)}function Q0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Vi,Pt),Pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Vi,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Vi,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Vi,Pt),Pt|=r;return gt(t,e,i,n),e.child}function Y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=It(n)?qr:dt.current;return s=Ki(e,s),zi(e,i),n=kf(t,e,n,r,s,i),r=Nf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ie&&r&&_f(e),e.flags|=1,gt(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(It(n)){var s=!0;Ll(e)}else s=!1;if(zi(e,i),e.stateNode===null)ml(t,e),q0(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qt(c):(c=It(n)?qr:dt.current,c=Ki(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&qg(e,o,r,c),Qn=!1;var m=e.memoizedState;o.state=m,Bl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Tt.current||Qn?(typeof d=="function"&&(Xh(e,n,d,r),u=e.memoizedState),(l=Qn||Wg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,S0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Yt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=It(n)?qr:dt.current,u=Ki(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&qg(e,o,r,u),Qn=!1,m=e.memoizedState,o.state=m,Bl(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||Tt.current||Qn?(typeof v=="function"&&(Xh(e,n,v,r),A=e.memoizedState),(c=Qn||Wg(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){Y0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lg(e,n,!1),Fn(t,e,s);r=e.stateNode,VC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&Lg(e,n,!0),e.child}function X0(t){var e=t.stateNode;e.pendingContext?Vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vg(t,e.context,!1),Cf(t,e.containerInfo)}function Jg(t,e,n,r,i){return Qi(),vf(i),e.flags|=256,gt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function J0(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ce,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):Of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return LC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Of(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,r){return r!==null&&vf(r),Yi(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(L(422))),Ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return Ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Xc(s,r,void 0),Ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),rn(r,t,i,-1))}return Uf(),r=Xc(Error(L(421))),Ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=sr(i.nextSibling),xt=e,Ie=!0,Jt=null,t!==null&&(Ft[Ut++]=Nn,Ft[Ut++]=xn,Ft[Ut++]=Hr,Nn=t.id,xn=t.overflow,Hr=e),e=Of(e,r.children),e.flags|=4096,e)}function Zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function Jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Z0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,n,e);else if(t.tag===19)Zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bC(t,e,n){switch(e.tag){case 3:X0(e),Qi();break;case 5:C0(e);break;case 1:It(e.type)&&Ll(e);break;case 4:Cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?J0(t,e,n):(pe(Ce,Ce.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);pe(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Z0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Q0(t,e,n)}return Fn(t,e,n)}var eE,id,tE,nE;eE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};tE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(mn.current);var s=null;switch(n){case"input":i=Ah(t,i),r=Ah(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=kh(t,i),r=kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ml)}xh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nE=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FC(t,e,n){var r=e.pendingProps;switch(yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return It(e.type)&&Vl(),it(e),null;case 3:return r=e.stateNode,Xi(),we(Tt),we(dt),Rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(dd(Jt),Jt=null))),id(t,e),it(e),null;case 5:Af(e);var i=br(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)tE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return it(e),null}if(t=br(mn.current),Ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)_e(to[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":lg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":cg(r,s),_e("invalid",r)}xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),i=["children",""+l]):Ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ua(r),ug(r,s,!0);break;case"textarea":Ua(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Lo]=r,eE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)_e(to[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":lg(t,r),i=Ah(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":cg(t,r),i=kh(t,r),_e("invalid",t);break;default:i=r}xh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ov(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ro(t,u):typeof u=="number"&&Ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&nf(t,s,u,o))}switch(n){case"input":Ua(t),ug(t,r,!1);break;case"textarea":Ua(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)nE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=br(Fo.current),br(mn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return it(e),null;case 13:if(we(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Nt!==null&&e.mode&1&&!(e.flags&128))E0(),Qi(),e.flags|=98560,s=!1;else if(s=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[hn]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Jt!==null&&(dd(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?je===0&&(je=3):Uf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Xi(),id(t,e),t===null&&Mo(e.stateNode.containerInfo),it(e),null;case 10:return Tf(e.type._context),it(e),null;case 17:return It(e.type)&&Vl(),it(e),null;case 19:if(we(Ce),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Zi&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return it(e),null}else 2*De()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ce.current,pe(Ce,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Ff(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function UC(t,e){switch(yf(e),e.tag){case 1:return It(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),we(Tt),we(dt),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Af(e),null;case 13:if(we(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ce),null;case 4:return Xi(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var Xa=!1,at=!1,jC=typeof WeakSet=="function"?WeakSet:Set,W=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var e_=!1;function BC(t,e){if(zh=xl,t=a0(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},xl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,x=A.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Yt(e.type,P),x);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(O){Ne(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=e_,e_=!1,A}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rE(t){var e=t.alternate;e!==null&&(t.alternate=null,rE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Lo],delete e[Hh],delete e[IC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iE(t){return t.tag===5||t.tag===3||t.tag===4}function t_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Ge=null,Xt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)sE(t,e,n),n=n.sibling}function sE(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(wu,n)}catch{}switch(n.tag){case 5:at||Mi(n,e);case 6:var r=Ge,i=Xt;Ge=null,Gn(t,e,n),Ge=r,Xt=i,Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),xo(t)):qc(Ge,n.stateNode));break;case 4:r=Ge,i=Xt,Ge=n.stateNode.containerInfo,Xt=!0,Gn(t,e,n),Ge=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!at&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Gn(t,e,n),at=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function n_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jC),e.forEach(function(r){var i=YC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Xt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ge===null)throw Error(L(160));sE(s,o,i),Ge=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oE(e,t),e=e.sibling}function oE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),un(t),r&4){try{po(3,t,t.return),ku(3,t)}catch(P){Ne(t,t.return,P)}try{po(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:Qt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Qt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Ro(i,"")}catch(P){Ne(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pv(i,s),Dh(l,o);var c=Dh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Ov(i,p):d==="dangerouslySetInnerHTML"?xv(i,p):d==="children"?Ro(i,p):nf(i,d,p,c)}switch(l){case"input":Rh(i,s);break;case"textarea":kv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Fi(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(P){Ne(t,t.return,P)}}break;case 6:if(Qt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ne(t,t.return,P)}}break;case 3:if(Qt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:Qt(e,t),un(t);break;case 13:Qt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lf=De())),r&4&&n_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||d,Qt(e,t),at=c):Qt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,v=m.child,m.tag){case 0:case 11:case 14:case 15:po(4,m,m.return);break;case 1:Mi(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Ne(r,n,P)}}break;case 5:Mi(m,m.return);break;case 22:if(m.memoizedState!==null){i_(p);continue}}v!==null?(v.return=m,W=v):i_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dv("display",o))}catch(P){Ne(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qt(e,t),un(t),r&4&&n_(t);break;case 21:break;default:Qt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iE(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var s=t_(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=t_(t);ad(t,l,o);break;default:throw Error(L(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zC(t,e,n){W=t,aE(t)}function aE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=Xa;var c=at;if(Xa=o,(at=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?s_(i):u!==null?(u.return=o,W=u):s_(i);for(;s!==null;)W=s,aE(s),s=s.sibling;W=i,Xa=l,at=c}r_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):r_(t)}}function r_(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}at||e.flags&512&&od(e)}catch(m){Ne(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function i_(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function s_(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{od(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{od(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var $C=Math.ceil,ql=zn.ReactCurrentDispatcher,Mf=zn.ReactCurrentOwner,$t=zn.ReactCurrentBatchConfig,oe=0,qe=null,Ve=null,Xe=0,Pt=0,Vi=Ir(0),je=0,zo=null,Kr=0,Nu=0,Vf=0,mo=null,Et=null,Lf=0,Zi=1/0,Pn=null,Hl=!1,ud=null,ar=null,Ja=!1,Zn=null,Gl=0,go=0,cd=null,gl=-1,_l=0;function _t(){return oe&6?De():gl!==-1?gl:gl=De()}function lr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:AC.transition!==null?(_l===0&&(_l=qv()),_l):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Jv(t.type)),t):1}function rn(t,e,n,r){if(50<go)throw go=0,cd=null,Error(L(185));ra(t,n,r),(!(oe&2)||t!==qe)&&(t===qe&&(!(oe&2)&&(Nu|=n),je===4&&Xn(t,Xe)),St(t,r),n===1&&oe===0&&!(e.mode&1)&&(Zi=De()+500,Au&&Sr()))}function St(t,e){var n=t.callbackNode;AS(t,e);var r=Nl(t,t===qe?Xe:0);if(r===0)n!==null&&pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pg(n),e===1)t.tag===0?CC(o_.bind(null,t)):_0(o_.bind(null,t)),wC(function(){!(oe&6)&&Sr()}),n=null;else{switch(Hv(r)){case 1:n=lf;break;case 4:n=$v;break;case 16:n=kl;break;case 536870912:n=Wv;break;default:n=kl}n=mE(n,lE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lE(t,e){if(gl=-1,_l=0,oe&6)throw Error(L(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=Nl(t,t===qe?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var i=oe;oe|=2;var s=cE();(qe!==t||Xe!==e)&&(Pn=null,Zi=De()+500,Br(t,e));do try{HC();break}catch(l){uE(t,l)}while(!0);wf(),ql.current=s,oe=i,Ve!==null?e=0:(qe=null,Xe=0,e=je)}if(e!==0){if(e===2&&(i=bh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=zo,Br(t,0),Xn(t,r),St(t,De()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WC(i)&&(e=Kl(t,r),e===2&&(s=bh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=zo,Br(t,0),Xn(t,r),St(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Dr(t,Et,Pn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=Lf+500-De(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(Dr.bind(null,t,Et,Pn),e);break}Dr(t,Et,Pn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$C(r/1960))-r,10<r){t.timeoutHandle=qh(Dr.bind(null,t,Et,Pn),r);break}Dr(t,Et,Pn);break;case 5:Dr(t,Et,Pn);break;default:throw Error(L(329))}}}return St(t,De()),t.callbackNode===n?lE.bind(null,t):null}function hd(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=Et,Et=n,e!==null&&dd(e)),t}function dd(t){Et===null?Et=t:Et.push.apply(Et,t)}function WC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Vf,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function o_(t){if(oe&6)throw Error(L(327));$i();var e=Nl(t,0);if(!(e&1))return St(t,De()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=zo,Br(t,0),Xn(t,e),St(t,De()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,Et,Pn),St(t,De()),null}function bf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Zi=De()+500,Au&&Sr())}}function Qr(t){Zn!==null&&Zn.tag===0&&!(oe&6)&&$i();var e=oe;oe|=1;var n=$t.transition,r=ce;try{if($t.transition=null,ce=1,t)return t()}finally{ce=r,$t.transition=n,oe=e,!(oe&6)&&Sr()}}function Ff(){Pt=Vi.current,we(Vi)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EC(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(yf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:Xi(),we(Tt),we(dt),Rf();break;case 5:Af(r);break;case 4:Xi();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Tf(r.type._context);break;case 22:case 23:Ff()}n=n.return}if(qe=t,Ve=t=ur(t.current,null),Xe=Pt=e,je=0,zo=null,Vf=Nu=Kr=0,Et=mo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function uE(t,e){do{var n=Ve;try{if(wf(),fl.current=Wl,$l){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$l=!1}if(Gr=0,$e=Ue=Ae=null,fo=!1,Uo=0,Mf.current=null,n===null||n.return===null){je=1,zo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Gg(o);if(v!==null){v.flags&=-257,Kg(v,o,l,s,e),v.mode&1&&Hg(s,c,e),e=v,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){Hg(s,c,e),Uf();break e}u=Error(L(426))}}else if(Ie&&l.mode&1){var x=Gg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Kg(x,o,l,s,e),vf(Ji(u,l));break e}}s=u=Ji(u,l),je!==4&&(je=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=H0(s,u,e);jg(s,T);break e;case 1:l=u;var y=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ar===null||!ar.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=G0(s,l,e);jg(s,O);break e}}s=s.return}while(s!==null)}dE(n)}catch(F){e=F,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function cE(){var t=ql.current;return ql.current=Wl,t===null?Wl:t}function Uf(){(je===0||je===3||je===2)&&(je=4),qe===null||!(Kr&268435455)&&!(Nu&268435455)||Xn(qe,Xe)}function Kl(t,e){var n=oe;oe|=2;var r=cE();(qe!==t||Xe!==e)&&(Pn=null,Br(t,e));do try{qC();break}catch(i){uE(t,i)}while(!0);if(wf(),oe=n,ql.current=r,Ve!==null)throw Error(L(261));return qe=null,Xe=0,je}function qC(){for(;Ve!==null;)hE(Ve)}function HC(){for(;Ve!==null&&!_S();)hE(Ve)}function hE(t){var e=pE(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?dE(t):Ve=e,Mf.current=null}function dE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UC(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Ve=null;return}}else if(n=FC(n,e,Pt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);je===0&&(je=5)}function Dr(t,e,n){var r=ce,i=$t.transition;try{$t.transition=null,ce=1,GC(t,e,n,r)}finally{$t.transition=i,ce=r}return null}function GC(t,e,n,r){do $i();while(Zn!==null);if(oe&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RS(t,s),t===qe&&(Ve=qe=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,mE(kl,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ce;ce=1;var l=oe;oe|=4,Mf.current=null,BC(t,n),oE(n,t),fC($h),xl=!!zh,$h=zh=null,t.current=n,zC(n),yS(),oe=l,ce=o,$t.transition=s}else t.current=n;if(Ja&&(Ja=!1,Zn=t,Gl=i),s=t.pendingLanes,s===0&&(ar=null),wS(n.stateNode),St(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,t=ud,ud=null,t;return Gl&1&&t.tag!==0&&$i(),s=t.pendingLanes,s&1?t===cd?go++:(go=0,cd=t):go=0,Sr(),null}function $i(){if(Zn!==null){var t=Hv(Gl),e=$t.transition,n=ce;try{if($t.transition=null,ce=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,Gl=0,oe&6)throw Error(L(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:po(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,v=d.return;if(rE(d),d===c){W=null;break}if(m!==null){m.return=v,W=m;break}W=v}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ku(9,l)}}catch(F){Ne(l,l.return,F)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(oe=i,Sr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(wu,t)}catch{}r=!0}return r}finally{ce=n,$t.transition=e}}return!1}function a_(t,e,n){e=Ji(n,e),e=H0(t,e,1),t=or(t,e,1),e=_t(),t!==null&&(ra(t,1,e),St(t,e))}function Ne(t,e,n){if(t.tag===3)a_(t,t,n);else for(;e!==null;){if(e.tag===3){a_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Ji(n,t),t=G0(e,t,1),e=or(e,t,1),t=_t(),e!==null&&(ra(e,1,t),St(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>De()-Lf?Br(t,0):Vf|=n),St(t,e)}function fE(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=_t();t=bn(t,e),t!==null&&(ra(t,e,n),St(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fE(t,n)}function YC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),fE(t,n)}var pE;pE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,bC(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ie&&e.flags&1048576&&y0(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ml(t,e),t=e.pendingProps;var i=Ki(e,dt.current);zi(e,n),i=kf(null,e,r,t,i,n);var s=Nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sf(e),i.updater=Pu,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&_f(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JC(r),t=Yt(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,Yt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Xg(t,e,r,i,n);case 3:e:{if(X0(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,S0(t,e),Bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(L(423)),e),e=Jg(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(L(424)),e),e=Jg(t,e,r,n,i);break e}else for(Nt=sr(e.stateNode.containerInfo.firstChild),xt=e,Ie=!0,Jt=null,n=T0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=Fn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return C0(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wh(r,i)?o=null:s!==null&&Wh(r,s)&&(e.flags|=32),Y0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return J0(t,e,n);case 4:return Cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Qg(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Ul,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!Tt.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Yh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=qt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Yg(t,e,r,i,n);case 15:return K0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ml(t,e),e.tag=1,It(r)?(t=!0,Ll(e)):t=!1,zi(e,n),q0(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return Z0(t,e,n);case 22:return Q0(t,e,n)}throw Error(L(156,e.tag))};function mE(t,e){return zv(t,e)}function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new XC(t,e,n,r)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===of)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return zr(n.children,i,s,e);case rf:o=8,i|=8;break;case Th:return t=Bt(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Ih:return t=Bt(13,n,e,i),t.elementType=Ih,t.lanes=s,t;case Sh:return t=Bt(19,n,e,i),t.elementType=Sh,t.lanes=s,t;case Cv:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iv:o=10;break e;case Sv:o=9;break e;case sf:o=11;break e;case of:o=14;break e;case Kn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,r,i,s,o,l,u){return t=new ZC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(s),t}function eA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gE(t){if(!t)return _r;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(It(n))return g0(t,n,e)}return e}function _E(t,e,n,r,i,s,o,l,u){return t=Bf(n,r,!0,t,i,s,o,l,u),t.context=gE(null),n=t.current,r=_t(),i=lr(n),s=On(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,ra(t,i,r),St(t,r),t}function Du(t,e,n,r){var i=e.current,s=_t(),o=lr(i);return n=gE(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(rn(t,i,o,s),dl(t,i,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){l_(t,e),(t=t.alternate)&&l_(t,e)}function tA(){return null}var yE=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}Ou.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Du(t,e,null,null)};Ou.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Du(null,t,null,null)}),e[Ln]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Xv(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u_(){}function nA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ql(o);s.call(c)}}var o=_E(e,r,t,0,null,!1,!1,"",u_);return t._reactRootContainer=o,t[Ln]=o.current,Mo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ql(u);l.call(c)}}var u=Bf(t,0,!1,null,null,!1,!1,"",u_);return t._reactRootContainer=u,t[Ln]=u.current,Mo(t.nodeType===8?t.parentNode:t),Qr(function(){Du(e,u,n,r)}),u}function Vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ql(o);l.call(u)}}Du(e,o,t,i)}else o=nA(n,e,t,i,r);return Ql(o)}Gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(uf(e,n|1),St(e,De()),!(oe&6)&&(Zi=De()+500,Sr()))}break;case 13:Qr(function(){var r=bn(t,1);if(r!==null){var i=_t();rn(r,t,1,i)}}),zf(t,1)}};cf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=_t();rn(e,t,134217728,n)}zf(t,134217728)}};Kv=function(t){if(t.tag===13){var e=lr(t),n=bn(t,e);if(n!==null){var r=_t();rn(n,t,e,r)}zf(t,e)}};Qv=function(){return ce};Yv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Mh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cu(r);if(!i)throw Error(L(90));Rv(r),Rh(r,i)}}}break;case"textarea":kv(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};Lv=bf;bv=Qr;var rA={usingClientEntryPoint:!1,Events:[sa,ki,Cu,Mv,Vv,bf]},Hs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iA={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jv(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{wu=Za.inject(iA),pn=Za}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(L(200));return eA(t,e,null,n)};Vt.createRoot=function(t,e){if(!Wf(t))throw Error(L(299));var n=!1,r="",i=yE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Mo(t.nodeType===8?t.parentNode:t),new $f(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=jv(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Qr(t)};Vt.hydrate=function(t,e,n){if(!Mu(e))throw Error(L(200));return Vu(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=yE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_E(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ou(e)};Vt.render=function(t,e,n){if(!Mu(e))throw Error(L(200));return Vu(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(L(40));return t._reactRootContainer?(Qr(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Vt.unstable_batchedUpdates=bf;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mu(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Vu(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function vE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vE)}catch(t){console.error(t)}}vE(),vv.exports=Vt;var sA=vv.exports,c_=sA;Eh.createRoot=c_.createRoot,Eh.hydrateRoot=c_.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const h_="popstate";function oA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return fd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yl(i)}return lA(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function EE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aA(){return Math.random().toString(36).substr(2,8)}function d_(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ps(e):e,{state:n,key:e&&e.key||r||aA()})}function Yl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=er.Pop,u=null,c=d();c==null&&(c=0,o.replaceState($o({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=er.Pop;let x=d(),T=x==null?null:x-c;c=x,u&&u({action:l,location:P.location,delta:T})}function m(x,T){l=er.Push;let y=fd(P.location,x,T);c=d()+1;let C=d_(y,c),O=P.createHref(y);try{o.pushState(C,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function v(x,T){l=er.Replace;let y=fd(P.location,x,T);c=d();let C=d_(y,c),O=P.createHref(y);o.replaceState(C,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function A(x){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:Yl(x);return y=y.replace(/ $/,"%20"),be(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let P={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(h_,p),u=x,()=>{i.removeEventListener(h_,p),u=null}},createHref(x){return e(i,x)},createURL:A,encodeLocation(x){let T=A(x);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:v,go(x){return o.go(x)}};return P}var f_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f_||(f_={}));function uA(t,e,n){return n===void 0&&(n="/"),cA(t,e,n,!1)}function cA(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=qf(i.pathname||"/",n);if(s==null)return null;let o=wE(t);hA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=TA(s);l=EA(o[u],c,r)}return l}function wE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=cr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of TE(s.path))i(s,o,u)}),e}function TE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function hA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dA=/^:[\w-]+$/,fA=3,pA=2,mA=1,gA=10,_A=-2,p_=t=>t==="*";function yA(t,e){let n=t.split("/"),r=n.length;return n.some(p_)&&(r+=_A),e&&(r+=pA),n.filter(i=>!p_(i)).reduce((i,s)=>i+(dA.test(s)?fA:s===""?mA:gA),r)}function vA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function EA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=m_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=m_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:cr([s,p.pathname]),pathnameBase:AA(cr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=cr([s,p.pathnameBase]))}return o}function m_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[p];return v&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),EE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return EE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function IA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t;return{pathname:n?n.startsWith("/")?n:SA(n,e):e,search:RA(r),hash:PA(i)}}function SA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function IE(t,e){let n=CA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function SE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ps(t):(i=$o({},t),be(!i.pathname||!i.pathname.includes("?"),th("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),th("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),th("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=IA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),AA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const CE=["post","put","patch","delete"];new Set(CE);const NA=["get",...CE];new Set(NA);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wo.apply(this,arguments)}const Hf=z.createContext(null),xA=z.createContext(null),li=z.createContext(null),Lu=z.createContext(null),ui=z.createContext({outlet:null,matches:[],isDataRoute:!1}),AE=z.createContext(null);function DA(t,e){let{relative:n}=e===void 0?{}:e;aa()||be(!1);let{basename:r,navigator:i}=z.useContext(li),{hash:s,pathname:o,search:l}=PE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:cr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function aa(){return z.useContext(Lu)!=null}function bu(){return aa()||be(!1),z.useContext(Lu).location}function RE(t){z.useContext(li).static||z.useLayoutEffect(t)}function OA(){let{isDataRoute:t}=z.useContext(ui);return t?HA():MA()}function MA(){aa()||be(!1);let t=z.useContext(Hf),{basename:e,future:n,navigator:r}=z.useContext(li),{matches:i}=z.useContext(ui),{pathname:s}=bu(),o=JSON.stringify(IE(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return RE(()=>{l.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=SE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:cr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function PE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(li),{matches:i}=z.useContext(ui),{pathname:s}=bu(),o=JSON.stringify(IE(i,r.v7_relativeSplatPath));return z.useMemo(()=>SE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VA(t,e){return LA(t,e)}function LA(t,e,n,r){aa()||be(!1);let{navigator:i}=z.useContext(li),{matches:s}=z.useContext(ui),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=bu(),d;if(e){var p;let x=typeof e=="string"?ps(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||be(!1),d=x}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=uA(t,{pathname:v}),P=BA(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:cr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:cr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&P?z.createElement(Lu.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:er.Pop}},P):P}function bA(){let t=qA(),e=kA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const FA=z.createElement(bA,null);class UA extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(ui.Provider,{value:this.props.routeContext},z.createElement(AE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jA(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(Hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(ui.Provider,{value:e},r)}function BA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:v}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,A=!1,P=null,x=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||FA,u&&(c<0&&m===0?(A=!0,x=null):c===m&&(A=!0,x=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),y=()=>{let C;return v?C=P:A?C=x:p.route.Component?C=z.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=d,z.createElement(jA,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:C})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement(UA,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var kE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kE||{}),Xl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Xl||{});function zA(t){let e=z.useContext(Hf);return e||be(!1),e}function $A(t){let e=z.useContext(xA);return e||be(!1),e}function WA(t){let e=z.useContext(ui);return e||be(!1),e}function NE(t){let e=WA(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function qA(){var t;let e=z.useContext(AE),n=$A(Xl.UseRouteError),r=NE(Xl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function HA(){let{router:t}=zA(kE.UseNavigateStable),e=NE(Xl.UseNavigateStable),n=z.useRef(!1);return RE(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Wo({fromRouteId:e},s)))},[t,e])}function vl(t){be(!1)}function GA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1,future:l}=t;aa()&&be(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Wo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ps(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:A="default"}=r,P=z.useMemo(()=>{let x=qf(d,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:v,key:A},navigationType:i}},[u,d,p,m,v,A,i]);return P==null?null:z.createElement(li.Provider,{value:c},z.createElement(Lu.Provider,{children:n,value:P}))}function KA(t){let{children:e,location:n}=t;return VA(pd(e),n)}new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,pd(r.props.children,s));return}r.type!==vl&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}function QA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XA(t,e){return t.button===0&&(!e||e==="_self")&&!YA(t)}const JA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ZA="6";try{window.__reactRouterVersion=ZA}catch{}const eR="startTransition",g_=K1[eR];function tR(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=oA({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=z.useCallback(p=>{c&&g_?g_(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.createElement(GA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const nR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jl=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=QA(e,JA),{basename:v}=z.useContext(li),A,P=!1;if(typeof c=="string"&&rR.test(c)&&(A=c,nR))try{let C=new URL(window.location.href),O=c.startsWith("//")?new URL(C.protocol+c):new URL(c),F=qf(O.pathname,v);O.origin===C.origin&&F!=null?c=F+O.search+O.hash:P=!0}catch{}let x=DA(c,{relative:i}),T=iR(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function y(C){r&&r(C),C.defaultPrevented||T(C)}return z.createElement("a",md({},m,{href:A||x,onClick:P||s?r:y,ref:n,target:u}))});var __;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(__||(__={}));var y_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));function iR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=OA(),c=bu(),d=PE(t,{relative:o});return z.useCallback(p=>{if(XA(p,n)){p.preventDefault();let m=r!==void 0?r:Yl(c)===Yl(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const Fu=z.createContext();var v_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ms(e)},ms=function(t){return new Error("Firebase Database ("+xE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new oR;const m=s<<2|l>>4;if(r.push(m),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OE=function(t){const e=DE(t);return Gf.encodeByteArray(e,!0)},Zl=function(t){return OE(t).replace(/\./g,"")},gd=function(t){try{return Gf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){return ME(void 0,t)}function ME(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lR(n)||(t[n]=ME(t[n],e[n]));return t}function lR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof v_>"u")return;const t=v_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gd(t[1]);return e&&JSON.parse(e)},Kf=()=>{try{return cR()||hR()||dR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fR=t=>{var e,n;return(n=(e=Kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pR=t=>{const e=fR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},VE=()=>{var t;return(t=Kf())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(LE())}function gR(){var t;const e=(t=Kf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _R(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){return xE.NODE_ADMIN===!0}function vR(){return!gR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UE(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ER(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="FirebaseError";class Cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wR,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uu.prototype.create)}}class Uu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cr(i,l,r)}}function TR(t,e){return t.replace(IR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=qo(gd(s[0])||""),n=qo(gd(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},SR=function(t){const e=BE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CR=function(t){const e=BE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function es(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function E_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(w_(s)&&w_(o)){if(!tu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):p<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[p]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ju=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=1e3,xR=2,DR=4*60*60*1e3,OR=.5;function T_(t,e=NR,n=xR){const r=e*Math.pow(n,t),i=Math.round(OR*r*(Math.random()-.5)*2);return Math.min(DR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LR(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VR(t){return t===Or?void 0:t}function LR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const FR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},UR=re.INFO,jR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},BR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bu{constructor(e){this.name=e,this._logLevel=UR,this._logHandler=BR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const zR=(t,e)=>e.some(n=>t instanceof n);let I_,S_;function $R(){return I_||(I_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WR(){return S_||(S_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zE=new WeakMap,_d=new WeakMap,$E=new WeakMap,nh=new WeakMap,Yf=new WeakMap;function qR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zE.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function HR(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GR(t){yd=t(yd)}function KR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return $E.set(r,e.sort?e.sort():[e]),hr(r)}:WR().includes(t)?function(...e){return t.apply(rh(this),e),hr(zE.get(this))}:function(...e){return hr(t.apply(rh(this),e))}}function QR(t){return typeof t=="function"?KR(t):(t instanceof IDBTransaction&&HR(t),zR(t,$R())?new Proxy(t,yd):t)}function hr(t){if(t instanceof IDBRequest)return qR(t);if(nh.has(t))return nh.get(t);const e=QR(t);return e!==t&&(nh.set(t,e),Yf.set(e,t)),e}const rh=t=>Yf.get(t);function WE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const YR=["get","getKey","getAll","getAllKeys","count"],XR=["put","add","delete","clear"],ih=new Map;function C_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ih.set(e,s),s}GR(t=>({...t,get:(e,n,r)=>C_(e,n)||t.get(e,n,r),has:(e,n)=>!!C_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",A_="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Bu("@firebase/app"),eP="@firebase/app-compat",tP="@firebase/analytics-compat",nP="@firebase/analytics",rP="@firebase/app-check-compat",iP="@firebase/app-check",sP="@firebase/auth",oP="@firebase/auth-compat",aP="@firebase/database",lP="@firebase/database-compat",uP="@firebase/functions",cP="@firebase/functions-compat",hP="@firebase/installations",dP="@firebase/installations-compat",fP="@firebase/messaging",pP="@firebase/messaging-compat",mP="@firebase/performance",gP="@firebase/performance-compat",_P="@firebase/remote-config",yP="@firebase/remote-config-compat",vP="@firebase/storage",EP="@firebase/storage-compat",wP="@firebase/firestore",TP="@firebase/vertexai-preview",IP="@firebase/firestore-compat",SP="firebase",CP="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",AP={[vd]:"fire-core",[eP]:"fire-core-compat",[nP]:"fire-analytics",[tP]:"fire-analytics-compat",[iP]:"fire-app-check",[rP]:"fire-app-check-compat",[sP]:"fire-auth",[oP]:"fire-auth-compat",[aP]:"fire-rtdb",[lP]:"fire-rtdb-compat",[uP]:"fire-fn",[cP]:"fire-fn-compat",[hP]:"fire-iid",[dP]:"fire-iid-compat",[fP]:"fire-fcm",[pP]:"fire-fcm-compat",[mP]:"fire-perf",[gP]:"fire-perf-compat",[_P]:"fire-rc",[yP]:"fire-rc-compat",[vP]:"fire-gcs",[EP]:"fire-gcs-compat",[wP]:"fire-fst",[IP]:"fire-fst-compat",[TP]:"fire-vertex","fire-js":"fire-js",[SP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Map,RP=new Map,wd=new Map;function R_(t,e){try{t.container.addComponent(e)}catch(n){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(wd.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of nu.values())R_(n,t);for(const n of RP.values())R_(n,t);return!0}function la(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Uu("app","Firebase",PP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=CP;function HE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=VE()),!n)throw dr.create("no-options");const s=nu.get(i);if(s){if(tu(n,s.options)&&tu(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new bR(i);for(const u of wd.values())o.addComponent(u);const l=new kP(n,r,o);return nu.set(i,l),l}function GE(t=Ed){const e=nu.get(t);if(!e&&t===Ed&&VE())return HE();if(!e)throw dr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let i=(r=AP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(l.join(" "));return}Un(new vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="firebase-heartbeat-database",xP=1,Ho="firebase-heartbeat-store";let sh=null;function KE(){return sh||(sh=WE(NP,xP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),sh}async function DP(t){try{const n=(await KE()).transaction(Ho),r=await n.objectStore(Ho).get(QE(t));return await n.done,r}catch(e){if(e instanceof Cr)Yr.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(n.message)}}}async function P_(t,e){try{const r=(await KE()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,QE(t)),await r.done}catch(n){if(n instanceof Cr)Yr.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yr.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=1024,MP=30*24*60*60*1e3;class VP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=k_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=MP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=k_(),{heartbeatsToSend:r,unsentEntries:i}=LP(this._heartbeatsCache.heartbeats),s=Zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function k_(){return new Date().toISOString().substring(0,10)}function LP(t,e=OP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UE()?jE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N_(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){Un(new vn("platform-logger",e=>new JR(e),"PRIVATE")),Un(new vn("heartbeat",e=>new VP(e),"PRIVATE")),Wt(vd,A_,t),Wt(vd,A_,"esm2017"),Wt("fire-js","")}FP("");var x_={};const D_="@firebase/database",O_="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YE="";function UP(t){YE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jP(e)}}catch{}return new BP},Fr=XE("localStorage"),zP=XE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Bu("@firebase/database"),$P=function(){let t=1;return function(){return t++}}(),JE=function(t){const e=kR(t),n=new RR;n.update(e);const r=n.digest();return Gf.encodeByteArray(r)},ua=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ua.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let _o=null,M_=!0;const WP=function(t,e){B(!e,"Can't turn on custom loggers persistently."),Wi.logLevel=re.VERBOSE,_o=Wi.log.bind(Wi)},lt=function(...t){if(M_===!0&&(M_=!1,_o===null&&zP.get("logging_enabled")===!0&&WP()),_o){const e=ua.apply(null,t);_o(e)}},ca=function(t){return function(...e){lt(t,...e)}},Td=function(...t){const e="FIREBASE INTERNAL ERROR: "+ua(...t);Wi.error(e)},Xr=function(...t){const e=`FIREBASE FATAL ERROR: ${ua(...t)}`;throw Wi.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+ua(...t);Wi.warn(e)},qP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ZE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},HP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ts="[MIN_NAME]",Jr="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===ts||e===Jr)return-1;if(e===ts||t===Jr)return 1;{const n=V_(t),r=V_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GP=function(t,e){return t===e?0:t<e?-1:1},Gs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},Xf=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Qe(e[r]),n+=":",n+=Xf(t[e[r]]);return n+="}",n},ew=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tw=function(t){B(!ZE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},KP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},YP=new RegExp("^-?(0*)\\d{1,10}$"),XP=-2147483648,JP=2147483647,V_=function(t){if(YP.test(t)){const e=Number(t);if(e>=XP&&e<=JP)return e}return null},ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="5",nw="v",rw="s",iw="r",sw="f",ow=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aw="ls",lw="p",Id="ac",uw="websocket",cw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hw(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===uw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===cw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rk(t)&&(n.ns=t.namespace);const i=[];return Gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.counters_={}}incrementCounter(e,n=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={},ah={};function Zf(t){const e=t.toString();return oh[e]||(oh[e]=new ik),oh[e]}function sk(t,e){const n=t.toString();return ah[n]||(ah[n]=e()),ah[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ha(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="start",ak="close",lk="pLPCommand",uk="pRTLPCB",dw="id",fw="pw",pw="ser",ck="cb",hk="seg",dk="ts",fk="d",pk="dframe",mw=1870,gw=30,mk=mw-gw,gk=25e3,_k=3e4;class Li{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ca(e),this.stats_=Zf(n),this.urlFn=u=>(this.appCheckToken&&(u[Id]=this.appCheckToken),hw(n,cw,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ok(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_k)),HP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ep((...s)=>{const[o,l,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===L_)this.id=l,this.password=u;else if(o===ak)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[L_]="t",r[pw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ck]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nw]=Jf,this.transportSessionId&&(r[rw]=this.transportSessionId),this.lastSessionId&&(r[aw]=this.lastSessionId),this.applicationId&&(r[lw]=this.applicationId),this.appCheckToken&&(r[Id]=this.appCheckToken),typeof location<"u"&&location.hostname&&ow.test(location.hostname)&&(r[iw]=sw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KP()&&!QP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OE(n),i=ew(r,mk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pk]="t",r[dw]=e,r[fw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ep{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$P(),window[lk+this.uniqueCallbackIdentifier]=e,window[uk+this.uniqueCallbackIdentifier]=n,this.myIFrame=ep.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){lt("frame writing exception"),l.stack&&lt(l.stack),lt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dw]=this.myID,e[fw]=this.myPW,e[pw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gw+r.length<=mw;){const o=this.pendingSegs.shift();r=r+"&"+hk+i+"="+o.seg+"&"+dk+i+"="+o.ts+"&"+fk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(gk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=16384,vk=45e3;let ru=null;typeof MozWebSocket<"u"?ru=MozWebSocket:typeof WebSocket<"u"&&(ru=WebSocket);class Zt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ca(this.connId),this.stats_=Zf(n),this.connURL=Zt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[nw]=Jf,typeof location<"u"&&location.hostname&&ow.test(location.hostname)&&(o[iw]=sw),n&&(o[rw]=n),r&&(o[aw]=r),i&&(o[Id]=i),s&&(o[lw]=s),hw(e,uw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fr.set("previous_websocket_failure",!0);try{let r;FE(),this.mySock=new ru(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ru!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Fr.isInMemoryStorage||Fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ew(n,yk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Go.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Go.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=6e4,wk=5e3,Tk=10*1024,Ik=100*1024,lh="t",b_="d",Sk="s",F_="r",Ck="e",U_="o",j_="a",B_="n",z_="p",Ak="h";class Rk{constructor(e,n,r,i,s,o,l,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ca("c:"+this.id+":"),this.transportManager_=new Go(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ik?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Tk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lh in e){const n=e[lh];n===j_?this.upgradeIfSecondaryHealthy_():n===F_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===U_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Gs("t",e),r=Gs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:j_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:B_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Gs("t",e),r=Gs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Gs(lh,e);if(b_ in e){const r=e[b_];if(n===Ak){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===B_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Sk?this.onConnectionShutdown_(r):n===F_?this.onReset_(r):n===Ck?Td("Server Error: "+r):n===U_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Td("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jf!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ek))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends yw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bE()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new iu}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=32,W_=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new Te("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function vw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ew(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ww(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return zt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tw(t,e){if(yr(t)!==yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function en(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yr(t)>yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ew(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ju(this.parts_[r]);Iw(this)}}function Nk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ju(e),Iw(t)}function xk(t){const e=t.parts_.pop();t.byteLength_-=ju(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iw(t){if(t.byteLength_>W_)throw new Error(t.errorPrefix_+"has a key path longer than "+W_+" bytes ("+t.byteLength_+").");if(t.parts_.length>$_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$_+") or object contains a cycle "+Mr(t))}function Mr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends yw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new tp}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=1e3,Dk=60*5*1e3,q_=30*1e3,Ok=1.3,Mk=3e4,Vk="server_kill",H_=3;class Mn extends _w{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Mn.nextPersistentConnectionId_++,this.log_=ca("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ks,this.maxReconnectDelay_=Dk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!FE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&iu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Qe(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Qf,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,c=l.s;Mn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$n(e,"w")){const r=es(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=q_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Td("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mk&&(this.reconnectDelay_=Ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ok)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(p){B(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new Rk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Dt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vk)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Dt(p),u())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],E_(this.interruptReasons_)&&(this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=H_&&(this.reconnectDelay_=q_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=H_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+YE.replace(/\./g,"-")]=1,bE()?e["framework.cordova"]=1:yR()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=iu.getInstance().currentlyOnline();return E_(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(ts,e),i=new se(ts,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class Sw extends zu{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Jr,el)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,el)}toString(){return".key"}}const qi=new Sw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kt=class no{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??no.RED,this.left=i??dn.EMPTY_NODE,this.right=s??dn.EMPTY_NODE}copy(e,n,r,i,s){return new no(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return dn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,no.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,no.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kt.RED=!0;kt.BLACK=!1;class Lk{copy(e,n,r,i,s){return this}insert(e,n,r){return new kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let dn=class El{constructor(e,n=El.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new El(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new El(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}};dn.EMPTY_NODE=new Lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t,e){return gs(t.name,e.name)}function np(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;function Fk(t){Sd=t}const Cw=function(t){return typeof t=="number"?"number:"+tw(t):"string:"+t},Aw=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else B(t===Sd||t.isEmpty(),"priority of unexpected type.");B(t===Sd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Aw(this.priorityNode_)}static set __childrenNodeConstructor(e){G_=e}static get __childrenNodeConstructor(){return G_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ie(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tw(this.value_):e+=this.value_,this.lazyHash_=JE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rw,Pw;function Uk(t){Rw=t}function jk(t){Pw=t}class Bk extends zu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Jr,new Be("[PRIORITY-POST]",Pw))}makePost(e,n){const r=Rw(e);return new se(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const ht=new Bk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=Math.log(2);class $k{constructor(e){const n=s=>parseInt(Math.log(s)/zk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const su=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let p,m;if(d===0)return null;if(d===1)return p=t[u],m=n?n(p):p,new kt(m,p.node,kt.BLACK,null,null);{const v=parseInt(d/2,10)+u,A=i(u,v),P=i(v+1,c);return p=t[v],m=n?n(p):p,new kt(m,p.node,kt.BLACK,A,P)}},s=function(u){let c=null,d=null,p=t.length;const m=function(A,P){const x=p-A,T=p;p-=A;const y=i(x+1,T),C=t[x],O=n?n(C):C;v(new kt(O,C.node,P,null,y))},v=function(A){c?(c.left=A,c=A):(d=A,c=A)};for(let A=0;A<u.count;++A){const P=u.nextBitIsOne(),x=Math.pow(2,u.count-(A+1));P?m(x,kt.BLACK):(m(x,kt.BLACK),m(x,kt.RED))}return d},o=new $k(t.length),l=s(o);return new dn(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;const Ei={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Ei&&ht,"ChildrenNode.ts has not been loaded"),uh=uh||new Dn({".priority":Ei},{".priority":ht}),uh}get(e){const n=es(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dn?n:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,n){B(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=su(r,e.getCompare()):l=Ei;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=l,new Dn(d,c)}addToIndexes(e,n){const r=eu(this.indexes_,(i,s)=>{const o=es(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Ei)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),su(l,o.getCompare())}else return Ei;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new se(e.name,l))),u.insert(e,e.node)}});return new Dn(r,this.indexSet_)}removeFromIndexes(e,n){const r=eu(this.indexes_,i=>{if(i===Ei)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new Dn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class ue{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Aw(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qs||(Qs=new ue(new dn(np),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qs:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qs:this.priorityNode_;return new ue(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{B(ie(e)!==".priority"||yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ht,(o,l)=>{n[o]=l.val(e),r++,s&&ue.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cw(this.getPriority().val())+":"),this.forEachChild(ht,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":JE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===da?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ue(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ht),i=n.getIterator(ht);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wk extends ue{constructor(){super(new dn(np),ue.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}}const da=new Wk;Object.defineProperties(se,{MIN:{value:new se(ts,ue.EMPTY_NODE)},MAX:{value:new se(Jr,da)}});Sw.__EMPTY_NODE=ue.EMPTY_NODE;Be.__childrenNodeConstructor=ue;Fk(da);jk(da);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=!0;function ut(t,e=null){if(t===null)return ue.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,ut(e))}if(!(t instanceof Array)&&qk){const n=[];let r=!1;if(Gt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=ut(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return ue.EMPTY_NODE;const s=su(n,bk,o=>o.name,np);if(r){const o=su(n,ht.getCompare());return new ue(s,ut(e),new Dn({".priority":o},{".priority":ht}))}else return new ue(s,ut(e),Dn.Default)}else{let n=ue.EMPTY_NODE;return Gt(t,(r,i)=>{if($n(t,r)&&r.substring(0,1)!=="."){const s=ut(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ut(e))}}Uk(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk extends zu{constructor(e){super(),this.indexPath_=e,B(!te(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gs(e.name,n.name):s}makePost(e,n){const r=ut(e),i=ue.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,da);return new se(Jr,e)}toString(){return Ew(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk extends zu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=ut(e);return new se(n,r)}toString(){return".value"}}const Kk=new Gk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){return{type:"value",snapshotNode:t}}function Yk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function K_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Jk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ts}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new rp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Q_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ht?n="$priority":t.index_===Kk?n="$value":t.index_===qi?n="$key":(B(t.index_ instanceof Hk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Y_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends _w{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ca("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ou.getListenId_(e,r),l={};this.listens_[o]=l;const u=Q_(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),es(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=ou.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Q_(e._queryParams),r=e._path.toString(),i=new Qf;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+AR(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=qo(l.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return{value:null,children:new Map}}function kw(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,au());const i=t.children.get(r);e=ve(e),kw(i,e,n)}}function Cd(t,e,n){t.value!==null?n(e,t.value):eN(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);Cd(i,s,n)})}function eN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=10*1e3,nN=30*1e3,rN=5*60*1e3;class iN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tN(e);const r=X_+(nN-X_)*Math.random();yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Gt(e,(i,s)=>{s>0&&$n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*rN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function Nw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=Nw()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new lu(he(),n,this.revert)}}else return B(ie(this.path)===e,"operationForChild called for unrelated child."),new lu(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return te(this.path)?new Zr(this.source,he(),this.snap.getImmediateChild(e)):new Zr(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Zr(this.source,he(),n.value):new Ko(this.source,he(),n)}else return B(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ko(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function sN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Jk(o.childName,o.snapshotNode))}),Ys(t,i,"child_removed",e,r,n),Ys(t,i,"child_added",e,r,n),Ys(t,i,"child_moved",s,r,n),Ys(t,i,"child_changed",e,r,n),Ys(t,i,"value",e,r,n),i}function Ys(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>aN(t,l,u)),o.forEach(l=>{const u=oN(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function oN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aN(t,e,n){if(e.childName==null||n.childName==null)throw ms("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e){return{eventCache:t,serverCache:e}}function vo(t,e,n,r){return Ow(new ip(e,n,r),t.serverCache)}function Mw(t,e,n,r){return Ow(t.eventCache,new ip(e,n,r))}function Ad(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;const lN=()=>(ch||(ch=new dn(GP)),ch);class ye{constructor(e,n=lN()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return Gt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(te(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:We(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new ye(null)}}set(e,n){if(te(e))return new ye(n,this.children);{const r=ie(e),s=(this.children.get(r)||new ye(null)).set(ve(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(te(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(te(e))return n;{const r=ie(e),s=(this.children.get(r)||new ye(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(te(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(te(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),We(n,i),r):new ye(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new ye(null))}}function Eo(t,e,n){if(te(e))return new sn(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zt(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function J_(t,e,n){let r=t;return Gt(n,(i,s)=>{r=Eo(r,We(e,i),s)}),r}function Z_(t,e){if(te(e))return sn.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new sn(n)}}function Rd(t,e){return ci(t,e)!=null}function ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function ey(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ht,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function fr(t,e){if(te(e))return t;{const n=ci(t,e);return n!=null?new sn(new ye(n)):new sn(t.writeTree_.subtree(e))}}function Pd(t){return t.writeTree_.isEmpty()}function ns(t,e){return Vw(he(),t.writeTree_,e)}function Vw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Vw(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e){return Bw(e,t)}function uN(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Eo(t.visibleWrites,e,n)),t.lastWriteId=r}function cN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dN(l,r.path)?i=!1:en(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return fN(t),!0;if(r.snap)t.visibleWrites=Z_(t.visibleWrites,r.path);else{const l=r.children;Gt(l,u=>{t.visibleWrites=Z_(t.visibleWrites,We(r.path,u))})}return!0}else return!1}function dN(t,e){if(t.snap)return en(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&en(We(t.path,n),e))return!0;return!1}function fN(t){t.visibleWrites=bw(t.allWrites,pN,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pN(t){return t.visible}function bw(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)en(n,o)?(l=zt(n,o),r=Eo(r,l,s.snap)):en(o,n)&&(l=zt(o,n),r=Eo(r,he(),s.snap.getChild(l)));else if(s.children){if(en(n,o))l=zt(n,o),r=J_(r,l,s.children);else if(en(o,n))if(l=zt(o,n),te(l))r=J_(r,he(),s.children);else{const u=es(s.children,ie(l));if(u){const c=u.getChild(ve(l));r=Eo(r,he(),c)}}}else throw ms("WriteRecord should have .snap or .children")}}return r}function Fw(t,e,n,r,i){if(!r&&!i){const s=ci(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(Pd(o))return n;if(n==null&&!Rd(o,he()))return null;{const l=n||ue.EMPTY_NODE;return ns(o,l)}}}else{const s=fr(t.visibleWrites,e);if(!i&&Pd(s))return n;if(!i&&n==null&&!Rd(s,he()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(en(c.path,e)||en(e,c.path))},l=bw(t.allWrites,o,e),u=n||ue.EMPTY_NODE;return ns(l,u)}}}function mN(t,e,n){let r=ue.EMPTY_NODE;const i=ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(ht,(o,l)=>{const u=ns(fr(s,new Te(o)),l);r=r.updateImmediateChild(o,u)}),ey(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return ey(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gN(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(Rd(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return Pd(o)?i.getChild(n):ns(o,i.getChild(n))}}function _N(t,e,n,r){const i=We(e,n),s=ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return ns(o,r.getNode().getImmediateChild(n))}else return null}function yN(t,e){return ci(t.visibleWrites,e)}function vN(t,e,n,r,i,s,o){let l;const u=fr(t.visibleWrites,e),c=ci(u,he());if(c!=null)l=c;else if(n!=null)l=ns(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),m=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=m.getNext();for(;v&&d.length<i;)p(v,r)!==0&&d.push(v),v=m.getNext();return d}else return[]}function EN(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function kd(t,e,n,r){return Fw(t.writeTree,t.treePath,e,n,r)}function Uw(t,e){return mN(t.writeTree,t.treePath,e)}function ty(t,e,n,r){return gN(t.writeTree,t.treePath,e,n,r)}function uu(t,e){return yN(t.writeTree,We(t.treePath,e))}function wN(t,e,n,r,i,s){return vN(t.writeTree,t.treePath,e,n,r,i,s)}function sp(t,e,n){return _N(t.writeTree,t.treePath,e,n)}function jw(t,e){return Bw(We(t.treePath,e),t.writeTree)}function Bw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,K_(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xk(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yk(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,K_(r,e.snapshotNode,i.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const zw=new IN;class op{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ip(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ei(this.viewCache_),s=wN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function SN(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CN(t,e,n,r,i){const s=new TN;let o,l;if(n.type===fn.OVERWRITE){const c=n;c.source.fromUser?o=Nd(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=cu(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===fn.MERGE){const c=n;c.source.fromUser?o=RN(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=xd(t,e,c.path,c.children,r,i,l,s))}else if(n.type===fn.ACK_USER_WRITE){const c=n;c.revert?o=NN(t,e,c.path,r,i,s):o=PN(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===fn.LISTEN_COMPLETE)o=kN(t,e,n.path,r,s);else throw ms("Unknown operation type: "+n.type);const u=s.getChanges();return AN(e,o,u),{viewCache:o,changes:u}}function AN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ad(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Qk(Ad(e)))}}function $w(t,e,n,r,i,s){const o=e.eventCache;if(uu(r,n)!=null)return e;{let l,u;if(te(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ei(e),d=c instanceof ue?c:ue.EMPTY_NODE,p=Uw(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=kd(r,ei(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ie(n);if(c===".priority"){B(yr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const p=ty(r,n,d,u);p!=null?l=t.filter.updatePriority(d,p):l=o.getNode()}else{const d=ve(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=ty(r,n,o.getNode(),u);m!=null?p=o.getNode().getImmediateChild(c).updateChild(d,m):p=o.getNode().getImmediateChild(c)}else p=sp(r,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,d,i,s):l=o.getNode()}}return vo(e,l,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function cu(t,e,n,r,i,s,o,l){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=ie(n);if(!u.isCompleteForPath(n)&&yr(n)>1)return e;const A=ve(n),x=u.getNode().getImmediateChild(v).updateChild(A,r);v===".priority"?c=d.updatePriority(u.getNode(),x):c=d.updateChild(u.getNode(),v,x,A,zw,null)}const p=Mw(e,c,u.isFullyInitialized()||te(n),d.filtersNodes()),m=new op(i,p,s);return $w(t,p,n,i,m,l)}function Nd(t,e,n,r,i,s,o){const l=e.eventCache;let u,c;const d=new op(i,e,s);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=vo(e,c,!0,t.filter.filtersNodes());else{const p=ie(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=vo(e,c,l.isFullyInitialized(),l.isFiltered());else{const m=ve(n),v=l.getNode().getImmediateChild(p);let A;if(te(m))A=r;else{const P=d.getCompleteChild(p);P!=null?vw(m)===".priority"&&P.getChild(ww(m)).isEmpty()?A=P:A=P.updateChild(m,r):A=ue.EMPTY_NODE}if(v.equals(A))u=e;else{const P=t.filter.updateChild(l.getNode(),p,A,m,d,o);u=vo(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function ny(t,e){return t.eventCache.isCompleteForChild(e)}function RN(t,e,n,r,i,s,o){let l=e;return r.foreach((u,c)=>{const d=We(n,u);ny(e,ie(d))&&(l=Nd(t,l,d,c,i,s,o))}),r.foreach((u,c)=>{const d=We(n,u);ny(e,ie(d))||(l=Nd(t,l,d,c,i,s,o))}),l}function ry(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xd(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;te(n)?c=r:c=new ye(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,m)=>{if(d.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),A=ry(t,v,m);u=cu(t,u,new Te(p),A,i,s,o,l)}}),c.children.inorderTraversal((p,m)=>{const v=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!d.hasChild(p)&&!v){const A=e.serverCache.getNode().getImmediateChild(p),P=ry(t,A,m);u=cu(t,u,new Te(p),P,i,s,o,l)}}),u}function PN(t,e,n,r,i,s,o){if(uu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(te(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return cu(t,e,n,u.getNode().getChild(n),i,s,l,o);if(te(n)){let c=new ye(null);return u.getNode().forEachChild(qi,(d,p)=>{c=c.set(new Te(d),p)}),xd(t,e,n,c,i,s,l,o)}else return e}else{let c=new ye(null);return r.foreach((d,p)=>{const m=We(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),xd(t,e,n,c,i,s,l,o)}}function kN(t,e,n,r,i){const s=e.serverCache,o=Mw(e,s.getNode(),s.isFullyInitialized()||te(n),s.isFiltered());return $w(t,o,n,r,zw,i)}function NN(t,e,n,r,i,s){let o;if(uu(r,n)!=null)return e;{const l=new op(r,e,i),u=e.eventCache.getNode();let c;if(te(n)||ie(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=kd(r,ei(e));else{const p=e.serverCache.getNode();B(p instanceof ue,"serverChildren would be complete if leaf node"),d=Uw(r,p)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ie(n);let p=sp(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?c=t.filter.updateChild(u,d,p,ve(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,ue.EMPTY_NODE,ve(n),l,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kd(r,ei(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||uu(r,he())!=null,vo(e,c,o,t.filter.filtersNodes())}}function xN(t,e){const n=ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function iy(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&(B(ei(t.viewCache_),"We should always have a full cache before handling merges"),B(Ad(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=CN(t.processor_,i,e,n,r);return SN(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,DN(t,s.changes,s.viewCache.eventCache.getNode())}function DN(t,e,n,r){const i=t.eventRegistrations_;return sN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy;function ON(t){B(!sy,"__referenceConstructor has already been defined"),sy=t}function ap(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),iy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(iy(o,e,n,r));return s}}function lp(t,e){let n=null;for(const r of t.views.values())n=n||xN(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oy;function MN(t){B(!oy,"__referenceConstructor has already been defined"),oy=t}class ay{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=EN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function VN(t,e,n,r,i){return uN(t.pendingWriteTree_,e,n,r,i),i?Wu(t,new Zr(Nw(),e,n)):[]}function bi(t,e,n=!1){const r=cN(t.pendingWriteTree_,e);if(hN(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(he(),!0):Gt(r.children,o=>{s=s.set(new Te(o),!0)}),Wu(t,new lu(r.path,s,n))}else return[]}function $u(t,e,n){return Wu(t,new Zr(xw(),e,n))}function LN(t,e,n){const r=ye.fromObject(n);return Wu(t,new Ko(xw(),e,r))}function bN(t,e,n,r){const i=Gw(t,r);if(i!=null){const s=Kw(i),o=s.path,l=s.queryId,u=zt(o,e),c=new Zr(Dw(l),u,n);return Qw(t,o,c)}else return[]}function FN(t,e,n,r){const i=Gw(t,r);if(i){const s=Kw(i),o=s.path,l=s.queryId,u=zt(o,e),c=ye.fromObject(n),d=new Ko(Dw(l),u,c);return Qw(t,o,d)}else return[]}function Ww(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=zt(o,e),c=lp(l,u);if(c)return c});return Fw(i,e,s,n,!0)}function Wu(t,e){return qw(e,t.syncPointTree_,null,Lw(t.pendingWriteTree_,he()))}function qw(t,e,n,r){if(te(t.path))return Hw(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=lp(i,he()));let s=[];const o=ie(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,d=jw(r,o);s=s.concat(qw(l,u,c,d))}return i&&(s=s.concat(ap(i,t,r,n))),s}}function Hw(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=lp(i,he()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=jw(r,o),d=t.operationForChild(o);d&&(s=s.concat(Hw(d,l,u,c)))}),i&&(s=s.concat(ap(i,t,r,n))),s}function Gw(t,e){return t.tagToQueryMap.get(e)}function Kw(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Qw(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Lw(t.pendingWriteTree_,e);return ap(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new up(n)}node(){return this.node_}}class cp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new cp(this.syncTree_,n)}node(){return Ww(this.syncTree_,this.path_)}}const UN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ly=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BN(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},BN=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},zN=function(t,e,n,r){return hp(e,new cp(n,t),r)},$N=function(t,e,n){return hp(t,new up(e),n)};function hp(t,e,n){const r=t.getPriority().val(),i=ly(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ly(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Be(l,ut(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(ht,(l,u)=>{const c=hp(u,e.getImmediateChild(l),n);c!==u&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fp(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=ie(n);for(;i!==null;){const s=es(r.node.children,i)||{children:{},childCount:0};r=new dp(i,r,s),n=ve(n),i=ie(n)}return r}function _s(t){return t.node.value}function Yw(t,e){t.node.value=e,Dd(t)}function Xw(t){return t.node.childCount>0}function WN(t){return _s(t)===void 0&&!Xw(t)}function qu(t,e){Gt(t.node.children,(n,r)=>{e(new dp(n,t,r))})}function Jw(t,e,n,r){n&&!r&&e(t),qu(t,i=>{Jw(i,e,!0,r)}),n&&r&&e(t)}function qN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fa(t){return new Te(t.parent===null?t.name:fa(t.parent)+"/"+t.name)}function Dd(t){t.parent!==null&&HN(t.parent,t.name,t)}function HN(t,e,n){const r=WN(n),i=$n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Dd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=/[\[\].#$\/\u0000-\u001F\u007F]/,KN=/[\[\].#$\u0000-\u001F\u007F]/,hh=10*1024*1024,Zw=function(t){return typeof t=="string"&&t.length!==0&&!GN.test(t)},QN=function(t){return typeof t=="string"&&t.length!==0&&!KN.test(t)},YN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QN(t)},eT=function(t,e,n){const r=n instanceof Te?new kk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mr(r)+" with contents = "+e.toString());if(ZE(e))throw new Error(t+"contains "+e.toString()+" "+Mr(r));if(typeof e=="string"&&e.length>hh/3&&ju(e)>hh)throw new Error(t+"contains a string greater than "+hh+" utf8 bytes "+Mr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Gt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nk(r,o),eT(t,l,r),xk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Mr(r)+" in addition to actual children.")}},XN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YN(n))throw new Error(PR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZN(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Tw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function hi(t,e,n){ZN(t,n),ex(t,r=>en(r,e)||en(e,r))}function ex(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_o&&lt("event: "+n.toString()),ha(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="repo_interrupt",rx=25;class ix{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=au(),this.transactionQueueTree_=new dp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sx(t,e,n){if(t.stats_=Zf(t.repoInfo_),t.forceRestClient_||ZP())t.server_=new ou(t.repoInfo_,(r,i,s,o)=>{uy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,i,s,o)=>{uy(t,r,i,s,o)},r=>{cy(t,r)},r=>{ax(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=sk(t.repoInfo_,()=>new iN(t.stats_,t.server_)),t.infoData_=new Zk,t.infoSyncTree_=new ay({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=$u(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),pp(t,"connected",!1),t.serverSyncTree_=new ay({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const c=o(l,u);hi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ox(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tT(t){return UN({timestamp:ox(t)})}function uy(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=eu(n,c=>ut(c));o=FN(t.serverSyncTree_,s,u,i)}else{const u=ut(n);o=bN(t.serverSyncTree_,s,u,i)}else if(r){const u=eu(n,c=>ut(c));o=LN(t.serverSyncTree_,s,u)}else{const u=ut(n);o=$u(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=gp(t,s)),hi(t.eventQueue_,l,o)}function cy(t,e){pp(t,"connected",e),e===!1&&ux(t)}function ax(t,e){Gt(e,(n,r)=>{pp(t,n,r)})}function pp(t,e,n){const r=new Te("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(r,i);const s=$u(t.infoSyncTree_,r,i);hi(t.eventQueue_,r,s)}function lx(t){return t.nextWriteId_++}function ux(t){nT(t,"onDisconnectEvents");const e=tT(t),n=au();Cd(t.onDisconnect_,he(),(i,s)=>{const o=zN(i,s,t.serverSyncTree_,e);kw(n,i,o)});let r=[];Cd(n,he(),(i,s)=>{r=r.concat($u(t.serverSyncTree_,i,s));const o=fx(t,i);gp(t,o)}),t.onDisconnect_=au(),hi(t.eventQueue_,he(),r)}function cx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nx)}function nT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function rT(t,e,n){return Ww(t.serverSyncTree_,e,n)||ue.EMPTY_NODE}function mp(t,e=t.transactionQueueTree_){if(e||Hu(t,e),_s(e)){const n=sT(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hx(t,fa(e),n)}else Xw(e)&&qu(e,n=>{mp(t,n)})}function hx(t,e,n){const r=n.map(c=>c.currentWriteId),i=rT(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=zt(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,c=>{nT(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(bi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Hu(t,fp(t.transactionQueueTree_,e)),mp(t,t.transactionQueueTree_),hi(t.eventQueue_,e,d);for(let m=0;m<p.length;m++)ha(p[m])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Dt("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}gp(t,e)}},o)}function gp(t,e){const n=iT(t,e),r=fa(n),i=sT(t,n);return dx(t,i,r),r}function dx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=zt(n,u.path);let d=!1,p;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,i=i.concat(bi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=rx)d=!0,p="maxretry",i=i.concat(bi(t.serverSyncTree_,u.currentWriteId,!0));else{const m=rT(t,u.path,o);u.currentInputSnapshot=m;const v=e[l].update(m.val());if(v!==void 0){eT("transaction failed: Data returned ",v,u.path);let A=ut(v);typeof v=="object"&&v!=null&&$n(v,".priority")||(A=A.updatePriority(m.getPriority()));const x=u.currentWriteId,T=tT(t),y=$N(A,m,T);u.currentOutputSnapshotRaw=A,u.currentOutputSnapshotResolved=y,u.currentWriteId=lx(t),o.splice(o.indexOf(x),1),i=i.concat(VN(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(bi(t.serverSyncTree_,x,!0))}else d=!0,p="nodata",i=i.concat(bi(t.serverSyncTree_,u.currentWriteId,!0))}hi(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}Hu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ha(r[l]);mp(t,t.transactionQueueTree_)}function iT(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&_s(r)===void 0;)r=fp(r,n),e=ve(e),n=ie(e);return r}function sT(t,e){const n=[];return oT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function oT(t,e,n){const r=_s(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);qu(e,i=>{oT(t,i,n)})}function Hu(t,e){const n=_s(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yw(e,n.length>0?n:void 0)}qu(e,r=>{Hu(t,r)})}function fx(t,e){const n=fa(iT(t,e)),r=fp(t.transactionQueueTree_,e);return qN(r,i=>{dh(t,i)}),dh(t,r),Jw(r,i=>{dh(t,i)}),n}function dh(t,e){const n=_s(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yw(e,void 0):n.length=s+1,hi(t.eventQueue_,fa(e),i);for(let o=0;o<r.length;o++)ha(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const hy=function(t,e){const n=gx(t),r=n.namespace;n.domain==="firebase.com"&&Xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nk(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},gx=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=px(t.substring(d,p)));const m=mx(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),n=e.substring(A+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return te(this._path)?null:vw(this._path)}get ref(){return new ys(this._repo,this._path)}get _queryIdentifier(){const e=Y_(this._queryParams),n=Xf(e);return n==="{}"?"default":n}get _queryObject(){return Y_(this._queryParams)}isEqual(e){if(e=yn(e),!(e instanceof _p))return!1;const n=this._repo===e._repo,r=Tw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pk(this._path)}}class ys extends _p{constructor(e,n){super(e,n,new rp,!1)}get parent(){const e=ww(this._path);return e===null?null:new ys(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ON(ys);MN(ys);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="FIREBASE_DATABASE_EMULATOR_HOST",Od={};let yx=!1;function vx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hy(s,i),l=o.repoInfo,u;typeof process<"u"&&x_&&(u=x_[_x]),u?(s=`http://${u}?ns=${l.namespace}`,o=hy(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new tk(t.name,t.options,e);XN("Invalid Firebase Database URL",o),te(o.path)||Xr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=wx(l,t,c,new ek(t.name,n));return new Tx(d,t)}function Ex(t,e){const n=Od[e];(!n||n[t.key]!==t)&&Xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cx(t),delete n[t.key]}function wx(t,e,n,r){let i=Od[e.name];i||(i={},Od[e.name]=i);let s=i[t.toURLString()];return s&&Xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ix(t,yx,n,r),i[t.toURLString()]=s,s}class Tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ys(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ex(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){UP(qE),Un(new vn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return vx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Wt(D_,O_,t),Wt(D_,O_,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ix();function Sx(){const t=z.useContext(Fu),{allProducts:e,deleteProduct:n,editProducthandle:r,Serach:i,setsaerch:s}=t,o=e.filter(l=>l.title.toLowerCase().includes(i));return b.jsx("div",{children:b.jsx("div",{className:" flex justify-center items-center h-screen",children:b.jsx("div",{className:" container mx-auto max-w-7xl",children:b.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-xl",children:[b.jsxs("div",{className:" bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2",children:[b.jsx("input",{value:i,onChange:l=>s(l.target.value),type:"text",className:"w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300",placeholder:"Search here"}),b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx("img",{className:"w-9",src:"/img/react.png",alt:""}),b.jsx("h1",{className:"text-white text-2xl font-semibold",children:"React Firebase CRUD "})]}),b.jsx(Jl,{to:"/addproduct",children:b.jsx("button",{className:" bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white",children:"Add Product"})})]}),b.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400 ",children:[b.jsx("thead",{className:"text-xs text-gray-100 uppercase bg-[#353b48] ",children:b.jsxs("tr",{children:[b.jsx("th",{scope:"col",className:"px-6 py-3",children:"S.No."}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Product Image"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Product name"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Price"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Category"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Date"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"}),b.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),o.length>0?o.map((l,u)=>{const{title:c,price:d,imageUrl:p,category:m,date:v}=l;return b.jsx("tbody",{children:b.jsxs("tr",{className:"bg-gray-700 border-b text-white ",children:[b.jsxs("td",{className:"px-6 py-4",children:[u+1,"."]}),b.jsx("td",{className:"px-6 py-4 w-16",children:b.jsx("img",{className:"w-16",src:p,alt:""})}),b.jsx("td",{className:"px-6 py-4",children:c}),b.jsxs("td",{className:"px-6 py-4",children:["₹",d]}),b.jsx("td",{className:"px-6 py-4",children:m}),b.jsxs("td",{className:"px-6 py-4",children:["1",v]}),b.jsx("td",{className:"px-6 py-4",children:b.jsx("a",{onClick:()=>n(l),className:"font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  ",children:"Del"})}),b.jsx("td",{className:"px-6 py-4",children:b.jsx(Jl,{to:"/updateproduct",onClick:()=>r(l),className:`font-medium bg-green-300 px-4 rounded-lg py-1 text-black\r
                cursor-pointer`,children:"Edit"})})]})},u)}):b.jsx("h1",{className:" font-bold text-black relative left-[260%]",children:"Product Not Found"})]})]})})})})}function Cx(){return b.jsx("div",{children:b.jsx(Sx,{})})}function Ax(){const t=z.useContext(Fu),{products:e,setProducts:n,addProduct:r}=t;return b.jsx("div",{children:b.jsx("div",{className:" flex justify-center items-center h-screen",children:b.jsxs("div",{className:" bg-gray-800 px-8 py-8 rounded-xl w-80 lg:w-96",children:[b.jsxs("div",{className:"flex space-x-2 items-center mb-4",children:[b.jsx(Jl,{to:"/",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-white",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),b.jsx("h1",{className:"text-center text-white text-xl  font-bold",children:"Add Product"})]}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.title,onChange:i=>n({...e,title:i.target.value}),name:"title",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Title"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.price,onChange:i=>n({...e,price:i.target.value}),name:"price",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Price"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.imageUrl,onChange:i=>n({...e,imageUrl:i.target.value}),name:"imageUrl",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Image url"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.category,onChange:i=>n({...e,category:i.target.value}),name:"category",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Category"})}),b.jsx("div",{className:" flex justify-center mb-3",children:b.jsx("button",{onClick:r,className:" bg-blue-500 w-full text-white font-bold  px-2 py-2 rounded-lg",children:"Add product"})})]})})})}function Rx(){const t=z.useContext(Fu),{products:e,setProducts:n,editProducts:r}=t;return b.jsx("div",{children:b.jsx("div",{children:b.jsx("div",{className:" flex justify-center items-center h-screen",children:b.jsxs("div",{className:" bg-gray-800 px-8 py-8 rounded-xl w-80 lg:w-96 ",children:[b.jsxs("div",{className:"flex space-x-2 items-center mb-4",children:[b.jsx(Jl,{to:"/",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-white",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),b.jsx("h1",{className:"text-center text-white text-xl  font-bold",children:"Update Product"})]}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.title,onChange:i=>n({...e,title:i.target.value}),name:"title",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Title"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.price,onChange:i=>n({...e,price:i.target.value}),name:"price",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Price"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.imageUrl,onChange:i=>n({...e,imageUrl:i.target.value}),name:"imageUrl",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Image url"})}),b.jsx("div",{children:b.jsx("input",{type:"text",value:e.category,onChange:i=>n({...e,category:i.target.value}),name:"category",className:" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none",placeholder:"Product Category"})}),b.jsx("div",{className:" flex justify-center mb-3",children:b.jsx("button",{onClick:r,className:" bg-orange-500 w-full text-white font-bold  px-2 py-2 rounded-lg",children:"Update Product"})})]})})})})}var dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,aT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.D=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(S,R,N){for(var I=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)I[bt-2]=arguments[bt];return _.prototype[R].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);var S=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)S[R]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(R=0;16>R;++R)S[R]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],R=w.g[2];var N=w.g[3],I=_+(N^E&(R^N))+S[0]+3614090360&4294967295;_=E+(I<<7&4294967295|I>>>25),I=N+(R^_&(E^R))+S[1]+3905402710&4294967295,N=_+(I<<12&4294967295|I>>>20),I=R+(E^N&(_^E))+S[2]+606105819&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(_^R&(N^_))+S[3]+3250441966&4294967295,E=R+(I<<22&4294967295|I>>>10),I=_+(N^E&(R^N))+S[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=N+(R^_&(E^R))+S[5]+1200080426&4294967295,N=_+(I<<12&4294967295|I>>>20),I=R+(E^N&(_^E))+S[6]+2821735955&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(_^R&(N^_))+S[7]+4249261313&4294967295,E=R+(I<<22&4294967295|I>>>10),I=_+(N^E&(R^N))+S[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=N+(R^_&(E^R))+S[9]+2336552879&4294967295,N=_+(I<<12&4294967295|I>>>20),I=R+(E^N&(_^E))+S[10]+4294925233&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(_^R&(N^_))+S[11]+2304563134&4294967295,E=R+(I<<22&4294967295|I>>>10),I=_+(N^E&(R^N))+S[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=N+(R^_&(E^R))+S[13]+4254626195&4294967295,N=_+(I<<12&4294967295|I>>>20),I=R+(E^N&(_^E))+S[14]+2792965006&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(_^R&(N^_))+S[15]+1236535329&4294967295,E=R+(I<<22&4294967295|I>>>10),I=_+(R^N&(E^R))+S[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(_^E))+S[6]+3225465664&4294967295,N=_+(I<<9&4294967295|I>>>23),I=R+(_^E&(N^_))+S[11]+643717713&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^_&(R^N))+S[0]+3921069994&4294967295,E=R+(I<<20&4294967295|I>>>12),I=_+(R^N&(E^R))+S[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(_^E))+S[10]+38016083&4294967295,N=_+(I<<9&4294967295|I>>>23),I=R+(_^E&(N^_))+S[15]+3634488961&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^_&(R^N))+S[4]+3889429448&4294967295,E=R+(I<<20&4294967295|I>>>12),I=_+(R^N&(E^R))+S[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(_^E))+S[14]+3275163606&4294967295,N=_+(I<<9&4294967295|I>>>23),I=R+(_^E&(N^_))+S[3]+4107603335&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^_&(R^N))+S[8]+1163531501&4294967295,E=R+(I<<20&4294967295|I>>>12),I=_+(R^N&(E^R))+S[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(_^E))+S[2]+4243563512&4294967295,N=_+(I<<9&4294967295|I>>>23),I=R+(_^E&(N^_))+S[7]+1735328473&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^_&(R^N))+S[12]+2368359562&4294967295,E=R+(I<<20&4294967295|I>>>12),I=_+(E^R^N)+S[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=N+(_^E^R)+S[8]+2272392833&4294967295,N=_+(I<<11&4294967295|I>>>21),I=R+(N^_^E)+S[11]+1839030562&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^_)+S[14]+4259657740&4294967295,E=R+(I<<23&4294967295|I>>>9),I=_+(E^R^N)+S[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=N+(_^E^R)+S[4]+1272893353&4294967295,N=_+(I<<11&4294967295|I>>>21),I=R+(N^_^E)+S[7]+4139469664&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^_)+S[10]+3200236656&4294967295,E=R+(I<<23&4294967295|I>>>9),I=_+(E^R^N)+S[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=N+(_^E^R)+S[0]+3936430074&4294967295,N=_+(I<<11&4294967295|I>>>21),I=R+(N^_^E)+S[3]+3572445317&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^_)+S[6]+76029189&4294967295,E=R+(I<<23&4294967295|I>>>9),I=_+(E^R^N)+S[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=N+(_^E^R)+S[12]+3873151461&4294967295,N=_+(I<<11&4294967295|I>>>21),I=R+(N^_^E)+S[15]+530742520&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^_)+S[2]+3299628645&4294967295,E=R+(I<<23&4294967295|I>>>9),I=_+(R^(E|~N))+S[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=N+(E^(_|~R))+S[7]+1126891415&4294967295,N=_+(I<<10&4294967295|I>>>22),I=R+(_^(N|~E))+S[14]+2878612391&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~_))+S[5]+4237533241&4294967295,E=R+(I<<21&4294967295|I>>>11),I=_+(R^(E|~N))+S[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=N+(E^(_|~R))+S[3]+2399980690&4294967295,N=_+(I<<10&4294967295|I>>>22),I=R+(_^(N|~E))+S[10]+4293915773&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~_))+S[1]+2240044497&4294967295,E=R+(I<<21&4294967295|I>>>11),I=_+(R^(E|~N))+S[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=N+(E^(_|~R))+S[15]+4264355552&4294967295,N=_+(I<<10&4294967295|I>>>22),I=R+(_^(N|~E))+S[6]+2734768916&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~_))+S[13]+1309151649&4294967295,E=R+(I<<21&4294967295|I>>>11),I=_+(R^(E|~N))+S[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=N+(E^(_|~R))+S[11]+3174756917&4294967295,N=_+(I<<10&4294967295|I>>>22),I=R+(_^(N|~E))+S[2]+718787259&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~_))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var E=_-this.blockSize,S=this.B,R=this.h,N=0;N<_;){if(R==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<_;)if(S[R++]=w.charCodeAt(N++),R==this.blockSize){i(this,S),R=0;break}}else for(;N<_;)if(S[R++]=w[N++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var E=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.u(w),w=Array(16),_=E=0;4>_;++_)for(var S=0;32>S;S+=8)w[E++]=this.g[_]>>>S&255;return w};function s(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;for(var E=[],S=!0,R=w.length-1;0<=R;R--){var N=w[R]|0;S&&N==_||(E[R]=N,S=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(c(-w));for(var _=[],E=1,S=0;w>=E;S++)_[S]=w/E|0,E*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return x(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),S=p,R=0;R<w.length;R+=8){var N=Math.min(8,w.length-R),I=parseInt(w.substring(R,R+N),_);8>N?(N=c(Math.pow(_,N)),S=S.j(N).add(c(I))):(S=S.j(E),S=S.add(c(I)))}return S}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var w=0,_=1,E=0;E<this.g.length;E++){var S=this.i(E);w+=(0<=S?S:4294967296+S)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(P(this))return"-"+x(this).toString(w);for(var _=c(Math.pow(w,6)),E=this,S="";;){var R=O(E,_).g;E=T(E,R.j(_));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,A(E))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:A(w)?0:1};function x(w){for(var _=w.g.length,E=[],S=0;S<_;S++)E[S]=~w.g[S];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],S=0,R=0;R<=_;R++){var N=S+(this.i(R)&65535)+(w.i(R)&65535),I=(N>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);S=I>>>16,N&=65535,I&=65535,E[R]=I<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(x(_))}t.j=function(w){if(A(this)||A(w))return p;if(P(this))return P(w)?x(this).j(x(w)):x(x(this).j(w));if(P(w))return x(this.j(x(w)));if(0>this.l(v)&&0>w.l(v))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,E=[],S=0;S<2*_;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<w.g.length;R++){var N=this.i(S)>>>16,I=this.i(S)&65535,bt=w.i(R)>>>16,Ar=w.i(R)&65535;E[2*S+2*R]+=I*Ar,y(E,2*S+2*R),E[2*S+2*R+1]+=N*Ar,y(E,2*S+2*R+1),E[2*S+2*R+1]+=I*bt,y(E,2*S+2*R+1),E[2*S+2*R+2]+=N*bt,y(E,2*S+2*R+2)}for(S=0;S<_;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=_;S<2*_;S++)E[S]=0;return new o(E,0)};function y(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function C(w,_){this.g=w,this.h=_}function O(w,_){if(A(_))throw Error("division by zero");if(A(w))return new C(p,p);if(P(w))return _=O(x(w),_),new C(x(_.g),x(_.h));if(P(_))return _=O(w,x(_)),new C(x(_.g),_.h);if(30<w.g.length){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=_;0>=S.l(w);)E=F(E),S=F(S);var R=j(E,1),N=j(S,1);for(S=j(S,2),E=j(E,2);!A(S);){var I=N.add(S);0>=I.l(w)&&(R=R.add(E),N=I),S=j(S,1),E=j(E,1)}return _=T(w,R.j(_)),new C(R,_)}for(R=p;0<=w.l(_);){for(E=Math.max(1,Math.floor(w.m()/_.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(E),I=N.j(_);P(I)||0<I.l(w);)E-=S,N=c(E),I=N.j(_);A(N)&&(N=m),R=R.add(N),w=T(w,I)}return new C(R,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function F(w){for(var _=w.g.length+1,E=[],S=0;S<_;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function j(w,_){var E=_>>5;_%=32;for(var S=w.g.length-E,R=[],N=0;N<S;N++)R[N]=0<_?w.i(N+E)>>>_|w.i(N+E+1)<<32-_:w.i(N+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,$r=o}).apply(typeof dy<"u"?dy:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lT,uT,ro,cT,wl,Md,hT,dT,fT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,D){for(var U=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)U[fe-2]=arguments[fe];return h.prototype[k].apply(g,U)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const k=a.length||0,D=g.length||0;a.length=k+D;for(let U=0;U<D;U++)a[k+U]=g[U]}else a.push(g)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function j(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let D=0;D<E.length;D++)f=E[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class bt{constructor(){this.h=this.g=null}add(h,f){const g=Ar.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ar=new T(()=>new Ss,a=>a.reset());class Ss{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let wn,$=!1,Q=new bt,J=()=>{const a=l.Promise.resolve(void 0);wn=()=>{a.then(Se)}};var Se=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){N(f)}var h=Ar;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function In(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{O(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&In.aa.h.call(this)}}A(In,xe);var Sn={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),e1=0;function t1(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++e1,this.da=this.fa=!1}function Ea(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wa(a){this.src=a,this.g={},this.h=0}wa.prototype.add=function(a,h,f,g,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=ac(a,h,g,k);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new t1(h,this.src,D,!!g,k),h.fa=f,a.push(h)),h};function oc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(g,k,1),D&&(Ea(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ac(a,h,f,g){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return k}return-1}var lc="closure_lm_"+(1e6*Math.random()|0),uc={};function rm(a,h,f,g,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)rm(a,h[D],f,g,k);return null}return f=om(f),a&&a[Cn]?a.K(h,f,c(g)?!!g.capture:!!g,k):n1(a,h,f,!1,g,k)}function n1(a,h,f,g,k,D){if(!h)throw Error("Invalid event type");var U=c(k)?!!k.capture:!!k,fe=hc(a);if(fe||(a[lc]=fe=new wa(a)),f=fe.add(h,f,g,U,D),f.proxy)return f;if(g=r1(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Tn||(k=U),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(sm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function r1(){function a(f){return h.call(a.src,a.listener,f)}const h=i1;return a}function im(a,h,f,g,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)im(a,h[D],f,g,k);else g=c(g)?!!g.capture:!!g,f=om(f),a&&a[Cn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=ac(D,f,g,k),-1<f&&(Ea(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=hc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ac(h,f,g,k)),(f=-1<a?h[a]:null)&&cc(f))}function cc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Cn])oc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(sm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=hc(h))?(oc(f,a),f.h==0&&(f.src=null,h[lc]=null)):Ea(a)}}}function sm(a){return a in uc?uc[a]:uc[a]="on"+a}function i1(a,h){if(a.da)a=!0;else{h=new In(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&cc(a),a=f.call(g,h)}return a}function hc(a){return a=a[lc],a instanceof wa?a:null}var dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function om(a){return typeof a=="function"?a:(a[dc]||(a[dc]=function(h){return a.handleEvent(h)}),a[dc])}function et(){de.call(this),this.i=new wa(this),this.M=this,this.F=null}A(et,de),et.prototype[Cn]=!0,et.prototype.removeEventListener=function(a,h,f,g){im(this,a,h,f,g)};function pt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var k=h;h=new xe(g,a),S(h,k)}if(k=!0,f)for(var D=f.length-1;0<=D;D--){var U=h.g=f[D];k=Ta(U,g,!0,h)&&k}if(U=h.g=a,k=Ta(U,g,!0,h)&&k,k=Ta(U,g,!1,h)&&k,f)for(D=0;D<f.length;D++)U=h.g=f[D],k=Ta(U,g,!1,h)&&k}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Ea(f[g]);delete a.g[h],a.h--}}this.F=null},et.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},et.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ta(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var U=h[D];if(U&&!U.da&&U.capture==f){var fe=U.listener,He=U.ha||U.src;U.fa&&oc(a.i,U),k=fe.call(He,g)!==!1&&k}}return k&&!g.defaultPrevented}function am(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function lm(a){a.g=am(()=>{a.g=null,a.i&&(a.i=!1,lm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class s1 extends de{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(a){de.call(this),this.h=a,this.g={}}A(Cs,de);var um=[];function cm(a){j(a.g,function(h,f){this.g.hasOwnProperty(f)&&cc(h)},a),a.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),cm(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fc=l.JSON.stringify,o1=l.JSON.parse,a1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function pc(){}pc.prototype.h=null;function hm(a){return a.h||(a.h=a.i())}function dm(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mc(){xe.call(this,"d")}A(mc,xe);function gc(){xe.call(this,"c")}A(gc,xe);var Rr={},fm=null;function Ia(){return fm=fm||new et}Rr.La="serverreachability";function pm(a){xe.call(this,Rr.La,a)}A(pm,xe);function Rs(a){const h=Ia();pt(h,new pm(h))}Rr.STAT_EVENT="statevent";function mm(a,h){xe.call(this,Rr.STAT_EVENT,a),this.stat=h}A(mm,xe);function mt(a){const h=Ia();pt(h,new mm(h,a))}Rr.Ma="timingevent";function gm(a,h){xe.call(this,Rr.Ma,a),this.size=h}A(gm,xe);function Ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function l1(a,h,f,g,k,D){a.info(function(){if(a.g)if(D)for(var U="",fe=D.split("&"),He=0;He<fe.length;He++){var ae=fe[He].split("=");if(1<ae.length){var tt=ae[0];ae=ae[1];var nt=tt.split("_");U=2<=nt.length&&nt[1]=="type"?U+(tt+"="+ae+"&"):U+(tt+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+U})}function u1(a,h,f,g,k,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+D+" "+U})}function mi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+h1(a,f)+(g?" "+g:"")})}function c1(a,h){a.info(function(){return"TIMEOUT: "+h})}ks.prototype.info=function(){};function h1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return fc(f)}catch{return h}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_m={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_c;function Ca(){}A(Ca,pc),Ca.prototype.g=function(){return new XMLHttpRequest},Ca.prototype.i=function(){return{}},_c=new Ca;function Wn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ym}function ym(){this.i=null,this.g="",this.h=!1}var vm={},yc={};function vc(a,h,f){a.L=1,a.v=ka(An(h)),a.m=f,a.P=!0,Em(a,null)}function Em(a,h){a.F=Date.now(),Aa(a),a.A=An(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Mm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new ym,a.g=Jm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new s1(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(um[0]=k.toString()),k=um);for(var D=0;D<k.length;D++){var U=rm(f,k[D],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Rs(),l1(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Rn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=Rn(this.g);var h=this.g.Ba();const yi=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Bm(this.g)))){this.J||nt!=4||h==7||(h==8||0>=yi?Rs(3):Rs(2)),Ec(this);var f=this.g.Z();this.X=f;t:if(wm(this)){var g=Bm(this.g);a="";var k=g.length,D=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),Ns(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,u1(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,He=this.g;if((fe=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(fe)){var ae=fe;break t}}ae=null}if(f=ae)mi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,f);else{this.o=!1,this.s=3,mt(12),Pr(this),Ns(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<U.length;)if(Kt=d1(this,U),Kt==yc){nt==4&&(this.s=4,mt(14),f=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==vm){this.s=4,mt(15),mi(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else mi(this.i,this.l,Kt,null),wc(this,Kt);if(wm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||U.length!=0||this.h.h||(this.s=1,mt(16),f=!1),this.o=this.o&&f,!f)mi(this.i,this.l,U,"[Invalid Chunked Response]"),Pr(this),Ns(this);else if(0<U.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Rc(tt),tt.M=!0,mt(11))}}else mi(this.i,this.l,U,null),wc(this,U);nt==4&&Pr(this),this.o&&!this.J&&(nt==4?Km(this.j,this):(this.o=!1,Aa(this)))}else k1(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Pr(this),Ns(this)}}}catch{}finally{}};function wm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function d1(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?yc:(f=Number(h.substring(f,g)),isNaN(f)?vm:(g+=1,g+f>h.length?yc:(h=h.slice(g,g+f),a.C=g+f,h)))}Wn.prototype.cancel=function(){this.J=!0,Pr(this)};function Aa(a){a.S=Date.now()+a.I,Tm(a,a.I)}function Tm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ps(m(a.ba,a),h)}function Ec(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(c1(this.i,this.A),this.L!=2&&(Rs(),mt(17)),Pr(this),this.s=2,Ns(this)):Tm(this,this.S-a)};function Ns(a){a.j.G==0||a.J||Km(a.j,a)}function Pr(a){Ec(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,cm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function wc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Tc(f.h,a))){if(!a.K&&Tc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ma(f),Da(f);else break e;Ac(f),mt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ps(m(f.Za,f),6e3));if(1>=Cm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&Ma(f),!y(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let ae=k[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const tt=ae[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=ae[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const yi=ae[5];yi!=null&&typeof yi=="number"&&0<yi&&(g=1.5*yi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Kt=a.g;if(Kt){const La=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var D=g.h;D.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ic(D,D.h),D.h=null))}if(g.D){const Pc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(g.ya=Pc,ge(g.I,g.D,Pc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var U=a;if(g.qa=Xm(g,g.J?g.ia:null,g.W),U.K){Am(g.h,U);var fe=U,He=g.L;He&&(fe.I=He),fe.B&&(Ec(fe),Aa(fe)),g.g=U}else Hm(g);0<f.i.length&&Oa(f)}else ae[0]!="stop"&&ae[0]!="close"||Nr(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Nr(f,7):Cc(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Rs(4)}catch{}}var f1=class{constructor(a,h){this.g=a,this.map=h}};function Im(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cm(a){return a.h?1:a.g?a.g.size:0}function Tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ic(a,h){a.g?a.g.add(h):a.h=h}function Am(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Im.prototype.cancel=function(){if(this.i=Rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function p1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function m1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Pm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=m1(a),g=p1(a),k=g.length,D=0;D<k;D++)h.call(void 0,g[D],f&&f[D],a)}var km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var D=a[f].substring(0,g);k=a[f].substring(g+1)}else D=a[f];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,Ra(this,a.j),this.o=a.o,this.g=a.g,Pa(this,a.s),this.l=a.l;var h=a.i,f=new Os;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Nm(this,f),this.m=a.m}else a&&(h=String(a).match(km))?(this.h=!1,Ra(this,h[1]||"",!0),this.o=xs(h[2]||""),this.g=xs(h[3]||"",!0),Pa(this,h[4]),this.l=xs(h[5]||"",!0),Nm(this,h[6]||"",!0),this.m=xs(h[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ds(h,xm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ds(h,xm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ds(f,f.charAt(0)=="/"?v1:y1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ds(f,w1)),a.join("")};function An(a){return new kr(a)}function Ra(a,h,f){a.j=f?xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Pa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Nm(a,h,f){h instanceof Os?(a.i=h,T1(a.i,a.h)):(f||(h=Ds(h,E1)),a.i=new Os(h,a.h))}function ge(a,h,f){a.i.set(h,f)}function ka(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ds(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,_1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xm=/[#\/\?@]/g,y1=/[#\?:]/g,v1=/[#\?]/g,E1=/[#\?@]/g,w1=/#/g;function Os(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&g1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Os.prototype,t.add=function(a,h){qn(this),this.i=null,a=gi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dm(a,h){qn(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Om(a,h){return qn(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){qn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let D=0;D<k.length;D++)f.push(h[g])}return f},t.V=function(a){qn(this);let h=[];if(typeof a=="string")Om(this,a)&&(h=h.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return qn(this),this.i=null,a=gi(this,a),Om(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Mm(a,h,f){Dm(a,h),0<f.length&&(a.i=null,a.g.set(gi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var k=D;U[g]!==""&&(k+="="+encodeURIComponent(String(U[g]))),a.push(k)}}return this.i=a.join("&")};function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function T1(a,h){h&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(Dm(this,g),Mm(this,k,f))},a)),a.j=h}function I1(a,h){const f=new ks;if(l.Image){const g=new Image;g.onload=v(Hn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Hn,f,"TestLoadImage: error",!1,h,g),g.onabort=v(Hn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Hn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function S1(a,h){const f=new ks,g=new AbortController,k=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(k),D.ok?Hn(f,"TestPingServer: ok",!0,h):Hn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Hn(f,"TestPingServer: error",!1,h)})}function Hn(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function C1(){this.g=new a1}function A1(a,h,f){const g=f||"";try{Pm(a,function(k,D){let U=k;c(k)&&(U=fc(k)),h.push(g+D+"="+encodeURIComponent(U))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Ms(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Ms,pc),Ms.prototype.g=function(){return new Na(this.l,this.j)},Ms.prototype.i=function(a){return function(){return a}}({});function Na(a,h){et.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Na,et),t=Na.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vs(this):Ls(this),this.readyState==3&&Vm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},t.Qa=function(a){this.g&&(this.response=a,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lm(a){let h="";return j(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Sc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Lm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,h,f))}function ke(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ke,et);var R1=/^https?$/i,P1=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_c.g(),this.v=this.o?hm(this.o):hm(_c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){bm(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(P1,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of f)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){bm(this,D)}};function bm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fm(a),xa(a)}function Fm(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Um(this):this.bb())},t.bb=function(){Um(this)};function Um(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)am(a.Ea,0,a);else if(pt(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=U===0){var k=String(a.D).match(km)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!R1.test(k?k.toLowerCase():"")}f=g}if(f)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var D=2<Rn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Fm(a)}}finally{xa(a)}}}}function xa(a,h){if(a.g){jm(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{f.onreadystatechange=g}catch{}}}function jm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),o1(h)}};function Bm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function k1(a){const h={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=R(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[k]||[];h[k]=D,D.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function zm(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Im(a&&a.concurrentRequestLimit),this.Da=new C1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){mt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xm(this,null,this.W),Oa(this)};function Cc(a){if($m(a),a.G==3){var h=a.U++,f=An(a.I);if(ge(f,"SID",a.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),Fs(a,f),h=new Wn(a,a.j,h),h.L=2,h.v=ka(An(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Jm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Aa(h)}Ym(a)}function Da(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function $m(a){Da(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Oa(a){if(!Sm(a.h)&&!a.s){a.s=!0;var h=a.Ga;wn||J(),$||(wn(),$=!0),Q.add(h,a),a.B=0}}function N1(a,h){return Cm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ps(m(a.Ga,a,h),Qm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Wn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=qm(this,k,h),f=An(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Fs(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Lm(D)))+"&"+h:this.m&&Sc(f,this.m,D)),Ic(this.h,k),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),k.T=!0,vc(k,f,null)):vc(k,f,h),this.G=2}}else this.G==3&&(a?Wm(this,a):this.i.length==0||Sm(this.h)||Wm(this))};function Wm(a,h){var f;h?f=h.l:f=a.U++;const g=An(a.I);ge(g,"SID",a.K),ge(g,"RID",f),ge(g,"AID",a.T),Fs(a,g),a.m&&a.o&&Sc(g,a.m,a.o),f=new Wn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=qm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ic(a.h,f),vc(f,g,h)}function Fs(a,h){a.H&&j(a.H,function(f,g){ge(h,g,f)}),a.l&&Pm({},function(f,g){ge(h,g,f)})}function qm(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const U=["count="+f];D==-1?0<f?(D=k[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let fe=!0;for(let He=0;He<f;He++){let ae=k[He].g;const tt=k[He].map;if(ae-=D,0>ae)D=Math.max(0,k[He].g-100),fe=!1;else try{A1(tt,U,"req"+ae+"_")}catch{g&&g(tt)}}if(fe){g=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Hm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;wn||J(),$||(wn(),$=!0),Q.add(h,a),a.v=0}}function Ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ps(m(a.Fa,a),Qm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ps(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Da(this),Gm(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Fs(a,h),a.m&&a.o&&Sc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ka(An(h)),f.m=null,f.P=!0,Em(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),Ac(this),mt(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Km(a,h){var f=null;if(a.g==h){Ma(a),Rc(a),a.g=null;var g=2}else if(Tc(a.h,h))f=h.D,Am(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Ia(),pt(g,new gm(g,f)),Oa(a)}else Hm(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&N1(a,h)||g==2&&Ac(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Qm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new kr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ra(g,"https"),ka(g),k?I1(g.toString(),f):S1(g.toString(),f)}else mt(2);a.G=0,a.l&&a.l.sa(h),Ym(a),$m(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Ym(a){if(a.G=0,a.ka=[],a.l){const h=Rm(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Xm(a,h,f){var g=f instanceof kr?An(f):new kr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Pa(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new kr(null);g&&Ra(D,g),h&&(D.g=h),k&&Pa(D,k),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&ge(g,f,h),ge(g,"VER",a.la),Fs(a,g),g}function Jm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new Ms({eb:f})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zm(){}t=Zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){et.call(this),this.g=new zm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _i(this)}A(Rt,et),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Cc(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=fc(a),a=f);h.i.push(new f1(h.Ya++,a)),h.G==3&&Oa(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,Rt.aa.N.call(this)};function eg(a){mc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(eg,mc);function tg(){gc.call(this),this.status=1}A(tg,gc);function _i(a){this.g=a}A(_i,Zm),_i.prototype.ua=function(){pt(this.g,"a")},_i.prototype.ta=function(a){pt(this.g,new eg(a))},_i.prototype.sa=function(a){pt(this.g,new tg)},_i.prototype.ra=function(){pt(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,fT=function(){return new Va},dT=function(){return Ia()},hT=Rr,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,wl=Sa,_m.COMPLETE="complete",cT=_m,dm.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",et.prototype.listen=et.prototype.K,ro=dm,uT=Ms,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,lT=ke}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});const fy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Bu("@firebase/firestore");function Xs(){return ti.logLevel}function H(t,...e){if(ti.logLevel<=re.DEBUG){const n=e.map(yp);ti.debug(`Firestore (${vs}): ${t}`,...n)}}function jn(t,...e){if(ti.logLevel<=re.ERROR){const n=e.map(yp);ti.error(`Firestore (${vs}): ${t}`,...n)}}function rs(t,...e){if(ti.logLevel<=re.WARN){const n=e.map(yp);ti.warn(`Firestore (${vs}): ${t}`,...n)}}function yp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function me(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Px{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class kx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nx{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new pT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ot(e)}}class xx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ox{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new Ox(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Fe(0,0))}static max(){return new Y(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Qo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Lx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Qo{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return Lx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function bx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new vr(i,G.empty(),e)}function Fx(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),G.empty(),-1)}static max(){return new vr(Y.max(),G.empty(),-1)}}function Ux(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==jx)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function zx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vp.oe=-1;function Gu(t){return t==null}function hu(t){return t===0&&1/t==-1/0}function $x(t){return typeof t=="number"&&Number.isInteger(t)&&!hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rl(this.root,e,this.comparator,!0)}}class rl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _T("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(me(!!t),typeof t=="string"){let e=0;const n=Wx.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wp(t){const e=t.mapValue.fields.__previous_value__;return Ep(e)?wp(e):e}function Yo(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ep(t)?4:Hx(t)?9007199254740991:10:K()}function En(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?hu(o)===hu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function Jo(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(Yo(t),Yo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ni(s),u=ni(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=le(l[c],u[c]);if(d!==0)return d}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Me(s.latitude),Me(o.latitude));return l!==0?l:le(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=ss(l[c],u[c]);if(d)return d}return le(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===il.mapValue&&o===il.mapValue)return 0;if(s===il.mapValue)return 1;if(o===il.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=le(u[p],d[p]);if(m!==0)return m;const v=ss(l[u[p]],c[d[p]]);if(v!==0)return v}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K()}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Er(t),r=Er(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function os(t){return Vd(t)}function Vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vd(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function _y(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ld(t){return!!t&&"integerValue"in t}function Tp(t){return!!t&&"arrayValue"in t}function yy(t){return!!t&&"nullValue"in t}function vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(wo(this.value))}}function yT(t){const e=[];return Es(t.fields,(n,r)=>{const i=new Ye([n]);if(Tl(r)){const s=yT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,Y.min(),Y.min(),Y.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,Y.min(),Y.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,Y.min(),Y.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{}class Le extends vT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Qx(e,n,r):n==="array-contains"?new Jx(e,r):n==="in"?new Zx(e,r):n==="not-in"?new eD(e,r):n==="array-contains-any"?new tD(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yx(e,r):new Xx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends vT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return ET(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ET(t){return t.op==="and"}function wT(t){return Kx(t)&&ET(t)}function Kx(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function bd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+os(t.value);if(wT(t))return t.filters.map(e=>bd(e)).join(",");{const e=t.filters.map(n=>bd(n)).join(",");return`${t.op}(${e})`}}function TT(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof ln?function(r,i){return i instanceof ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&TT(o,i.filters[l]),!0):!1}(t,e):void K()}function IT(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(IT).join(" ,")+"}"}(t):"Filter"}class Qx extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yx extends Le{constructor(e,n){super(e,"in",n),this.keys=ST("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xx extends Le{constructor(e,n){super(e,"not-in",n),this.keys=ST("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ST(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class Jx extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tp(n)&&Jo(n.arrayValue,this.value)}}class Zx extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class eD extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class tD extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ty(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nD(t,e,n,r,i,s,o)}function Ip(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function Sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wy(t.startAt,e.startAt)&&wy(t.endAt,e.endAt)}function Fd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rD(t,e,n,r,i,s,o,l){return new ws(t,e,n,r,i,s,o,l)}function Cp(t){return new ws(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CT(t){return t.collectionGroup!==null}function To(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Zo(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new Zo(Ye.keyField(),r))}return e.ce}function gn(t){const e=X(t);return e.le||(e.le=iD(e,To(t))),e.le}function iD(t,e){if(t.limitType==="F")return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zo(i.field,s)});const n=t.endAt?new du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new du(t.startAt.position,t.startAt.inclusive):null;return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ud(t,e){const n=t.filters.concat([e]);return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jd(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ku(t,e){return Sp(gn(t),gn(e))&&t.limitType===e.limitType}function AT(t){return`${Ip(gn(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IT(i)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,To(r),i))}(t,e)}function sD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=oD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oD(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ss(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new Pe(G.comparator);function Bn(){return aD}const PT=new Pe(G.comparator);function io(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function kT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Io()}function NT(){return Io()}function Io(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const lD=new Pe(G.comparator),uD=new Je(G.comparator);function ee(...t){let e=uD;for(const n of t)e=e.add(n);return e}const cD=new Je(le);function hD(){return cD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hu(e)?"-0":e}}function DT(t){return{integerValue:""+t}}function dD(t,e){return $x(e)?DT(e):xT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this._=void 0}}function fD(t,e,n){return t instanceof fu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ep(s)&&(s=wp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ea?MT(t,e):t instanceof ta?VT(t,e):function(i,s){const o=OT(i,s),l=Sy(o)+Sy(i.Pe);return Ld(o)&&Ld(i.Pe)?DT(l):xT(i.serializer,l)}(t,e)}function pD(t,e,n){return t instanceof ea?MT(t,e):t instanceof ta?VT(t,e):n}function OT(t,e){return t instanceof pu?function(r){return Ld(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fu extends Yu{}class ea extends Yu{constructor(e){super(),this.elements=e}}function MT(t,e){const n=LT(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Yu{constructor(e){super(),this.elements=e}}function VT(t,e){let n=LT(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class pu extends Yu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Sy(t){return Me(t.integerValue||t.doubleValue)}function LT(t){return Tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ea&&i instanceof ea||r instanceof ta&&i instanceof ta?is(r.elements,i.elements,En):r instanceof pu&&i instanceof pu?En(r.Pe,i.Pe):r instanceof fu&&i instanceof fu}(t.transform,e.transform)}class gD{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function bT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ap(t.key,on.none()):new ga(t.key,t.data,on.none());{const n=t.data,r=jt.empty();let i=new Je(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new tn(i.toArray()),on.none())}}function _D(t,e,n){t instanceof ga?function(i,s,o){const l=i.value.clone(),u=Ay(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!Il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ay(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(FT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ga?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=s.value.clone(),d=Ry(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=Ry(s.fieldTransforms,u,o),d=o.data;return d.setAll(FT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function yD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OT(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>mD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ay(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,pD(o,l,n[i]))}return r}function Ry(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fD(s,o,e))}return r}class Ap extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vD extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_D(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Cy(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Cy(n,r))}}class Rp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return lD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ne;function ID(t){switch(t){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function UT(t){if(t===void 0)return jn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Oe.OK:return M.OK;case Oe.CANCELLED:return M.CANCELLED;case Oe.UNKNOWN:return M.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return M.INTERNAL;case Oe.UNAVAILABLE:return M.UNAVAILABLE;case Oe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Oe.NOT_FOUND:return M.NOT_FOUND;case Oe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Oe.ABORTED:return M.ABORTED;case Oe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Oe.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(ne=Oe||(Oe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new $r([4294967295,4294967295],0);function Py(t){const e=SD().encode(t),n=new aT;return n.update(e),new Uint8Array(n.digest())}function ky(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $r([n,r],0),new $r([i,s],0)]}class Pp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$r.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply($r.fromNumber(r)));return i.compare(CD)===1&&(i=new $r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Py(e),[r,i]=ky(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Py(e),[r,i]=ky(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ju(Y.min(),i,new Pe(le),Bn(),ee())}}class _a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class jT{constructor(e,n){this.targetId=e,this.me=n}}class BT{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ny{constructor(){this.fe=0,this.ge=Dy(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new _a(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Dy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=xy(),this.Qe=new Pe(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Fd(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ct.newNoDocument(o,Y.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ni(r).toUint8Array()}catch(u){if(u instanceof _T)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Pp(o,i,s)}catch(u){return rs(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Fd(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ju(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=xy(),this.Qe=new Pe(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ny,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ny),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xy(){return new Pe(G.comparator)}function Dy(){return new Pe(G.comparator)}const RD={asc:"ASCENDING",desc:"DESCENDING"},PD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kD={and:"AND",or:"OR"};class ND{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bd(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xD(t,e){return mu(t,e.toTimestamp())}function _n(t){return me(!!t),Y.fromTimestamp(function(n){const r=Er(n);return new Fe(r.seconds,r.nanos)}(t))}function kp(t,e){return zd(t,e).canonicalString()}function zd(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $T(t){const e=Ee.fromString(t);return me(KT(e)),e}function $d(t,e){return kp(t.databaseId,e.path)}function fh(t,e){const n=$T(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(qT(n))}function WT(t,e){return kp(t.databaseId,e)}function DD(t){const e=$T(t);return e.length===4?Ee.emptyPath():qT(e)}function Wd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Oy(t,e,n){return{name:$d(t,e),fields:n.value.mapValue.fields}}function OD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string"),ft.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ft.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:UT(c.code);return new q(d,c.message||"")}(o);n=new BT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):Y.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Sl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?_n(r.readTime):Y.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new Sl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new TD(i,s),l=r.targetId;n=new jT(l,o)}}return n}function MD(t,e){let n;if(e instanceof ga)n={update:Oy(t,e.key,e.value)};else if(e instanceof Ap)n={delete:$d(t,e.key)};else if(e instanceof di)n={update:Oy(t,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof vD))return K();n={verify:$d(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function VD(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_n(i.updateTime):_n(s);return o.isEqual(Y.min())&&(o=_n(s)),new gD(o,i.transformResults||[])}(n,e))):[]}function LD(t,e){return{documents:[WT(t,e.path)]}}function bD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WT(t,i);const s=function(c){if(c.length!==0)return GT(ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ti(m.field),direction:jD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Bd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function FD(t){let e=DD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=HT(p);return m instanceof ln&&wT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Zo(Ii(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Gu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new du(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new du(v,m)}(n.endAt)),rD(e,i,o,s,l,"F",u,c)}function UD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ii(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ii(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>HT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function jD(t){return RD[t]}function BD(t){return PD[t]}function zD(t){return kD[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return Ye.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof Le?function(n){if(n.op==="=="){if(vy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(yy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(yy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:BD(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:zD(n.op),filters:r}}}(t):K()}function $D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.ct=e}}function qD(t){const e=FD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this._n=new GD}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(vr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class GD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new as(0)}static Ln(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,tn.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=Io(),l=function(){return Io()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof di)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),So(d.mutation,c,d.mutation.getFieldMask(),Fe.now())):o.set(c.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new QD(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new Pe((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||tn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=NT();d.forEach(m=>{if(!s.has(m)){const v=bT(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Ur());let l=-1,u=s;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:kT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new ws(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ct.newInvalidDocument(d)))});let l=io();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&So(d.mutation,c,tn.empty(),Fe.now()),Qu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_n(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:qD(i.bundledQuery),readTime:_n(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.overlays=new Pe(G.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ur(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wD(n,r));let s=this.hr.get(n);s===void 0&&(s=ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.Pr=new Je(ze.Ir),this.Tr=new Je(ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new Ee([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Ee([])),r=new ze(n,e),i=new ze(n,e+1);let s=ee();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Je(ze.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ED(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(le);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new ze(new G(s),0);let l=new Je(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),V.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ze(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.vr=e,this.docs=function(){return new Pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ux(Fx(d),r)<=0||(i.has(d.key)||Qu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new t2(this)}getSize(e){return V.resolve(this.size)}}class t2 extends KD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.persistence=e,this.Mr=new Ts(n=>Ip(n),Sp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Np,this.targetCount=0,this.Lr=as.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n){this.Br={},this.overlays={},this.kr=new vp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new n2(this),this.indexManager=new HD,this.remoteDocumentCache=function(i){return new e2(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new WD(n),this.$r=new XD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ZD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new i2(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class i2 extends Bx{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.zr=new Np,this.jr=null}static Hr(e){return new xp(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return vR()?8:zx(LE())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new s2;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Xs()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(Xs()<=re.DEBUG&&H("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xs()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):V.resolve())}ji(e,n){if(Iy(n))return V.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jd(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,jd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Iy(n)||i.isEqual(Y.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(Xs()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.es(e,o,n,bx(i,-1)).next(l=>l))})}Zi(e,n){let r=new Je(RT(e));return n.forEach((i,s)=>{Qu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Xs()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",wi(n)),this.zi.getDocumentsMatchingQuery(e,n,vr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Pe(le),this.rs=new Ts(s=>Ip(s),Sp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function l2(t,e,n,r){return new a2(t,e,n,r)}async function QT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function u2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let v=V.resolve();return m.forEach(A=>{v=v.next(()=>d.getEntry(u,A)).next(P=>{const x=c.docVersions.get(A);me(x!==null),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function c2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(P,x,T){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,d)&&l.push(n.Qr.updateTargetData(s,v))});let u=Bn(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(h2(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(Y.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function h2(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function d2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function f2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qd(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ma(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function My(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.rs.get(d);return m!==void 0?V.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,gn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(p2(r,sD(e),l),{documents:l,hs:s})))}function p2(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Vy{constructor(){this.activeTargetIds=hD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m2{constructor(){this.no=new Vy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function ph(){return sl===null?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class v2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=ph(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw rs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=_2[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ph();return new Promise((o,l)=>{const u=new lT;u.setWithCredentials(!0),u.listenOnce(cT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wl.NO_ERROR:const d=u.getResponseJson();H(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case wl.TIMEOUT:H(st,`RPC '${e}' ${s} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const p=u.getStatus();if(H(st,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const A=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(v.status);l(new q(A,v.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{H(st,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ph(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fT(),l=dT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new uT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(st,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,v=!1;const A=new y2({lo:x=>{v?H(st,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(H(st,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(st,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},ho:()=>p.close()}),P=(x,T,y)=>{x.listen(T,C=>{try{y(C)}catch(O){setTimeout(()=>{throw O},0)}})};return P(p,ro.EventType.OPEN,()=>{v||(H(st,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),P(p,ro.EventType.CLOSE,()=>{v||(v=!0,H(st,`RPC '${e}' stream ${i} transport closed`),A.po())}),P(p,ro.EventType.ERROR,x=>{v||(v=!0,rs(st,`RPC '${e}' stream ${i} transport errored:`,x),A.po(new q(M.UNAVAILABLE,"The operation could not be completed")))}),P(p,ro.EventType.MESSAGE,x=>{var T;if(!v){const y=x.data[0];me(!!y);const C=y,O=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(O){H(st,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let j=function(E){const S=Oe[E];if(S!==void 0)return UT(S)}(F),w=O.message;j===void 0&&(j=M.INTERNAL,w="Unknown error status: "+F+" with message "+O.message),v=!0,A.po(new q(j,w)),p.close()}else H(st,`RPC '${e}' stream ${i} received:`,y),A.yo(y)}}),P(l,hT.STAT_EVENT,x=>{x.stat===Md.PROXY?H(st,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Md.NOPROXY&&H(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){return new ND(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new XT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=OD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?_n(o.readTime):Y.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Wd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Fd(u)?{documents:LD(s,u)}:{query:bD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zT(s,o.resumeToken);const c=Bd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=mu(s,o.snapshotVersion.toTimestamp());const c=Bd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=UD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Wd(this.serializer),n.removeTarget=e,this.i_(n)}}class w2 extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=VD(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.A_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Wd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MD(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,zd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,zd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class I2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(jn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{fi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.M_.add(4),await ya(c),c.N_.set("Unknown"),c.M_.delete(4),await ec(c)}(this))})}),this.N_=new I2(r,i)}}async function ec(t){if(fi(t))for(const e of t.x_)await e(!0)}async function ya(t){for(const e of t.x_)await e(!1)}function ZT(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Lp(n)?Vp(n):Is(n).Xo()&&Mp(n,e))}function Op(t,e){const n=X(t),r=Is(n);n.F_.delete(e),r.Xo()&&eI(n,e),n.F_.size===0&&(r.Xo()?r.n_():fi(n)&&n.N_.set("Unknown"))}function Mp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).P_(e)}function eI(t,e){t.L_.xe(e),Is(t).I_(e)}function Vp(t){t.L_=new AD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.N_.w_()}function Lp(t){return fi(t)&&!Is(t).Zo()&&t.F_.size>0}function fi(t){return X(t).M_.size===0}function tI(t){t.L_=void 0}async function C2(t){t.N_.set("Online")}async function A2(t){t.F_.forEach((e,n)=>{Mp(t,e)})}async function R2(t,e){tI(t),Lp(t)?(t.N_.D_(e),Vp(t)):t.N_.set("Unknown")}async function P2(t,e,n){if(t.N_.set("Online"),e instanceof BT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof Sl?t.L_.Ke(e):e instanceof jT?t.L_.He(e):t.L_.We(e),!n.isEqual(Y.min()))try{const r=await YT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),eI(s,u);const p=new tr(d.target,u,c,d.sequenceNumber);Mp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!ma(e))throw e;t.M_.add(1),await ya(t),t.N_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ec(t)})}function nI(t,e){return e().catch(n=>gu(t,n,e))}async function tc(t){const e=X(t),n=wr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;k2(e);)try{const i=await d2(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,N2(e,i)}catch(i){await gu(e,i)}rI(e)&&iI(e)}function k2(t){return fi(t)&&t.v_.length<10}function N2(t,e){t.v_.push(e);const n=wr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function rI(t){return fi(t)&&!wr(t).Zo()&&t.v_.length>0}function iI(t){wr(t).start()}async function x2(t){wr(t).V_()}async function D2(t){const e=wr(t);for(const n of t.v_)e.d_(n.mutations)}async function O2(t,e,n){const r=t.v_.shift(),i=Rp.from(r,e,n);await nI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tc(t)}async function M2(t,e){e&&wr(t).E_&&await async function(r,i){if(function(o){return ID(o)&&o!==M.ABORTED}(i.code)){const s=r.v_.shift();wr(r).t_(),await nI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tc(r)}}(t,e),rI(t)&&iI(t)}async function by(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.M_.add(3),await ya(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ec(n)}async function V2(t,e){const n=X(t);e?(n.M_.delete(2),await ec(n)):e||(n.M_.add(2),await ya(n),n.N_.set("Unknown"))}function Is(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new E2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:C2.bind(null,t),To:A2.bind(null,t),Ao:R2.bind(null,t),h_:P2.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Lp(t)?Vp(t):t.N_.set("Unknown")):(await t.B_.stop(),tI(t))})),t.B_}function wr(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new w2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:x2.bind(null,t),Ao:M2.bind(null,t),R_:D2.bind(null,t),A_:O2.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await tc(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new bp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fp(t,e){if(jn("AsyncQueue",`${e}: ${t}`),ma(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.q_=new Pe(G.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ls(e,n,Hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class b2{constructor(){this.queries=new Ts(e=>AT(e),Ku),this.onlineState="Unknown",this.z_=new Set}}async function F2(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new L2,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Fp(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Up(n)}async function U2(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function j2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&Up(n)}function B2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Up(t){t.z_.forEach(e=>{e.next()})}var Hd,Uy;(Uy=Hd||(Hd={})).J_="default",Uy.Cache="cache";class z2{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Hd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.key=e}}class oI{constructor(e){this.key=e}}class $2{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ee(),this.mutatedKeys=ee(),this.Ia=RT(e),this.Ta=new Hi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Fy,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=Qu(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;m&&v?m.data.isEqual(v.data)?A!==P&&(r.track({type:3,doc:v}),x=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),x=!0,(u&&this.Ia(v,u)>0||c&&this.Ia(v,c)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),x=!0):m&&!v&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(v?(o=o.add(v),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(v,A){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(v)-P(A)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ls(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Fy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new oI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new sI(r))}),n}pa(e){this.la=e.hs,this.Pa=ee();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ls.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class W2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class q2{constructor(e){this.key=e,this.wa=!1}}class H2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ts(l=>AT(l),Ku),this.Da=new Map,this.Ca=new Set,this.va=new Pe(G.comparator),this.Fa=new Map,this.Ma=new Np,this.xa={},this.Oa=new Map,this.Na=as.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function G2(t,e,n=!0){const r=dI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await aI(r,e,n,!0),i}async function K2(t,e){const n=dI(t);await aI(n,e,!0,!1)}async function aI(t,e,n,r){const i=await f2(t.localStore,gn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Q2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZT(t.remoteStore,i),l}async function Q2(t,e,n,r,i){t.Ba=(p,m,v)=>async function(P,x,T,y){let C=x.view.da(T);C.Xi&&(C=await My(P.localStore,x.query,!1).then(({documents:w})=>x.view.da(w,C)));const O=y&&y.targetChanges.get(x.targetId),F=y&&y.targetMismatches.get(x.targetId)!=null,j=x.view.applyChanges(C,P.isPrimaryClient,O,F);return By(P,x.targetId,j.fa),j.snapshot}(t,p,m,v);const s=await My(t.localStore,e,!0),o=new $2(e,s.hs),l=o.da(s.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);By(t,n,c.fa);const d=new W2(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Y2(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ku(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Op(r.remoteStore,i.targetId),Gd(r,i.targetId)}).catch(pa)):(Gd(r,i.targetId),await qd(r.localStore,i.targetId,!0))}async function X2(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Op(n.remoteStore,r.targetId))}async function J2(t,e,n){const r=sO(t);try{const i=await function(o,l){const u=X(o),c=Fe.now(),d=l.reduce((v,A)=>v.add(A.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Bn(),P=ee();return u.os.getEntries(v,d).next(x=>{A=x,A.forEach((T,y)=>{y.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(x=>{p=x;const T=[];for(const y of l){const C=yD(y,p.get(y.key).overlayedDocument);C!=null&&T.push(new di(y.key,C,yT(C.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,T,l)}).next(x=>{m=x;const T=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(v,x.batchId,T)})}).then(()=>({batchId:m.batchId,changes:kT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Pe(le)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await va(r,i.changes),await tc(r.remoteStore)}catch(i){const s=Fp(i,"Failed to persist write");n.reject(s)}}async function lI(t,e){const n=X(t);try{const r=await c2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?me(o.wa):i.removedDocuments.size>0&&(me(o.wa),o.wa=!1))}),await va(n,r,e)}catch(r){await pa(r)}}function jy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&Up(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Pe(G.comparator);o=o.insert(s,ct.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Ju(Y.min(),new Map,new Pe(le),o,l);await lI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),jp(r)}else await qd(r.localStore,e,!1).then(()=>Gd(r,e,n)).catch(pa)}async function eO(t,e){const n=X(t),r=e.batch.batchId;try{const i=await u2(n.localStore,e);cI(n,r,null),uI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await pa(i)}}async function tO(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(me(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);cI(r,e,n),uI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await pa(i)}}function uI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function cI(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||hI(t,r)})}function hI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Op(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),jp(t))}function By(t,e,n){for(const r of n)r instanceof sI?(t.Ma.addReference(r.key,e),nO(t,r)):r instanceof oI?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||hI(t,r.key)):K()}function nO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),jp(t))}function jp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(Ee.fromString(e)),r=t.Na.next();t.Fa.set(r,new q2(n)),t.va=t.va.insert(n,r),ZT(t.remoteStore,new tr(gn(Cp(n.path)),r,"TargetPurposeLimboResolution",vp.oe))}}async function va(t,e,n){const r=X(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Dp.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.qi,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>V.forEach(m.Qi,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!ma(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=d.ns.get(m),A=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(A);d.ns=d.ns.insert(m,P)}}}(r.localStore,s))}async function rO(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.us)}}function iO(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ee().add(r.key);{let i=ee();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function dI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z2.bind(null,e),e.Sa.h_=j2.bind(null,e.eventManager),e.Sa.ka=B2.bind(null,e.eventManager),e}function sO(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tO.bind(null,e),e}class zy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return l2(this.persistence,new o2,e.initialUser,this.serializer)}createPersistence(e){return new r2(xp.Hr,this.serializer)}createSharedClientState(e){return new m2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rO.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new b2}()}createDatastore(e){const n=Zu(e.databaseInfo.databaseId),r=function(s){return new v2(s)}(e.databaseInfo);return function(s,o,l,u){return new T2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new S2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>jy(this.syncEngine,n,0),function(){return Ly.D()?new Ly:new g2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new H2(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ya(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=mT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cO(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>by(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>by(e.remoteStore,i)),t._onlineComponents=e}function uO(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uO(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new zy)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new zy);return t._offlineComponents}async function fI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await $y(t,new oO))),t._onlineComponents}function hO(t){return fI(t).then(e=>e.syncEngine)}async function Wy(t){const e=await fI(t),n=e.eventManager;return n.onListen=G2.bind(null,e.syncEngine),n.onUnlisten=Y2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dO(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hy(t){if(!G.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gy(t){if(G.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ky({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ky(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Px;switch(r.type){case"firstParty":return new Dx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qy.get(n);r&&(H("ComponentProvider","Removing Datastore"),qy.delete(n),r.terminate())}(this),Promise.resolve()}}function fO(t,e,n,r={}){var i;const s=(t=pr(t,rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=mR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(c)}t._authCredentials=new kx(new pT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class mr extends pi{constructor(e,n,r){super(e,n,Cp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new G(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Qy(t,e,...n){if(t=yn(t),mI("collection","path",e),t instanceof rc){const r=Ee.fromString(e,...n);return Gy(r),new mr(t,null,r)}{if(!(t instanceof Ct||t instanceof mr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Gy(r),new mr(t.firestore,null,r)}}function Kd(t,e,...n){if(t=yn(t),arguments.length===1&&(e=mT.newId()),mI("doc","path",e),t instanceof rc){const r=Ee.fromString(e,...n);return Hy(r),new Ct(t,null,new G(r))}{if(!(t instanceof Ct||t instanceof mr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Hy(r),new Ct(t.firestore,t instanceof mr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new XT(this,"async_queue_retry"),this.hu=()=>{const n=mh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Wr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ma(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=bp.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Yy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new pO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_I(this),this._firestoreClient.terminate()}}function mO(t,e){const n=typeof t=="object"?t:GE(),r=typeof t=="string"?t:"(default)",i=la(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=pR("firestore");s&&fO(i,...s)}return i}function gI(t){return t._firestoreClient||_I(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _I(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new qx(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(ft.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=/^__.*__$/;class _O{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}function vI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class $p{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new $p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return _u(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(vI(this.fu)&&gO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zu(e)}Fu(e,n,r,i=!1){return new $p({fu:e,methodName:n,vu:r,path:Ye.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wp(t){const e=t._freezeSettings(),n=Zu(t._databaseId);return new yO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EI(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);II("Data must be an object, but it was:",o,r);const l=wI(r,o);let u,c;if(s.merge)u=new tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=EO(e,p,n);if(!o.contains(m))throw new q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TO(d,m)||d.push(m)}u=new tn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new _O(new jt(l),u,c)}function vO(t,e,n,r=!1){return qp(n,t.Fu(r?4:3,e))}function qp(t,e){if(TI(t=yn(t)))return II("Unsupported field value:",e,t),wI(t,e);if(t instanceof yI)return function(r,i){if(!vI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=qp(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:mu(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(i.serializer,s)}}if(r instanceof zp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:zT(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${nc(r)}`)}(t,e)}function wI(t,e){const n={};return gT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=qp(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof zp||t instanceof cs||t instanceof Ct||t instanceof yI)}function II(t,e,n){if(!TI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=nc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function EO(t,e,n){if((e=yn(e))instanceof Bp)return e._internalPath;if(typeof e=="string")return SI(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const wO=new RegExp("[~\\*/\\[\\]]");function SI(t,e,n){if(e.search(wO)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bp(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function TO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IO extends CI{data(){return super.data()}}function Hp(t,e){return typeof e=="string"?SI(t,e):e instanceof Bp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class AI extends Gp{}function CO(t,e,...n){let r=[];e instanceof Gp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Qp).length,l=s.filter(u=>u instanceof Kp).length;if(o>1||o>0&&l>0)throw new q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Kp extends AI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kp(e,n,r)}_apply(e){const n=this._parse(e);return RI(e._query,n),new pi(e.firestore,e.converter,Ud(e._query,n))}_parse(e){const n=Wp(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Jy(p,d);const v=[];for(const A of p)v.push(Xy(u,s,A));m={arrayValue:{values:v}}}else m=Xy(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Jy(p,d),m=vO(l,o,p,d==="in"||d==="not-in");return Le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Qp extends Gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)RI(o,u),o=Ud(o,u)}(e._query,n),new pi(e.firestore,e.converter,Ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yp extends AI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zo(s,o)}(e._query,this._field,this._direction);return new pi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ws(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function AO(t,e="asc"){const n=e,r=Hp("orderBy",t);return Yp._create(r,n)}function Xy(t,e,n){if(typeof(n=yn(n))=="string"){if(n==="")throw new q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CT(e)&&n.indexOf("/")!==-1)throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _y(t,new G(r))}if(n instanceof Ct)return _y(t,n._key);throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function Jy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RO{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zp(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);me(KT(r));const i=new Xo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kI extends CI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cl extends kI{data(e={}){return super.data(e)}}class PO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cl(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:kO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class NI extends RO{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function NO(t,e,n){t=pr(t,Ct);const r=pr(t.firestore,us),i=PI(t.converter,e);return Xp(r,[EI(Wp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function xO(t){return Xp(pr(t.firestore,us),[new Ap(t._key,on.none())])}function DO(t,e){const n=pr(t.firestore,us),r=Kd(t),i=PI(t.converter,e);return Xp(n,[EI(Wp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function OO(t,...e){var n,r,i;t=yn(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yy(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Ct)c=pr(t.firestore,us),d=Cp(t._key.path),u={next:p=>{e[o]&&e[o](MO(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=pr(t,pi);c=pr(p.firestore,us),d=p._query;const m=new NI(c);u={next:v=>{e[o]&&e[o](new PO(c,m,p,v))},error:e[o+1],complete:e[o+2]},SO(t._query)}return function(m,v,A,P){const x=new aO(P),T=new z2(v,x,A);return m.asyncQueue.enqueueAndForget(async()=>F2(await Wy(m),T)),()=>{x.$a(),m.asyncQueue.enqueueAndForget(async()=>U2(await Wy(m),T))}}(gI(c),d,l,u)}function Xp(t,e){return function(r,i){const s=new Wr;return r.asyncQueue.enqueueAndForget(async()=>J2(await hO(r),i,s)),s.promise}(gI(t),e)}function MO(t,e,n){const r=n.docs.get(e._key),i=new NI(t);return new kI(t,i,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vs=i})(qE),Un(new vn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new us(new Nx(r.getProvider("auth-internal")),new Mx(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt(fy,"4.6.3",e),Wt(fy,"4.6.3","esm2017")})();var VO="firebase",LO="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(VO,LO,"app");const xI="@firebase/installations",Jp="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=1e4,OI=`w:${Jp}`,MI="FIS_v2",bO="https://firebaseinstallations.googleapis.com/v1",FO=60*60*1e3,UO="installations",jO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ii=new Uu(UO,jO,BO);function VI(t){return t instanceof Cr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI({projectId:t}){return`${bO}/projects/${t}/installations`}function bI(t){return{token:t.token,requestStatus:2,expiresIn:$O(t.expiresIn),creationTime:Date.now()}}async function FI(t,e){const r=(await e.json()).error;return ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function UI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zO(t,{refreshToken:e}){const n=UI(t);return n.append("Authorization",WO(e)),n}async function jI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $O(t){return Number(t.replace("s","000"))}function WO(t){return`${MI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LI(t),i=UI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:MI,appId:t.appId,sdkVersion:OI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:bI(c.authToken)}}else throw await FI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=/^[cdef][\w-]{21}$/,Qd="";function KO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QO(t);return GO.test(n)?n:Qd}catch{return Qd}}function QO(t){return HO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Map;function $I(t,e){const n=ic(t);WI(n,e),YO(n,e)}function WI(t,e){const n=zI.get(t);if(n)for(const r of n)r(e)}function YO(t,e){const n=XO();n&&n.postMessage({key:t,fid:e}),JO()}let jr=null;function XO(){return!jr&&"BroadcastChannel"in self&&(jr=new BroadcastChannel("[Firebase] FID Change"),jr.onmessage=t=>{WI(t.data.key,t.data.fid)}),jr}function JO(){zI.size===0&&jr&&(jr.close(),jr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="firebase-installations-database",eM=1,si="firebase-installations-store";let _h=null;function Zp(){return _h||(_h=WE(ZO,eM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}})),_h}async function yu(t,e){const n=ic(t),i=(await Zp()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&$I(t,e.fid),e}async function qI(t){const e=ic(t),r=(await Zp()).transaction(si,"readwrite");await r.objectStore(si).delete(e),await r.done}async function sc(t,e){const n=ic(t),i=(await Zp()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&$I(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t){let e;const n=await sc(t.appConfig,r=>{const i=tM(r),s=nM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tM(t){const e=t||{fid:KO(),registrationStatus:0};return HI(e)}function nM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iM(t)}:{installationEntry:e}}async function rM(t,e){try{const n=await qO(t,e);return yu(t.appConfig,n)}catch(n){throw VI(n)&&n.customData.serverCode===409?await qI(t.appConfig):await yu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iM(t){let e=await Zy(t.appConfig);for(;e.registrationStatus===1;)await BI(100),e=await Zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await em(t);return r||n}return e}function Zy(t){return sc(t,e=>{if(!e)throw ii.create("installation-not-found");return HI(e)})}function HI(t){return sM(t)?{fid:t.fid,registrationStatus:0}:t}function sM(t){return t.registrationStatus===1&&t.registrationTime+DI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM({appConfig:t,heartbeatServiceProvider:e},n){const r=aM(t,n),i=zO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jI(()=>fetch(r,l));if(u.ok){const c=await u.json();return bI(c)}else throw await FI("Generate Auth Token",u)}function aM(t,{fid:e}){return`${LI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e=!1){let n;const r=await sc(t.appConfig,s=>{if(!GI(s))throw ii.create("not-registered");const o=s.authToken;if(!e&&cM(o))return s;if(o.requestStatus===1)return n=lM(t,e),s;{if(!navigator.onLine)throw ii.create("app-offline");const l=dM(s);return n=uM(t,l),l}});return n?await n:r.authToken}async function lM(t,e){let n=await ev(t.appConfig);for(;n.authToken.requestStatus===1;)await BI(100),n=await ev(t.appConfig);const r=n.authToken;return r.requestStatus===0?tm(t,e):r}function ev(t){return sc(t,e=>{if(!GI(e))throw ii.create("not-registered");const n=e.authToken;return fM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uM(t,e){try{const n=await oM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await yu(t.appConfig,r),n}catch(n){if(VI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yu(t.appConfig,r)}throw n}}function GI(t){return t!==void 0&&t.registrationStatus===2}function cM(t){return t.requestStatus===2&&!hM(t)}function hM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+FO}function dM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fM(t){return t.requestStatus===1&&t.requestTime+DI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pM(t){const e=t,{installationEntry:n,registrationPromise:r}=await em(e);return r?r.catch(console.error):tm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t,e=!1){const n=t;return await gM(n),(await tm(n,e)).token}async function gM(t){const{registrationPromise:e}=await em(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t){if(!t||!t.options)throw yh("App Configuration");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yh(t){return ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="installations",yM="installations-internal",vM=t=>{const e=t.getProvider("app").getImmediate(),n=_M(e),r=la(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EM=t=>{const e=t.getProvider("app").getImmediate(),n=la(e,KI).getImmediate();return{getId:()=>pM(n),getToken:i=>mM(n,i)}};function wM(){Un(new vn(KI,vM,"PUBLIC")),Un(new vn(yM,EM,"PRIVATE"))}wM();Wt(xI,Jp);Wt(xI,Jp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="analytics",TM="firebase_id",IM="origin",SM=60*1e3,CM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Bu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new Uu("analytics","Analytics",AM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t){if(!t.startsWith(nm)){const e=Ot.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function QI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kM(t,e){const n=PM("firebase-js-sdk-policy",{createScriptURL:RM}),r=document.createElement("script"),i=`${nm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function NM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await QI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){At.error(l)}t("config",i,s)}async function DM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await QI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){At.error(s)}}function OM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await DM(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await xM(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){At.error(l)}}return i}function MM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=OM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=30,bM=1e3;class FM{constructor(e={},n=bM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const YI=new FM;function UM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:UM(r)},s=CM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function BM(t,e=YI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ot.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new WM;return setTimeout(async()=>{l.abort()},SM),XI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function XI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=YI){var s;const{appId:o,measurementId:l}=t;try{await zM(r,e)}catch(u){if(l)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await jM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!$M(c)){if(i.deleteThrottleMetadata(o),l)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?T_(n,i.intervalMillis,LM):T_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),At.debug(`Calling attemptFetch again in ${d} millis`),XI(t,p,r,i)}}function zM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $M(t){if(!(t instanceof Cr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HM(){if(UE())try{await jE()}catch(t){return At.warn(Ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GM(t,e,n,r,i,s,o){var l;const u=BM(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>At.error(v)),e.push(u);const c=HM().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([u,c]);VM(s)||kM(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[IM]="firebase",m.update=!0,p!=null&&(m[TM]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.app=e}_delete(){return delete Co[this.app.options.appId],Promise.resolve()}}let Co={},tv=[];const nv={};let vh="dataLayer",QM="gtag",rv,JI,iv=!1;function YM(){const t=[];if(_R()&&t.push("This is a browser extension environment."),ER()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ot.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function XM(t,e,n){YM();const r=t.options.appId;if(!r)throw Ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(Co[r]!=null)throw Ot.create("already-exists",{id:r});if(!iv){NM(vh);const{wrappedGtag:s,gtagCore:o}=MM(Co,tv,nv,vh,QM);JI=s,rv=o,iv=!0}return Co[r]=GM(t,tv,nv,e,rv,vh,n),new KM(t)}function JM(t=GE()){t=yn(t);const e=la(t,vu);return e.isInitialized()?e.getImmediate():ZM(t)}function ZM(t,e={}){const n=la(t,vu);if(n.isInitialized()){const i=n.getImmediate();if(tu(e,n.getOptions()))return i;throw Ot.create("already-initialized")}return n.initialize({options:e})}function eV(t,e,n,r){t=yn(t),qM(JI,Co[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const sv="@firebase/analytics",ov="0.10.4";function tV(){Un(new vn(vu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return XM(r,i,n)},"PUBLIC")),Un(new vn("analytics-internal",t,"PRIVATE")),Wt(sv,ov),Wt(sv,ov,"esm2017");function t(e){try{const n=e.getProvider(vu).getImmediate();return{logEvent:(r,i,s)=>eV(n,r,i,s)}}catch(n){throw Ot.create("interop-component-reg-failed",{reason:n})}}}tV();const nV={apiKey:"AIzaSyAgcLGE6bEZI9Yul1Ed4TmDducEJzynQBg",authDomain:"crud1-a1310.firebaseapp.com",projectId:"crud1-a1310",storageBucket:"crud1-a1310.appspot.com",messagingSenderId:"850911456197",appId:"1:850911456197:web:b6ae923b9c2bb4d12a39ac",measurementId:"G-BSYLZTB0DT"},ZI=HE(nV);JM(ZI);const ol=mO(ZI);function rV(t){const[e,n]=z.useState({title:"",price:"",imageUrl:"",category:"",time:Fe.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),r=async()=>{if(e.title==""||e.price==""||e.imageUrl==""||e.category=="")return alert("all Fields are required");const m=Qy(ol,"products");try{await DO(m,e),o(),alert("products added successfully"),setTimeout(()=>{window.location.href="/"},800),n("")}catch(v){console.log(v)}},[i,s]=z.useState([]),o=async()=>{try{const m=CO(Qy(ol,"products"),AO("time")),v=OO(m,A=>{let P=[];A.forEach(x=>{P.push({...x.data(),id:x.id})}),s(P)});return()=>v}catch(m){console.log(m)}};z.useEffect(()=>{o()},[]);const l=m=>{n(m)},u=async m=>{try{await NO(Kd(ol,"products",e.id),e),o(),alert("product update successFully"),setTimeout(()=>{window.location.href="/"},800),n("")}catch(v){console.log(v)}},c=async m=>{try{await xO(Kd(ol,"products",m.id)),o(),alert("Product deleted Successfully")}catch(v){console.log(v)}},[d,p]=z.useState("");return b.jsx(Fu.Provider,{value:{products:e,setProducts:n,addProduct:r,getProducts:o,allProducts:i,editProducthandle:l,editProducts:u,deleteProduct:c,Serach:d,setsaerch:p},children:t.children})}function iV(){return b.jsx(rV,{children:b.jsx(tR,{children:b.jsxs(KA,{children:[b.jsx(vl,{path:"/",element:b.jsx(Cx,{})}),b.jsx(vl,{path:"/addproduct",element:b.jsx(Ax,{})}),b.jsx(vl,{path:"/updateproduct",element:b.jsx(Rx,{})})]})})})}Eh.createRoot(document.getElementById("root")).render(b.jsx(_v.StrictMode,{children:b.jsx(iV,{})}));
