function s(i,e,t,r){var o=arguments.length,a=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,r);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=globalThis,He=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),it=new WeakMap;let Ct=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(He&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=it.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&it.set(t,e))}return e}toString(){return this.cssText}};const Ut=i=>new Ct(typeof i=="string"?i:i+"",void 0,Ze),g=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,a)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new Ct(t,i,Ze)},qt=(i,e)=>{if(He)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=le.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},ot=He?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ut(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:Ht,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Gt,getOwnPropertySymbols:jt,getPrototypeOf:Wt}=Object,ge=globalThis,at=ge.trustedTypes,Kt=at?at.emptyScript:"",Xt=ge.reactiveElementPolyfillSupport,V=(i,e)=>i,he={toAttribute(i,e){switch(e){case Boolean:i=i?Kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ge=(i,e)=>!Vt(i,e),lt={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:Ge};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Ht(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=Zt(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return o?.call(this)},set(l){const c=o?.call(this);a.call(this,l),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=Wt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const t=this.properties,r=[...Gt(t),...jt(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(ot(o))}else e!==void 0&&t.push(ot(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:he).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:he;this._$Em=o,this[o]=l.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??Ge)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[V("elementProperties")]=new Map,P[V("finalized")]=new Map,Xt?.({ReactiveElement:P}),(ge.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=globalThis,pe=je.trustedTypes,st=pe?pe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Et="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+R,Jt=`<${wt}>`,M=document,H=()=>M.createComment(""),Z=i=>i===null||typeof i!="object"&&typeof i!="function",Qt=Array.isArray,er=i=>Qt(i)||typeof i?.[Symbol.iterator]=="function",ye=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,dt=/>/g,L=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ht=/"/g,It=/^(?:script|style|textarea|title)$/i,Bt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=Bt(1),tr=Bt(2),Q=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pt=new WeakMap,k=M.createTreeWalker(M,129);function $t(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(e):e}const rr=(i,e)=>{const t=i.length-1,r=[];let o,a=e===2?"<svg>":"",l=U;for(let c=0;c<t;c++){const d=i[c];let f,b,v=-1,I=0;for(;I<d.length&&(l.lastIndex=I,b=l.exec(d),b!==null);)I=l.lastIndex,l===U?b[1]==="!--"?l=nt:b[1]!==void 0?l=dt:b[2]!==void 0?(It.test(b[2])&&(o=RegExp("</"+b[2],"g")),l=L):b[3]!==void 0&&(l=L):l===L?b[0]===">"?(l=o??U,v=-1):b[1]===void 0?v=-2:(v=l.lastIndex-b[2].length,f=b[1],l=b[3]===void 0?L:b[3]==='"'?ht:ct):l===ht||l===ct?l=L:l===nt||l===dt?l=U:(l=L,o=void 0);const B=l===L&&i[c+1].startsWith("/>")?" ":"";a+=l===U?d+Jt:v>=0?(r.push(f),d.slice(0,v)+Et+d.slice(v)+R+B):d+R+(v===-2?c:B)}return[$t(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class G{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let a=0,l=0;const c=e.length-1,d=this.parts,[f,b]=rr(e,t);if(this.el=G.createElement(f,r),k.currentNode=this.el.content,t===2){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=k.nextNode())!==null&&d.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(Et)){const I=b[l++],B=o.getAttribute(v).split(R),S=/([.?@])?(.*)/.exec(I);d.push({type:1,index:a,name:S[2],strings:B,ctor:S[1]==="."?or:S[1]==="?"?ar:S[1]==="@"?lr:me}),o.removeAttribute(v)}else v.startsWith(R)&&(d.push({type:6,index:a}),o.removeAttribute(v));if(It.test(o.tagName)){const v=o.textContent.split(R),I=v.length-1;if(I>0){o.textContent=pe?pe.emptyScript:"";for(let B=0;B<I;B++)o.append(v[B],H()),k.nextNode(),d.push({type:2,index:++a});o.append(v[I],H())}}}else if(o.nodeType===8)if(o.data===wt)d.push({type:2,index:a});else{let v=-1;for(;(v=o.data.indexOf(R,v+1))!==-1;)d.push({type:7,index:a}),v+=R.length-1}a++}}static createElement(e,t){const r=M.createElement("template");return r.innerHTML=e,r}}function Y(i,e,t=i,r){if(e===Q)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl;const a=Z(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=Y(i,o._$AS(i,e.values),o,r)),e}class ir{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??M).importNode(t,!0);k.currentNode=o;let a=k.nextNode(),l=0,c=0,d=r[0];for(;d!==void 0;){if(l===d.index){let f;d.type===2?f=new W(a,a.nextSibling,this,e):d.type===1?f=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(f=new sr(a,this,e)),this._$AV.push(f),d=r[++c]}l!==d?.index&&(a=k.nextNode(),l++)}return k.currentNode=M,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),Z(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):er(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=G.createElement($t(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const a=new ir(o,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new G(e)),t}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const a of e)o===t.length?t.push(r=new W(this.S(H()),this.S(H()),this,this.options)):r=t[o],r._$AI(a),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(e,t=this,r,o){const a=this.strings;let l=!1;if(a===void 0)e=Y(this,e,t,0),l=!Z(e)||e!==this._$AH&&e!==Q,l&&(this._$AH=e);else{const c=e;let d,f;for(e=a[0],d=0;d<a.length-1;d++)f=Y(this,c[r+d],t,d),f===Q&&(f=this._$AH[d]),l||=!Z(f)||f!==this._$AH[d],f===h?e=h:e!==h&&(e+=(f??"")+a[d+1]),this._$AH[d]=f}l&&!o&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class or extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class ar extends me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class lr extends me{constructor(e,t,r,o,a){super(e,t,r,o,a),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??h)===Q)return;const r=this._$AH,o=e===h&&r!==h||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==h&&(r===h||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class sr{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const nr=je.litHtmlPolyfillSupport;nr?.(G,W),(je.litHtmlVersions??=[]).push("3.1.2");const Dt=(i,e,t)=>{const r=t?.renderBefore??e;let o=r._$litPart$;if(o===void 0){const a=t?.renderBefore??null;r._$litPart$=o=new W(e.insertBefore(H(),a),a,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});const dr=globalThis.litElementPolyfillSupport;dr?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:Ge},hr=(i=cr,e,t)=>{const{kind:r,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(t.name,i),r==="accessor"){const{name:l}=t;return{set(c){const d=e.get.call(this);e.set.call(this,c),this.requestUpdate(l,d,i)},init(c){return c!==void 0&&this.P(l,void 0,i),c}}}if(r==="setter"){const{name:l}=t;return function(c){const d=this[l];e.call(this,c),this.requestUpdate(l,d,i)}}throw Error("Unsupported decorator location: "+r)};function n(i){return(e,t)=>typeof t=="object"?hr(i,e,t):((r,o,a)=>{const l=o.hasOwnProperty(a);return o.constructor.createProperty(a,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,a):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(i){return n({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(i,e){return(t,r,o)=>{const a=l=>l.renderRoot?.querySelector(i)??null;if(e){const{get:l,set:c}=typeof r=="object"?t:o??(()=>{const d=Symbol();return{get(){return this[d]},set(f){this[d]=f}}})();return Ee(t,r,{get(){let d=l.call(this);return d===void 0&&(d=a(this),(d!==null||this.hasUpdated)&&c.call(this,d)),d}})}return Ee(t,r,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(i){return(e,t)=>{const{slot:r,selector:o}=i??{},a="slot"+(r?`[name=${r}]`:":not([name])");return Ee(e,t,{get(){const l=this.renderRoot?.querySelector(a),c=l?.assignedElements(i)??[];return o===void 0?c:c.filter(d=>d.matches(o))}})}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class pr extends m{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return p`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ur=g`:host{display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let we=class extends pr{};we.styles=[ur];we=s([y("md-elevation")],we);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tt=Symbol("attachableController");let Rt;Rt=new MutationObserver(i=>{for(const e of i)e.target[Tt]?.hostConnected()});class St{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[Tt]=this,Rt?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fr=["focusin","focusout","pointerdown"];class We extends m{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new St(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[ut]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[ut]=!0}}onControlChange(e,t){for(const r of fr)e?.removeEventListener(r,this),t?.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}s([n({type:Boolean,reflect:!0})],We.prototype,"visible",void 0);s([n({type:Boolean,reflect:!0})],We.prototype,"inward",void 0);const ut=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const vr=g`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Qe=class extends We{};Qe.styles=[vr];Qe=s([y("md-focus-ring")],Qe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ke=i=>(...e)=>({_$litDirective$:i,values:e});let Xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=Ke(class extends Xe{constructor(i){if(super(i),i.type!==T.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const t=i.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||this.nt?.has(r)||(o?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return Q}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Lt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const gr=450,ft=225,mr=.2,br=10,Ar=75,yr=.35,xr="::after",_r="forwards";var _;(function(i){i[i.INACTIVE=0]="INACTIVE",i[i.TOUCH_DELAY=1]="TOUCH_DELAY",i[i.HOLDING=2]="HOLDING",i[i.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(_||(_={}));const Cr=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Er=150,wr=window.matchMedia("(forced-colors: active)");class K extends m{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=_.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new St(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return p`<div class="surface ${z(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==_.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===_.HOLDING){this.state=_.WAITING_FOR_CLICK;return}if(this.state===_.TOUCH_DELAY){this.state=_.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=_.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=_.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,Er)}),this.state===_.TOUCH_DELAY&&(this.state=_.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===_.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===_.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),r=Math.max(e,t),o=Math.max(yr*r,Ar),a=Math.floor(r*mr),c=Math.sqrt(t**2+e**2)+br;this.initialSize=a,this.rippleScale=`${(c+o)/a}`,this.rippleSize=`${a}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:r}=window,{left:o,top:a}=this.getBoundingClientRect(),l=t+o,c=r+a,{pageX:d,pageY:f}=e;return{x:d-l,y:f-c}}getTranslationCoordinates(e){const{height:t,width:r}=this.getBoundingClientRect(),o={x:(r-this.initialSize)/2,y:(t-this.initialSize)/2};let a;return e instanceof PointerEvent?a=this.getNormalizedPointerEventCoords(e):a={x:r/2,y:t/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2},{startPoint:a,endPoint:o}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),o=`${t.x}px, ${t.y}px`,a=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${o}) scale(1)`,`translate(${a}) scale(${this.rippleScale})`]},{pseudoElement:xr,duration:gr,easing:Lt.STANDARD,fill:_r})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=_.INACTIVE;const e=this.growAnimation;let t=1/0;if(typeof e?.currentTime=="number"?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=ft){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,ft-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:r,left:o,bottom:a,right:l}=this.getBoundingClientRect();return e>=o&&e<=l&&t>=r&&t<=a}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!wr?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,t){for(const r of Cr)e?.removeEventListener(r,this),t?.addEventListener(r,this)}}s([n({type:Boolean,reflect:!0})],K.prototype,"disabled",void 0);s([w()],K.prototype,"hovered",void 0);s([w()],K.prototype,"pressed",void 0);s([D(".surface")],K.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Qr=g`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ie=class extends K{};Ie.styles=[Qr];Ie=s([y("md-ripple")],Ie);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const kt=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];kt.map(Mt);function Mt(i){return i.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ae(i){for(const e of kt)i.createProperty(e,{attribute:Mt(e),reflect:!0});i.addInitializer(e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const C=Symbol("internals"),xe=Symbol("privateInternals");function Je(i){class e extends i{get[C](){return this[xe]||(this[xe]=this.attachInternals()),this[xe]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zt(i){i.addInitializer(e=>{const t=e;t.addEventListener("click",async r=>{const{type:o,[C]:a}=t,{form:l}=a;if(!(!l||o==="button")&&(await new Promise(c=>{setTimeout(c)}),!r.defaultPrevented)){if(o==="reset"){l.reset();return}l.addEventListener("submit",c=>{Object.defineProperty(c,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),a.setFormValue(t.value),l.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ir(i){const e=new MouseEvent("click",{bubbles:!0});return i.dispatchEvent(e),e}function Br(i){return i.currentTarget!==i.target||i.composedPath()[0]!==i.target||i.target.disabled?!1:!$r(i)}function $r(i){const e=Be;return e&&(i.preventDefault(),i.stopImmediatePropagation()),Dr(),e}let Be=!1;async function Dr(){Be=!0,await null,Be=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tr=Je(m);class x extends Tr{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[C].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!Br(e)||!this.buttonElement||(this.focus(),Ir(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled&&!this.href,t=this.href?this.renderLink():this.renderButton(),r=this.href?"link":"button";return p`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${r}></md-focus-ring>
      <md-ripple for=${r} ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return p`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||h}"
      aria-haspopup="${t||h}"
      aria-expanded="${r||h}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return p`<a
      id="link"
      class="button"
      aria-label="${e||h}"
      aria-haspopup="${t||h}"
      aria-expanded="${r||h}"
      href=${this.href}
      target=${this.target||h}
      >${this.renderContent()}
    </a>`}renderContent(){const e=p`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return p`
      <span class="touch"></span>
      ${this.trailingIcon?h:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:h}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Ae(x),zt(x);x.formAssociated=!0;x.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0);s([n()],x.prototype,"href",void 0);s([n()],x.prototype,"target",void 0);s([n({type:Boolean,attribute:"trailing-icon",reflect:!0})],x.prototype,"trailingIcon",void 0);s([n({type:Boolean,attribute:"has-icon",reflect:!0})],x.prototype,"hasIcon",void 0);s([n()],x.prototype,"type",void 0);s([n({reflect:!0})],x.prototype,"value",void 0);s([D(".button")],x.prototype,"buttonElement",void 0);s([be({slot:"icon",flatten:!0})],x.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Rr extends x{renderElevationOrOutline(){return p`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Sr=g`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Lr=g`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const et=g`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let $e=class extends Rr{};$e.styles=[et,Lr,Sr];$e=s([y("md-filled-button")],$e);let De=class extends m{render(){return p`
      <header>Let's Create Something Amazing Together</header>
      <p class="content">
        Contact us today to discuss your project and collaborate with our team.
      </p>
      <md-filled-button href="contact">Contact</md-filled-button>
      <site-img src="create.jpg"></site-img>
    `}};De.styles=g`
    :host {
      display: grid;
      overflow: hidden;
      grid: "header" "img" "content" "button";
      grid-auto-rows: min-content;
      grid-template-rows: auto;
      margin: 112px 8px;
    }
    @media screen and (min-width: 768px) {
      :host {
        grid: "header img" auto "content img" auto "button img" auto ". img" 1fr / 1fr 1fr;
        grid-auto-rows: min-content;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
      }
    }
    header {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
      grid-area: header;
      text-align: center;
    }
    @media screen and (min-width: 768px) {
      header {
        font-size: 3rem;
        text-align: start;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      grid-area: content;
    }
    md-filled-button {
      grid-area: button;
    }
    @media screen and (min-width: 768px) {
      md-filled-button {
        justify-self: start;
        width: min-content;
      }
    }
    site-img {
      grid-area: img;
      height: 4in;
    }
  `;De=s([y("site-cta")],De);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const kr=g`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}/*# sourceMappingURL=elevated-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ot(i,e){e.bubbles&&(!i.shadowRoot||e.composed)&&e.stopPropagation();const t=Reflect.construct(e.constructor,[e.type,e]),r=i.dispatchEvent(t);return r||e.preventDefault(),r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class O extends m{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return p`
      <div class="container ${z(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(e){e.has("disabled")&&e.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled,"has-icon":this.hasIcon}}renderContainerContent(){return p`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return p`<span class="outline"></span>`}renderLeadingIcon(){return p`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return p`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements({flatten:!0}).length>0}}Ae(O);O.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],O.prototype,"disabled",void 0);s([n({type:Boolean,attribute:"always-focusable"})],O.prototype,"alwaysFocusable",void 0);s([n()],O.prototype,"label",void 0);s([n({type:Boolean,reflect:!0,attribute:"has-icon"})],O.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J="aria-label-remove";class Mr extends O{get ariaLabelRemove(){if(this.hasAttribute(J))return this.getAttribute(J);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const t=this.ariaLabelRemove;e!==t&&(e===null?this.removeAttribute(J):this.setAttribute(J,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&e?.trailing&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return p`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(e){const t=e.key==="ArrowLeft",r=e.key==="ArrowRight";if(!t&&!r||!this.primaryAction||!this.trailingAction)return;const a=getComputedStyle(this).direction==="rtl"?t:r,l=this.primaryAction?.matches(":focus-within"),c=this.trailingAction?.matches(":focus-within");if(a&&c||!a&&l)return;e.preventDefault(),e.stopPropagation(),(a?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:t}=this;!e||!t||(e.tabIndex=-1,t.addEventListener("focusout",()=>{e.tabIndex=0},{once:!0}))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zr({ariaLabel:i,disabled:e,focusListener:t,tabbable:r=!1}){return p`
    <button
      class="trailing action"
      aria-label=${i}
      tabindex=${r?h:-1}
      @click=${Or}
      @focus=${t}>
      <md-focus-ring part="trailing-focus-ring"></md-focus-ring>
      <md-ripple ?disabled=${e}></md-ripple>
      <span class="trailing icon" aria-hidden="true">
        <slot name="remove-trailing-icon">
          <svg viewBox="0 96 960 960">
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </slot>
      </span>
      <span class="touch"></span>
    </button>
  `}function Or(i){this.disabled||(i.stopPropagation(),!this.dispatchEvent(new Event("remove",{cancelable:!0})))||this.remove()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class N extends Mr{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:t}=this;return p`
      <button
        class="primary action"
        id="button"
        aria-label=${t||h}
        aria-pressed=${this.selected}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        @click=${this.handleClick}
        >${e}</button
      >
    `}renderLeadingIcon(){return this.selected?p`
      <slot name="selected-icon">
        <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
      </slot>
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?zr({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):h}renderOutline(){return this.elevated?p`<md-elevation></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const t=this.selected;if(this.selected=!this.selected,!Ot(this,e)){this.selected=t;return}}}s([n({type:Boolean})],N.prototype,"elevated",void 0);s([n({type:Boolean})],N.prototype,"removable",void 0);s([n({type:Boolean,reflect:!0})],N.prototype,"selected",void 0);s([n({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],N.prototype,"hasSelectedIcon",void 0);s([D(".primary.action")],N.prototype,"primaryAction",void 0);s([D(".trailing.action")],N.prototype,"trailingAction",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Nr=g`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_container-shape: var(--md-filter-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px);--_container-shape-start-start: var( --md-filter-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filter-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filter-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filter-chip-container-shape-end-start, var(--_container-shape) )}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}/*# sourceMappingURL=filter-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Pr=g`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}/*# sourceMappingURL=selectable-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Yr=g`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button:not(:disabled){cursor:inherit}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Fr=g`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}/*# sourceMappingURL=trailing-icon-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Te=class extends N{};Te.styles=[Yr,kr,Fr,Pr,Nr];Te=s([y("md-filter-chip")],Te);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ur extends x{renderElevationOrOutline(){return p`<div class="outline"></div>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const qr=g`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Re=class extends Ur{};Re.styles=[et,qr];Re=s([y("md-outlined-button")],Re);const Vr=500,Hr="auto",Zr=300,se=24,ne="--_masonry-layout-col-count",de="--_masonry-layout-gap",vt=1,gt=new Map;function ee(i,e,t){const r=parseFloat(i.getAttribute(e)||"");return isNaN(r)?t:r}function mt(i,e,t){return isNaN(e)?Math.max(1,Math.ceil(i/t)):e}function Gr(i,e,t){const r=gt.get(t);r!=null&&window.clearTimeout(r),gt.set(t,window.setTimeout(i,e))}function jr(i){let e=0,t=1/0;return i.forEach((r,o)=>{r<t&&(t=r,e=o)}),e}const Nt=document.createElement("template");Nt.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
    }

    .column {
	  max-width: calc((100% / var(${ne}, 1) - ((var(${de}, ${se}px) * (var(${ne}, 1) - 1) / var(${ne}, 1)))));
	  width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .column:not(:last-child) {
      margin-inline-end: var(${de}, ${se}px);
    }

    .column ::slotted(*) {
      margin-block-end: var(${de}, ${se}px);
      box-sizing: border-box;
      width: 100%;
    }

    /* Hide the items that has not yet found the correct slot */
    #unset-items {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  </style>
  <div id="unset-items">
    <slot></slot>
  </div>
`;class Wr extends HTMLElement{static get observedAttributes(){return["maxcolwidth","gap","cols"]}set maxColWidth(e){this.setAttribute("maxcolwidth",e.toString())}get maxColWidth(){return ee(this,"maxcolwidth",Vr)}set cols(e){this.setAttribute("cols",e.toString())}get cols(){return ee(this,"cols",Hr)}set gap(e){this.setAttribute("gap",e.toString())}get gap(){return ee(this,"gap",se)}set debounce(e){this.setAttribute("debounce",e.toString())}get debounce(){return ee(this,"debounce",Zr)}get $columns(){return Array.from(this.shadowRoot.querySelectorAll(".column"))}constructor(){super(),this.debounceId=`layout_${Math.random()}`,this.ro=void 0,this.currentRequestAnimationFrameCallback=void 0,this.attachShadow({mode:"open"}).appendChild(Nt.content.cloneNode(!0)),this.onSlotChange=this.onSlotChange.bind(this),this.onResize=this.onResize.bind(this),this.layout=this.layout.bind(this),this.$unsetElementsSlot=this.shadowRoot.querySelector("#unset-items > slot")}connectedCallback(){this.$unsetElementsSlot.addEventListener("slotchange",this.onSlotChange),"ResizeObserver"in window?(this.ro=new ResizeObserver(this.onResize),this.ro.observe(this)):window.addEventListener("resize",this.onResize)}disconnectedCallback(){this.$unsetElementsSlot.removeEventListener("slotchange",this.onSlotChange),window.removeEventListener("resize",this.onResize),this.ro!=null&&this.ro.unobserve(this)}attributeChangedCallback(e){switch(e){case"gap":this.style.setProperty(de,`${this.gap}px`);break}this.scheduleLayout()}onSlotChange(){(this.$unsetElementsSlot.assignedNodes()||[]).filter(t=>t.nodeType===vt).length>0&&this.layout()}onResize(e){const{width:t}=e!=null&&Array.isArray(e)&&e.length>0?e[0].contentRect:{width:this.offsetWidth};mt(t,this.cols,this.maxColWidth)!==this.$columns.length&&this.scheduleLayout()}renderCols(e){const t=this.$columns;if(t.length!==e){for(const r of t)r.parentNode&&r.parentNode.removeChild(r);for(let r=0;r<e;r++){const o=document.createElement("div");o.classList.add("column"),o.setAttribute("part",`column column-${r}`);const a=document.createElement("slot");a.setAttribute("name",r.toString()),o.appendChild(a),this.shadowRoot.appendChild(o)}this.style.setProperty(ne,e.toString())}}scheduleLayout(e=this.debounce){Gr(this.layout,e,this.debounceId)}layout(){this.currentRequestAnimationFrameCallback!=null&&window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback),this.currentRequestAnimationFrameCallback=requestAnimationFrame(()=>{const e=this.gap,t=Array.from(this.children).filter(l=>l.nodeType===vt),r=mt(this.offsetWidth,this.cols,this.maxColWidth),o=Array(r).fill(0),a=[];for(const l of t){const c=l.getBoundingClientRect().height;let d=jr(o);o[d]+=c+e;const f=d.toString();l.slot!==f&&a.push(()=>l.slot=f)}for(const l of a)l();this.renderCols(r)})}}customElements.define("masonry-layout",Wr);let F=class extends m{constructor(){super(...arguments),this.projects=[],this.showing=1,this.loading=!1}loadMore(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.showing+=1},1e3)}render(){const e=[];for(let t=0;t<this.projects.length&&e.length<this.showing;t+=4)e.push(this.projects.slice(t,t+4));return p`
      <header>Portfolio Gallery</header>
      <ul>
        <li><md-filter-chip label="Coffee"></md-filter-chip></li>
        <li><md-filter-chip label="Nature"></md-filter-chip></li>
        <li><md-filter-chip label="Things"></md-filter-chip></li>
      </ul>
      <masonry-layout cols="2">
        ${e.map(t=>p`
            ${t.map((r,o)=>p`
                <a
                  href="projects/${r.name}"
                  class="project-card"
                  style="height: ${o%3+2}in;"
                  aria-label="${r.name}"
                >
                  <div
                    class="project-image"
                    style="background-image: url('${r.path}');"
                  ></div>
                </a>
              `)}
          `)}
      </masonry-layout>
      <md-outlined-button @click=${()=>this.loadMore()}
        >${this.loading?"Loading...":"Load More"}</md-outlined-button
      >
    `}};F.styles=g`
    :host {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      align-items: center;
      gap: 16px;
      color: var(--md-sys-color-on-background);
    }
    * {
      box-sizing: border-box;
    }
    header {
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    masonry-layout {
      align-self: stretch;
      width: 100%;
    }
    .project-card {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: thin solid var(--md-sys-color-on-primary);
      position: relative;
      width: 100%;
    }
    .project-card {
      --md-elevation-level: 0;
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }
    /* .project-card:nth-child(2n + 1) {
      height: 2in;
    }
    .project-card:nth-child(2n) {
      height: 3in;
    } */
    .project-card > a:hover {
      --md-elevation-level: 2;
    }
    .project-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;
      width: 100%;
      height: 100%;
    }
  `;s([n({type:Array})],F.prototype,"projects",void 0);s([w()],F.prototype,"showing",void 0);s([w()],F.prototype,"loading",void 0);F=s([y("site-gallery")],F);let ue=class extends m{render(){return this.src?p`<img src=${this.src} alt="Site logo" />`:p`<img src=${Kr} alt="Site logo" />`}};ue.styles=g`
    :host {
      display: block;
      overflow: hidden;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `;s([n({type:String})],ue.prototype,"src",void 0);ue=s([y("site-img")],ue);const Kr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAGQCAYAAAAaxpygAAAAAXNSR0IArs4c6QAAHw1JREFUeF7t3XuLFcfWB+A+kgxGRsdLBhkGkXz/j5Q/goio8T5OopGJ56XmxcSjjrP32r26V1c/DYcTyFT1qmdV4Efvvvzn119//e/gIECAAAECBAgQKCPwHwGtTC8UQoAAAQIECBA4FxDQbAQCBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQIEBDQ7AECBAgQIECAQDEBAa1YQ5RDgAABAgQI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";let Se=class extends m{render(){return tr`
      <svg width="63" height="28" viewBox="0 0 63 28" xmlns="http://www.w3.org/2000/svg">
      <g id="logo">
      <path id="Vector" d="M0.564453 21.5H13.2485V17.944H5.10045V1.47998H0.564453V21.5Z" />
      <path id="Vector_2" d="M21.587 18.728C19.291 18.728 18.003 17.048 18.003 14.248V14.024C18.003 11.224 19.347 9.60002 21.587 9.60002C23.855 9.60002 25.171 11.28 25.171 14.08V14.276C25.171 17.048 23.855 18.728 21.587 18.728ZM21.559 21.808C25.955 21.808 29.287 18.868 29.287 14.248V14.024C29.287 9.46002 25.983 6.52002 21.587 6.52002C17.191 6.52002 13.859 9.51602 13.859 14.108V14.332C13.859 18.896 17.191 21.808 21.559 21.808Z" />
      <path id="Vector_3" d="M37.665 26.904C42.481 26.904 45.3649 24.692 45.3929 20.352V6.85602H41.361V9.04002C40.521 7.55602 39.0929 6.52002 36.7129 6.52002C33.0729 6.52002 30.2729 9.46002 30.2729 13.66V13.856C30.2729 18.196 33.1009 20.856 36.6569 20.856C38.8129 20.856 40.549 19.568 41.361 18.14V20.352C41.361 22.648 40.129 23.936 37.665 23.936C35.593 23.936 34.669 23.096 34.417 21.808H30.3849C30.7769 24.832 32.933 26.904 37.665 26.904ZM37.861 17.804C35.845 17.804 34.417 16.292 34.417 13.856V13.632C34.417 11.224 35.677 9.60002 37.945 9.60002C40.1569 9.60002 41.4729 11.112 41.4729 13.604V13.8C41.4729 16.292 39.989 17.804 37.861 17.804Z" />
      <path id="Vector_4" d="M54.9616 18.728C52.6656 18.728 51.3776 17.048 51.3776 14.248V14.024C51.3776 11.224 52.7216 9.60002 54.9616 9.60002C57.2296 9.60002 58.5456 11.28 58.5456 14.08V14.276C58.5456 17.048 57.2296 18.728 54.9616 18.728ZM54.9336 21.808C59.3296 21.808 62.6616 18.868 62.6616 14.248V14.024C62.6616 9.46002 59.3576 6.52002 54.9616 6.52002C50.5656 6.52002 47.2336 9.51602 47.2336 14.108V14.332C47.2336 18.896 50.5656 21.808 54.9336 21.808Z" />
      </g>
      </svg>
    `}};Se.styles=g`
    :host {
      padding-left: 8px;
    }
    svg {
      fill: var(--md-sys-color-primary);
    }
  `;Se=s([y("site-logo")],Se);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xr extends x{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Jr=g`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Le=class extends Xr{};Le.styles=[et,Jr];Le=s([y("md-text-button")],Le);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=Symbol.for(""),ei=i=>{if(i?.r===Pt)return i?._$litStatic$},fe=(i,...e)=>({_$litStatic$:e.reduce((t,r,o)=>t+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[o+1],i[0]),r:Pt}),bt=new Map,ti=i=>(e,...t)=>{const r=t.length;let o,a;const l=[],c=[];let d,f=0,b=!1;for(;f<r;){for(d=e[f];f<r&&(a=t[f],(o=ei(a))!==void 0);)d+=o+e[++f],b=!0;f!==r&&c.push(a),l.push(d),f++}if(f===r&&l.push(e[r]),b){const v=l.join("$$lit$$");(e=bt.get(v))===void 0&&(l.raw=l,bt.set(v,e=l)),t=c}return i(e,...t)},Yt=ti(p);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function At(i,e=!0){return e&&getComputedStyle(i).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ri=Je(m);class E extends ri{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=At(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[C].form}get labels(){return this[C].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?fe`div`:fe`button`,{ariaLabel:t,ariaHasPopup:r,ariaExpanded:o}=this,a=t&&this.ariaLabelSelected,l=this.toggle?this.selected:h;let c=h;return this.href||(c=a&&this.selected?this.ariaLabelSelected:t),Yt`<${e}
        class="icon-button ${z(this.getRenderClasses())}"
        id="button"
        aria-label="${c||h}"
        aria-haspopup="${!this.href&&r||h}"
        aria-expanded="${!this.href&&o||h}"
        aria-pressed="${l}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?h:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():h}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return p`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||h}"
        aria-label="${e||h}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return p`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return p`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return p`<span class="touch"></span>`}renderFocusRing(){return p`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return p`<md-ripple
      for=${this.href?"link":h}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=At(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Ae(E),zt(E);E.formAssociated=!0;E.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],E.prototype,"disabled",void 0);s([n({type:Boolean,attribute:"flip-icon-in-rtl"})],E.prototype,"flipIconInRtl",void 0);s([n()],E.prototype,"href",void 0);s([n()],E.prototype,"target",void 0);s([n({attribute:"aria-label-selected"})],E.prototype,"ariaLabelSelected",void 0);s([n({type:Boolean})],E.prototype,"toggle",void 0);s([n({type:Boolean,reflect:!0})],E.prototype,"selected",void 0);s([n()],E.prototype,"type",void 0);s([n({reflect:!0})],E.prototype,"value",void 0);s([w()],E.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ii=g`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const oi=g`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ke=class extends E{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ke.styles=[ii,oi];ke=s([y("md-icon-button")],ke);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ai extends m{render(){return p`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const li=g`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Me=class extends ai{};Me.styles=[li];Me=s([y("md-icon")],Me);let ve=class extends m{constructor(){super(...arguments),this.theme=document.body.classList.contains("dark")?"dark":"light"}setTheme(){this.theme=document.body.classList.contains("dark")?"light":"dark",this.theme=="dark"?(document.body.classList.add("dark"),document.body.classList.remove("light")):(document.body.classList.add("light"),document.body.classList.remove("dark")),localStorage.setItem("theme",this.theme)}render(){return p`
      <site-logo></site-logo>
      <span style="flex-grow: 1;"></span>
      <md-icon-button @click=${()=>this.setTheme()} aria-label="Toggle theme"
        ><md-icon
          >${this.theme=="light"?"dark_mode":"light_mode"}</md-icon
        ></md-icon-button
      >
      <md-text-button href=".">Portfolio</md-text-button>
      <md-text-button href="contact">Contact</md-text-button>
    `}};ve.styles=g`
    :host {
      display: flex;
      height: 72px;
      align-items: center;
      flex-direction: row;
      gap: 8px;
    }
    @media screen and (min-width: 481px) {
      :host {
        gap: 16px;
      }
    }
    @media screen and (min-width: 769px) {
      :host {
        gap: 32px;
      }
    }
    a {
      text-decoration: none;
      display: block;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
    a:hover {
      text-decoration: underline;
    }
    md-text-button {
      --_label-text-color: var(--md-sys-color-on-background);
    }
  `;s([w()],ve.prototype,"theme",void 0);ve=s([y("site-nav")],ve);let ze=class extends m{render(){return p`
      <header>Contact Information</header>
      <p class="content">Feel free to reach out to us for any inquiries.</p>
      <div class="email">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.6666 5.33325H5.33329C3.86263 5.33325 2.66663 6.52925 2.66663 7.99992V23.9999C2.66663 25.4706 3.86263 26.6666 5.33329 26.6666H26.6666C28.1373 26.6666 29.3333 25.4706 29.3333 23.9999V7.99992C29.3333 6.52925 28.1373 5.33325 26.6666 5.33325ZM26.6666 7.99992V8.68125L16 16.9786L5.33329 8.68259V7.99992H26.6666ZM5.33329 23.9999V12.0586L15.1813 19.7186C15.4148 19.902 15.7031 20.0017 16 20.0017C16.2969 20.0017 16.5851 19.902 16.8186 19.7186L26.6666 12.0586L26.6693 23.9999H5.33329Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Email
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          Send us an email
        </div>
        <a
          style="color: var(--md-sys-color-primary); align-self: stretch; font-size: 16px; font-weight: 400; text-decoration: underline; line-height: 24px; word-wrap: break-word"
          type="email"
          href="mailto:demo@example.com"
        >
          demo@example.com
        </a>
      </div>
      <div class="phone">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6095 16.3908C23.4857 16.2668 23.3388 16.1685 23.177 16.1014C23.0153 16.0344 22.8419 15.9998 22.6668 15.9998C22.4917 15.9998 22.3183 16.0344 22.1565 16.1014C21.9948 16.1685 21.8478 16.2668 21.7241 16.3908L19.5988 18.5161C18.6135 18.2228 16.7748 17.5561 15.6095 16.3908C14.4441 15.2254 13.7775 13.3868 13.4841 12.4014L15.6095 10.2761C15.7334 10.1524 15.8317 10.0054 15.8988 9.8437C15.9659 9.68194 16.0004 9.50855 16.0004 9.33344C16.0004 9.15833 15.9659 8.98493 15.8988 8.82318C15.8317 8.66143 15.7334 8.51449 15.6095 8.39077L10.2761 3.05744C10.1524 2.93351 10.0055 2.83519 9.84371 2.76811C9.68196 2.70103 9.50856 2.6665 9.33345 2.6665C9.15834 2.6665 8.98495 2.70103 8.82319 2.76811C8.66144 2.83519 8.5145 2.93351 8.39079 3.05744L4.77479 6.67344C4.26812 7.18011 3.98279 7.87611 3.99345 8.58677C4.02412 10.4854 4.52679 17.0801 9.72412 22.2774C14.9215 27.4748 21.5161 27.9761 23.4161 28.0081H23.4535C24.1575 28.0081 24.8228 27.7308 25.3268 27.2268L28.9428 23.6108C29.0667 23.4871 29.165 23.3401 29.2321 23.1784C29.2992 23.0166 29.3337 22.8432 29.3337 22.6681C29.3337 22.493 29.2992 22.3196 29.2321 22.1578C29.165 21.9961 29.0667 21.8492 28.9428 21.7254L23.6095 16.3908ZM23.4401 25.3401C21.7761 25.3121 16.0828 24.8654 11.6095 20.3908C7.12145 15.9028 6.68679 10.1894 6.66012 8.55877L9.33345 5.88544L12.7815 9.33344L11.0575 11.0574C10.9007 11.214 10.7855 11.4072 10.7222 11.6195C10.6589 11.8318 10.6495 12.0566 10.6948 12.2734C10.7268 12.4268 11.5095 16.0628 13.7228 18.2761C15.9361 20.4894 19.5721 21.2721 19.7255 21.3041C19.9422 21.3507 20.1672 21.3421 20.3796 21.2789C20.5921 21.2158 20.7853 21.1002 20.9415 20.9428L22.6668 19.2188L26.1148 22.6668L23.4401 25.3401Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Phone
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          Give us a call
        </div>
        <a
          style="color: var(--md-sys-color-primary); align-self: stretch; font-size: 16px; font-weight: 400; text-decoration: underline; line-height: 24px; word-wrap: break-word"
          type="tel"
          href="tel:+15550000000"
        >
          +1 (555) 000-0000
        </a>
      </div>
      <div class="address">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0001 18.6665C18.9415 18.6665 21.3335 16.2745 21.3335 13.3332C21.3335 10.3918 18.9415 7.99984 16.0001 7.99984C13.0588 7.99984 10.6668 10.3918 10.6668 13.3332C10.6668 16.2745 13.0588 18.6665 16.0001 18.6665ZM16.0001 10.6665C17.4708 10.6665 18.6668 11.8625 18.6668 13.3332C18.6668 14.8038 17.4708 15.9998 16.0001 15.9998C14.5295 15.9998 13.3335 14.8038 13.3335 13.3332C13.3335 11.8625 14.5295 10.6665 16.0001 10.6665ZM15.2268 29.0852C15.4525 29.2463 15.7229 29.333 16.0002 29.333C16.2775 29.333 16.5478 29.2463 16.7735 29.0852C17.1788 28.7985 26.7055 21.9198 26.6668 13.3332C26.6668 7.45184 21.8815 2.6665 16.0002 2.6665C10.1188 2.6665 5.33349 7.45184 5.33349 13.3265C5.29482 21.9198 14.8215 28.7985 15.2268 29.0852ZM16.0002 5.33317C20.4122 5.33317 24.0002 8.92117 24.0002 13.3398C24.0282 19.2572 18.1495 24.5705 16.0002 26.3132C13.8522 24.5692 7.97216 19.2545 8.00016 13.3332C8.00016 8.92117 11.5882 5.33317 16.0002 5.33317Z"
            fill="currentcolor"
          />
          <path
            d="M16.0001 18.6665C18.9415 18.6665 21.3335 16.2745 21.3335 13.3332C21.3335 10.3918 18.9415 7.99984 16.0001 7.99984C13.0588 7.99984 10.6668 10.3918 10.6668 13.3332C10.6668 16.2745 13.0588 18.6665 16.0001 18.6665ZM16.0001 10.6665C17.4708 10.6665 18.6668 11.8625 18.6668 13.3332C18.6668 14.8038 17.4708 15.9998 16.0001 15.9998C14.5295 15.9998 13.3335 14.8038 13.3335 13.3332C13.3335 11.8625 14.5295 10.6665 16.0001 10.6665ZM15.2268 29.0852C15.4525 29.2463 15.7229 29.333 16.0002 29.333C16.2775 29.333 16.5478 29.2463 16.7735 29.0852C17.1788 28.7985 26.7055 21.9198 26.6668 13.3332C26.6668 7.45184 21.8815 2.6665 16.0002 2.6665C10.1188 2.6665 5.33349 7.45184 5.33349 13.3265C5.29482 21.9198 14.8215 28.7985 15.2268 29.0852ZM16.0002 5.33317C20.4122 5.33317 24.0002 8.92117 24.0002 13.3398C24.0282 19.2572 18.1495 24.5705 16.0002 26.3132C13.8522 24.5692 7.97216 19.2545 8.00016 13.3332C8.00016 8.92117 11.5882 5.33317 16.0002 5.33317Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Office
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          6th St. & Independence Ave., SW Washington, DC
        </div>
        <div
          style="align-self: stretch; height: 40px; padding-top: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex"
        >
          <div
            style="justify-content: center; align-items: center; gap: 8px; display: inline-flex"
          >
            <a
              style="color: var(--md-sys-color-primary);font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
              href="https://maps.app.goo.gl/D6kSA3xVkssPZ8S26"
            >
              Get Directions
            </a>
            <div style="width: 24px; height: 24px; position: relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.2966895281448!2d-77.02061046382558!3d38.88767838160929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b78312520a53%3A0x36fc6a2d9f346790!2sIndependence%20Ave%20SW%20%26%206th%20St%20SW%2C%20Washington%2C%20DC%2020004!5e0!3m2!1sen!2sus!4v1708106426974!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    `}};ze.styles=g`
    :host {
      display: grid;
      grid: "header img" "content img" "email img" "phone img" "address img" / 1fr 1fr;
      margin: 6rem 0;
      gap: 1rem;
    }
    header {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
      grid-area: header;
    }
    .content {
      grid-area: content;
    }
    .email {
      grid-area: email;
    }
    .phone {
      grid-area: phone;
    }
    .address {
      grid-area: address;
    }
    iframe {
      grid-area: img;
    }
    .contact-info {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  `;ze=s([y("site-contact-information")],ze);let Oe=class extends m{render(){return p`
      <div
        style="width: 100%; height: 100%; flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: inline-flex"
      >
        <div
          style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex"
        >
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex"
          >
            <site-logo></site-logo>
          </div>
          <div
            style="justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex"
          >
            <a
              style=" font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
              href="contact"
            >
              Contact Us
            </a>
            <a
              style=" font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
              href="."
            >
              Portfolio
            </a>
          </div>
        </div>
        <div
          style="align-self: stretch; height: 54px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex"
        >
          <div
            style="align-self: stretch; height: 1px; background: var(--md-sys-color-on-background); border: 1px var(--md-sys-color-on-background) solid"
          ></div>
          <div
            style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex"
          >
            <div
              style=" font-size: 14px;  font-weight: 400; line-height: 21px; word-wrap: break-word"
            >
              © 2023 Example. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    `}};Oe.styles=g`
    :host {
      margin: 80px 0;
    }
    a {
      color: var(--md-sys-color-on-background);
    }
  `;Oe=s([y("site-footer")],Oe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class A extends m{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),r=this.renderOutline?.(e),o={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return p`
      <div class="field ${z(o)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${r?h:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return h;const r=p`<span>${e}</span>`,o=t?p`<span class="counter">${t}</span>`:h,l=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":h;return p`
      <div class="supporting-text" role=${l}>${r}${o}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)Dt(p`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return h;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!t,floating:e,resting:!e},o=`${this.label}${this.required?"*":""}`;return p`
      <span class="label ${z(r)}" aria-hidden=${!t}
        >${o}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);const r=e||t,o=this.focused||this.populated;r!==o&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Lt.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:r,y:o,height:a}=e.getBoundingClientRect(),{x:l,y:c,height:d}=t.getBoundingClientRect(),f=e.scrollWidth,b=t.scrollWidth,v=b/f,I=l-r,B=c-o+Math.round((d-a*v)/2),S=`translateX(${I}px) translateY(${B}px) scale(${v})`,tt="translateX(0) translateY(0) scale(1)",rt=t.clientWidth,X=b>rt?`${rt/v}px`:"";return this.focused||this.populated?[{transform:S,width:X},{transform:tt,width:X}]:[{transform:tt,width:X},{transform:S,width:X}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}s([n({type:Boolean})],A.prototype,"disabled",void 0);s([n({type:Boolean})],A.prototype,"error",void 0);s([n({type:Boolean})],A.prototype,"focused",void 0);s([n()],A.prototype,"label",void 0);s([n({type:Boolean})],A.prototype,"populated",void 0);s([n({type:Boolean})],A.prototype,"required",void 0);s([n({type:Boolean})],A.prototype,"resizable",void 0);s([n({attribute:"supporting-text"})],A.prototype,"supportingText",void 0);s([n({attribute:"error-text"})],A.prototype,"errorText",void 0);s([n({type:Number})],A.prototype,"count",void 0);s([n({type:Number})],A.prototype,"max",void 0);s([n({type:Boolean,attribute:"has-start"})],A.prototype,"hasStart",void 0);s([n({type:Boolean,attribute:"has-end"})],A.prototype,"hasEnd",void 0);s([be({slot:"aria-describedby"})],A.prototype,"slottedAriaDescribedBy",void 0);s([w()],A.prototype,"isAnimating",void 0);s([w()],A.prototype,"refreshErrorAlert",void 0);s([w()],A.prototype,"disableTransitions",void 0);s([D(".label.floating")],A.prototype,"floatingLabelEl",void 0);s([D(".label.resting")],A.prototype,"restingLabelEl",void 0);s([D(".container")],A.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class si extends A{renderBackground(){return p`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return p`<div class="active-indicator"></div>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ni=g`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}/*# sourceMappingURL=filled-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const di=g`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ne=class extends si{};Ne.styles=[di,ni];Ne=s([y("md-filled-field")],Ne);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ci=g`:host{--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}/*# sourceMappingURL=filled-styles.css.map */
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=i=>i.strings===void 0,pi={},ui=(i,e=pi)=>i._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=Ke(class extends Xe{constructor(i){if(super(i),i.type!==T.PROPERTY&&i.type!==T.ATTRIBUTE&&i.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!hi(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===Q||e===h)return e;const t=i.element,r=i.name;if(i.type===T.PROPERTY){if(e===t[r])return Q}else if(i.type===T.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return Q}else if(i.type===T.ATTRIBUTE&&t.getAttribute(r)===e+"")return Q;return ui(i),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft="important",fi=" !"+Ft,xt=Ke(class extends Xe{constructor(i){if(super(i),i.type!==T.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const o=e[r];if(o!=null){this.ft.add(r);const a=typeof o=="string"&&o.endsWith(fi);r.includes("-")||a?t.setProperty(r,a?o.slice(0,-11):o,a?Ft:""):t[r]=o}}return Q}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vi={fromAttribute(i){return i??""},toAttribute(i){return i||null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pe=Symbol("createValidator"),Ye=Symbol("getValidityAnchor"),_e=Symbol("privateValidator"),$=Symbol("privateSyncValidity"),te=Symbol("privateCustomValidationMessage");function gi(i){var e;class t extends i{constructor(){super(...arguments),this[e]=""}get validity(){return this[$](),this[C].validity}get validationMessage(){return this[$](),this[C].validationMessage}get willValidate(){return this[$](),this[C].willValidate}checkValidity(){return this[$](),this[C].checkValidity()}reportValidity(){return this[$](),this[C].reportValidity()}setCustomValidity(o){this[te]=o,this[$]()}requestUpdate(o,a,l){super.requestUpdate(o,a,l),this[$]()}firstUpdated(o){super.firstUpdated(o),this[$]()}[(e=te,$)](){this[_e]||(this[_e]=this[Pe]());const{validity:o,validationMessage:a}=this[_e].getValidity(),l=!!this[te],c=this[te]||a;this[C].setValidity({...o,customError:l},c,this[Ye]()??void 0)}[Pe](){throw new Error("Implement [createValidator]")}[Ye](){throw new Error("Implement [getValidityAnchor]")}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ce=Symbol("getFormValue"),_t=Symbol("getFormState");function mi(i){class e extends i{get form(){return this[C].form}get labels(){return this[C].labels}get name(){return this.getAttribute("name")??""}set name(r){this.setAttribute("name",r)}get disabled(){return this.hasAttribute("disabled")}set disabled(r){this.toggleAttribute("disabled",r)}attributeChangedCallback(r,o,a){if(r==="name"||r==="disabled"){const l=r==="disabled"?o!==null:o;this.requestUpdate(r,l);return}super.attributeChangedCallback(r,o,a)}requestUpdate(r,o,a){super.requestUpdate(r,o,a),this[C].setFormValue(this[ce](),this[_t]())}[ce](){throw new Error("Implement [getFormValue]")}[_t](){return this[ce]()}formDisabledCallback(r){this.disabled=r}}return e.formAssociated=!0,s([n({noAccessor:!0})],e.prototype,"name",null),s([n({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fe=Symbol("onReportValidity"),re=Symbol("privateCleanupFormListeners"),ie=Symbol("privateDoNotReportInvalid"),oe=Symbol("privateIsSelfReportingValidity"),ae=Symbol("privateCallOnReportValidity");function bi(i){var e,t,r;class o extends i{constructor(...l){super(...l),this[e]=new AbortController,this[t]=!1,this[r]=!1,this.addEventListener("invalid",c=>{this[ie]||!c.isTrusted||this.addEventListener("invalid",()=>{this[ae](c)},{once:!0})},{capture:!0})}checkValidity(){this[ie]=!0;const l=super.checkValidity();return this[ie]=!1,l}reportValidity(){this[oe]=!0;const l=super.reportValidity();return l&&this[ae](null),this[oe]=!1,l}[(e=re,t=ie,r=oe,ae)](l){const c=l?.defaultPrevented;c||(this[Fe](l),!(!c&&l?.defaultPrevented))||(this[oe]||xi(this[C].form,this))&&this.focus()}[Fe](l){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(l){super.formAssociatedCallback&&super.formAssociatedCallback(l),this[re].abort(),l&&(this[re]=new AbortController,Ai(this,l,()=>{this[ae](null)},this[re].signal))}}return o}function Ai(i,e,t,r){const o=yi(e);let a=!1,l,c=!1;o.addEventListener("before",()=>{c=!0,l=new AbortController,a=!1,i.addEventListener("invalid",()=>{a=!0},{signal:l.signal})},{signal:r}),o.addEventListener("after",()=>{c=!1,l?.abort(),!a&&t()},{signal:r}),e.addEventListener("submit",()=>{c||t()},{signal:r})}const Ce=new WeakMap;function yi(i){if(!Ce.has(i)){const e=new EventTarget;Ce.set(i,e);for(const t of["reportValidity","requestSubmit"]){const r=i[t];i[t]=function(){e.dispatchEvent(new Event("before"));const o=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),o}}}return Ce.get(i)}function xi(i,e){if(!i)return!0;let t;for(const r of i.elements)if(r.matches(":invalid")){t=r;break}return t===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _i{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:r,validationMessage:o}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:o,validity:{badInput:r.badInput,customError:r.customError,patternMismatch:r.patternMismatch,rangeOverflow:r.rangeOverflow,rangeUnderflow:r.rangeUnderflow,stepMismatch:r.stepMismatch,tooLong:r.tooLong,tooShort:r.tooShort,typeMismatch:r.typeMismatch,valueMissing:r.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ci extends _i{computeValidity({state:e,renderedControl:t}){let r=t;q(e)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);const o=q(e)?r:null;if(o&&(o.type=e.type),r.value!==e.value&&(r.value=e.value),r.required=e.required,o){const a=e;a.pattern?o.pattern=a.pattern:o.removeAttribute("pattern"),a.min?o.min=a.min:o.removeAttribute("min"),a.max?o.max=a.max:o.removeAttribute("max"),a.step?o.step=a.step:o.removeAttribute("step")}return(e.minLength??-1)>-1?r.setAttribute("minlength",String(e.minLength)):r.removeAttribute("minlength"),(e.maxLength??-1)>-1?r.setAttribute("maxlength",String(e.maxLength)):r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:e},{state:t}){const r=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return!q(e)||!q(t)?r:r&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step}copy({state:e}){return{state:q(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:r,min:o,max:a,step:l}=e;return{...this.copySharedState(e),type:t,pattern:r,min:o,max:a,step:l}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:r,maxLength:o}){return{value:e,required:t,minLength:r,maxLength:o}}}function q(i){return i.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ei=bi(gi(mi(Je(m))));class u extends Ei{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,r){this.getInputOrTextarea().setSelectionRange(e,t,r)}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,r){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,r)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return p`
      <span class="text-field ${z(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return Yt`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return p`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return p`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||h,r=this.autocomplete,o=(this.maxLength??-1)>-1,a=(this.minLength??-1)>-1;if(this.type==="textarea")return p`
        <textarea
          class="input"
          style=${xt(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||h}
          ?disabled=${this.disabled}
          maxlength=${o?this.maxLength:h}
          minlength=${a?this.minLength:h}
          placeholder=${this.placeholder||h}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${yt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const l=this.renderPrefix(),c=this.renderSuffix(),d=this.inputMode;return p`
      <div class="input-wrapper">
        ${l}
        <input
          class="input"
          style=${xt(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||h}
          ?disabled=${this.disabled}
          inputmode=${d||h}
          max=${this.max||h}
          maxlength=${o?this.maxLength:h}
          min=${this.min||h}
          minlength=${a?this.minLength:h}
          pattern=${this.pattern||h}
          placeholder=${this.placeholder||h}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||h}
          type=${this.type}
          .value=${yt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?p`<span class="${z({suffix:t,prefix:!t})}">${e}</span>`:h}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){Ot(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[ce](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Pe](){return new Ci(()=>({state:this,renderedControl:this.inputOrTextarea}))}[Ye](){return this.inputOrTextarea}[Fe](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}Ae(u);u.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],u.prototype,"error",void 0);s([n({attribute:"error-text"})],u.prototype,"errorText",void 0);s([n()],u.prototype,"label",void 0);s([n({type:Boolean,reflect:!0})],u.prototype,"required",void 0);s([n()],u.prototype,"value",void 0);s([n({attribute:"prefix-text"})],u.prototype,"prefixText",void 0);s([n({attribute:"suffix-text"})],u.prototype,"suffixText",void 0);s([n({type:Boolean,attribute:"has-leading-icon"})],u.prototype,"hasLeadingIcon",void 0);s([n({type:Boolean,attribute:"has-trailing-icon"})],u.prototype,"hasTrailingIcon",void 0);s([n({attribute:"supporting-text"})],u.prototype,"supportingText",void 0);s([n({attribute:"text-direction"})],u.prototype,"textDirection",void 0);s([n({type:Number})],u.prototype,"rows",void 0);s([n({type:Number})],u.prototype,"cols",void 0);s([n({reflect:!0})],u.prototype,"inputMode",void 0);s([n()],u.prototype,"max",void 0);s([n({type:Number})],u.prototype,"maxLength",void 0);s([n()],u.prototype,"min",void 0);s([n({type:Number})],u.prototype,"minLength",void 0);s([n({type:Boolean,attribute:"no-spinner"})],u.prototype,"noSpinner",void 0);s([n()],u.prototype,"pattern",void 0);s([n({reflect:!0,converter:vi})],u.prototype,"placeholder",void 0);s([n({type:Boolean,reflect:!0})],u.prototype,"readOnly",void 0);s([n({type:Boolean,reflect:!0})],u.prototype,"multiple",void 0);s([n()],u.prototype,"step",void 0);s([n({reflect:!0})],u.prototype,"type",void 0);s([n({reflect:!0})],u.prototype,"autocomplete",void 0);s([w()],u.prototype,"dirty",void 0);s([w()],u.prototype,"focused",void 0);s([w()],u.prototype,"nativeError",void 0);s([w()],u.prototype,"nativeErrorText",void 0);s([D(".input")],u.prototype,"inputOrTextarea",void 0);s([D(".field")],u.prototype,"field",void 0);s([be({slot:"leading-icon"})],u.prototype,"leadingIcons",void 0);s([be({slot:"trailing-icon"})],u.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wi extends u{constructor(){super(...arguments),this.fieldTag=fe`md-filled-field`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Qi=g`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ue=class extends wi{constructor(){super(...arguments),this.fieldTag=fe`md-filled-field`}};Ue.styles=[Qi,ci];Ue=s([y("md-filled-text-field")],Ue);let qe=class extends m{render(){return p`
      <div
        style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 80px; display: inline-flex"
      >
        <div
          style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex"
        >
          <div
            style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex"
          >
            <div
              style="text-align: center; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word"
            >
              Get in touch
            </div>
            <div
              style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex"
            >
              <div
                style="align-self: stretch; font-size: 48px; font-weight: 700; line-height: 57.60px; word-wrap: break-word"
              >
                Contact me
              </div>
            </div>
          </div>
          <div
            style="padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex"
          >
            <div
              style="justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex"
            >
              <div style="width: 24px; height: 24px; position: relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <div
                style="font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
              >
                example@example.com
              </div>
            </div>
            <div
              style="justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex"
            >
              <div style="width: 24px; height: 24px; position: relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 12.293C17.6143 12.2 17.5041 12.1263 17.3828 12.076C17.2615 12.0257 17.1314 11.9998 17.0001 11.9998C16.8688 11.9998 16.7387 12.0257 16.6174 12.076C16.4961 12.1263 16.3859 12.2 16.2931 12.293L14.6991 13.887C13.9601 13.667 12.5811 13.167 11.7071 12.293C10.8331 11.419 10.3331 10.04 10.1131 9.30096L11.7071 7.70696C11.8 7.61417 11.8738 7.50397 11.9241 7.38265C11.9744 7.26134 12.0003 7.13129 12.0003 6.99996C12.0003 6.86862 11.9744 6.73858 11.9241 6.61726C11.8738 6.49595 11.8 6.38575 11.7071 6.29296L7.70709 2.29296C7.6143 2.20001 7.5041 2.12627 7.38278 2.07596C7.26147 2.02565 7.13142 1.99976 7.00009 1.99976C6.86876 1.99976 6.73871 2.02565 6.6174 2.07596C6.49608 2.12627 6.38588 2.20001 6.29309 2.29296L3.58109 5.00496C3.20109 5.38496 2.98709 5.90696 2.99509 6.43996C3.01809 7.86396 3.39509 12.81 7.29309 16.708C11.1911 20.606 16.1371 20.982 17.5621 21.006H17.5901C18.1181 21.006 18.6171 20.798 18.9951 20.42L21.7071 17.708C21.8 17.6152 21.8738 17.505 21.9241 17.3837C21.9744 17.2623 22.0003 17.1323 22.0003 17.001C22.0003 16.8696 21.9744 16.7396 21.9241 16.6183C21.8738 16.4969 21.8 16.3867 21.7071 16.294L17.7071 12.293ZM17.5801 19.005C16.3321 18.984 12.0621 18.649 8.70709 15.293C5.34109 11.927 5.01509 7.64196 4.99509 6.41896L7.00009 4.41396L9.58609 6.99996L8.29309 8.29296C8.17555 8.41041 8.08913 8.55529 8.04164 8.71453C7.99415 8.87376 7.98709 9.04231 8.02109 9.20496C8.04509 9.31996 8.63209 12.047 10.2921 13.707C11.9521 15.367 14.6791 15.954 14.7941 15.978C14.9566 16.0129 15.1254 16.0064 15.2847 15.9591C15.4441 15.9117 15.589 15.825 15.7061 15.707L17.0001 14.414L19.5861 17L17.5801 19.005Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <div
                style="font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
              >
                +1 (555) 000-0000
              </div>
            </div>
            <div
              style="justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex"
            >
              <div style="width: 24px; height: 24px; position: relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 14C14.2061 14 16.0001 12.206 16.0001 10C16.0001 7.794 14.2061 6 12.0001 6C9.79406 6 8.00006 7.794 8.00006 10C8.00006 12.206 9.79406 14 12.0001 14ZM12.0001 8C13.1031 8 14.0001 8.897 14.0001 10C14.0001 11.103 13.1031 12 12.0001 12C10.8971 12 10.0001 11.103 10.0001 10C10.0001 8.897 10.8971 8 12.0001 8ZM11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M12.0001 14C14.2061 14 16.0001 12.206 16.0001 10C16.0001 7.794 14.2061 6 12.0001 6C9.79406 6 8.00006 7.794 8.00006 10C8.00006 12.206 9.79406 14 12.0001 14ZM12.0001 8C13.1031 8 14.0001 8.897 14.0001 10C14.0001 11.103 13.1031 12 12.0001 12C10.8971 12 10.0001 11.103 10.0001 10C10.0001 8.897 10.8971 8 12.0001 8ZM11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <div
                style="font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
              >
                6th St. & Independence Ave., SW Washington, DC
              </div>
            </div>
          </div>
        </div>
        <div
          style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex"
        >
          <div
            style="width: 614px; height: 56px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex"
          >
            <md-filled-text-field
              style="align-self: stretch;"
              label="Name"
            ></md-filled-text-field>
          </div>
          <div
            style="width: 614px; height: 56px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex"
          >
            <md-filled-text-field
              style="align-self: stretch;"
              label="Email"
            ></md-filled-text-field>
          </div>
          <div
            style="width: 616px; height: 193px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex"
          >
            <md-filled-text-field
              style="align-self: stretch;"
              label="Message"
              type="textarea"
              rows="6"
            ></md-filled-text-field>
          </div>
          <div
            style="width: 99px; height: 48px;  flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex"
          >
            <div
              style="align-self: stretch; flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 10px; padding-bottom: 10px; justify-content: center; align-items: center; gap: 8px; display: inline-flex"
            >
              <md-filled-button> Submit </md-filled-button>
            </div>
          </div>
          <div style="width: 142px; height: 37px; padding-bottom: 16px"></div>
        </div>
      </div>
    `}};qe.styles=g`
    :host {
      display: flex;
      flex-direction: column;
      margin: 122px 0;
    }
  `;qe=s([y("site-contact-form")],qe);let j=class extends m{render(){return this.projectId==null?p``:p`
      <div>
        <h1>Captivating Project Description</h1>
        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>
        <p>
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus.
        </p>
        <p>
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
          Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
          ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
          posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
          adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
          cursus diam.
        </p>
      </div>
      <div
        class="project-image"
        style="background-image: url('${this.projectPath}')"
      ></div>
    `}};j.styles=g`
    :host {
      padding: 112px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 75lvh;
      flex-direction: row;
      gap: 32px;
    }
    h1 {
      align-self: stretch;
      font-size: 48px;
      font-weight: 700;
      line-height: 57.6px;
      word-wrap: break-word;
    }
    p {
      // Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      word-wrap: break-word;
    }
    .project-image {
      background-size: cover;
      background-position: center;
    }
  `;s([n({type:String})],j.prototype,"projectId",void 0);s([n({type:String})],j.prototype,"projectPath",void 0);j=s([y("site-project")],j);let Ve=localStorage.getItem("theme");Ve==null&&(Ve=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.body.classList.add(Ve);addEventListener("load",()=>{document.body.classList.add("anim")});
