System.register(["./deprecated-0768b3d4.js","./audio-downloader-f2f97571.js"],(function(t){"use strict";var e,i,o,n,r,p,l,c,u,s,a,h,_,y,f,m,g;return{setters:[function(t){e=t.c,i=t.t,o=t._,n=t.a,r=t.b,p=t.h,l=t.m,c=t.d,u=t.r,s=t.e,a=t.f,h=t.g,_=t.C,y=t.s,f=t.l,m=t.j},function(e){g=e.A,t("AudioClip",e.A)}],execute:function(){var d,w,A,b,O,v,k,C,S,T,j,D,N,P,I,L,z,V,G=(d=e("cc.AudioSource"),w=p(),A=l(),b=i(g),O=i(g),v=c(),k=c(),C=c(),S=u(),T=c(),V=d(j=w(j=A((z=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o))||this,s(e,"_clip",N,a(e)),s(e,"_loop",P,a(e)),s(e,"_playOnAwake",I,a(e)),s(e,"_volume",L,a(e)),e._cachedCurrentTime=0,e}o(e,t);var i=e.prototype;return i.onLoad=function(){this._syncStates(),this._playOnAwake&&this.play()},i.onDisable=function(){this.pause()},i.onDestroy=function(){this.stop()},i.play=function(){this._clip&&this._clip.play()},i.pause=function(){this._clip&&this._clip.pause()},i.stop=function(){this._clip&&this._clip.stop()},i.playOneShot=function(t,e){void 0===e&&(e=1),t.playOneShot(this._volume*e)},i._syncStates=function(){this._clip&&(this._clip.setCurrentTime(this._cachedCurrentTime),this._clip.setLoop(this._loop),this._clip.setVolume(this._volume,!0),this._volume=this._clip.getVolume())},n(e,[{key:"clip",set:function(t){this._clip=t,this._syncStates()},get:function(){return this._clip}},{key:"loop",set:function(t){this._loop=t,this._clip&&this._clip.setLoop(t)},get:function(){return this._loop}},{key:"playOnAwake",set:function(t){this._playOnAwake=t},get:function(){return this._playOnAwake}},{key:"volume",set:function(t){isNaN(t)?console.warn("illegal audio volume!"):(t=h(t,0,1),this._clip?(this._clip.setVolume(t),this._volume=this._clip.getVolume()):this._volume=t)},get:function(){return this._volume}},{key:"currentTime",set:function(t){isNaN(t)?console.warn("illegal audio time!"):(t=h(t,0,this.duration),this._cachedCurrentTime=t,this._clip&&this._clip.setCurrentTime(this._cachedCurrentTime))},get:function(){return this._clip?this._clip.getCurrentTime():this._cachedCurrentTime}},{key:"duration",get:function(){return this._clip?this._clip.getDuration():0}},{key:"state",get:function(){return this._clip?this._clip.state:g.PlayingState.INITIALIZING}},{key:"playing",get:function(){return this.state===g.PlayingState.PLAYING}}]),e}(_),N=r((D=z).prototype,"_clip",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=r(D.prototype,"_loop",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),I=r(D.prototype,"_playOnAwake",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),L=r(D.prototype,"_volume",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),r(D.prototype,"clip",[O,v],Object.getOwnPropertyDescriptor(D.prototype,"clip"),D.prototype),r(D.prototype,"loop",[k],Object.getOwnPropertyDescriptor(D.prototype,"loop"),D.prototype),r(D.prototype,"playOnAwake",[C],Object.getOwnPropertyDescriptor(D.prototype,"playOnAwake"),D.prototype),r(D.prototype,"volume",[S,T],Object.getOwnPropertyDescriptor(D.prototype,"volume"),D.prototype),j=D))||j)||j)||j,t({AudioSource:V,AudioSourceComponent:V}),V);f.AudioSourceComponent=G,m.setClassAlias(G,"cc.AudioSourceComponent")}}}));
