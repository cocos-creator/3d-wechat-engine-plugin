System.register(["./deprecated-0768b3d4.js","./deprecated-4df5f565.js"],(function(e){"use strict";var n,r,l;return{setters:[function(e){n=e.aC,r=e.l},function(e){l=e.bO}],execute:function(){n(l.prototype,"View.prototype",[{name:"isAntiAliasEnabled",suggest:"The API of Texture2d have been largely modified, no alternative"},{name:"enableAntiAlias",suggest:"The API of Texture2d have been largely modified, no alternative"}]);var t=e("s",{_supportsFullScreen:!1,_onfullscreenchange:null,_onfullscreenerror:null,_preOnFullScreenError:null,_preOnTouch:null,_touchEvent:"",_fn:null,_fnMap:[["requestFullscreen","exitFullscreen","fullscreenchange","fullscreenEnabled","fullscreenElement"],["requestFullScreen","exitFullScreen","fullScreenchange","fullScreenEnabled","fullScreenElement"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange","webkitIsFullScreen","webkitCurrentFullScreenElement"],["mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozFullScreen","mozFullScreenElement"],["msRequestFullscreen","msExitFullscreen","MSFullscreenChange","msFullscreenEnabled","msFullscreenElement"]],init:function(){this._fn={};var e,n,r,l,t=this._fnMap;for(e=0,n=t.length;e<n;e++)if((r=t[e])&&void 0!==document[r[1]]){for(e=0,l=r.length;e<l;e++)this._fn[t[0][e]]=r[e];break}this._supportsFullScreen=void 0!==this._fn.requestFullscreen,this._touchEvent="ontouchstart"in window?"touchstart":"mousedown"},get supportsFullScreen(){return this._supportsFullScreen},fullScreen:function(){return!!this._supportsFullScreen&&void 0!==document[this._fn.fullscreenElement]&&null!==document[this._fn.fullscreenElement]},requestFullScreen:function(e,n,r){if(this._supportsFullScreen){if(e=e||document.documentElement,n){var l=this._fn.fullscreenchange;this._onfullscreenchange&&document.removeEventListener(l,this._onfullscreenchange),this._onfullscreenchange=n,document.addEventListener(l,n,!1)}if(r){var t=this._fn.fullscreenerror;this._onfullscreenerror&&document.removeEventListener(t,this._onfullscreenerror),this._onfullscreenerror=r,document.addEventListener(t,r,{once:!0})}var u=e[this._fn.requestFullscreen]();return window.Promise&&u instanceof Promise&&u.catch((function(){})),u}},exitFullScreen:function(){var e;return this.fullScreen()&&(e=document[this._fn.exitFullscreen]()).catch((function(){})),e},autoFullScreen:function(e,n){e=e||document.body,this._ensureFullScreen(e,n),this.requestFullScreen(e,n)},disableAutoFullScreen:function(e){if(this._preOnTouch){var n=r.game.canvas||e,l=this._touchEvent;n.removeEventListener(l,this._preOnTouch),this._preOnTouch=null}},_ensureFullScreen:function(e,n){var l=this,t=r.game.canvas||e,u=this._fn.fullscreenerror,c=this._touchEvent,s=function(){l._preOnFullScreenError=null,l._preOnTouch&&t.removeEventListener(c,l._preOnTouch),l._preOnTouch=function(){l._preOnTouch=null,l.requestFullScreen(e,n)},t.addEventListener(c,l._preOnTouch,{once:!0})};this._preOnFullScreenError&&e.removeEventListener(u,this._preOnFullScreenError),this._preOnFullScreenError=s,e.addEventListener(u,s,{once:!0})}});t.init(),r.screen=t}}}));
