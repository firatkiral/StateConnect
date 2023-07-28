(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{State:()=>o,StateGroup:()=>c});var i,s,r,n,h=function(e,t,i,s,r){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?r.call(e,i):r?r.value=i:t.set(e,i),i},a=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};class o{constructor(e,t){this.valid=!0,this.changeListeners=[],this.listeners=[],this.hook=()=>this.invalidate(),i.set(this,void 0),this.cache=t,h(this,i,e||"","f")}setName(e){return h(this,i,e,"f"),this}getName(){return a(this,i,"f")}subscribe(e){return-1===this.changeListeners.indexOf(e)&&this.changeListeners.push(e),{listener:e,destroy:()=>{this.removeSubscriber(e)}}}removeSubscriber(e){let t=this.changeListeners.indexOf(e);return-1!==t&&this.changeListeners.splice(t,1),this}clearSubscribers(){for(let e in this.changeListeners)this.removeSubscriber(this.changeListeners[0]);return this}listen(e){return-1===this.listeners.indexOf(e)&&this.listeners.push(e),{listener:e,destroy:()=>{this.removeSubscriber(e)}}}removeListener(e){let t=this.listeners.indexOf(e);return-1!==t&&this.listeners.splice(t,1),this}clearListeners(){for(let e in this.listeners)this.removeSubscriber(this.listeners[0]);return this}isValid(){return this.valid}validate(){this.valid||(this.valid=!0,this.onValidate())}invalidate(){if(this.valid){this.valid=!1,this.onInvalidate();for(let e of this.listeners)e()}for(let e of this.changeListeners)e(this.get())}onInvalidate(){}onValidate(){}connect(e){return e.setConnection(this),this}setConnection(e){var t;return null===(t=this.incoming)||void 0===t||t.removeSubscriber(this.hook),this.incoming=void 0,e&&(this.incoming=e,e.subscribe(this.hook)),this.invalidate(),this}isConnected(){return!!this.incoming}getIncoming(){return this.incoming}set(e,t=!0){return this.cache=e,t&&this.invalidate(),this}get(){return this.valid||(this.cache=this.incoming?this.incoming.get():this.cache,this.validate()),this.cache}}i=new WeakMap;class c extends o{constructor(e,t){super(e),s.set(this,[]),r.set(this,((...e)=>{if(this.incoming)return this.incoming.get();let t={};for(const e of this.getStates())t[e.getName()]=e.get();return t})),n.set(this,a(this,r,"f")),this.setComputeFn(t)}addState(...e){return e.forEach((e=>{e.subscribe(this.hook),a(this,s,"f").push(e),this[e.getName()]=e})),this.invalidate(),this}removeState(...e){return e.forEach((e=>{let t=a(this,s,"f").indexOf(e);t>-1&&this.removeStateAt(t)})),this}removeStateAt(e){return delete this[a(this,s,"f")[e].getName()],a(this,s,"f")[e].removeSubscriber(this.hook),a(this,s,"f").splice(e,1),this.invalidate(),this}clearStates(){for(let e in a(this,s,"f"))this.removeStateAt(0);return this}getStates(){return a(this,s,"f")}set(e){return Object.keys(e).forEach((t=>{this[t].set(e[t],!1)})),this.invalidate(),this}get(){return this.valid||(this.cache=this.compute(...a(this,s,"f").map((e=>e.get()))),this.validate()),this.cache}compute(...e){return a(this,n,"f").call(this,...e)}setComputeFn(e){return h(this,n,e||a(this,r,"f"),"f"),this.invalidate(),this}}s=new WeakMap,r=new WeakMap,n=new WeakMap;var l=exports;for(var u in t)l[u]=t[u];t.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();