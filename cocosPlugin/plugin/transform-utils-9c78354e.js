System.register(["./coordinates-converts-utils-3a9a8fd2.js","./deprecated-3.0.0-284c5db0.js","./renderable-component-522d1e46.js"],(function(t){"use strict";var e,n,r,i,a,s,o,u,l,h,c,f,p,d,v,_,m,g,y,S,b,w,M,P,T,A,I,E,C,k,O,R,F,L,B,x,W,z,D,N,j,V,q,G;return{setters:[function(t){e=t.e2,n=t.w,r=t.e5,i=t.e7,a=t.ea,s=t.l,o=t.f,u=t.bn,l=t.b6,h=t.bF,c=t.bm,f=t.b9,p=t.e3,d=t.t,v=t.c1,_=t.e4,m=t.c5,g=t.e8,y=t.bO,S=t.b0,b=t.b2,w=t.b4,M=t.bg,P=t.bc,T=t.e,A=t.ci,I=t.bE,E=t.f2,C=t.ec,k=t.fr,O=t.ez,R=t.fv,F=t.d,L=t.c4,B=t.fs,x=t.fw,W=t.ft,z=t.fu,D=t.d_},function(t){N=t.h,j=t.W,V=t.j,q=t.k},function(t){G=t.N}],execute:function(){function H(t){return t*t}function U(t){return t*(2-t)}function Y(t){return t*t*t}function J(t){return--t*t*t+1}function K(t){return t*t*t*t}function Q(t){return 1- --t*t*t*t}function X(t){return t*t*t*t*t}function Z(t){return--t*t*t*t*t+1}function $(t){return 1-Math.cos(t*Math.PI/2)}function tt(t){return Math.sin(t*Math.PI/2)}function et(t){return 0===t?0:Math.pow(1024,t-1)}function nt(t){return 1===t?1:1-Math.pow(2,-10*t)}function rt(t){return 1-Math.sqrt(1-t*t)}function it(t){return Math.sqrt(1- --t*t)}function at(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4))}function st(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/.4)+1)}function ot(t){var e=1.70158;return t*t*((e+1)*t-e)}function ut(t){var e=1.70158;return--t*t*((e+1)*t+e)+1}function lt(t){return 1-ht(1-t)}function ht(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}t({a:Rt,d:Wt,e:Bt,f:Gt,h:Jt,i:Ot,k:function(t,e){for(var n=t,r="";null!==n&&n!==e;)r=n.name+"/"+r,n=n.parent;return r.slice(0,-1)},l:function(t,e,n){for(f.identity(n);t!==e;)f.fromRTS(Je,t.rotation,t.position,t.scale),f.multiply(n,Je,n),t=t.parent;return n},m:J,n:function(t,e){for(var n=0,r=f.IDENTITY;t;){if(t.stamp===e||t.stamp+1===e&&!t.node.hasChangedFlags){r=t.world,t.stamp=e;break}t.stamp=e,Ue[n++]=t,t=t.parent}for(;n>0;){var i=(t=Ue[--n]).node;f.fromRTS(t.local,i.rotation,i.position,i.scale),r=f.multiply(t.world,r,t.local)}return r},o:function(t){for(var e=Ye.get(t.uuid)||null;e;)Ye.delete(e.node.uuid),e=e.parent},p:function(t,e){for(var n,r=null,i=0;t!==e;){var a=t.uuid;if(Ye.has(a)){r=Ye.get(a);break}r={node:t,local:new f,world:new f,stamp:-1,parent:null},Ye.set(a,r),Ue[i++]=r,t=t.parent,r=null}for(;i>0;)(n=Ue[--i]).parent=r,r=n;return r},s:Yt});var ct=bt(H,U),ft=bt(Y,J),pt=bt(K,Q),dt=bt(X,Z),vt=bt($,tt),_t=bt(et,nt),mt=bt(rt,it),gt=bt(at,st),yt=bt(ot,ut),St=bt(lt,ht);function bt(t,e){return function(n){return n<.5?e(2*n)/2:t(2*n-1)/2+.5}}var wt,Mt,Pt,Tt,At,It,Et,Ct,kt=Object.freeze({__proto__:null,constant:function(){return 0},linear:function(t){return t},quadIn:H,quadOut:U,quadInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:Y,cubicOut:J,cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quartIn:K,quartOut:Q,quartInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quintIn:X,quintOut:Z,quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sineIn:$,sineOut:tt,sineInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},expoIn:et,expoOut:nt,expoInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circIn:rt,circOut:it,circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:at,elasticOut:st,elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4)*.5+1)},backIn:ot,backOut:ut,backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:lt,bounceOut:ht,bounceInOut:function(t){return t<.5?.5*lt(2*t):.5*ht(2*t-1)+.5},smooth:function(t){return t<=0?0:t>=1?1:t*t*(3-2*t)},fade:function(t){return t<=0?0:t>=1?1:t*t*t*(t*(6*t-15)+10)},quadOutIn:ct,cubicOutIn:ft,quartOutIn:pt,quintOutIn:dt,sineOutIn:vt,expoOutIn:_t,circOutIn:mt,elasticOutIn:gt,backOutIn:yt,bounceOutIn:St});function Ot(t){return"string"==typeof t||"number"==typeof t}function Rt(t,e){return t instanceof e}t("b",kt);var Ft=t("H",e("cc.animation.HierarchyPath")((Tt=function(){function t(t){i(this,"path",Pt,this),this.path=t||""}return t.prototype.get=function(t){return t instanceof G?t.getChildByPath(this.path)||(n('Node "'+t.name+'" has no path "'+this.path+'"'),null):(n("Target of hierarchy path should be of type Node."),null)},t}(),Pt=r((Mt=Tt).prototype,"path",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),wt=Mt))||wt),Lt=t("C",e("cc.animation.ComponentPath")((Ct=function(){function t(t){i(this,"component",Et,this),this.component=t||""}return t.prototype.get=function(t){return t instanceof G?t.getComponent(this.component)||(n('Node "'+t.name+'" has no component "'+this.component+'"'),null):(n("Target of component path should be of type Node."),null)},t}(),Et=r((It=Ct).prototype,"component",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),At=It))||At);function Bt(t){for(var e=t,r=0;r<(arguments.length<=1?0:arguments.length-1);++r){var i=r+1<1||arguments.length<=r+1?void 0:arguments[r+1];if(Ot(i)){if(!(i in e))return n('Target object has no property "'+i+'"'),null;e=e[i]}else e=i.get(e);if(null===e)break}return e}function xt(t,e,n){void 0===n&&(n=1e-6);for(var r=0,i=t.length-1,a=i>>>1;r<=i;a=r+i>>>1){var s=t[a];if(s>e+n)i=a-1;else{if(!(s<e-n))return a;r=a+1}}return~r}function Wt(t,e,n,r,i){var a=1-i;return a*(a*(t+(3*e-t)*i)+3*n*i*i)+r*i*i*i}s.bezier=Wt;var zt=Math.cos,Dt=Math.acos,Nt=Math.max,jt=2*Math.PI,Vt=Math.sqrt;function qt(t){return t<0?-Math.pow(-t,1/3):Math.pow(t,1/3)}function Gt(t,e){var n=function(t,e){var n,r,i,a,s=e-0,o=e-t[0],u=3*s,l=3*o,h=3*(e-t[2]),c=1/(-s+l-h+(e-1)),f=(u-6*o+h)*c,p=f*(1/3),d=(-u+l)*c,v=1/3*(3*d-f*f),_=v*(1/3),m=(2*f*f*f-9*f*d+s*c*27)/27,g=m/2,y=g*g+_*_*_;if(y<0){var S=1/3*-v,b=Vt(S*S*S),w=-m/(2*b),M=Dt(w<-1?-1:w>1?1:w),P=2*qt(b);return r=P*zt(M*(1/3))-p,i=P*zt((M+jt)*(1/3))-p,a=P*zt((M+2*jt)*(1/3))-p,r>=0&&r<=1?i>=0&&i<=1?a>=0&&a<=1?Nt(r,i,a):Nt(r,i):a>=0&&a<=1?Nt(r,a):r:i>=0&&i<=1?a>=0&&a<=1?Nt(i,a):i:a}if(0===y)return i=-(n=g<0?qt(-g):-qt(g))-p,(r=2*n-p)>=0&&r<=1?i>=0&&i<=1?Nt(r,i):r:i;var T=Vt(y);return(n=qt(-g+T))-qt(g+T)-p}(t,e),r=t[1];return((1-n)*(r+(t[3]-r)*n)*3+n*n)*n}s.bezierByTime=Gt;var Ht=t("R",function(){function t(t){var e,n;this.ratios=void 0,this._findRatio=void 0,this.ratios=t;for(var r=!0,i=1,a=t.length;i<a;i++)if(e=t[i]-t[i-1],1===i)n=e;else if(Math.abs(e-n)>1e-6){r=!1;break}this._findRatio=r?Kt:xt}return t.prototype.sample=function(t){return this._findRatio(this.ratios,t)},t}());s.RatioSampler=Ht;var Ut=t("g",function(){function t(e,n){this.types=void 0,this.type=null,this._values=[],this._lerp=void 0,this._duration=void 0,this._array=void 0,this._duration=n,this._values=e.values;var r=function(e){return"string"==typeof e?e:Array.isArray(e)?e[0]===e[1]&&e[2]===e[3]?t.Linear:t.Bezier(e):t.Linear};if(void 0!==e.easingMethod)this.type=r(e.easingMethod);else if(Array.isArray(e.easingMethods))this.types=e.easingMethods.map(r);else if(void 0!==e.easingMethods){this.types=new Array(this._values.length).fill(null);for(var i=0,a=Object.keys(e.easingMethods);i<a.length;i++){var s=a[i];this.types[s]=r(e.easingMethods[s])}}else this.type=null;var o=e.values[0];(void 0===e.interpolate||e.interpolate)&&(this._lerp=he(o)),void 0!==e._arrayLength&&(this._array=new Array(e._arrayLength))}t.Bezier=function(t){return t};var e=t.prototype;return e.hasLerp=function(){return!!this._lerp},e.valueAt=function(t){if(void 0===this._array){var e=this._values[t];return e&&e.getNoLerp?e.getNoLerp():e}for(var n=0;n<this._array.length;++n)this._array[n]=this._values[this._array.length*t+n];return this._array},e.valueBetween=function(t,e,n,r,i){if(this._lerp){var a=this.types?this.types[e]:this.type,s=i-n,o=(t-n)/s;if(a&&(o=Jt(o,a)),void 0===this._array){var u=this._values[e],l=this._values[r];return this._lerp(u,l,o,s*this._duration)}for(var h=0;h<this._array.length;++h){var c=this._values[this._array.length*e+h],f=this._values[this._array.length*r+h];this._array[h]=this._lerp(c,f,o,s*this._duration)}return this._array}if(void 0===this._array)return this.valueAt(e);for(var p=0;p<this._array.length;++p)this._array[p]=this._values[this._array.length*e+p];return this._array},e.empty=function(){return 0===this._values.length},e.constant=function(){return 1===this._values.length},t}());function Yt(t,e,n){var r=e.sample(n);if(r<0)if((r=~r)<=0)r=0;else{if(!(r>=e.ratios.length))return t.valueBetween(n,r-1,e.ratios[r-1],r,e.ratios[r]);r=e.ratios.length-1}return t.valueAt(r)}function Jt(t,e){if("string"==typeof e){var n=kt[e];n?t=n(t):o(3906,e)}else Array.isArray(e)&&(t=Gt(e,t));return t}function Kt(t,e){var n=t.length-1;if(0===n)return 0;var r=t[0];if(e<r)return 0;var i=t[n];if(e>i)return n;var a=(e=(e-r)/(i-r))/(1/n),s=0|a;return a-s<1e-6?s:s+1-a<1e-6?s+1:~(s+1)}Ut.Linear=null,s.AnimCurve=Ut,t("E",function(){function t(){this.events=[]}return t.prototype.add=function(t,e){this.events.push({func:t||"",params:e||[]})},t}()),s.sampleAnimationCurve=Yt;var Qt,Xt,Zt,$t,te,ee,ne,re,ie,ae,se,oe,ue,le,he=function(){function t(t,e,n,r){return t.lerp(e,n,r)}return function(e){if(null!==e){if("number"==typeof e)return u;if("object"==typeof e&&e.constructor){if(e instanceof l)return n=new l,function(t,e,r){return l.slerp(n,t,e,r)};if(e instanceof h)return function(t){var e=new t;return function(n,r,i){return t.lerp(e,n,r,i),e}}(e.constructor);if(e.constructor===Number)return u;if(N(e))return t}var n}}}(),ce=t("S",function(){function t(){}return t.getOrExtract=function(e){var n=t.pool.get(e);return n&&n.info.sample===e.sample||(n&&s.director.root.dataPoolManager.releaseAnimationClip(e),n=function(t){var e={};t.curves.forEach((function(t){if(!t.valueAdapter&&Rt(t.modifiers[0],Ft)&&Ot(t.modifiers[1])){var n=t.modifiers[0].path,r=e[n];r||(r=e[n]={}),r[t.modifiers[1]]={values:t.data.values,keys:t.data.keys}}}));for(var n=Math.ceil(t.sample*t.duration)+1,r=function(){var r=a[i],s=e[r];if(!s)return"continue";Object.defineProperty(s,"worldMatrix",{get:function(){if(!s._worldMatrix){var i=s.position,a=s.rotation,o=s.scale;fe(t,i,n),fe(t,a,n),fe(t,o,n),function(t,e,n){var r=n.position.values,i=n.rotation.values,a=n.scale.values,s=r.map((function(){return new f})),o=e.lastIndexOf("/"),u=null;if(o>0){var l=t[e.substring(0,o)];if(!l)return void console.warn("no data for parent bone?");u=l.worldMatrix.values}for(var h=0;h<r.length;h++){var c=r[h],p=i[h],d=a[h],v=s[h];f.fromRTS(v,p,c,d),u&&f.multiply(v,u[h],v)}Object.keys(n).forEach((function(t){return delete n[t]})),n._worldMatrix={keys:0,interpolate:!1,values:s}}(e,r,s)}return s._worldMatrix}})},i=0,a=Object.keys(e);i<a.length;i++)r();return{info:{frames:n,sample:t.sample},data:e}}(e),t.pool.set(e,n)),n},t.destroy=function(e){t.pool.delete(e)},t}());function fe(t,e,n){var r=t.keys[e.keys],i=[];if(r&&1!==r.length)for(var a=e.values[0]instanceof l,s=0,o=0;s<n;s++){for(var u=s/t.sample;r[o]<=u;)o++;o>r.length-1?u=r[o=r.length-1]:0===o&&(o=1);var h=e.values[o-1].clone(),f=r[o]-r[o-1],p=f?c((u-r[o-1])/f):1;a?h.slerp(e.values[o],p):h.lerp(e.values[o],p),i[s]=h}else for(var d=0;d<n;d++)i[d]=e.values[0].clone();e.values=i}ce.pool=new Map;var pe=t("j",e("cc.AnimationClip")((le=ue=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"sample",Zt,g(e)),i(e,"speed",$t,g(e)),i(e,"wrapMode",te,g(e)),i(e,"events",ee,g(e)),i(e,"_duration",ne,g(e)),i(e,"_keys",re,g(e)),i(e,"_stepness",ie,g(e)),i(e,"_curves",ae,g(e)),i(e,"_commonTargets",se,g(e)),i(e,"_hash",oe,g(e)),e.frameRate=0,e._ratioSamplers=[],e._runtimeCurves=void 0,e._runtimeEvents=void 0,e._data=null,e}p(e,t),e.createWithSpriteFrames=function(t,n){if(!Array.isArray(t))return o(3905),null;var r=new e;r.sample=n||r.sample,r.duration=t.length/r.sample;for(var i=1/r.sample,a=new Array(t.length),s=new Array(a.length),u=0;u<t.length;u++)a[u]=u*i,s[u]=t[u];return r.keys=[a],r.curves=[{modifiers:[new Lt("cc.Sprite"),"spriteFrame"],data:{keys:0,values:s}}],r};var n=e.prototype;return n.onLoaded=function(){this.frameRate=this.sample,this._decodeCVTAs()},n.getPropertyCurves=function(){return this._runtimeCurves||this._createPropertyCurves(),this._runtimeCurves},n.updateEventDatas=function(){delete this._runtimeEvents},n.getEventGroupIndexAtRatio=function(t){return this._runtimeEvents||this._createRuntimeEvents(),xt(this._runtimeEvents.ratios,t)},n.hasEvents=function(){return 0!==this.events.length},n.destroy=function(){return s.director.root.dataPoolManager&&s.director.root.dataPoolManager.releaseAnimationClip(this),ce.destroy(this),t.prototype.destroy.call(this)},n._createPropertyCurves=function(){var t=this;this._ratioSamplers=this._keys.map((function(e){return new Ht(e.map((function(e){return e/t._duration})))})),this._runtimeCurves=this._curves.map((function(e){return{curve:new Ut(e.data,t._duration),modifiers:e.modifiers,valueAdapter:e.valueAdapter,sampler:t._ratioSamplers[e.data.keys],commonTarget:e.commonTarget}})),this._applyStepness()},n._createRuntimeEvents=function(){for(var t,e=this,n=[],r=[],i=this.events.sort((function(t,e){return t.frame-e.frame})),a=function(){var i=t.value,a=i.frame/e._duration,s=n.findIndex((function(t){return t===a}));s<0&&(s=n.length,n.push(a),r.push({events:[]})),r[s].events.push({functionName:i.func,parameters:i.params})},s=d(i);!(t=s()).done;)a();this._runtimeEvents={ratios:n,eventGroups:r}},n._applyStepness=function(){},n._decodeCVTAs=function(){var t=ArrayBuffer.isView(this._nativeAsset)?this._nativeAsset.buffer:this._nativeAsset;if(t){for(var e=this._keys,n=0;n<e.length;++n){var r=e[n];r instanceof v&&(e[n]=r.decompress(t))}for(var i=0;i<this._curves.length;++i){var a=this._curves[i];a.data.values instanceof v&&(a.data.values=a.data.values.decompress(t))}}},_(e,[{key:"duration",get:function(){return this._duration},set:function(t){this._duration=t}},{key:"keys",get:function(){return this._keys},set:function(t){this._keys=t}},{key:"eventGroups",get:function(){return this._runtimeEvents||this._createRuntimeEvents(),this._runtimeEvents.eventGroups}},{key:"stepness",get:function(){return this._stepness},set:function(t){this._stepness=t,this._applyStepness()}},{key:"hash",get:function(){if(this._hash)return this._hash;var t=this._nativeAsset,e=new Uint8Array(ArrayBuffer.isView(t)?t.buffer:t);return this._hash=y(e,666)}},{key:"curves",get:function(){return this._curves},set:function(t){this._curves=t,delete this._runtimeCurves}},{key:"data",get:function(){return this._data}},{key:"commonTargets",get:function(){return this._commonTargets},set:function(t){this._commonTargets=t}}]),e}(m),ue.preventDeferredLoadDependents=!0,ue.WrapMode=j,Zt=r((Xt=le).prototype,"sample",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 60}}),$t=r(Xt.prototype,"speed",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),te=r(Xt.prototype,"wrapMode",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return j.Normal}}),ee=r(Xt.prototype,"events",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ne=r(Xt.prototype,"_duration",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),re=r(Xt.prototype,"_keys",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ie=r(Xt.prototype,"_stepness",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),ae=r(Xt.prototype,"_curves",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),se=r(Xt.prototype,"_commonTargets",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),oe=r(Xt.prototype,"_hash",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Qt=Xt))||Qt);function de(t,e,n){var r,i=e[e.length-1];if(0!==e.length&&Ot(i)&&!n){var a=Bt.apply(void 0,[t].concat(e.slice(0,e.length-1)));if(null===a)return null;r={isProxy:!1,object:a,property:i}}else{if(!n)return T("Empty animation curve."),null;var s=Bt.apply(void 0,[t].concat(e));if(null===s)return null;r={isProxy:!0,proxy:n.forTarget(s)}}return{setValue:function(t){r.isProxy?r.proxy.set(t):r.object[r.property]=t},getValue:function(){return r.isProxy?r.proxy.get?r.proxy.get():(T("Target doesn't provide a get method."),null):r.object[r.property]}}}function ve(t,e,n){var r=de(t,e,n);if(null===r)return null;var i=r.getValue(),a=me(i);if(!a)return T("Value is not copyable!"),null;var s=a.createBuffer(),o=a.copy;return Object.assign(r,{peek:function(){return s},pull:function(){var t=r.getValue();o(s,t)},push:function(){r.setValue(s)}})}s.AnimationClip=pe;var _e,me=((_e=new Map).set(S,{createBuffer:function(){return new S},copy:S.copy}),_e.set(b,{createBuffer:function(){return new b},copy:b.copy}),_e.set(w,{createBuffer:function(){return new w},copy:w.copy}),_e.set(M,{createBuffer:function(){return new M},copy:M.copy}),_e.set(P,{createBuffer:function(){return new P},copy:function(t,e){return t.set(e)}}),function(t){return _e.get(null==t?void 0:t.constructor)}),ge=function(){function t(){this._isPlaying=!1,this._isPaused=!1,this._stepOnce=!1}var e=t.prototype;return e.play=function(){this._isPlaying?this._isPaused?(this._isPaused=!1,this.onResume()):this.onError(A(3912)):(this._isPlaying=!0,this.onPlay())},e.stop=function(){this._isPlaying&&(this._isPlaying=!1,this.onStop(),this._isPaused=!1)},e.pause=function(){this._isPlaying&&!this._isPaused&&(this._isPaused=!0,this.onPause())},e.resume=function(){this._isPlaying&&this._isPaused&&(this._isPaused=!1,this.onResume())},e.step=function(){this.pause(),this._stepOnce=!0,this._isPlaying||this.play()},e.update=function(){},e.onPlay=function(){},e.onPause=function(){},e.onResume=function(){},e.onStop=function(){},e.onError=function(){},_(t,[{key:"isPlaying",get:function(){return this._isPlaying}},{key:"isPaused",get:function(){return this._isPaused}},{key:"isMotionless",get:function(){return!this.isPlaying||this.isPaused}}]),t}();function ye(t){return!function(t){return"rotation"===t}(t)}t("B",function(){function t(){this._nodeBlendStates=new Map,this._states=new Set}var e=t.prototype;return e.ref=function(t,e){var n=this._nodeBlendStates.get(t);n||(n={dirty:!1,properties:{}},this._nodeBlendStates.set(t,n));var r=n.properties[e];return r||(r=n.properties[e]=new be(n,ye(e)?new b:new l)),++r.refCount,r},e.deRef=function(t,e){var n=this._nodeBlendStates.get(t);if(n){var r=n.properties[e];r&&(--r.refCount,r.refCount>0||(delete n.properties[e],function(t){return!(t.properties.position||t.properties.rotation||t.properties.eulerAngles||t.properties.scale)}(n)&&this._nodeBlendStates.delete(t)))}},e.apply=function(){this._nodeBlendStates.forEach((function(t,e){if(t.dirty){t.dirty=!1;var n,r,i,a=t.properties,s=a.position,o=a.scale,u=a.rotation,l=a.eulerAngles,h=!1;s&&0!==s.weight&&(s.weight=0,n=s.value,h=!0),o&&0!==o.weight&&(o.weight=0,r=o.value,h=!0),u&&0!==u.weight&&(u.weight=0,i=u.value,h=!0),l&&0!==l.weight&&(l.weight=0,i=l.value,h=!0),h&&e.setRTS(i,n,r)}})),this._states.forEach((function(t){t.onBlendFinished()}))},e.bindState=function(t){this._states.add(t)},e.unbindState=function(t){this._states.delete(t)},t}());var Se,be=function(){function t(t,e){this.weight=0,this.value=void 0,this.refCount=0,this._node=void 0,this._node=t,this.value=e}return t.prototype.markAsDirty=function(){this._node.dirty=!0},t}();function we(t,e,n){return 0===n.weight&&b.zero(n.value),0===e?n.value:1===e?b.copy(n.value,t):b.scaleAndAdd(n.value,n.value,t,e)}function Me(t,e,n){if(0===n.weight&&l.identity(n.value),0===e)return n.value;if(1===e)return l.copy(n.value,t);var r=e/(n.weight+e);return l.slerp(n.value,n.value,t,r)}!function(t){t.PLAY="play",t.STOP="stop",t.PAUSE="pause",t.RESUME="resume",t.LASTFRAME="lastframe",t.FINISHED="finished"}(Se||(Se={})),I(Se);var Pe=function(){function t(t,e,n){this.commonTargetIndex=void 0,this._curve=void 0,this._boundTarget=void 0,this._rootTargetProperty=void 0,this._curveDetail=void 0,this._curve=t.curve,this._curveDetail=t,this._boundTarget=n}var e=t.prototype;return e.applySample=function(t,e,n,r,i){var a;this._curve.empty()||(a=this._curve.hasLerp()&&n?this._curve.valueBetween(t,r.from,r.fromRatio,r.to,r.toRatio):this._curve.valueAt(e),this._setValue(a,i))},e._setValue=function(t){this._boundTarget.setValue(t)},_(t,[{key:"propertyName",get:function(){return this._rootTargetProperty||""}},{key:"curveDetail",get:function(){return this._curveDetail}}]),t}(),Te=t("A",function(t){function e(e,n){var r;return void 0===n&&(n=""),(r=t.call(this)||this).duration=1,r.speed=1,r.time=0,r.weight=0,r.frameRate=0,r._targetNode=null,r._curveLoaded=!1,r._clip=void 0,r._process=r.process,r._samplerSharedGroups=[],r._target=null,r._ignoreIndex=-1,r._commonTargetStatuses=[],r._wrapMode=j.Normal,r._repeatCount=1,r._delay=0,r._delayTime=0,r._currentFramePlayed=!1,r._name=void 0,r._lastIterations=void 0,r._lastWrapInfo=null,r._lastWrapInfoEvent=null,r._wrappedInfo=new V,r._blendStateBuffer=null,r._blendStateWriters=[],r._allowLastFrame=!1,r._blendStateWriterHost={weight:0,enabled:!1},r._clip=e,r._name=n||e&&e.name,r}p(e,t),_(e,[{key:"clip",get:function(){return this._clip}},{key:"name",get:function(){return this._name}},{key:"length",get:function(){return this.duration}},{key:"wrapMode",get:function(){return this._wrapMode},set:function(t){this._wrapMode=t,this.time=0,t&q.Loop?this.repeatCount=1/0:this.repeatCount=1}},{key:"repeatCount",get:function(){return this._repeatCount},set:function(t){this._repeatCount=t;var e=this._wrapMode&q.ShouldWrap,n=(this.wrapMode&q.Reverse)===q.Reverse;this._process=t!==1/0||e||n?this.process:this.simpleProcess}},{key:"delay",get:function(){return this._delay},set:function(t){this._delayTime=this._delay=t}},{key:"current",get:function(){return this.getWrappedInfo(this.time).time}},{key:"ratio",get:function(){return this.current/this.duration}}]);var n=e.prototype;return n.initialize=function(t,e){var n,r,i=this;if(!this._curveLoaded){this._curveLoaded=!0,this._destroyBlendStateWriters(),this._samplerSharedGroups.length=0,this._blendStateBuffer=null!==(n=null===(r=s.director.getAnimationManager())||void 0===r?void 0:r.blendState)&&void 0!==n?n:null,this._blendStateBuffer&&this._blendStateBuffer.bindState(this),this._targetNode=t;var a=this._clip;this.duration=a.duration,this.speed=a.speed,this.wrapMode=a.wrapMode,this.frameRate=a.sample,(this.wrapMode&q.Loop)===q.Loop?this.repeatCount=1/0:this.repeatCount=1;var o=function(t,e,n,r,a){if(!function(t){var e;if(1===t.length&&"string"==typeof t[0])e=t[0];else if(t.length>1){for(var n=0;n<t.length-1;++n)if(!(t[n]instanceof Ft))return!1;e=t[t.length-1]}switch(e){case"position":case"scale":case"rotation":case"eulerAngles":return!0;default:return!1}}(n)||!i._blendStateBuffer)return t(e,n,r);var s,o,u,l,h,c,f,p,d,v=Bt.apply(void 0,[e].concat(n.slice(0,n.length-1)));if(null!==v&&v instanceof G){var _=n[n.length-1],m=(s=i._blendStateBuffer,o=v,u=_,l=i._blendStateWriterHost,h=a,c=ye(u)?we:Me,f=s.ref(o,u),p=!1,d=-1,{destroy:function(){f&&(s.deRef(o,u),f=null)},forTarget:function(){return{get:function(){return o[u]},set:function(t){if(f&&l.enabled){var e=l.weight;if(h)if(1!==e||e!==d)p=!1;else if(p)return;c(t,e,f),f.weight+=e,f.markAsDirty(),p=!0,d=e}}}}});return i._blendStateWriters.push(m),t(e,[],m)}return null};this._commonTargetStatuses=a.commonTargets.map((function(e){var n=o(ve,t,e.modifiers,e.valueAdapter,!1);return null===n?null:{target:n,changed:!1}})),e||(e=a.getPropertyCurves());for(var u=function(n){var r=e[n],a=i._samplerSharedGroups.find((function(t){return t.sampler===r.sampler}));a||(a={sampler:r.sampler,curves:[],samplerResultCache:{from:0,fromRatio:0,to:0,toRatio:0}},i._samplerSharedGroups.push(a));var s=void 0;if(void 0===r.commonTarget)s=t;else{var u=i._commonTargetStatuses[r.commonTarget];if(!u)return"continue";s=u.target.peek()}var l=o(de,s,r.modifiers,r.valueAdapter,r.curve.constant());if(null===l);else{var h=new Pe(r,s,l);h.commonTargetIndex=r.commonTarget,a.curves.push(h)}},l=0;l<e.length;++l)u(l)}},n.destroy=function(){this._destroyBlendStateWriters()},n.onBlendFinished=function(){this._blendStateWriterHost.enabled=!1},n.emit=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];s.director.getAnimationManager().pushDelayEvent(this._emit,this,e)},n.on=function(t,e,n){return this._target&&this._target.isValid?this._target.on(t,e,n):null},n.once=function(t,e,n){return this._target&&this._target.isValid?this._target.once(t,e,n):null},n.off=function(t,e,n){this._target&&this._target.isValid&&this._target.off(t,e,n)},n.allowLastFrameEvent=function(t){this._allowLastFrame=t},n._setEventTarget=function(t){this._target=t},n.setTime=function(t){this._currentFramePlayed=!1,this.time=t||0,this._lastWrapInfoEvent=null,this._ignoreIndex=-1;var e=this.getWrappedInfo(t,this._wrappedInfo),n=e.direction,r=this._clip.getEventGroupIndexAtRatio(e.ratio);r<0&&(r=~r-1,n<0&&(r+=1),this._ignoreIndex=r)},n.update=function(t){this._delayTime>0&&(this._delayTime-=t,this._delayTime>0)||(this._currentFramePlayed?this.time+=t*this.speed:this._currentFramePlayed=!0,this._process())},n.sample=function(){var t=this.getWrappedInfo(this.time,this._wrappedInfo);return this._sampleCurves(t.ratio),this._sampleEvents(t),t},n.onPlay=function(){this.setTime(0),this._delayTime=this._delay,this._onReplayOrResume(),this.emit(Se.PLAY,this)},n.onStop=function(){this.isPaused||this._onPauseOrStop(),this.emit(Se.STOP,this)},n.onResume=function(){this._onReplayOrResume(),this.emit(Se.RESUME,this)},n.onPause=function(){this._onPauseOrStop(),this.emit(Se.PAUSE,this)},n._sampleCurves=function(t){this._blendStateWriterHost.weight=this.weight,this._blendStateWriterHost.enabled=!0;for(var e=0;e<this._commonTargetStatuses.length;++e){var n=this._commonTargetStatuses[e];n&&(n.target.pull(),n.changed=!1)}for(var r=0,i=this._samplerSharedGroups.length;r<i;++r){var a=this._samplerSharedGroups[r],s=a.sampler,o=a.samplerResultCache,u=0,l=!1;s?(u=s.sample(t))<0&&((u=~u)<=0?u=0:u>=s.ratios.length?u=s.ratios.length-1:(l=!0,o.from=u-1,o.fromRatio=s.ratios[o.from],o.to=u,o.toRatio=s.ratios[o.to],u=o.from)):u=0;for(var h=0,c=a.curves.length;h<c;++h){var f=a.curves[h];if(f.applySample(t,u,l,o,this.weight),void 0!==f.commonTargetIndex){var p=this._commonTargetStatuses[f.commonTargetIndex];p&&(p.changed=!0)}}}for(var d=0;d<this._commonTargetStatuses.length;++d){var v=this._commonTargetStatuses[d];v&&v.changed&&v.target.push()}},n.process=function(){var t,e=this.sample();this._allowLastFrame&&(t=this._lastWrapInfo?this._lastWrapInfo:this._lastWrapInfo=new V(e),this.repeatCount>1&&(0|e.iterations)>(0|t.iterations)&&this.emit(Se.LASTFRAME,this),t.set(e)),e.stopped&&(this.stop(),this.emit(Se.FINISHED,this))},n.simpleProcess=function(){var t=this.duration,e=this.time%t;e<0&&(e+=t);var n=e/t;this._sampleCurves(n),this._clip.hasEvents()&&this._sampleEvents(this.getWrappedInfo(this.time,this._wrappedInfo)),this._allowLastFrame&&(void 0===this._lastIterations&&(this._lastIterations=n),(this.time>0&&this._lastIterations>n||this.time<0&&this._lastIterations<n)&&this.emit(Se.LASTFRAME,this),this._lastIterations=n)},n.cache=function(){},n._needReverse=function(t){var e=this.wrapMode,n=!1;return(e&q.PingPong)===q.PingPong&&(t-(0|t)==0&&t>0&&(t-=1),1&t&&(n=!n)),(e&q.Reverse)===q.Reverse&&(n=!n),n},n.getWrappedInfo=function(t,e){e=e||new V;var n=!1,r=this.duration,i=this.repeatCount,a=t>0?t/r:-t/r;if(a>=i){a=i,n=!0;var s=i-(0|i);0===s&&(s=1),t=s*r*(t>0?1:-1)}if(t>r){var o=t%r;t=0===o?r:o}else t<0&&0!=(t%=r)&&(t+=r);var u=!1,l=this._wrapMode&q.ShouldWrap;l&&(u=this._needReverse(a));var h=u?-1:1;return this.speed<0&&(h*=-1),l&&u&&(t=r-t),e.ratio=t/r,e.time=t,e.direction=h,e.stopped=n,e.iterations=a,e},n._sampleEvents=function(t){var e=this._clip.eventGroups.length,n=t.direction,r=this._clip.getEventGroupIndexAtRatio(t.ratio);if(r<0&&(r=~r-1,n<0&&(r+=1)),this._ignoreIndex!==r&&(this._ignoreIndex=-1),t.frameIndex=r,!this._lastWrapInfoEvent)return this._fireEvent(r),void(this._lastWrapInfoEvent=new V(t));var i=this.wrapMode,a=Ae(t.iterations),o=this._lastWrapInfoEvent,u=Ae(o.iterations),l=o.frameIndex,h=o.direction,c=-1!==u&&a!==u;if(l===r&&c&&1===e)this._fireEvent(0);else if(l!==r||c){n=h;do{if(l!==r){if(-1===n&&0===l&&r>0?((i&q.PingPong)===q.PingPong?n*=-1:l=e,u++):1===n&&l===e-1&&r<e-1&&((i&q.PingPong)===q.PingPong?n*=-1:l=-1,u++),l===r)break;if(u>a)break}l+=n,s.director.getAnimationManager().pushDelayEvent(this._fireEvent,this,[l])}while(l!==r&&l>-1&&l<e)}this._lastWrapInfoEvent.set(t)},n._emit=function(t,e){this._target&&this._target.isValid&&this._target.emit(t,t,e)},n._fireEvent=function(t){if(this._targetNode&&this._targetNode.isValid){var e=this._clip.eventGroups;if(!(t<0||t>=e.length||this._ignoreIndex===t))for(var n,r=e[t],i=this._targetNode.components,a=d(r.events);!(n=a()).done;)for(var s,o=n.value,u=o.functionName,l=d(i);!(s=l()).done;){var h=s.value,c=h[u];"function"==typeof c&&c.apply(h,o.parameters)}}},n._onReplayOrResume=function(){s.director.getAnimationManager().addAnimation(this)},n._onPauseOrStop=function(){s.director.getAnimationManager().removeAnimation(this)},n._destroyBlendStateWriters=function(){for(var t=0;t<this._blendStateWriters.length;++t)this._blendStateWriters[t].destroy();this._blendStateWriters.length=0,this._blendStateBuffer&&(this._blendStateBuffer.unbindState(this),this._blendStateBuffer=null),this._blendStateWriterHost.enabled=!1},_(e,[{key:"curveLoaded",get:function(){return this._curveLoaded}}]),e}(ge));function Ae(t){return t-(0|t)==0&&(t-=1),0|t}s.AnimationState=Te;var Ie,Ee,Ce,ke,Oe,Re,Fe,Le,Be,xe,We,ze,De,Ne,je,Ve,qe,Ge=function(t){function e(){var e;return(e=t.call(this)||this)._managedStates=[],e._fadings=[],e}p(e,t);var n=e.prototype;return n.update=function(t){if(!this.isMotionless){for(var e=0;e<this._managedStates.length;++e){var n=this._managedStates[e].state;n&&(n.weight=0)}for(var r=1,i=this._fadings.length,a=0;a<this._fadings.length;++a){var s=this._fadings[a];s.easeTime+=t;var o=0===s.easeDuration?1:c(s.easeTime/s.easeDuration),u=o*r;if(r*=1-o,s.target.state&&(s.target.state.weight+=u),s.easeTime>=s.easeDuration){i=a+1,s.easeTime=s.easeDuration;break}}if(i!==this._fadings.length){for(var l=i;l<this._fadings.length;++l){var h=this._fadings[l];--h.target.reference,h.target.reference<=0&&(h.target.state&&h.target.state.stop(),E(this._managedStates,h.target))}this._fadings.splice(i)}for(var f=0;f<this._managedStates.length;++f){var p=this._managedStates[f].state;p&&p.isMotionless&&p.sample()}}},n.crossFade=function(t,e){var n;0===this._managedStates.length&&(e=0),0===e&&this.clear();var r=this._managedStates.find((function(e){return e.state===t}));r?(null===(n=r.state)||void 0===n?void 0:n.isMotionless)&&r.state.play():(r={state:t,reference:0},t&&t.play(),this._managedStates.push(r)),++r.reference,this._fadings.unshift({easeDuration:e,easeTime:0,target:r})},n.clear=function(){for(var t=0;t<this._managedStates.length;++t){var e=this._managedStates[t].state;e&&e.stop()}this._managedStates.length=0,this._fadings.length=0},n.onPlay=function(){t.prototype.onPlay.call(this),s.director.getAnimationManager().addCrossFade(this)},n.onPause=function(){t.prototype.onPause.call(this),s.director.getAnimationManager().removeCrossFade(this);for(var e=0;e<this._managedStates.length;++e){var n=this._managedStates[e].state;n&&n.pause()}},n.onResume=function(){t.prototype.onResume.call(this),s.director.getAnimationManager().addCrossFade(this);for(var e=0;e<this._managedStates.length;++e){var n=this._managedStates[e].state;n&&n.resume()}},n.onStop=function(){t.prototype.onStop.call(this),s.director.getAnimationManager().removeCrossFade(this),this.clear()},e}(ge);function He(t,e){return t===e||!(!t||!e||t.name!==e.name&&t._uuid!==e._uuid)}t("c",(Ie=e("cc.Animation"),Ee=B(),Ce=x(99),ke=W(),Oe=C([pe]),Re=z(),Fe=C(pe),Le=z(),Be=z(),xe=C([pe]),Ie(We=Ee(We=Ce(We=k(We=ke((qe=Ve=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"playOnLoad",De,g(e)),e._crossFade=new Ge,e._nameToState=O(!0),i(e,"_clips",Ne,g(e)),i(e,"_defaultClip",je,g(e)),e._hasBeenPlayed=!1,e}p(e,t);var n=e.prototype;return n.onLoad=function(){for(var t in this.clips=this._clips,this._nameToState)this._nameToState[t].initialize(this.node)},n.start=function(){this.playOnLoad&&!this._hasBeenPlayed&&this._defaultClip&&this.crossFade(this._defaultClip.name,0)},n.onEnable=function(){this._crossFade.resume()},n.onDisable=function(){this._crossFade.pause()},n.onDestroy=function(){for(var t in this._crossFade.stop(),this._nameToState)this._nameToState[t].destroy();this._nameToState=O(!0)},n.play=function(t){if(this._hasBeenPlayed=!0,!t){if(!this._defaultClip)return;t=this._defaultClip.name}this.crossFade(t,0)},n.crossFade=function(t,e){void 0===e&&(e=.3),this._hasBeenPlayed=!0;var n=this._nameToState[t];n&&(this._crossFade.play(),this._crossFade.crossFade(n,e))},n.pause=function(){this._crossFade.pause()},n.resume=function(){this._crossFade.resume()},n.stop=function(){this._crossFade.stop()},n.getAnimationState=function(t){return this.getState(t)},n.getState=function(t){var e=this._nameToState[t];return e&&!e.curveLoaded&&e.initialize(this.node),e||null},n.createState=function(t,e){return e=e||t.name,this.removeState(e),this._doCreateState(t,e)},n.removeState=function(t){var e=this._nameToState[t];e&&(e.allowLastFrameEvent(!1),e.stop(),delete this._nameToState[t])},n.addClip=function(t,e){return R(this._clips,t)||this._clips.push(t),this.createState(t,e)},n.removeClip=function(t,e){var n;for(var r in this._nameToState){var i=this._nameToState[r];if(i.clip===t){n=i;break}}if(t===this._defaultClip){if(!e)return void F(3902);this._defaultClip=null}if(n&&n.isPlaying){if(!e)return void F(3903);n.stop()}this._clips=this._clips.filter((function(e){return e!==t})),n&&delete this._nameToState[n.name]},n.on=function(e,n,r,i){var a=t.prototype.on.call(this,e,n,r,i);return e===Se.LASTFRAME&&this._syncAllowLastFrameEvent(),a},n.once=function(e,n,r){var i=t.prototype.once.call(this,e,n,r);return e===Se.LASTFRAME&&this._syncAllowLastFrameEvent(),i},n.off=function(e,n,r){t.prototype.off.call(this,e,n,r),e===Se.LASTFRAME&&this._syncDisallowLastFrameEvent()},n._createState=function(t,e){return new Te(t,e)},n._doCreateState=function(t,e){var n=this._createState(t,e);return n._setEventTarget(this),n.allowLastFrameEvent(this.hasEventListener(Se.LASTFRAME)),this.node&&n.initialize(this.node),this._nameToState[n.name]=n,n},n._getStateByNameOrDefaultClip=function(t){if(!t){if(!this._defaultClip)return null;t=this._defaultClip.name}return this._nameToState[t]||null},n._removeStateOfAutomaticClip=function(t){for(var e in this._nameToState){var n=this._nameToState[e];He(t,n.clip)&&(n.stop(),delete this._nameToState[e])}},n._syncAllowLastFrameEvent=function(){if(this.hasEventListener(Se.LASTFRAME))for(var t in this._nameToState)this._nameToState[t].allowLastFrameEvent(!0)},n._syncDisallowLastFrameEvent=function(){if(!this.hasEventListener(Se.LASTFRAME))for(var t in this._nameToState)this._nameToState[t].allowLastFrameEvent(!1)},_(e,[{key:"clips",get:function(){return this._clips},set:function(t){var e=this;this._crossFade&&this._crossFade.clear();for(var n,r=d(this._clips);!(n=r()).done;){var i=n.value;i&&this._removeStateOfAutomaticClip(i)}for(var a,s=d(t);!(a=s()).done;){var o=a.value;o&&this.createState(o)}var u=t.find((function(t){return He(t,e._defaultClip)}));this._defaultClip=u||null,this._clips=t}},{key:"defaultClip",get:function(){return this._defaultClip},set:function(t){this._defaultClip=t,t&&(this._clips.findIndex((function(e){return He(e,t)}))>=0||(this._clips.push(t),this.createState(t)))}}]),e}(L(D)),Ve.EventType=Se,r((ze=qe).prototype,"clips",[Oe,Re],Object.getOwnPropertyDescriptor(ze.prototype,"clips"),ze.prototype),r(ze.prototype,"defaultClip",[Fe,Le],Object.getOwnPropertyDescriptor(ze.prototype,"defaultClip"),ze.prototype),De=r(ze.prototype,"playOnLoad",[a,Be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ne=r(ze.prototype,"_clips",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),je=r(ze.prototype,"_defaultClip",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),We=ze))||We)||We)||We)||We)||We));var Ue=[],Ye=new Map,Je=new f}}}));