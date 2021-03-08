System.register(["./coordinates-converts-utils-3a9a8fd2.js","./mesh-a74c9455.js"],(function(e){"use strict";var t,i,n,o,s,r,c,a,h,u,p,l,f,m,d,b;return{setters:[function(e){t=e.bL,i=e.bM,n=e.e2,o=e.ec,s=e.c0,r=e.b9,c=e.e3,a=e.l,h=e.e4,u=e.c5,p=e.e5,l=e.e7,f=e.e8,m=e.bO,d=e.ea},function(e){b=e.M}],execute:function(){var _,y,P,v,g,B,j,k,M;t(b.prototype,"Mesh.prototype",[{name:"renderingMesh",newName:"renderingSubMeshes"}]),i(b.prototype,"Mesh.prototype",[{name:"hasFlatBuffers"},{name:"destroyFlatBuffers"}]);var w=e("S",(_=n("cc.Skeleton"),y=o([s]),P=o([r]),_((M=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,l(t,"_joints",B,f(t)),l(t,"_bindposes",j,f(t)),l(t,"_hash",k,f(t)),t._invBindposes=null,t}return c(t,e),t.prototype.destroy=function(){return a.director.root.dataPoolManager.releaseSkeleton(this),e.prototype.destroy.call(this)},h(t,[{key:"joints",get:function(){return this._joints},set:function(e){this._joints=e}},{key:"bindposes",get:function(){return this._bindposes},set:function(e){this._bindposes=e}},{key:"inverseBindposes",get:function(){if(!this._invBindposes){this._invBindposes=[];for(var e=0;e<this._bindposes.length;e++){var t=new r;r.invert(t,this._bindposes[e]),this._invBindposes.push(t)}}return this._invBindposes}},{key:"hash",get:function(){if(!this._hash){for(var e="",t=0;t<this._bindposes.length;t++){var i=this._bindposes[t];e+=i.m00.toPrecision(2)+" "+i.m01.toPrecision(2)+" "+i.m02.toPrecision(2)+" "+i.m03.toPrecision(2)+" "+i.m04.toPrecision(2)+" "+i.m05.toPrecision(2)+" "+i.m06.toPrecision(2)+" "+i.m07.toPrecision(2)+" "+i.m08.toPrecision(2)+" "+i.m09.toPrecision(2)+" "+i.m10.toPrecision(2)+" "+i.m11.toPrecision(2)+" "+i.m12.toPrecision(2)+" "+i.m13.toPrecision(2)+" "+i.m14.toPrecision(2)+" "+i.m15.toPrecision(2)+"\n"}this._hash=m(e,666)}return this._hash}}]),t}(u),B=p((g=M).prototype,"_joints",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=p(g.prototype,"_bindposes",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=p(g.prototype,"_hash",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=g))||v));a.Skeleton=w}}}));
