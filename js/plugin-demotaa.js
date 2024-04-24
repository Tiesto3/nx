/*! For license information please see plugin-demotaa.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class i{constructor(t,e,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=n.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(r,t))}return t}toString(){return this.cssText}}const o=(r,n)=>{if(e)r.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of n){const n=document.createElement("style"),i=t.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,d=f.trustedTypes,y=d?d.emptyScript:"",v=f.reactiveElementPolyfillSupport,g=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},m=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const o=n?.call(this);i.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...l(t),...u(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=n,this[n]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??m)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[g("elementProperties")]=new Map,b[g("finalized")]=new Map,v?.({ReactiveElement:b}),(f.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,w=A.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,P="?"+x,O=`<${P}>`,C=document,k=()=>C.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,L="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,D=/"/g,z=/^(?:script|style|textarea|title)$/i,W=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),B=W(1),I=(W(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),G=new WeakMap,V=C.createTreeWalker(C,129);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":"",s=j;for(let e=0;e<r;e++){const r=t[e];let a,c,h=-1,l=0;for(;l<r.length&&(s.lastIndex=l,c=s.exec(r),null!==c);)l=s.lastIndex,s===j?"!--"===c[1]?s=N:void 0!==c[1]?s=R:void 0!==c[2]?(z.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=H):void 0!==c[3]&&(s=H):s===H?">"===c[0]?(s=i??j,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?H:'"'===c[3]?D:M):s===D||s===M?s=H:s===N||s===R?s=j:(s=H,i=void 0);const u=s===H&&t[e+1].startsWith("/>")?" ":"";o+=s===j?r+O:h>=0?(n.push(a),r.slice(0,h)+S+r.slice(h)+x+u):r+x+(-2===h?e:u)}return[q(t,o+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};class Y{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[c,h]=J(t,e);if(this.el=Y.createElement(c,r),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=V.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=h[o++],r=n.getAttribute(t).split(x),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?rt:Q}),n.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:i}),n.removeAttribute(t));if(z.test(n.tagName)){const t=n.textContent.split(x),e=t.length-1;if(e>0){n.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],k()),V.nextNode(),a.push({type:2,index:++i});n.append(t[e],k())}}}else if(8===n.nodeType)if(n.data===P)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(x,t+1));)a.push({type:7,index:i}),t+=x.length-1}i++}}static createElement(t,e){const r=C.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,n){if(e===I)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=U(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,n)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??C).importNode(e,!0);V.currentNode=n;let i=V.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=r[++s]}o!==a?.index&&(i=V.nextNode(),o++)}return V.currentNode=C,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Y.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new X(this.S(k()),this.S(k()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=Z(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const n=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=Z(this,n[r+s],e,s),a===I&&(a=this._$AH[s]),o||=!U(a)||a!==this._$AH[s],a===F?t=F:t!==F&&(t+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class rt extends Q{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??F)===I)return;const r=this._$AH,n=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==F&&(r===F||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const it=A.litHtmlPolyfillSupport;it?.(Y,X),(A.litHtmlVersions??=[]).push("3.1.2");class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new X(e.insertBefore(k(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const st=globalThis.litElementPolyfillSupport;var at,ct,ht;function lt(t){return lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(t)}function ut(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function pt(){pt=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,s=Object.create(o.prototype),a=new k(n||[]);return i(s,"_invoke",{value:x(t,r,a)}),s}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",f="suspendedYield",d="executing",y="completed",v={};function g(){}function _(){}function m(){}var $={};h($,s,(function(){return this}));var b=Object.getPrototypeOf,A=b&&b(b(U([])));A&&A!==r&&n.call(A,s)&&($=A);var w=m.prototype=g.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(i,o,s,a){var c=u(t[i],t,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==lt(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,a)}))}a(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function x(e,r,n){var i=p;return function(o,s){if(i===d)throw Error("Generator is already running");if(i===y){if("throw"===o)throw s;return{value:t,done:!0}}for(n.method=o,n.arg=s;;){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var h=u(e,r,n);if("normal"===h.type){if(i=n.done?y:f,h.arg===v)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(i=y,n.method="throw",n.arg=h.arg)}}}function P(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=u(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var s=o.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function U(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(lt(e)+" is not iterable")}return _.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=h(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),h(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var s=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},E(w),h(w,c,"Generator"),h(w,s,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=U,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return a.type="throw",a.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),h=n.call(s,"finallyLoc");if(c&&h){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!h)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:U(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function ft(t,e,r,n,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,i)}function dt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,bt(n.key),n)}}function yt(t,e,r){return e=_t(e),function(t,e){if(e&&("object"===lt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,vt()?Reflect.construct(e,r||[],_t(t).constructor):e.apply(t,r))}function vt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(vt=function(){return!!t})()}function gt(){return gt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_t(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},gt.apply(this,arguments)}function _t(t){return _t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_t(t)}function mt(t,e){return mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},mt(t,e)}function $t(t,e,r){return(e=bt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bt(t){var e=function(t,e){if("object"!=lt(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=lt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==lt(e)?e:e+""}st?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.4");var At=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=yt(this,e)).isStarting=!1,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&mt(t,e)}(e,t),r=e,n=[{key:"connectedCallback",value:(o=pt().mark((function t(){return pt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:gt(_t(e.prototype),"connectedCallback",this).call(this);case 1:case"end":return t.stop()}}),t,this)})),s=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function s(t){ft(i,r,n,s,a,"next",t)}function a(t){ft(i,r,n,s,a,"throw",t)}s(void 0)}))},function(){return s.apply(this,arguments)})},{key:"onChange",value:function(t){var e={bubbles:!0,cancelable:!1,composed:!0,detail:t.target.value},r=new CustomEvent("ntx-value-change",e);this.dispatchEvent(r)}},{key:"startWorkflow",value:function(){var t=this;this.workflowUrl,fetch(this.workflowUrl,{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/plain"},body:this.startData}).then((function(t){if(!t.ok)throw new Error("Error starting Workflow");return t.json()})).then((function(e){t.responseMessage="Start Workflow Successful: ".concat(JSON.stringify(e))})).catch((function(e){t.responseMessage="Start Workflow Failed: ".concat(e.message)}))}},{key:"render",value:function(){var t=this.workflowUrl?B(at||(at=ut(['\n    <button class="button" @click=',">\n          Start Workflow                     \n    </button>\n  "])),this.startWorkflow):"";return B(ct||(ct=ut(["\n    ","<p>XYZ</p>\n  "])),t)}}],i=[{key:"getMetaConfig",value:function(){return{controlName:"NAC Async Workflow TA",fallbackDisableSubmit:!1,iconUrl:"",groupName:"Actions",version:"1.6",description:"Async workflow.",properties:{workflowUrl:{type:"string",title:"Workflow URL",description:"Workflow URL with Token"},startData:{type:"string",title:"Start Data",description:"startData",maxLength:32e3},value:{type:"string",title:"Instance",description:"instance",isValueField:!0}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0}}}}],n&&dt(r.prototype,n),i&&dt(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i,o,s}(ot);$t(At,"properties",{workflowUrl:{type:String},startData:{type:String},instance:{type:String}}),$t(At,"styles",((t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new i(n,t,r)})(ht||(ht=ut(['\n    :host {\n      display: block;\n    }\n    .button {\n      /*  background-color: var(-ntx-form-theme-color-primary) */\n      background-color: #006BD6;\n      color: #FFFFFF;\n      border-color: #006BD6;\n      font-family: "Open Sans", "Helvetica", "Arial", sans-serif;\n      font-size: 14px;\n      border-radius: 4px;\n      }\n  '])))),customElements.define("plugin-demotaa",At)})();
