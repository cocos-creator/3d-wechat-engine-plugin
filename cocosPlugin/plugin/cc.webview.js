System.register(["./deprecated-0768b3d4.js","./deprecated-4df5f565.js","./audio-downloader-f2f97571.js","./index-0614c00d.js","./deprecated-88eb2353.js","./screen-f991c158.js"],(function(t){"use strict";var e,i,n,s,r,o,a,h,c,l,p,m,_,u,d,v,w,f,b,y,E,g,L,O;return{setters:[function(t){e=t.a,i=t.l,n=t.a4,s=t._,r=t.c7,o=t.q,a=t.w,h=t.c,c=t.t,l=t.b5,p=t.b,m=t.h,_=t.m,u=t.d,d=t.e,v=t.f,w=t.C,f=t.s,b=t.b6},function(t){y=t.e4,E=t.c0,g=t.bQ,L=t.e6},function(){},function(){},function(t){O=t.E},function(){}],execute:function(){var R;!function(t){t.NONE="none",t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"}(R||(R={}));var D=function(){function t(t){this._componentEventList=new Map,this._state=R.NONE,this._warpper=void 0,this._webview=void 0,this._loaded=!1,this._forceUpdate=!1,this._component=null,this._uiTrans=null,this._w=0,this._h=0,this._m00=0,this._m01=0,this._m04=0,this._m05=0,this._m12=0,this._m13=0,this._component=t,this._uiTrans=t.node.getComponent(y),this.reset(),this.createWebView()}var i=t.prototype;return i.reset=function(){this._warpper=null,this._webview=null,this._loaded=!1,this._w=0,this._h=0,this._m00=0,this._m01=0,this._m04=0,this._m05=0,this._m12=0,this._m13=0,this._state=R.NONE,this._forceUpdate=!1},i.dispatchEvent=function(t){var e=this._componentEventList.get(t);e&&(this._state=t,e.call(this))},i.destroy=function(){this.removeWebView(),this._warpper=null,this._webview=null,this._loaded=!1,this._component=null,this._uiTrans=null,this._forceUpdate=!1,this._componentEventList.clear()},e(t,[{key:"loaded",get:function(){return this._loaded}},{key:"componentEventList",get:function(){return this._componentEventList}},{key:"webview",get:function(){return this._webview}},{key:"state",get:function(){return this._state}},{key:"UICamera",get:function(){return this._uiTrans&&this._uiTrans._canvas&&this._uiTrans._canvas.camera}}]),t}();i.internal.WebViewImpl=D;var x,I,k,T,N,S,W,A,U,C,V,J,j,M,G=n(),z=function(t){function e(e){return t.call(this,e)||this}s(e,t);var i=e.prototype;return i._bindDomEvent=function(){var t=this;this.webview.addEventListener("load",(function(e){t._forceUpdate=!0,t.dispatchEvent(R.LOADED);var i=e.target,n=i.contentDocument&&i.contentDocument.body;n&&n.innerHTML.includes("404")&&t.dispatchEvent(R.ERROR)})),this.webview.addEventListener("error",(function(e){t.dispatchEvent(R.ERROR);var i=e.target.error;i&&o("Error "+i.code+"; details: "+i.message)}))},i.loadURL=function(t){this.webview&&(this.webview.src=t,this.dispatchEvent(R.LOADING))},i.createWebView=function(){var t=document.createElement("div");this._warpper=t,t.id="webview-wrapper",t.style["-webkit-overflow"]="auto",t.style["-webkit-overflow-scrolling"]="touch",t.style.position="absolute",t.style.bottom="0px",t.style.left="0px",t.style.transformOrigin="0px 100% 0px",t.style["-webkit-transform-origin"]="0px 100% 0px",E.container.appendChild(t);var e=document.createElement("iframe");this._webview=e,e.id="webview",e.style.border="none",e.style.width="100%",e.style.height="100%",t.appendChild(e),this._bindDomEvent()},i.removeWebView=function(){var t=this._warpper;r(E.container,t)&&E.container.removeChild(t),this.reset()},i.enable=function(){this._warpper&&(this._warpper.style.visibility="visible")},i.disable=function(){this._warpper&&(this._warpper.style.visibility="hidden")},i.evaluateJS=function(t){if(this.webview){var e=this.webview.contentWindow;if(e)try{e.eval(t)}catch(t){this.dispatchEvent(R.ERROR),o(t)}}},i.setOnJSCallback=function(){a("The platform does not support")},i.setJavascriptInterfaceScheme=function(){a("The platform does not support")},i.syncMatrix=function(){if(this._warpper&&this._uiTrans&&this._component&&"hidden"!==this._warpper.style.visibility){var t=this.UICamera;if(t){this._component.node.getWorldMatrix(G),t.update(!0),t.worldMatrixToScreen(G,G,E.canvas.width,E.canvas.height);var e=this._uiTrans.contentSize,i=e.width,n=e.height;if(this._forceUpdate||this._m00!==G.m00||this._m01!==G.m01||this._m04!==G.m04||this._m05!==G.m05||this._m12!==G.m12||this._m13!==G.m13||this._w!==i||this._h!==n){this._m00=G.m00,this._m01=G.m01,this._m04=G.m04,this._m05=G.m05,this._m12=G.m12,this._m13=G.m13,this._w=i,this._h=n;var s=g.getDevicePixelRatio(),r=1/s,o=1/s,a=E.container,h=G.m00*r,c=G.m01,l=G.m04,p=G.m05*o;this._warpper.style.width=i+"px",this._warpper.style.height=n+"px";var m=this._w*r,_=this._h*o,u=m*G.m00*this._uiTrans.anchorX,d=_*G.m05*this._uiTrans.anchorY,v=a&&a.style.paddingLeft?parseInt(a.style.paddingLeft):0,w=a&&a.style.paddingBottom?parseInt(a.style.paddingBottom):0,f="matrix("+h+","+-c+","+-l+","+p+","+(G.m12*r-u+v)+","+-(G.m13*o-d+w)+")";this._warpper.style.transform=f,this._warpper.style["-webkit-transform"]=f,this._forceUpdate=!1}}}},e}(D),B=function(){function t(){}return t.getImpl=function(t){return new z(t)},t}();i.internal.WebViewImplManager=B;var P=t("WebView",(x=h("cc.WebView"),I=m(),k=_(),T=L(y),N=u(),S=c([O]),W=b(),A=u(),x(U=I(U=k(U=T(U=l((M=j=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,d(e,"_url",V,v(e)),e._impl=void 0,d(e,"webviewEvents",J,v(e)),e}s(i,t);var n=i.prototype;return n.setJavascriptInterfaceScheme=function(t){this._impl&&this._impl.setJavascriptInterfaceScheme(t)},n.setOnJSCallback=function(t){this._impl&&this._impl.setOnJSCallback(t)},n.evaluateJS=function(t){this._impl&&this._impl.evaluateJS(t)},n.__preload=function(){this._impl=B.getImpl(this),this._impl.componentEventList.set(R.LOADING,this.onLoading.bind(this)),this._impl.componentEventList.set(R.LOADED,this.onLoaded.bind(this)),this._impl.componentEventList.set(R.ERROR,this.onError.bind(this)),this._impl.loadURL(this._url)},n.onLoading=function(){O.emitEvents(this.webviewEvents,this,R.LOADING),this.node.emit(R.LOADING,this)},n.onLoaded=function(){O.emitEvents(this.webviewEvents,this,R.LOADED),this.node.emit(R.LOADED,this)},n.onError=function(){O.emitEvents(this.webviewEvents,this,R.ERROR),this.node.emit(R.ERROR,this)},n.onEnable=function(){this._impl&&this._impl.enable()},n.onDisable=function(){this._impl&&this._impl.disable()},n.onDestroy=function(){this._impl&&(this._impl.destroy(),this._impl=null)},n.update=function(){this._impl&&this._impl.syncMatrix()},e(i,[{key:"url",get:function(){return this._url},set:function(t){this._url=t,this._impl&&this._impl.loadURL(t)}},{key:"nativeWebView",get:function(){return this._impl&&this._impl.webview||null}},{key:"state",get:function(){return this._impl?this._impl.state:R.NONE}}]),i}(w),j.EventType=R,V=p((C=M).prototype,"_url",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"https://cocos.com"}}),p(C.prototype,"url",[N],Object.getOwnPropertyDescriptor(C.prototype,"url"),C.prototype),J=p(C.prototype,"webviewEvents",[f,S,W,A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=C))||U)||U)||U)||U)||U));i.internal.WebView=P}}}));
