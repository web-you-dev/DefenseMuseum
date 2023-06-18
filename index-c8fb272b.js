var Jp=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var xA=Jp((l1,Yp)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="152",Kp=0,Dh=1,Qp=2,Nd=1,em=2,ci=3,Fi=0,Qt=1,hi=2,Ii=0,fs=1,Ih=2,Uh=3,Nh=4,tm=5,ns=100,nm=101,im=102,Fh=103,Oh=104,rm=200,sm=201,om=202,am=203,Fd=204,Od=205,cm=206,lm=207,hm=208,um=209,fm=210,dm=0,pm=1,mm=2,Sl=3,gm=4,_m=5,vm=6,xm=7,Bd=0,ym=1,Mm=2,fi=0,bm=1,Sm=2,Em=3,wm=4,Tm=5,zd=300,_s=301,vs=302,El=303,wl=304,nc=306,Tl=1e3,Cn=1001,Al=1002,qt=1003,Bh=1004,_c=1005,pn=1006,Am=1007,ho=1008,lr=1009,Rm=1010,Lm=1011,Gd=1012,Cm=1013,nr=1014,ir=1015,uo=1016,Pm=1017,Dm=1018,ds=1020,Im=1021,Pn=1023,Um=1024,Nm=1025,rr=1026,xs=1027,Fm=1028,Om=1029,Bm=1030,zm=1031,Gm=1033,vc=33776,xc=33777,yc=33778,Mc=33779,zh=35840,Gh=35841,Hh=35842,kh=35843,Hm=36196,Vh=37492,Wh=37496,Xh=37808,$h=37809,qh=37810,jh=37811,Yh=37812,Zh=37813,Jh=37814,Kh=37815,Qh=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,bc=36492,km=36283,su=36284,ou=36285,au=36286,Hd=3e3,sr=3001,Vm=3200,Wm=3201,Xm=0,$m=1,or="",Qe="srgb",Xn="srgb-linear",kd="display-p3",Sc=7680,qm=519,cu=35044,lu="300 es",Rl=1035;let Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Ll=180/Math.PI;function Ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function jm(n,e){return(n%e+e)%e}function wc(n,e,t){return(1-t)*n+t*e}function hu(n){return(n&n-1)===0&&n!==0}function Ym(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Io(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let Et=class Vd{constructor(e=0,t=0){Vd.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class Wd{constructor(){Wd.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],v=r[0],g=r[3],p=r[6],_=r[1],M=r[4],S=r[7],y=r[2],x=r[5],w=r[8];return s[0]=o*v+a*_+c*y,s[3]=o*g+a*M+c*x,s[6]=o*p+a*S+c*w,s[1]=l*v+u*_+h*y,s[4]=l*g+u*M+h*x,s[7]=l*p+u*S+h*w,s[2]=f*v+d*_+m*y,s[5]=f*g+d*M+m*x,s[8]=f*p+d*S+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Tc=new ct;function Xd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const uu={};function to(n){n in uu||(uu[n]=!0,console.warn(n))}function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ac(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zm=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Jm=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Km(n){return n.convertSRGBToLinear().applyMatrix3(Jm)}function Qm(n){return n.applyMatrix3(Zm).convertLinearToSRGB()}const eg={[Xn]:n=>n,[Qe]:n=>n.convertSRGBToLinear(),[kd]:Km},tg={[Xn]:n=>n,[Qe]:n=>n.convertLinearToSRGB(),[kd]:Qm},bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Xn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=eg[e],r=tg[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let br,$d=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Ga("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};class qd{constructor(e=null){this.isSource=!0,this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ng=0,vi=class Na extends Mr{constructor(e=Na.DEFAULT_IMAGE,t=Na.DEFAULT_MAPPING,i=Cn,r=Cn,s=pn,o=ho,a=Pn,c=lr,l=Na.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Ao(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sr?Qe:or),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?sr:Hd}set encoding(e){to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Qe:or}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=zd;vi.DEFAULT_ANISOTROPY=1;let Yt=class jd{constructor(e=0,t=0,i=0,r=1){jd.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(d+1)/2,y=(p+1)/2,x=(u+f)/4,w=(h+v)/4,G=(m+g)/4;return M>S&&M>y?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=x/i,s=w/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=x/r,s=G/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=w/s,r=G/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-v)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hr=class extends Mr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(to("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Qe:or),this.texture=new vi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Yd extends vi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ig extends vi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ro=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==m){let g=1-a;const p=c*f+l*d+u*m+h*v,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const y=Math.sqrt(M),x=Math.atan2(y,p*_);g=Math.sin(g*x)/y,a=Math.sin(a*x)/y}const S=a*_;if(c=c*g+f*S,l=l*g+d*S,u=u*g+m*S,h=h*g+v*S,g===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},re=class Zd{constructor(e=0,t=0,i=0){Zd.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Lc=new re,fu=new Ro;let Lo=class{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else r.boundingBox===null&&r.computeBoundingBox(),Sr.copy(r.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Uo.subVectors(this.max,zs),Er.subVectors(e.a,zs),wr.subVectors(e.b,zs),Tr.subVectors(e.c,zs),xi.subVectors(wr,Er),yi.subVectors(Tr,wr),Xi.subVectors(Er,Tr);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Xi.z,Xi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Xi.z,0,-Xi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Xi.y,Xi.x,0];return!Cc(t,Er,wr,Tr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Er,wr,Tr,Uo))?!1:(No.crossVectors(xi,yi),t=[No.x,No.y,No.z],Cc(t,Er,wr,Tr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const Jn=[new re,new re,new re,new re,new re,new re,new re,new re],Kn=new re,Sr=new Lo,Er=new re,wr=new re,Tr=new re,xi=new re,yi=new re,Xi=new re,zs=new re,Uo=new re,No=new re,$i=new re;function Cc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rg=new Lo,Gs=new re,Pc=new re;let ph=class{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Pc)),this.expandByPoint(Gs.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Qn=new re,Dc=new re,Fo=new re,Mi=new re,Ic=new re,Oo=new re,Uc=new re;let Jd=class{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Dc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Mi.dot(this.direction),c=-Mi.dot(Fo),l=Mi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(Fo,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){Ic.subVectors(t,e),Oo.subVectors(i,e),Uc.crossVectors(Ic,Oo);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const c=a*this.direction.dot(Oo.crossVectors(Mi,Oo));if(c<0)return null;const l=a*this.direction.dot(Ic.cross(Mi));if(l<0||c+l>o)return null;const u=-a*Mi.dot(Uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class Cl{constructor(){Cl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,og)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),bi.crossVectors(i,sn),bi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),bi.crossVectors(i,sn)),bi.normalize(),Bo.crossVectors(sn,bi),r[0]=bi.x,r[4]=Bo.x,r[8]=sn.x,r[1]=bi.y,r[5]=Bo.y,r[9]=sn.y,r[2]=bi.z,r[6]=Bo.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],_=i[3],M=i[7],S=i[11],y=i[15],x=r[0],w=r[4],G=r[8],b=r[12],C=r[1],N=r[5],B=r[9],D=r[13],I=r[2],L=r[6],z=r[10],k=r[14],W=r[3],ee=r[7],Q=r[11],ge=r[15];return s[0]=o*x+a*C+c*I+l*W,s[4]=o*w+a*N+c*L+l*ee,s[8]=o*G+a*B+c*z+l*Q,s[12]=o*b+a*D+c*k+l*ge,s[1]=u*x+h*C+f*I+d*W,s[5]=u*w+h*N+f*L+d*ee,s[9]=u*G+h*B+f*z+d*Q,s[13]=u*b+h*D+f*k+d*ge,s[2]=m*x+v*C+g*I+p*W,s[6]=m*w+v*N+g*L+p*ee,s[10]=m*G+v*B+g*z+p*Q,s[14]=m*b+v*D+g*k+p*ge,s[3]=_*x+M*C+S*I+y*W,s[7]=_*w+M*N+S*L+y*ee,s[11]=_*G+M*B+S*z+y*Q,s[15]=_*b+M*D+S*k+y*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+g*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],_=h*g*l-v*f*l+v*c*d-a*g*d-h*c*p+a*f*p,M=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,S=u*v*l-m*h*l+m*a*d-o*v*d-u*a*p+o*h*p,y=m*h*c-u*v*c-m*a*f+o*v*f+u*a*g-o*h*g,x=t*_+i*M+r*S+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=_*w,e[1]=(v*f*s-h*g*s-v*r*d+i*g*d+h*r*p-i*f*p)*w,e[2]=(a*g*s-v*c*s+v*r*l-i*g*l-a*r*p+i*c*p)*w,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*w,e[4]=M*w,e[5]=(u*g*s-m*f*s+m*r*d-t*g*d-u*r*p+t*f*p)*w,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*w,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*w,e[8]=S*w,e[9]=(m*h*s-u*v*s-m*i*d+t*v*d+u*i*p-t*h*p)*w,e[10]=(o*v*s-m*a*s+m*i*l-t*v*l-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*w,e[12]=y*w,e[13]=(u*v*r-m*h*r+m*i*f-t*v*f-u*i*g+t*h*g)*w,e[14]=(m*a*r-o*v*r-m*i*c+t*v*c+o*i*g-t*a*g)*w,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,v=o*u,g=o*h,p=a*h,_=c*l,M=c*u,S=c*h,y=i.x,x=i.y,w=i.z;return r[0]=(1-(v+p))*y,r[1]=(d+S)*y,r[2]=(m-M)*y,r[3]=0,r[4]=(d-S)*x,r[5]=(1-(f+p))*x,r[6]=(g+_)*x,r[7]=0,r[8]=(m+M)*w,r[9]=(g-_)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const l=1/s,u=1/o,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const Ar=new re,Sn=new en,sg=new re(0,0,0),og=new re(1,1,1),bi=new re,Bo=new re,sn=new re,du=new en,pu=new Ro;let mh=class Kd{constructor(e=0,t=0,i=0,r=Kd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mh.DEFAULT_ORDER="XYZ";let gh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ag=0;const mu=new re,Rr=new Ro,ei=new en,zo=new re,Hs=new re,cg=new re,lg=new Ro,gu=new re(1,0,0),_u=new re(0,1,0),vu=new re(0,0,1),hg={type:"added"},xu={type:"removed"};let Fn=class Fa extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fa.DEFAULT_UP.clone();const e=new re,t=new mh,i=new Ro,r=new re(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new ct}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Fa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Fa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Hs,zo,this.up):ei.lookAt(zo,Hs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ei),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};Fn.DEFAULT_UP=new re(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new re,ti=new re,Nc=new re,ni=new re,Lr=new re,Cr=new re,yu=new re,Fc=new re,Oc=new re,Bc=new re;let Go=!1,Ho=class Ki{constructor(e=new re,t=new re,i=new re){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),ti.subVectors(i,t),Nc.subVectors(e,t);const o=En.dot(En),a=En.dot(ti),c=En.dot(Nc),l=ti.dot(ti),u=ti.dot(Nc),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,i,r,s,o,a,c){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ni),c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),ti.subVectors(e,t),En.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),En.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),Ki.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Ki.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Cr.subVectors(s,i),Fc.subVectors(e,i);const c=Lr.dot(Fc),l=Cr.dot(Fc);if(c<=0&&l<=0)return t.copy(i);Oc.subVectors(e,r);const u=Lr.dot(Oc),h=Cr.dot(Oc);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Lr,o);Bc.subVectors(e,s);const d=Lr.dot(Bc),m=Cr.dot(Bc);if(m>=0&&d<=m)return t.copy(s);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Cr,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return yu.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(yu,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Lr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ug=0,ic=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=fs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sc,this.stencilZFail=Sc,this.stencilZPass=Sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ko={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let dt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=bn.workingColorSpace){return this.r=e,this.g=t,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=bn.workingColorSpace){if(e=jm(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return bn.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bn.workingColorSpace){bn.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bn.workingColorSpace){return bn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Qe){bn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ko);const i=wc(wn.h,ko.h,t),r=wc(wn.s,ko.s,t),s=wc(wn.l,ko.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ot=new dt;dt.NAMES=Qd;let _h=class extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Tt=new re,Vo=new Et;let Vn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},ep=class extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},tp=class extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ar=class extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},fg=0;const dn=new en,Gc=new Fn,Pr=new re,on=new Lo,ks=new Lo,Pt=new re;let Co=class np extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?tp:ep)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ar(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(on.min,ks.min),on.expandByPoint(Pt),Pt.addVectors(on.max,ks.max),on.expandByPoint(Pt)):(on.expandByPoint(ks.min),on.expandByPoint(ks.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),Pt.add(Pr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let C=0;C<a;C++)l[C]=new re,u[C]=new re;const h=new re,f=new re,d=new re,m=new Et,v=new Et,g=new Et,p=new re,_=new re;function M(C,N,B){h.fromArray(r,C*3),f.fromArray(r,N*3),d.fromArray(r,B*3),m.fromArray(o,C*2),v.fromArray(o,N*2),g.fromArray(o,B*2),f.sub(h),d.sub(h),v.sub(m),g.sub(m);const D=1/(v.x*g.y-g.x*v.y);isFinite(D)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(D),_.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(D),l[C].add(p),l[N].add(p),l[B].add(p),u[C].add(_),u[N].add(_),u[B].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,N=S.length;C<N;++C){const B=S[C],D=B.start,I=B.count;for(let L=D,z=D+I;L<z;L+=3)M(i[L+0],i[L+1],i[L+2])}const y=new re,x=new re,w=new re,G=new re;function b(C){w.fromArray(s,C*3),G.copy(w);const N=l[C];y.copy(N),y.sub(w.multiplyScalar(w.dot(N))).normalize(),x.crossVectors(G,N);const D=x.dot(u[C])<0?-1:1;c[C*4]=y.x,c[C*4+1]=y.y,c[C*4+2]=y.z,c[C*4+3]=D}for(let C=0,N=S.length;C<N;++C){const B=S[C],D=B.start,I=B.count;for(let L=D,z=D+I;L<z;L+=3)b(i[L+0]),b(i[L+1]),b(i[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new re,s=new re,o=new re,a=new re,c=new re,l=new re,u=new re,h=new re;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new Vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new np,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Mu=new en,On=new Jd,Wo=new ph,bu=new re,Dr=new re,Ir=new re,Ur=new re,Hc=new re,Xo=new re,$o=new Et,qo=new Et,jo=new Et,Su=new re,Eu=new re,wu=new re,Yo=new re,Zo=new re;let ui=class extends Fn{constructor(e=new Co,t=new _h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Hc.fromBufferAttribute(h,e),o?Xo.addScaledVector(Hc,u):Xo.addScaledVector(Hc.sub(t),u))}t.add(Xo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(Wo.containsPoint(On.origin)===!1&&(On.intersectSphere(Wo,bu)===null||On.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Mu.copy(s).invert(),On.copy(e.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,m=h.length;d<m;d++){const v=h[d],g=s[v.materialIndex],p=Math.max(v.start,f.start),_=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let M=p,S=_;M<S;M+=3){const y=o.getX(M),x=o.getX(M+1),w=o.getX(M+2);i=Jo(this,g,e,On,c,l,u,y,x,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const d=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let v=d,g=m;v<g;v+=3){const p=o.getX(v),_=o.getX(v+1),M=o.getX(v+2);i=Jo(this,s,e,On,c,l,u,p,_,M),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,m=h.length;d<m;d++){const v=h[d],g=s[v.materialIndex],p=Math.max(v.start,f.start),_=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let M=p,S=_;M<S;M+=3){const y=M,x=M+1,w=M+2;i=Jo(this,g,e,On,c,l,u,y,x,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const d=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let v=d,g=m;v<g;v+=3){const p=v,_=v+1,M=v+2;i=Jo(this,s,e,On,c,l,u,p,_,M),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function dg(n,e,t,i,r,s,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Fi,a),c===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zo);return l<t.near||l>t.far?null:{distance:l,point:Zo.clone(),object:n}}function Jo(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Dr),n.getVertexPosition(c,Ir),n.getVertexPosition(l,Ur);const u=dg(n,e,t,i,Dr,Ir,Ur,Yo);if(u){r&&($o.fromBufferAttribute(r,a),qo.fromBufferAttribute(r,c),jo.fromBufferAttribute(r,l),u.uv=Ho.getInterpolation(Yo,Dr,Ir,Ur,$o,qo,jo,new Et)),s&&($o.fromBufferAttribute(s,a),qo.fromBufferAttribute(s,c),jo.fromBufferAttribute(s,l),u.uv1=Ho.getInterpolation(Yo,Dr,Ir,Ur,$o,qo,jo,new Et),u.uv2=u.uv1),o&&(Su.fromBufferAttribute(o,a),Eu.fromBufferAttribute(o,c),wu.fromBufferAttribute(o,l),u.normal=Ho.getInterpolation(Yo,Dr,Ir,Ur,Su,Eu,wu,new re),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new re,materialIndex:0};Ho.getNormal(Dr,Ir,Ur,h.normal),u.face=h}return u}class Ds extends Co{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ar(l,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(h,2));function m(v,g,p,_,M,S,y,x,w,G,b){const C=S/w,N=y/G,B=S/2,D=y/2,I=x/2,L=w+1,z=G+1;let k=0,W=0;const ee=new re;for(let Q=0;Q<z;Q++){const ge=Q*N-D;for(let ue=0;ue<L;ue++){const K=ue*C-B;ee[v]=K*_,ee[g]=ge*M,ee[p]=I,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[p]=x>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(ue/w),h.push(1-Q/G),k+=1}}for(let Q=0;Q<G;Q++)for(let ge=0;ge<w;ge++){const ue=f+ge+L*Q,K=f+ge+L*(Q+1),oe=f+(ge+1)+L*(Q+1),q=f+(ge+1)+L*Q;c.push(ue,K,q),c.push(K,oe,q),W+=6}a.addGroup(d,W,b),d+=W,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const r in i)e[r]=i[r]}return e}function pg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){return n.getRenderTarget()===null?n.outputColorSpace:Xn}const mg={clone:ys,merge:$t};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let ur=class extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rp=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends rp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Nr=-90,Fr=1;let vg=class extends Fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new mn(Nr,Fr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new mn(Nr,Fr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new mn(Nr,Fr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new mn(Nr,Fr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new mn(Nr,Fr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new mn(Nr,Fr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=fi,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},sp=class extends vi{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xg=class extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(to("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sr?Qe:or),this.texture=new sp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ds(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ii});s.uniforms.tEquirect.value=t;const o=new ui(r,s),a=t.minFilter;return t.minFilter===ho&&(t.minFilter=pn),new vg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};const kc=new re,yg=new re,Mg=new ct;let Qi=class{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=kc.subVectors(i,t).cross(yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mg.getNormalMatrix(e),r=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const qi=new ph,Ko=new re;let op=class{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],m=i[10],v=i[11],g=i[12],p=i[13],_=i[14],M=i[15];return t[0].setComponents(a-r,h-c,v-f,M-g).normalize(),t[1].setComponents(a+r,h+c,v+f,M+g).normalize(),t[2].setComponents(a+s,h+l,v+d,M+p).normalize(),t[3].setComponents(a-s,h-l,v-d,M-p).normalize(),t[4].setComponents(a-o,h-u,v-m,M-_).normalize(),t[5].setComponents(a+o,h+u,v+m,M+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ap(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),l.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,l),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class vh extends Co{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const _=p*f-o;for(let M=0;M<l;M++){const S=M*h-s;m.push(S,-_,0),v.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const M=_+l*p,S=_+l*(p+1),y=_+1+l*(p+1),x=_+1+l*p;d.push(M,S,x),d.push(S,y,x)}this.setIndex(d),this.setAttribute("position",new ar(m,3)),this.setAttribute("normal",new ar(v,3)),this.setAttribute("uv",new ar(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg="vec3 transformed = vec3( position );",Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ig=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,d_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,U_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ev=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:Sg,alphamap_pars_fragment:Eg,alphatest_fragment:wg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Rg,begin_vertex:Lg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Dg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:zg,color_pars_vertex:Gg,color_vertex:Hg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:$g,emissivemap_fragment:qg,emissivemap_pars_fragment:jg,encodings_fragment:Yg,encodings_pars_fragment:Zg,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Qg,envmap_pars_vertex:e_,envmap_physical_pars_fragment:f_,envmap_vertex:t_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:r_,fog_pars_fragment:s_,gradientmap_pars_fragment:o_,lightmap_fragment:a_,lightmap_pars_fragment:c_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:h_,lights_pars_begin:u_,lights_toon_fragment:d_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:__,lights_physical_pars_fragment:v_,lights_fragment_begin:x_,lights_fragment_maps:y_,lights_fragment_end:M_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:w_,map_fragment:T_,map_pars_fragment:A_,map_particle_fragment:R_,map_particle_pars_fragment:L_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphcolor_vertex:D_,morphnormal_vertex:I_,morphtarget_pars_vertex:U_,morphtarget_vertex:N_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:G_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,output_fragment:$_,packing:q_,premultiplied_alpha_fragment:j_,project_vertex:Y_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:rv,skinning_pars_vertex:sv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:cv,specularmap_pars_fragment:lv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:fv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:_v,background_vert:vv,background_frag:xv,backgroundCube_vert:yv,backgroundCube_frag:Mv,cube_vert:bv,cube_frag:Sv,depth_vert:Ev,depth_frag:wv,distanceRGBA_vert:Tv,distanceRGBA_frag:Av,equirect_vert:Rv,equirect_frag:Lv,linedashed_vert:Cv,linedashed_frag:Pv,meshbasic_vert:Dv,meshbasic_frag:Iv,meshlambert_vert:Uv,meshlambert_frag:Nv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:Bv,meshnormal_frag:zv,meshphong_vert:Gv,meshphong_frag:Hv,meshphysical_vert:kv,meshphysical_frag:Vv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:$v,points_frag:qv,shadow_vert:jv,shadow_frag:Yv,sprite_vert:Zv,sprite_frag:Jv},Ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaTest:{value:0}}},Gn={basic:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$t([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$t([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$t([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$t([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$t([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$t([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:$t([Ce.common,Ce.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:$t([Ce.lights,Ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:$t([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Qo={r:0,b:0,g:0};function Kv(n,e,t,i,r,s,o){const a=new dt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function m(g,p){let _=!1,M=p.isScene===!0?p.background:null;switch(M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),_=!0),n.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===nc)?(u===void 0&&(u=new ui(new Ds(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:ys(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,w,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Qe,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ui(new vh(2,2),new ur({name:"BackgroundMaterial",uniforms:ys(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=M.colorSpace!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,p){g.getRGB(Qo,ip(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:m}}function Qv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function h(I,L,z,k,W){let ee=!1;if(o){const Q=v(k,z,L);l!==Q&&(l=Q,d(l.object)),ee=p(I,k,z,W),ee&&_(I,k,z,W)}else{const Q=L.wireframe===!0;(l.geometry!==k.id||l.program!==z.id||l.wireframe!==Q)&&(l.geometry=k.id,l.program=z.id,l.wireframe=Q,ee=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,G(I,L,z,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,L,z){const k=z.wireframe===!0;let W=a[I.id];W===void 0&&(W={},a[I.id]=W);let ee=W[L.id];ee===void 0&&(ee={},W[L.id]=ee);let Q=ee[k];return Q===void 0&&(Q=g(f()),ee[k]=Q),Q}function g(I){const L=[],z=[],k=[];for(let W=0;W<r;W++)L[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:k,object:I,attributes:{},index:null}}function p(I,L,z,k){const W=l.attributes,ee=L.attributes;let Q=0;const ge=z.getAttributes();for(const ue in ge)if(ge[ue].location>=0){const oe=W[ue];let q=ee[ue];if(q===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),oe===void 0||oe.attribute!==q||q&&oe.data!==q.data)return!0;Q++}return l.attributesNum!==Q||l.index!==k}function _(I,L,z,k){const W={},ee=L.attributes;let Q=0;const ge=z.getAttributes();for(const ue in ge)if(ge[ue].location>=0){let oe=ee[ue];oe===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const q={};q.attribute=oe,oe&&oe.data&&(q.data=oe.data),W[ue]=q,Q++}l.attributes=W,l.attributesNum=Q,l.index=k}function M(){const I=l.newAttributes;for(let L=0,z=I.length;L<z;L++)I[L]=0}function S(I){y(I,0)}function y(I,L){const z=l.newAttributes,k=l.enabledAttributes,W=l.attributeDivisors;z[I]=1,k[I]===0&&(n.enableVertexAttribArray(I),k[I]=1),W[I]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,L),W[I]=L)}function x(){const I=l.newAttributes,L=l.enabledAttributes;for(let z=0,k=L.length;z<k;z++)L[z]!==I[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function w(I,L,z,k,W,ee){i.isWebGL2===!0&&(z===n.INT||z===n.UNSIGNED_INT)?n.vertexAttribIPointer(I,L,z,W,ee):n.vertexAttribPointer(I,L,z,k,W,ee)}function G(I,L,z,k){if(i.isWebGL2===!1&&(I.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=k.attributes,ee=z.getAttributes(),Q=L.defaultAttributeValues;for(const ge in ee){const ue=ee[ge];if(ue.location>=0){let K=W[ge];if(K===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const oe=K.normalized,q=K.itemSize,we=t.get(K);if(we===void 0)continue;const F=we.buffer,Re=we.type,be=we.bytesPerElement;if(K.isInterleavedBufferAttribute){const ve=K.data,Se=ve.stride,de=K.offset;if(ve.isInstancedInterleavedBuffer){for(let se=0;se<ue.locationSize;se++)y(ue.location+se,ve.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let se=0;se<ue.locationSize;se++)S(ue.location+se);n.bindBuffer(n.ARRAY_BUFFER,F);for(let se=0;se<ue.locationSize;se++)w(ue.location+se,q/ue.locationSize,Re,oe,Se*be,(de+q/ue.locationSize*se)*be)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)y(ue.location+ve,K.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<ue.locationSize;ve++)S(ue.location+ve);n.bindBuffer(n.ARRAY_BUFFER,F);for(let ve=0;ve<ue.locationSize;ve++)w(ue.location+ve,q/ue.locationSize,Re,oe,q*be,q/ue.locationSize*ve*be)}}else if(Q!==void 0){const oe=Q[ge];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(ue.location,oe);break;case 3:n.vertexAttrib3fv(ue.location,oe);break;case 4:n.vertexAttrib4fv(ue.location,oe);break;default:n.vertexAttrib1fv(ue.location,oe)}}}}x()}function b(){B();for(const I in a){const L=a[I];for(const z in L){const k=L[z];for(const W in k)m(k[W].object),delete k[W];delete L[z]}delete a[I]}}function C(I){if(a[I.id]===void 0)return;const L=a[I.id];for(const z in L){const k=L[z];for(const W in k)m(k[W].object),delete k[W];delete L[z]}delete a[I.id]}function N(I){for(const L in a){const z=a[L];if(z[I.id]===void 0)continue;const k=z[I.id];for(const W in k)m(k[W].object),delete k[W];delete z[I.id]}}function B(){D(),u=!0,l!==c&&(l=c,d(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:x}}function ex(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function tx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,S=o||e.has("OES_texture_float"),y=M&&S,x=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:x}}function nx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qi,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const _=s?0:i,M=_*4;let S=p.clippingState||null;c.value=S,S=u(m,f,M,d);for(let y=0;y!==M;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,S=d;M!==v;++M,S+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function ix(n){let e=new WeakMap;function t(o,a){return a===El?o.mapping=_s:a===wl&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===El||a===wl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xg(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}let rx=class extends rp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};const rs=4,Tu=[.125,.215,.35,.446,.526,.582],tr=20,Vc=new rx,Au=new dt;let Wc=null;const er=(1+Math.sqrt(5))/2,Or=1/er,Ru=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,er,Or),new re(0,er,-Or),new re(Or,0,er),new re(-Or,0,er),new re(er,Or,0),new re(-er,Or,0)];class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc),e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:uo,format:Pn,colorSpace:Xn,depthBuffer:!1},r=Cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=ox(s,e,t)}return r}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,i,r){const a=new mn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Au),u.toneMapping=fi,u.autoClear=!1;const d=new _h({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new ui(new Ds,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Au),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;ea(r,_*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_s||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ea(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Vc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ru[(r-1)%Ru.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ui(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*tr-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):tr;g>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${tr}`);const p=[];let _=0;for(let w=0;w<tr;++w){const G=w/v,b=Math.exp(-G*G/2);p.push(b),w===0?_+=b:w<g&&(_+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const S=this._sizeLods[r],y=3*S*(r>M-rs?r-M+rs:0),x=4*(this._cubeSize-S);ea(t,y,x,3*S,2*S),c.setRenderTarget(t),c.render(h,Vc)}}function sx(n){const e=[],t=[],i=[];let r=n;const s=n-rs+1+Tu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-rs?c=Tu[o-n+rs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,_=new Float32Array(v*m*d),M=new Float32Array(g*m*d),S=new Float32Array(p*m*d);for(let x=0;x<d;x++){const w=x%3*2/3-1,G=x>2?0:-1,b=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];_.set(b,v*m*x),M.set(f,g*m*x);const C=[x,x,x,x,x,x];S.set(C,p*m*x)}const y=new Co;y.setAttribute("position",new Vn(_,v)),y.setAttribute("uv",new Vn(M,g)),y.setAttribute("faceIndex",new Vn(S,p)),e.push(y),r>rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cu(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ox(n,e,t){const i=new Float32Array(tr),r=new re(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Pu(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Du(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ax(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===El||c===wl,u=c===_s||c===vs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Lu(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Lu(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lx(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let M=0,S=_.length;M<S;M+=3){const y=_[M+0],x=_[M+1],w=_[M+2];f.push(y,x,x,w,w,y)}}else{const _=m.array;v=m.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const y=M+0,x=M+1,w=M+2;f.push(y,x,x,w,w,y)}}const g=new(Xd(f)?tp:ep)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function hx(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,m){if(m===0)return;let v,g;if(r)v=n,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,d,a,f*c,m),t.update(d,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function ux(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fx(n,e){return n[0]-e[0]}function dx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function px(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let g=s.get(u);if(g===void 0||g.count!==v){let L=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",L)};var d=L;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let b=0;M===!0&&(b=1),S===!0&&(b=2),y===!0&&(b=3);let C=u.attributes.position.count*b,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const B=new Float32Array(C*N*4*v),D=new Yd(B,C,N,v);D.type=ir,D.needsUpdate=!0;const I=b*4;for(let z=0;z<v;z++){const k=x[z],W=w[z],ee=G[z],Q=C*N*4*z;for(let ge=0;ge<k.count;ge++){const ue=ge*I;M===!0&&(o.fromBufferAttribute(k,ge),B[Q+ue+0]=o.x,B[Q+ue+1]=o.y,B[Q+ue+2]=o.z,B[Q+ue+3]=0),S===!0&&(o.fromBufferAttribute(W,ge),B[Q+ue+4]=o.x,B[Q+ue+5]=o.y,B[Q+ue+6]=o.z,B[Q+ue+7]=0),y===!0&&(o.fromBufferAttribute(ee,ge),B[Q+ue+8]=o.x,B[Q+ue+9]=o.y,B[Q+ue+10]=o.z,B[Q+ue+11]=ee.itemSize===4?o.w:1)}}g={count:v,texture:D,size:new Et(C,N)},s.set(u,g),u.addEventListener("dispose",L)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];const _=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let S=0;S<m;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<m;S++){const y=v[S];y[0]=S,y[1]=f[S]}v.sort(dx);for(let S=0;S<8;S++)S<m&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(fx);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const y=a[S],x=y[0],w=y[1];x!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+S)!==g[x]&&u.setAttribute("morphTarget"+S,g[x]),p&&u.getAttribute("morphNormal"+S)!==p[x]&&u.setAttribute("morphNormal"+S,p[x]),r[S]=w,_+=w):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function mx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const cp=new vi,lp=new Yd,hp=new ig,up=new sp,Iu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Iu[r];if(s===void 0&&(s=new Float32Array(r),Iu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),Rt(t,i)}}function Mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),Rt(t,i)}}function bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),Rt(t,i)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||cp,r)}function Dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hp,r)}function Ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||up,r)}function Ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lp,r)}function Nx(n){switch(n){case 5126:return gx;case 35664:return _x;case 35665:return vx;case 35666:return xx;case 35674:return yx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return Sx;case 35667:case 35671:return Ex;case 35668:case 35672:return wx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Lx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Ux}}function Fx(n,e){n.uniform1fv(this.addr,e)}function Ox(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function Bx(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function zx(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function Gx(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hx(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kx(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vx(n,e){n.uniform1iv(this.addr,e)}function Wx(n,e){n.uniform2iv(this.addr,e)}function Xx(n,e){n.uniform3iv(this.addr,e)}function $x(n,e){n.uniform4iv(this.addr,e)}function qx(n,e){n.uniform1uiv(this.addr,e)}function jx(n,e){n.uniform2uiv(this.addr,e)}function Yx(n,e){n.uniform3uiv(this.addr,e)}function Zx(n,e){n.uniform4uiv(this.addr,e)}function Jx(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cp,s[o])}function Kx(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hp,s[o])}function Qx(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||up,s[o])}function e0(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lp,s[o])}function t0(n){switch(n){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Gx;case 35675:return Hx;case 35676:return kx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return $x;case 5125:return qx;case 36294:return jx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return e0}}let n0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Nx(t.type)}},i0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=t0(t.type)}},r0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}};const Xc=/(\w+)(\])?(\[|\.)?/g;function Bu(n,e){n.seq.push(e),n.map[e.id]=e}function s0(n,e,t){const i=n.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),o=Xc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Bu(t,l===void 0?new n0(a,n,e):new i0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new r0(a),Bu(t,h)),t=h}}}let Oa=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);s0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}};function zu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let o0=0;function a0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function c0(n){switch(n){case Xn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Gu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+a0(n.getShaderSource(e),o)}else return r}function l0(n,e){const t=c0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function h0(n,e){let t;switch(e){case bm:t="Linear";break;case Sm:t="Reinhard";break;case Em:t="OptimizedCineon";break;case wm:t="ACESFilmic";break;case Tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function f0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function d0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function Hu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(n){return n.replace(p0,m0)}function m0(n,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pl(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace(g0,_0)}function _0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===em?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bd:e="ENVMAP_BLENDING_MULTIPLY";break;case ym:e="ENVMAP_BLENDING_MIX";break;case Mm:e="ENVMAP_BLENDING_ADD";break}return e}function b0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function S0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=v0(t),l=x0(t),u=y0(t),h=M0(t),f=b0(t),d=t.isWebGL2?"":u0(t),m=f0(s),v=r.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=[d,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Wu(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[d,Wu(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?nt.tonemapping_pars_fragment:"",t.toneMapping!==fi?h0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Pl(o),o=Hu(o,t),o=ku(o,t),a=Pl(a),a=Hu(a,t),a=ku(a,t),o=Vu(o),a=Vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+g+o,S=_+p+a,y=zu(r,r.VERTEX_SHADER,M),x=zu(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,y),r.attachShader(v,x),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(v).trim(),C=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(x).trim();let B=!0,D=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,y,x);else{const I=Gu(r,y,"vertex"),L=Gu(r,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+I+`
`+L)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(C===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:b,vertexShader:{log:C,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(y),r.deleteShader(x);let w;this.getUniforms=function(){return w===void 0&&(w=new Oa(r,v)),w};let G;return this.getAttributes=function(){return G===void 0&&(G=d0(r,v)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=x,this}let E0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new T0(e),t.set(e,i)),i}}class T0{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function A0(n,e,t,i,r,s,o){const a=new gh,c=new w0,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function g(b,C,N,B,D){const I=B.fog,L=D.geometry,z=b.isMeshStandardMaterial?B.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),W=k&&k.mapping===nc?k.image.height:null,ee=m[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ge=Q!==void 0?Q.length:0;let ue=0;L.morphAttributes.position!==void 0&&(ue=1),L.morphAttributes.normal!==void 0&&(ue=2),L.morphAttributes.color!==void 0&&(ue=3);let K,oe,q,we;if(ee){const ht=Gn[ee];K=ht.vertexShader,oe=ht.fragmentShader}else K=b.vertexShader,oe=b.fragmentShader,c.update(b),q=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const F=n.getRenderTarget(),Re=D.isInstancedMesh===!0,be=!!b.map,ve=!!b.matcap,Se=!!k,de=!!b.aoMap,se=!!b.lightMap,_e=!!b.bumpMap,De=!!b.normalMap,Ee=!!b.displacementMap,U=!!b.emissiveMap,R=!!b.metalnessMap,pe=!!b.roughnessMap,me=b.clearcoat>0,H=b.iridescence>0,T=b.sheen>0,E=b.transmission>0,$=me&&!!b.clearcoatMap,Y=me&&!!b.clearcoatNormalMap,te=me&&!!b.clearcoatRoughnessMap,le=H&&!!b.iridescenceMap,Me=H&&!!b.iridescenceThicknessMap,he=T&&!!b.sheenColorMap,Z=T&&!!b.sheenRoughnessMap,Te=!!b.specularMap,Ue=!!b.specularColorMap,ke=!!b.specularIntensityMap,Fe=E&&!!b.transmissionMap,Be=E&&!!b.thicknessMap,st=!!b.gradientMap,lt=!!b.alphaMap,bt=b.alphaTest>0,V=!!b.extensions,ce=!!L.attributes.uv1,ye=!!L.attributes.uv2,Ie=!!L.attributes.uv3;return{isWebGL2:u,shaderID:ee,shaderName:b.type,vertexShader:K,fragmentShader:oe,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Re,instancingColor:Re&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xn,map:be,matcap:ve,envMap:Se,envMapMode:Se&&k.mapping,envMapCubeUVHeight:W,aoMap:de,lightMap:se,bumpMap:_e,normalMap:De,displacementMap:f&&Ee,emissiveMap:U,normalMapObjectSpace:De&&b.normalMapType===$m,normalMapTangentSpace:De&&b.normalMapType===Xm,metalnessMap:R,roughnessMap:pe,clearcoat:me,clearcoatMap:$,clearcoatNormalMap:Y,clearcoatRoughnessMap:te,iridescence:H,iridescenceMap:le,iridescenceThicknessMap:Me,sheen:T,sheenColorMap:he,sheenRoughnessMap:Z,specularMap:Te,specularColorMap:Ue,specularIntensityMap:ke,transmission:E,transmissionMap:Fe,thicknessMap:Be,gradientMap:st,opaque:b.transparent===!1&&b.blending===fs,alphaMap:lt,alphaTest:bt,combine:b.combine,mapUv:be&&v(b.map.channel),aoMapUv:de&&v(b.aoMap.channel),lightMapUv:se&&v(b.lightMap.channel),bumpMapUv:_e&&v(b.bumpMap.channel),normalMapUv:De&&v(b.normalMap.channel),displacementMapUv:Ee&&v(b.displacementMap.channel),emissiveMapUv:U&&v(b.emissiveMap.channel),metalnessMapUv:R&&v(b.metalnessMap.channel),roughnessMapUv:pe&&v(b.roughnessMap.channel),clearcoatMapUv:$&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Y&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Z&&v(b.sheenRoughnessMap.channel),specularMapUv:Te&&v(b.specularMap.channel),specularColorMapUv:Ue&&v(b.specularColorMap.channel),specularIntensityMapUv:ke&&v(b.specularIntensityMap.channel),transmissionMapUv:Fe&&v(b.transmissionMap.channel),thicknessMapUv:Be&&v(b.thicknessMap.channel),alphaMapUv:lt&&v(b.alphaMap.channel),vertexTangents:De&&!!L.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:ye,vertexUv3s:Ie,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(be||lt),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:fi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hi,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:V&&b.extensions.derivatives===!0,extensionFragDepth:V&&b.extensions.fragDepth===!0,extensionDrawBuffers:V&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)C.push(N),C.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(_(C,b),M(C,b),C.push(n.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function _(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function M(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),b.push(a.mask)}function S(b){const C=m[b.type];let N;if(C){const B=Gn[C];N=mg.clone(B.uniforms)}else N=b.uniforms;return N}function y(b,C){let N;for(let B=0,D=l.length;B<D;B++){const I=l[B];if(I.cacheKey===C){N=I,++N.usedTimes;break}}return N===void 0&&(N=new S0(n,C,b,s),l.push(N)),N}function x(b){if(--b.usedTimes===0){const C=l.indexOf(b);l[C]=l[l.length-1],l.pop(),b.destroy()}}function w(b){c.remove(b)}function G(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:x,releaseShaderCache:w,programs:l,dispose:G}}function R0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $u(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,m,v,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||L0),i.length>1&&i.sort(f||Xu),r.length>1&&r.sort(f||Xu)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function C0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $u,n.set(i,[o])):r>=s.length?(o=new $u,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new dt};break;case"SpotLight":t={position:new re,direction:new re,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function D0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I0=0;function U0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N0(n,e){const t=new P0,i=D0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new re);const s=new re,o=new en,a=new en;function c(u,h){let f=0,d=0,m=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let v=0,g=0,p=0,_=0,M=0,S=0,y=0,x=0,w=0,G=0;u.sort(U0);const b=h===!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){const D=u[N],I=D.color,L=D.intensity,z=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*L*b,d+=I.g*L*b,m+=I.b*L*b;else if(D.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],L);else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const ee=D.shadow,Q=i.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=k,r.directionalShadowMatrix[v]=D.shadow.matrix,S++}r.directional[v]=W,v++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(I).multiplyScalar(L*b),W.distance=z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[p]=W;const ee=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,ee.updateMatrices(D),D.castShadow&&G++),r.spotLightMatrix[p]=ee.matrix,D.castShadow){const Q=i.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,r.spotShadow[p]=Q,r.spotShadowMap[p]=k,x++}p++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(I).multiplyScalar(L),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=W,_++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*b),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ee=D.shadow,Q=i.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,r.pointShadow[g]=Q,r.pointShadowMap[g]=k,r.pointShadowMatrix[g]=D.shadow.matrix,y++}r.point[g]=W,g++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(L*b),W.groundColor.copy(D.groundColor).multiplyScalar(L*b),r.hemi[M]=W,M++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=m;const C=r.hash;(C.directionalLength!==v||C.pointLength!==g||C.spotLength!==p||C.rectAreaLength!==_||C.hemiLength!==M||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==w)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=_,r.point.length=g,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=x+w-G,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=G,C.directionalLength=v,C.pointLength=g,C.spotLength=p,C.rectAreaLength=_,C.hemiLength=M,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=w,r.version=I0++)}function l(u,h){let f=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let _=0,M=u.length;_<M;_++){const S=u[_];if(S.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(S.isSpotLight){const y=r.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const y=r.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:r}}function qu(n,e){const t=new N0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function F0(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new qu(n,e),t.set(s,[c])):o>=a.length?(c=new qu(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}let O0=class extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},B0=class extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H0(n,e,t){let i=new op;const r=new Et,s=new Et,o=new Yt,a=new O0({depthPacking:Wm}),c=new B0,l={},u=t.maxTextureSize,h={[Fi]:Qt,[Qt]:Fi,[hi]:hi},f=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:z0,fragmentShader:G0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Co;m.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ui(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(y,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const G=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ii),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==ci&&this.type===ci,D=p===ci&&this.type!==ci;for(let I=0,L=y.length;I<L;I++){const z=y[I],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();if(r.multiply(W),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||B===!0||D===!0){const Q=this.type!==ci?{minFilter:qt,magFilter:qt}:{};k.map!==null&&k.map.dispose(),k.map=new hr(r.x,r.y,Q),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ee=k.getViewportCount();for(let Q=0;Q<ee;Q++){const ge=k.getViewport(Q);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(o),k.updateMatrices(z,Q),i=k.getFrustum(),S(x,w,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===ci&&_(k,w),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(G,b,C)};function _(y,x){const w=e.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new hr(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(x,null,w,f,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(x,null,w,d,v,null)}function M(y,x,w,G){let b=null;const C=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)b=C;else if(b=w.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const N=b.uuid,B=x.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let I=D[B];I===void 0&&(I=b.clone(),D[B]=I),b=I}if(b.visible=x.visible,b.wireframe=x.wireframe,G===ci?b.side=x.shadowSide!==null?x.shadowSide:x.side:b.side=x.shadowSide!==null?x.shadowSide:h[x.side],b.alphaMap=x.alphaMap,b.alphaTest=x.alphaTest,b.map=x.map,b.clipShadows=x.clipShadows,b.clippingPlanes=x.clippingPlanes,b.clipIntersection=x.clipIntersection,b.displacementMap=x.displacementMap,b.displacementScale=x.displacementScale,b.displacementBias=x.displacementBias,b.wireframeLinewidth=x.wireframeLinewidth,b.linewidth=x.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=n.properties.get(b);N.light=w}return b}function S(y,x,w,G,b){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===ci)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const B=e.update(y),D=y.material;if(Array.isArray(D)){const I=B.groups;for(let L=0,z=I.length;L<z;L++){const k=I[L],W=D[k.materialIndex];if(W&&W.visible){const ee=M(y,W,G,b);n.renderBufferDirect(w,null,B,ee,y,k)}}}else if(D.visible){const I=M(y,D,G,b);n.renderBufferDirect(w,null,B,I,y,null)}}const N=y.children;for(let B=0,D=N.length;B<D;B++)S(N[B],x,w,G,b)}}function k0(n,e,t){const i=t.isWebGL2;function r(){let V=!1;const ce=new Yt;let ye=null;const Ie=new Yt(0,0,0,0);return{setMask:function(Ne){ye!==Ne&&!V&&(n.colorMask(Ne,Ne,Ne,Ne),ye=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,ht,ft,Lt,P){P===!0&&(Ne*=Lt,ht*=Lt,ft*=Lt),ce.set(Ne,ht,ft,Lt),Ie.equals(ce)===!1&&(n.clearColor(Ne,ht,ft,Lt),Ie.copy(ce))},reset:function(){V=!1,ye=null,Ie.set(-1,0,0,0)}}}function s(){let V=!1,ce=null,ye=null,Ie=null;return{setTest:function(Ne){Ne?F(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Ne){ce!==Ne&&!V&&(n.depthMask(Ne),ce=Ne)},setFunc:function(Ne){if(ye!==Ne){switch(Ne){case dm:n.depthFunc(n.NEVER);break;case pm:n.depthFunc(n.ALWAYS);break;case mm:n.depthFunc(n.LESS);break;case Sl:n.depthFunc(n.LEQUAL);break;case gm:n.depthFunc(n.EQUAL);break;case _m:n.depthFunc(n.GEQUAL);break;case vm:n.depthFunc(n.GREATER);break;case xm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Ne}},setLocked:function(Ne){V=Ne},setClear:function(Ne){Ie!==Ne&&(n.clearDepth(Ne),Ie=Ne)},reset:function(){V=!1,ce=null,ye=null,Ie=null}}}function o(){let V=!1,ce=null,ye=null,Ie=null,Ne=null,ht=null,ft=null,Lt=null,P=null;return{setTest:function(ie){V||(ie?F(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ie){ce!==ie&&!V&&(n.stencilMask(ie),ce=ie)},setFunc:function(ie,ne,fe){(ye!==ie||Ie!==ne||Ne!==fe)&&(n.stencilFunc(ie,ne,fe),ye=ie,Ie=ne,Ne=fe)},setOp:function(ie,ne,fe){(ht!==ie||ft!==ne||Lt!==fe)&&(n.stencilOp(ie,ne,fe),ht=ie,ft=ne,Lt=fe)},setLocked:function(ie){V=ie},setClear:function(ie){P!==ie&&(n.clearStencil(ie),P=ie)},reset:function(){V=!1,ce=null,ye=null,Ie=null,Ne=null,ht=null,ft=null,Lt=null,P=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},m=new WeakMap,v=[],g=null,p=!1,_=null,M=null,S=null,y=null,x=null,w=null,G=null,b=!1,C=null,N=null,B=null,D=null,I=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=k>=2);let ee=null,Q={};const ge=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),K=new Yt().fromArray(ge),oe=new Yt().fromArray(ue);function q(V,ce,ye,Ie){const Ne=new Uint8Array(4),ht=n.createTexture();n.bindTexture(V,ht),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<ye;ft++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(ce+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return ht}const we={};we[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),F(n.DEPTH_TEST),c.setFunc(Sl),Ee(!1),U(Dh),F(n.CULL_FACE),_e(Ii);function F(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function Re(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function be(V,ce){return d[V]!==ce?(n.bindFramebuffer(V,ce),d[V]=ce,i&&(V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function ve(V,ce){let ye=v,Ie=!1;if(V)if(ye=m.get(ce),ye===void 0&&(ye=[],m.set(ce,ye)),V.isWebGLMultipleRenderTargets){const Ne=V.texture;if(ye.length!==Ne.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,ft=Ne.length;ht<ft;ht++)ye[ht]=n.COLOR_ATTACHMENT0+ht;ye.length=Ne.length,Ie=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Ie=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Se(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const de={[ns]:n.FUNC_ADD,[nm]:n.FUNC_SUBTRACT,[im]:n.FUNC_REVERSE_SUBTRACT};if(i)de[Fh]=n.MIN,de[Oh]=n.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(de[Fh]=V.MIN_EXT,de[Oh]=V.MAX_EXT)}const se={[rm]:n.ZERO,[sm]:n.ONE,[om]:n.SRC_COLOR,[Fd]:n.SRC_ALPHA,[fm]:n.SRC_ALPHA_SATURATE,[hm]:n.DST_COLOR,[cm]:n.DST_ALPHA,[am]:n.ONE_MINUS_SRC_COLOR,[Od]:n.ONE_MINUS_SRC_ALPHA,[um]:n.ONE_MINUS_DST_COLOR,[lm]:n.ONE_MINUS_DST_ALPHA};function _e(V,ce,ye,Ie,Ne,ht,ft,Lt){if(V===Ii){p===!0&&(Re(n.BLEND),p=!1);return}if(p===!1&&(F(n.BLEND),p=!0),V!==tm){if(V!==_||Lt!==b){if((M!==ns||x!==ns)&&(n.blendEquation(n.FUNC_ADD),M=ns,x=ns),Lt)switch(V){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,y=null,w=null,G=null,_=V,b=Lt}return}Ne=Ne||ce,ht=ht||ye,ft=ft||Ie,(ce!==M||Ne!==x)&&(n.blendEquationSeparate(de[ce],de[Ne]),M=ce,x=Ne),(ye!==S||Ie!==y||ht!==w||ft!==G)&&(n.blendFuncSeparate(se[ye],se[Ie],se[ht],se[ft]),S=ye,y=Ie,w=ht,G=ft),_=V,b=!1}function De(V,ce){V.side===hi?Re(n.CULL_FACE):F(n.CULL_FACE);let ye=V.side===Qt;ce&&(ye=!ye),Ee(ye),V.blending===fs&&V.transparent===!1?_e(Ii):_e(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ie=V.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(V){C!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),C=V)}function U(V){V!==Kp?(F(n.CULL_FACE),V!==N&&(V===Dh?n.cullFace(n.BACK):V===Qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),N=V}function R(V){V!==B&&(z&&n.lineWidth(V),B=V)}function pe(V,ce,ye){V?(F(n.POLYGON_OFFSET_FILL),(D!==ce||I!==ye)&&(n.polygonOffset(ce,ye),D=ce,I=ye)):Re(n.POLYGON_OFFSET_FILL)}function me(V){V?F(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function H(V){V===void 0&&(V=n.TEXTURE0+L-1),ee!==V&&(n.activeTexture(V),ee=V)}function T(V,ce,ye){ye===void 0&&(ee===null?ye=n.TEXTURE0+L-1:ye=ee);let Ie=Q[ye];Ie===void 0&&(Ie={type:void 0,texture:void 0},Q[ye]=Ie),(Ie.type!==V||Ie.texture!==ce)&&(ee!==ye&&(n.activeTexture(ye),ee=ye),n.bindTexture(V,ce||we[V]),Ie.type=V,Ie.texture=ce)}function E(){const V=Q[ee];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){K.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),K.copy(V))}function Be(V){oe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function st(V,ce){let ye=h.get(ce);ye===void 0&&(ye=new WeakMap,h.set(ce,ye));let Ie=ye.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,V.name),ye.set(V,Ie))}function lt(V,ce){const Ie=h.get(ce).get(V);u.get(ce)!==Ie&&(n.uniformBlockBinding(ce,Ie,V.__bindingPointIndex),u.set(ce,Ie))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ee=null,Q={},d={},m=new WeakMap,v=[],g=null,p=!1,_=null,M=null,S=null,y=null,x=null,w=null,G=null,b=!1,C=null,N=null,B=null,D=null,I=null,K.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:F,disable:Re,bindFramebuffer:be,drawBuffers:ve,useProgram:Se,setBlending:_e,setMaterial:De,setFlipSided:Ee,setCullFace:U,setLineWidth:R,setPolygonOffset:pe,setScissorTest:me,activeTexture:H,bindTexture:T,unbindTexture:E,compressedTexImage2D:$,compressedTexImage3D:Y,texImage2D:Ue,texImage3D:ke,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:Z,texStorage3D:Te,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:Me,compressedTexSubImage3D:he,scissor:Fe,viewport:Be,reset:bt}}function V0(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return p?new OffscreenCanvas(T,E):Ga("canvas")}function M(T,E,$,Y){let te=1;if((T.width>Y||T.height>Y)&&(te=Y/Math.max(T.width,T.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const le=E?Ym:Math.floor,Me=le(te*T.width),he=le(te*T.height);v===void 0&&(v=_(Me,he));const Z=$?_(Me,he):v;return Z.width=Me,Z.height=he,Z.getContext("2d").drawImage(T,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+he+")."),Z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return hu(T.width)&&hu(T.height)}function y(T){return a?!1:T.wrapS!==Cn||T.wrapT!==Cn||T.minFilter!==qt&&T.minFilter!==pn}function x(T,E){return T.generateMipmaps&&E&&T.minFilter!==qt&&T.minFilter!==pn}function w(T){n.generateMipmap(T)}function G(T,E,$,Y,te=!1){if(a===!1)return E;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le=E;return E===n.RED&&($===n.FLOAT&&(le=n.R32F),$===n.HALF_FLOAT&&(le=n.R16F),$===n.UNSIGNED_BYTE&&(le=n.R8)),E===n.RG&&($===n.FLOAT&&(le=n.RG32F),$===n.HALF_FLOAT&&(le=n.RG16F),$===n.UNSIGNED_BYTE&&(le=n.RG8)),E===n.RGBA&&($===n.FLOAT&&(le=n.RGBA32F),$===n.HALF_FLOAT&&(le=n.RGBA16F),$===n.UNSIGNED_BYTE&&(le=Y===Qe&&te===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(T,E,$){return x(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function C(T){return T===qt||T===Bh||T===_c?n.NEAREST:n.LINEAR}function N(T){const E=T.target;E.removeEventListener("dispose",N),D(E),E.isVideoTexture&&m.delete(E)}function B(T){const E=T.target;E.removeEventListener("dispose",B),L(E)}function D(T){const E=i.get(T);if(E.__webglInit===void 0)return;const $=T.source,Y=g.get($);if(Y){const te=Y[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(T),Object.keys(Y).length===0&&g.delete($)}i.remove(T)}function I(T){const E=i.get(T);n.deleteTexture(E.__webglTexture);const $=T.source,Y=g.get($);delete Y[E.__cacheKey],o.memory.textures--}function L(T){const E=T.texture,$=i.get(T),Y=i.get(E);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)n.deleteFramebuffer($.__webglFramebuffer[te]),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[te]);else{if(n.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let te=0;te<$.__webglColorRenderbuffer.length;te++)$.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[te]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,le=E.length;te<le;te++){const Me=i.get(E[te]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[te])}i.remove(E),i.remove(T)}let z=0;function k(){z=0}function W(){const T=z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),z+=1,T}function ee(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function Q(T,E){const $=i.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re($,T,E);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+E)}function ge(T,E){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Re($,T,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+E)}function ue(T,E){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Re($,T,E);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+E)}function K(T,E){const $=i.get(T);if(T.version>0&&$.__version!==T.version){be($,T,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+E)}const oe={[Tl]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},q={[qt]:n.NEAREST,[Bh]:n.NEAREST_MIPMAP_NEAREST,[_c]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Am]:n.LINEAR_MIPMAP_NEAREST,[ho]:n.LINEAR_MIPMAP_LINEAR};function we(T,E,$){if($?(n.texParameteri(T,n.TEXTURE_WRAP_S,oe[E.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,oe[E.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,oe[E.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,q[E.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,q[E.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Cn||E.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,C(E.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==qt&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===qt||E.minFilter!==_c&&E.minFilter!==ho||E.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===uo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function F(T,E){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",N));const Y=E.source;let te=g.get(Y);te===void 0&&(te={},g.set(Y,te));const le=ee(E);if(le!==T.__cacheKey){te[le]===void 0&&(te[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),te[le].usedTimes++;const Me=te[T.__cacheKey];Me!==void 0&&(te[T.__cacheKey].usedTimes--,Me.usedTimes===0&&I(E)),T.__cacheKey=le,T.__webglTexture=te[le].texture}return $}function Re(T,E,$){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const te=F(T,E),le=E.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+$);const Me=i.get(le);if(le.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const he=y(E)&&S(E.image)===!1;let Z=M(E.image,he,!1,u);Z=H(E,Z);const Te=S(Z)||a,Ue=s.convert(E.format,E.colorSpace);let ke=s.convert(E.type),Fe=G(E.internalFormat,Ue,ke,E.colorSpace);we(Y,E,Te);let Be;const st=E.mipmaps,lt=a&&E.isVideoTexture!==!0,bt=Me.__version===void 0||te===!0,V=b(E,Z,Te);if(E.isDepthTexture)Fe=n.DEPTH_COMPONENT,a?E.type===ir?Fe=n.DEPTH_COMPONENT32F:E.type===nr?Fe=n.DEPTH_COMPONENT24:E.type===ds?Fe=n.DEPTH24_STENCIL8:Fe=n.DEPTH_COMPONENT16:E.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===rr&&Fe===n.DEPTH_COMPONENT&&E.type!==Gd&&E.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=nr,ke=s.convert(E.type)),E.format===xs&&Fe===n.DEPTH_COMPONENT&&(Fe=n.DEPTH_STENCIL,E.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ds,ke=s.convert(E.type))),bt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Fe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Z.width,Z.height,0,Ue,ke,null));else if(E.isDataTexture)if(st.length>0&&Te){lt&&bt&&t.texStorage2D(n.TEXTURE_2D,V,Fe,st[0].width,st[0].height);for(let ce=0,ye=st.length;ce<ye;ce++)Be=st[ce],lt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Be.width,Be.height,Ue,ke,Be.data):t.texImage2D(n.TEXTURE_2D,ce,Fe,Be.width,Be.height,0,Ue,ke,Be.data);E.generateMipmaps=!1}else lt?(bt&&t.texStorage2D(n.TEXTURE_2D,V,Fe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Ue,ke,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,Z.width,Z.height,0,Ue,ke,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,Fe,st[0].width,st[0].height,Z.depth);for(let ce=0,ye=st.length;ce<ye;ce++)Be=st[ce],E.format!==Pn?Ue!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Z.depth,Ue,Be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Fe,Be.width,Be.height,Z.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Z.depth,Ue,ke,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Fe,Be.width,Be.height,Z.depth,0,Ue,ke,Be.data)}else{lt&&bt&&t.texStorage2D(n.TEXTURE_2D,V,Fe,st[0].width,st[0].height);for(let ce=0,ye=st.length;ce<ye;ce++)Be=st[ce],E.format!==Pn?Ue!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Be.width,Be.height,Ue,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Fe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Be.width,Be.height,Ue,ke,Be.data):t.texImage2D(n.TEXTURE_2D,ce,Fe,Be.width,Be.height,0,Ue,ke,Be.data)}else if(E.isDataArrayTexture)lt?(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,Fe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ue,ke,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Z.width,Z.height,Z.depth,0,Ue,ke,Z.data);else if(E.isData3DTexture)lt?(bt&&t.texStorage3D(n.TEXTURE_3D,V,Fe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ue,ke,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Z.width,Z.height,Z.depth,0,Ue,ke,Z.data);else if(E.isFramebufferTexture){if(bt)if(lt)t.texStorage2D(n.TEXTURE_2D,V,Fe,Z.width,Z.height);else{let ce=Z.width,ye=Z.height;for(let Ie=0;Ie<V;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Fe,ce,ye,0,Ue,ke,null),ce>>=1,ye>>=1}}else if(st.length>0&&Te){lt&&bt&&t.texStorage2D(n.TEXTURE_2D,V,Fe,st[0].width,st[0].height);for(let ce=0,ye=st.length;ce<ye;ce++)Be=st[ce],lt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ue,ke,Be):t.texImage2D(n.TEXTURE_2D,ce,Fe,Ue,ke,Be);E.generateMipmaps=!1}else lt?(bt&&t.texStorage2D(n.TEXTURE_2D,V,Fe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,ke,Z)):t.texImage2D(n.TEXTURE_2D,0,Fe,Ue,ke,Z);x(E,Te)&&w(Y),Me.__version=le.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function be(T,E,$){if(E.image.length!==6)return;const Y=F(T,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+$);const le=i.get(te);if(te.version!==le.__version||Y===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let ce=0;ce<6;ce++)!Me&&!he?Z[ce]=M(E.image[ce],!1,!0,l):Z[ce]=he?E.image[ce].image:E.image[ce],Z[ce]=H(E,Z[ce]);const Te=Z[0],Ue=S(Te)||a,ke=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type),Be=G(E.internalFormat,ke,Fe,E.colorSpace),st=a&&E.isVideoTexture!==!0,lt=le.__version===void 0||Y===!0;let bt=b(E,Te,Ue);we(n.TEXTURE_CUBE_MAP,E,Ue);let V;if(Me){st&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Be,Te.width,Te.height);for(let ce=0;ce<6;ce++){V=Z[ce].mipmaps;for(let ye=0;ye<V.length;ye++){const Ie=V[ye];E.format!==Pn?ke!==null?st?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,Ie.width,Ie.height,ke,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Be,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,Ie.width,Ie.height,ke,Fe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Be,Ie.width,Ie.height,0,ke,Fe,Ie.data)}}}else{V=E.mipmaps,st&&lt&&(V.length>0&&bt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Be,Z[0].width,Z[0].height));for(let ce=0;ce<6;ce++)if(he){st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Z[ce].width,Z[ce].height,ke,Fe,Z[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Be,Z[ce].width,Z[ce].height,0,ke,Fe,Z[ce].data);for(let ye=0;ye<V.length;ye++){const Ne=V[ye].image[ce].image;st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,Ne.width,Ne.height,ke,Fe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Be,Ne.width,Ne.height,0,ke,Fe,Ne.data)}}else{st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Fe,Z[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Be,ke,Fe,Z[ce]);for(let ye=0;ye<V.length;ye++){const Ie=V[ye];st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,ke,Fe,Ie.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Be,ke,Fe,Ie.image[ce])}}}x(E,Ue)&&w(n.TEXTURE_CUBE_MAP),le.__version=te.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function ve(T,E,$,Y,te){const le=s.convert($.format,$.colorSpace),Me=s.convert($.type),he=G($.internalFormat,le,Me,$.colorSpace);i.get(E).__hasExternalTextures||(te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,0,he,E.width,E.height,E.depth,0,le,Me,null):t.texImage2D(te,0,he,E.width,E.height,0,le,Me,null)),t.bindFramebuffer(n.FRAMEBUFFER,T),pe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,te,i.get($).__webglTexture,0,R(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,te,i.get($).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(T,E,$){if(n.bindRenderbuffer(n.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let Y=n.DEPTH_COMPONENT16;if($||pe(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===ir?Y=n.DEPTH_COMPONENT32F:te.type===nr&&(Y=n.DEPTH_COMPONENT24));const le=R(E);pe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Y,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Y,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const Y=R(E);$&&pe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,E.width,E.height):pe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const Y=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0;te<Y.length;te++){const le=Y[te],Me=s.convert(le.format,le.colorSpace),he=s.convert(le.type),Z=G(le.internalFormat,Me,he,le.colorSpace),Te=R(E);$&&pe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Z,E.width,E.height):pe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const Y=i.get(E.depthTexture).__webglTexture,te=R(E);if(E.depthTexture.format===rr)pe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(E.depthTexture.format===xs)pe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function se(T){const E=i.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,T)}else if($){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]=n.createRenderbuffer(),Se(E.__webglDepthbuffer[Y],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Se(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(T,E,$){const Y=i.get(T);E!==void 0&&ve(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),$!==void 0&&se(T)}function De(T){const E=T.texture,$=i.get(T),Y=i.get(E);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,o.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,le=T.isWebGLMultipleRenderTargets===!0,Me=S(T)||a;if(te){$.__webglFramebuffer=[];for(let he=0;he<6;he++)$.__webglFramebuffer[he]=n.createFramebuffer()}else{if($.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const he=T.texture;for(let Z=0,Te=he.length;Z<Te;Z++){const Ue=i.get(he[Z]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&pe(T)===!1){const he=le?E:[E];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Z=0;Z<he.length;Z++){const Te=he[Z];$.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Z]);const Ue=s.convert(Te.format,Te.colorSpace),ke=s.convert(Te.type),Fe=G(Te.internalFormat,Ue,ke,Te.colorSpace,T.isXRRenderTarget===!0),Be=R(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,$.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Se($.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),we(n.TEXTURE_CUBE_MAP,E,Me);for(let he=0;he<6;he++)ve($.__webglFramebuffer[he],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he);x(E,Me)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const he=T.texture;for(let Z=0,Te=he.length;Z<Te;Z++){const Ue=he[Z],ke=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ke.__webglTexture),we(n.TEXTURE_2D,Ue,Me),ve($.__webglFramebuffer,T,Ue,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D),x(Ue,Me)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Y.__webglTexture),we(he,E,Me),ve($.__webglFramebuffer,T,E,n.COLOR_ATTACHMENT0,he),x(E,Me)&&w(he),t.unbindTexture()}T.depthBuffer&&se(T)}function Ee(T){const E=S(T)||a,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Y=0,te=$.length;Y<te;Y++){const le=$[Y];if(x(le,E)){const Me=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(le).__webglTexture;t.bindTexture(Me,he),w(Me),t.unbindTexture()}}}function U(T){if(a&&T.samples>0&&pe(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,Y=T.height;let te=n.COLOR_BUFFER_BIT;const le=[],Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(T),Z=T.isWebGLMultipleRenderTargets===!0;if(Z)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){le.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&le.push(Me);const Ue=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ue===!1&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Te]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),Z){const ke=i.get(E[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,$,Y,0,0,$,Y,te,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,he.__webglColorRenderbuffer[Te]);const Ue=i.get(E[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function R(T){return Math.min(h,T.samples)}function pe(T){const E=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(T){const E=o.render.frame;m.get(T)!==E&&(m.set(T,E),T.update())}function H(T,E){const $=T.colorSpace,Y=T.format,te=T.type;return T.isCompressedTexture===!0||T.format===Rl||$!==Xn&&$!==or&&($===Qe?a===!1?e.has("EXT_sRGB")===!0&&Y===Pn?(T.format=Rl,T.minFilter=pn,T.generateMipmaps=!1):E=$d.sRGBToLinear(E):(Y!==Pn||te!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=ge,this.setTexture3D=ue,this.setTextureCube=K,this.rebindTextures=_e,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function W0(n,e,t){const i=t.isWebGL2;function r(s,o=or){let a;if(s===lr)return n.UNSIGNED_BYTE;if(s===Pm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Dm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Rm)return n.BYTE;if(s===Lm)return n.SHORT;if(s===Gd)return n.UNSIGNED_SHORT;if(s===Cm)return n.INT;if(s===nr)return n.UNSIGNED_INT;if(s===ir)return n.FLOAT;if(s===uo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Im)return n.ALPHA;if(s===Pn)return n.RGBA;if(s===Um)return n.LUMINANCE;if(s===Nm)return n.LUMINANCE_ALPHA;if(s===rr)return n.DEPTH_COMPONENT;if(s===xs)return n.DEPTH_STENCIL;if(s===Rl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fm)return n.RED;if(s===Om)return n.RED_INTEGER;if(s===Bm)return n.RG;if(s===zm)return n.RG_INTEGER;if(s===Gm)return n.RGBA_INTEGER;if(s===vc||s===xc||s===yc||s===Mc)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===Gh||s===Hh||s===kh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vh||s===Wh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vh)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===$h||s===qh||s===jh||s===Yh||s===Zh||s===Jh||s===Kh||s===Qh||s===eu||s===tu||s===nu||s===iu||s===ru)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===iu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ru)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===bc)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===km||s===su||s===ou||s===au)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===bc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===su)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ou)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===au)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ds?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}let X0=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ta=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const $0={type:"move"};let $c=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},q0=class extends vi{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:rr,u!==rr&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===rr&&(i=nr),i===void 0&&u===xs&&(i=ds),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=c!==void 0?c:qt,this.flipY=!1,this.generateMipmaps=!1}},j0=class extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const v=t.getContextAttributes();let g=null,p=null;const _=[],M=[],S=new Set,y=new Map,x=new mn;x.layers.enable(1),x.viewport=new Yt;const w=new mn;w.layers.enable(2),w.viewport=new Yt;const G=[x,w],b=new X0;b.layers.enable(1),b.layers.enable(2);let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=_[K];return oe===void 0&&(oe=new $c,_[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=_[K];return oe===void 0&&(oe=new $c,_[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=_[K];return oe===void 0&&(oe=new $c,_[K]=oe),oe.getHandSpace()};function B(K){const oe=M.indexOf(K.inputSource);if(oe===-1)return;const q=_[oe];q!==void 0&&(q.update(K.inputSource,K.frame,l||o),q.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",I);for(let K=0;K<_.length;K++){const oe=M[K];oe!==null&&(M[K]=null,_[K].disconnect(oe))}C=null,N=null,e.setRenderTarget(g),d=null,f=null,h=null,r=null,p=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",D),r.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),p=new hr(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,q=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?xs:rr,q=v.stencil?ds:nr);const F={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(F),r.updateRenderState({layers:[f]}),p=new hr(f.textureWidth,f.textureHeight,{format:Pn,type:lr,depthTexture:new q0(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(K){for(let oe=0;oe<K.removed.length;oe++){const q=K.removed[oe],we=M.indexOf(q);we>=0&&(M[we]=null,_[we].disconnect(q))}for(let oe=0;oe<K.added.length;oe++){const q=K.added[oe];let we=M.indexOf(q);if(we===-1){for(let Re=0;Re<_.length;Re++)if(Re>=M.length){M.push(q),we=Re;break}else if(M[Re]===null){M[Re]=q,we=Re;break}if(we===-1)break}const F=_[we];F&&F.connect(q)}}const L=new re,z=new re;function k(K,oe,q){L.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(q.matrixWorld);const we=L.distanceTo(z),F=oe.projectionMatrix.elements,Re=q.projectionMatrix.elements,be=F[14]/(F[10]-1),ve=F[14]/(F[10]+1),Se=(F[9]+1)/F[5],de=(F[9]-1)/F[5],se=(F[8]-1)/F[0],_e=(Re[8]+1)/Re[0],De=be*se,Ee=be*_e,U=we/(-se+_e),R=U*-se;oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(R),K.translateZ(U),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const pe=be+U,me=ve+U,H=De-R,T=Ee+(we-R),E=Se*ve/me*pe,$=de*ve/me*pe;K.projectionMatrix.makePerspective(H,T,E,$,pe,me),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function W(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;b.near=w.near=x.near=K.near,b.far=w.far=x.far=K.far,(C!==b.near||N!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,N=b.far);const oe=K.parent,q=b.cameras;W(b,oe);for(let we=0;we<q.length;we++)W(q[we],oe);q.length===2?k(b,x,w):b.projectionMatrix.copy(x.projectionMatrix),ee(K,b,oe)};function ee(K,oe,q){q===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(q.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const we=K.children;for(let F=0,Re=we.length;F<Re;F++)we[F].updateMatrixWorld(!0);K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ll*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.getPlanes=function(){return S};let Q=null;function ge(K,oe){if(u=oe.getViewerPose(l||o),m=oe,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let we=!1;q.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let F=0;F<q.length;F++){const Re=q[F];let be=null;if(d!==null)be=d.getViewport(Re);else{const Se=h.getViewSubImage(f,Re);be=Se.viewport,F===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ve=G[F];ve===void 0&&(ve=new mn,ve.layers.enable(F),ve.viewport=new Yt,G[F]=ve),ve.matrix.fromArray(Re.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Re.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(be.x,be.y,be.width,be.height),F===0&&(b.matrix.copy(ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(ve)}}for(let q=0;q<_.length;q++){const we=M[q],F=_[q];we!==null&&F!==void 0&&F.update(we,oe,l||o)}if(Q&&Q(K,oe),oe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let q=null;for(const we of S)oe.detectedPlanes.has(we)||(q===null&&(q=[]),q.push(we));if(q!==null)for(const we of q)S.delete(we),y.delete(we),i.dispatchEvent({type:"planeremoved",data:we});for(const we of oe.detectedPlanes)if(!S.has(we))S.add(we),y.set(we,oe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:we});else{const F=y.get(we);we.lastChangedTime>F&&(y.set(we,we.lastChangedTime),i.dispatchEvent({type:"planechanged",data:we}))}}m=null}const ue=new ap;ue.setAnimationLoop(ge),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}};function Y0(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ip(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,_,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const M=n.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z0(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,M){const S=M.program;i.uniformBlockBinding(_,S)}function l(_,M){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const y=M.program;i.updateUBOMapping(_,y);const x=e.render.frame;s[_.id]!==x&&(f(_),s[_.id]=x)}function u(_){const M=h();_.__bindingPointIndex=M;const S=n.createBuffer(),y=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,y,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const M=r[_.id],S=_.uniforms,y=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let x=0,w=S.length;x<w;x++){const G=S[x];if(d(G,x,y)===!0){const b=G.__offset,C=Array.isArray(G.value)?G.value:[G.value];let N=0;for(let B=0;B<C.length;B++){const D=C[B],I=v(D);typeof D=="number"?(G.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,b+N,G.__data)):D.isMatrix3?(G.__data[0]=D.elements[0],G.__data[1]=D.elements[1],G.__data[2]=D.elements[2],G.__data[3]=D.elements[0],G.__data[4]=D.elements[3],G.__data[5]=D.elements[4],G.__data[6]=D.elements[5],G.__data[7]=D.elements[0],G.__data[8]=D.elements[6],G.__data[9]=D.elements[7],G.__data[10]=D.elements[8],G.__data[11]=D.elements[0]):(D.toArray(G.__data,N),N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,G.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,M,S){const y=_.value;if(S[M]===void 0){if(typeof y=="number")S[M]=y;else{const x=Array.isArray(y)?y:[y],w=[];for(let G=0;G<x.length;G++)w.push(x[G].clone());S[M]=w}return!0}else if(typeof y=="number"){if(S[M]!==y)return S[M]=y,!0}else{const x=Array.isArray(S[M])?S[M]:[S[M]],w=Array.isArray(y)?y:[y];for(let G=0;G<x.length;G++){const b=x[G];if(b.equals(w[G])===!1)return b.copy(w[G]),!0}}return!1}function m(_){const M=_.uniforms;let S=0;const y=16;let x=0;for(let w=0,G=M.length;w<G;w++){const b=M[w],C={boundary:0,storage:0},N=Array.isArray(b.value)?b.value:[b.value];for(let B=0,D=N.length;B<D;B++){const I=N[B],L=v(I);C.boundary+=L.boundary,C.storage+=L.storage}if(b.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,w>0){x=S%y;const B=y-x;x!==0&&B-C.boundary<0&&(S+=y-x,b.__offset=S)}S+=C.storage}return x=S%y,x>0&&(S+=y-x),_.__size=S,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){const M=_.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}function J0(){const n=Ga("canvas");return n.style.display="block",n}let fp=class{constructor(e={}){const{canvas:t=J0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=null,m=null;const v=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this.useLegacyLights=!0,this.toneMapping=fi,this.toneMappingExposure=1;const p=this;let _=!1,M=0,S=0,y=null,x=-1,w=null;const G=new Yt,b=new Yt;let C=null,N=t.width,B=t.height,D=1,I=null,L=null;const z=new Yt(0,0,N,B),k=new Yt(0,0,N,B);let W=!1;const ee=new op;let Q=!1,ge=!1,ue=null;const K=new en,oe=new re,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return y===null?D:1}let F=i;function Re(A,j){for(let J=0;J<A.length;J++){const X=A[J],ae=t.getContext(X,j);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dh}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",lt,!1),F===null){const j=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&j.shift(),F=Re(j,A),F===null)throw Re(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,ve,Se,de,se,_e,De,Ee,U,R,pe,me,H,T,E,$,Y,te,le,Me,he,Z,Te,Ue;function ke(){be=new cx(F),ve=new tx(F,be,e),be.init(ve),Z=new W0(F,be,ve),Se=new k0(F,be,ve),de=new ux(F),se=new R0,_e=new V0(F,be,Se,se,ve,Z,de),De=new ix(p),Ee=new ax(p),U=new bg(F,ve),Te=new Qv(F,be,U,ve),R=new lx(F,U,de,Te),pe=new mx(F,R,U,de),le=new px(F,ve,_e),$=new nx(se),me=new A0(p,De,Ee,be,ve,Te,$),H=new Y0(p,se),T=new C0,E=new F0(be,ve),te=new Kv(p,De,Ee,Se,pe,f,c),Y=new H0(p,pe,ve),Ue=new Z0(F,de,ve,Se),Me=new ex(F,be,de,ve),he=new hx(F,be,de,ve),de.programs=me.programs,p.capabilities=ve,p.extensions=be,p.properties=se,p.renderLists=T,p.shadowMap=Y,p.state=Se,p.info=de}ke();const Fe=new j0(p,F);this.xr=Fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(N,B,!1))},this.getSize=function(A){return A.set(N,B)},this.setSize=function(A,j,J=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,B=j,t.width=Math.floor(A*D),t.height=Math.floor(j*D),J===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(N*D,B*D).floor()},this.setDrawingBufferSize=function(A,j,J){N=A,B=j,D=J,t.width=Math.floor(A*J),t.height=Math.floor(j*J),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,j,J,X){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,j,J,X),Se.viewport(G.copy(z).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,j,J,X){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,j,J,X),Se.scissor(b.copy(k).multiplyScalar(D).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){Se.setScissorTest(W=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,j=!0,J=!0){let X=0;A&&(X|=F.COLOR_BUFFER_BIT),j&&(X|=F.DEPTH_BUFFER_BIT),J&&(X|=F.STENCIL_BUFFER_BIT),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),T.dispose(),E.dispose(),se.dispose(),De.dispose(),Ee.dispose(),pe.dispose(),Te.dispose(),Ue.dispose(),me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ne),Fe.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),ft.stop()};function Be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=de.autoReset,j=Y.enabled,J=Y.autoUpdate,X=Y.needsUpdate,ae=Y.type;ke(),de.autoReset=A,Y.enabled=j,Y.autoUpdate=J,Y.needsUpdate=X,Y.type=ae}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const j=A.target;j.removeEventListener("dispose",bt),V(j)}function V(A){ce(A),se.remove(A)}function ce(A){const j=se.get(A).programs;j!==void 0&&(j.forEach(function(J){me.releaseProgram(J)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,J,X,ae,Ae){j===null&&(j=q);const ze=ae.isMesh&&ae.matrixWorld.determinant()<0,Oe=Je(A,j,J,X,ae);Se.setMaterial(X,ze);let qe=J.index,Ve=1;X.wireframe===!0&&(qe=R.getWireframeAttribute(J),Ve=2);const je=J.drawRange,Ye=J.attributes.position;let ot=je.start*Ve,Wt=(je.start+je.count)*Ve;Ae!==null&&(ot=Math.max(ot,Ae.start*Ve),Wt=Math.min(Wt,(Ae.start+Ae.count)*Ve)),qe!==null?(ot=Math.max(ot,0),Wt=Math.min(Wt,qe.count)):Ye!=null&&(ot=Math.max(ot,0),Wt=Math.min(Wt,Ye.count));const Mn=Wt-ot;if(Mn<0||Mn===1/0)return;Te.setup(ae,X,Oe,J,qe);let ki,wt=Me;if(qe!==null&&(ki=U.get(qe),wt=he,wt.setIndex(ki)),ae.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*we()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(ae.isLine){let at=X.linewidth;at===void 0&&(at=1),Se.setLineWidth(at*we()),ae.isLineSegments?wt.setMode(F.LINES):ae.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else ae.isPoints?wt.setMode(F.POINTS):ae.isSprite&&wt.setMode(F.TRIANGLES);if(ae.isInstancedMesh)wt.renderInstances(ot,Mn,ae.count);else if(J.isInstancedBufferGeometry){const at=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,dc=Math.min(J.instanceCount,at);wt.renderInstances(ot,Mn,dc)}else wt.render(ot,Mn)},this.compile=function(A,j){function J(X,ae,Ae){X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,Le(X,ae,Ae),X.side=Fi,X.needsUpdate=!0,Le(X,ae,Ae),X.side=hi):Le(X,ae,Ae)}m=E.get(A),m.init(),g.push(m),A.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(p.useLegacyLights),A.traverse(function(X){const ae=X.material;if(ae)if(Array.isArray(ae))for(let Ae=0;Ae<ae.length;Ae++){const ze=ae[Ae];J(ze,A,X)}else J(ae,A,X)}),g.pop(),m=null};let ye=null;function Ie(A){ye&&ye(A)}function Ne(){ft.stop()}function ht(){ft.start()}const ft=new ap;ft.setAnimationLoop(Ie),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(A){ye=A,Fe.setAnimationLoop(A),A===null?ft.stop():ft.start()},Fe.addEventListener("sessionstart",Ne),Fe.addEventListener("sessionend",ht),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(j),j=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,j,y),m=E.get(A,g.length),m.init(),g.push(m),K.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(K),ge=this.localClippingEnabled,Q=$.init(this.clippingPlanes,ge),d=T.get(A,v.length),d.init(),v.push(d),Lt(A,j,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(I,L),Q===!0&&$.beginShadows();const J=m.state.shadowsArray;if(Y.render(J,A,j),Q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,A),m.setupLights(p.useLegacyLights),j.isArrayCamera){const X=j.cameras;for(let ae=0,Ae=X.length;ae<Ae;ae++){const ze=X[ae];P(d,A,ze,ze.viewport)}}else P(d,A,j);y!==null&&(_e.updateMultisampleRenderTarget(y),_e.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,j),Te.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function Lt(A,j,J,X){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){X&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);const ze=pe.update(A),Oe=A.material;Oe.visible&&d.push(A,ze,Oe,J,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==de.render.frame&&(A.skeleton.update(),A.skeleton.frame=de.render.frame);const ze=pe.update(A),Oe=A.material;if(X&&(ze.boundingSphere===null&&ze.computeBoundingSphere(),oe.copy(ze.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Oe)){const qe=ze.groups;for(let Ve=0,je=qe.length;Ve<je;Ve++){const Ye=qe[Ve],ot=Oe[Ye.materialIndex];ot&&ot.visible&&d.push(A,ze,ot,J,oe.z,Ye)}}else Oe.visible&&d.push(A,ze,Oe,J,oe.z,null)}}const Ae=A.children;for(let ze=0,Oe=Ae.length;ze<Oe;ze++)Lt(Ae[ze],j,J,X)}function P(A,j,J,X){const ae=A.opaque,Ae=A.transmissive,ze=A.transparent;m.setupLightsView(J),Q===!0&&$.setGlobalState(p.clippingPlanes,J),Ae.length>0&&ie(ae,Ae,j,J),X&&Se.viewport(G.copy(X)),ae.length>0&&ne(ae,j,J),Ae.length>0&&ne(Ae,j,J),ze.length>0&&ne(ze,j,J),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ie(A,j,J,X){if(ue===null){const Oe=ve.isWebGL2;ue=new hr(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?uo:lr,minFilter:ho,samples:Oe&&a===!0?4:0})}const ae=p.getRenderTarget();p.setRenderTarget(ue),p.clear();const Ae=p.toneMapping;p.toneMapping=fi,ne(A,J,X),_e.updateMultisampleRenderTarget(ue),_e.updateRenderTargetMipmap(ue);let ze=!1;for(let Oe=0,qe=j.length;Oe<qe;Oe++){const Ve=j[Oe],je=Ve.object,Ye=Ve.geometry,ot=Ve.material,Wt=Ve.group;if(ot.side===hi&&je.layers.test(X.layers)){const Mn=ot.side;ot.side=Qt,ot.needsUpdate=!0,fe(je,J,X,Ye,ot,Wt),ot.side=Mn,ot.needsUpdate=!0,ze=!0}}ze===!0&&(_e.updateMultisampleRenderTarget(ue),_e.updateRenderTargetMipmap(ue)),p.setRenderTarget(ae),p.toneMapping=Ae}function ne(A,j,J){const X=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Ae=A.length;ae<Ae;ae++){const ze=A[ae],Oe=ze.object,qe=ze.geometry,Ve=X===null?ze.material:X,je=ze.group;Oe.layers.test(J.layers)&&fe(Oe,j,J,qe,Ve,je)}}function fe(A,j,J,X,ae,Ae){A.onBeforeRender(p,j,J,X,ae,Ae),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(p,j,J,X,A,Ae),ae.transparent===!0&&ae.side===hi&&ae.forceSinglePass===!1?(ae.side=Qt,ae.needsUpdate=!0,p.renderBufferDirect(J,j,X,ae,A,Ae),ae.side=Fi,ae.needsUpdate=!0,p.renderBufferDirect(J,j,X,ae,A,Ae),ae.side=hi):p.renderBufferDirect(J,j,X,ae,A,Ae),A.onAfterRender(p,j,J,X,ae,Ae)}function Le(A,j,J){j.isScene!==!0&&(j=q);const X=se.get(A),ae=m.state.lights,Ae=m.state.shadowsArray,ze=ae.state.version,Oe=me.getParameters(A,ae.state,Ae,j,J),qe=me.getProgramCacheKey(Oe);let Ve=X.programs;X.environment=A.isMeshStandardMaterial?j.environment:null,X.fog=j.fog,X.envMap=(A.isMeshStandardMaterial?Ee:De).get(A.envMap||X.environment),Ve===void 0&&(A.addEventListener("dispose",bt),Ve=new Map,X.programs=Ve);let je=Ve.get(qe);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===ze)return tt(A,Oe),je}else Oe.uniforms=me.getUniforms(A),A.onBuild(J,Oe,p),A.onBeforeCompile(Oe,p),je=me.acquireProgram(Oe,qe),Ve.set(qe,je),X.uniforms=Oe.uniforms;const Ye=X.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=$.uniform),tt(A,Oe),X.needsLights=Ke(A),X.lightsStateVersion=ze,X.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMap.value=ae.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotShadowMap.value=ae.state.spotShadowMap,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMap.value=ae.state.pointShadowMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix);const ot=je.getUniforms(),Wt=Oa.seqWithValue(ot.seq,Ye);return X.currentProgram=je,X.uniformsList=Wt,je}function tt(A,j){const J=se.get(A);J.outputColorSpace=j.outputColorSpace,J.instancing=j.instancing,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function Je(A,j,J,X,ae){j.isScene!==!0&&(j=q),_e.resetTextureUnits();const Ae=j.fog,ze=X.isMeshStandardMaterial?j.environment:null,Oe=y===null?p.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Xn,qe=(X.isMeshStandardMaterial?Ee:De).get(X.envMap||ze),Ve=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!X.normalMap&&!!J.attributes.tangent,Ye=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Wt=!!J.morphAttributes.color,Mn=X.toneMapped?p.toneMapping:fi,ki=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=ki!==void 0?ki.length:0,at=se.get(X),dc=m.state.lights;if(Q===!0&&(ge===!0||A!==w)){const nn=A===w&&X.id===x;$.setState(X,A,nn)}let Ct=!1;X.version===at.__version?(at.needsLights&&at.lightsStateVersion!==dc.state.version||at.outputColorSpace!==Oe||ae.isInstancedMesh&&at.instancing===!1||!ae.isInstancedMesh&&at.instancing===!0||ae.isSkinnedMesh&&at.skinning===!1||!ae.isSkinnedMesh&&at.skinning===!0||at.envMap!==qe||X.fog===!0&&at.fog!==Ae||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==$.numPlanes||at.numIntersection!==$.numIntersection)||at.vertexAlphas!==Ve||at.vertexTangents!==je||at.morphTargets!==Ye||at.morphNormals!==ot||at.morphColors!==Wt||at.toneMapping!==Mn||ve.isWebGL2===!0&&at.morphTargetsCount!==wt)&&(Ct=!0):(Ct=!0,at.__version=X.version);let Vi=at.currentProgram;Ct===!0&&(Vi=Le(X,j,ae));let Ch=!1,Bs=!1,pc=!1;const Xt=Vi.getUniforms(),Wi=at.uniforms;if(Se.useProgram(Vi.program)&&(Ch=!0,Bs=!0,pc=!0),X.id!==x&&(x=X.id,Bs=!0),Ch||w!==A){if(Xt.setValue(F,"projectionMatrix",A.projectionMatrix),ve.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,Bs=!0,pc=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const nn=Xt.map.cameraPosition;nn!==void 0&&nn.setValue(F,oe.setFromMatrixPosition(A.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ae.isSkinnedMesh)&&Xt.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){Xt.setOptional(F,ae,"bindMatrix"),Xt.setOptional(F,ae,"bindMatrixInverse");const nn=ae.skeleton;nn&&(ve.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Xt.setValue(F,"boneTexture",nn.boneTexture,_e),Xt.setValue(F,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mc=J.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&ve.isWebGL2===!0)&&le.update(ae,J,Vi),(Bs||at.receiveShadow!==ae.receiveShadow)&&(at.receiveShadow=ae.receiveShadow,Xt.setValue(F,"receiveShadow",ae.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Wi.envMap.value=qe,Wi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Bs&&(Xt.setValue(F,"toneMappingExposure",p.toneMappingExposure),at.needsLights&&it(Wi,pc),Ae&&X.fog===!0&&H.refreshFogUniforms(Wi,Ae),H.refreshMaterialUniforms(Wi,X,D,B,ue),Oa.upload(F,at.uniformsList,Wi,_e)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Oa.upload(F,at.uniformsList,Wi,_e),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Xt.setValue(F,"center",ae.center),Xt.setValue(F,"modelViewMatrix",ae.modelViewMatrix),Xt.setValue(F,"normalMatrix",ae.normalMatrix),Xt.setValue(F,"modelMatrix",ae.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let gc=0,Zp=nn.length;gc<Zp;gc++)if(ve.isWebGL2){const Ph=nn[gc];Ue.update(Ph,Vi),Ue.bind(Ph,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function it(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ke(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,j,J){se.get(A.texture).__webglTexture=j,se.get(A.depthTexture).__webglTexture=J;const X=se.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=J===void 0,X.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const J=se.get(A);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,J=0){y=A,M=j,S=J;let X=!0,ae=null,Ae=!1,ze=!1;if(A){const qe=se.get(A);qe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(F.FRAMEBUFFER,null),X=!1):qe.__webglFramebuffer===void 0?_e.setupRenderTarget(A):qe.__hasExternalTextures&&_e.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const je=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=je[j],Ae=!0):ve.isWebGL2&&A.samples>0&&_e.useMultisampledRTT(A)===!1?ae=se.get(A).__webglMultisampledFramebuffer:ae=je,G.copy(A.viewport),b.copy(A.scissor),C=A.scissorTest}else G.copy(z).multiplyScalar(D).floor(),b.copy(k).multiplyScalar(D).floor(),C=W;if(Se.bindFramebuffer(F.FRAMEBUFFER,ae)&&ve.drawBuffers&&X&&Se.drawBuffers(A,ae),Se.viewport(G),Se.scissor(b),Se.setScissorTest(C),Ae){const qe=se.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,qe.__webglTexture,J)}else if(ze){const qe=se.get(A.texture),Ve=j||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,J||0,Ve)}x=-1},this.readRenderTargetPixels=function(A,j,J,X,ae,Ae,ze){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Oe=Oe[ze]),Oe){Se.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const qe=A.texture,Ve=qe.format,je=qe.type;if(Ve!==Pn&&Z.convert(Ve)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=je===uo&&(be.has("EXT_color_buffer_half_float")||ve.isWebGL2&&be.has("EXT_color_buffer_float"));if(je!==lr&&Z.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===ir&&(ve.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-X&&J>=0&&J<=A.height-ae&&F.readPixels(j,J,X,ae,Z.convert(Ve),Z.convert(je),Ae)}finally{const qe=y!==null?se.get(y).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(A,j,J=0){const X=Math.pow(2,-J),ae=Math.floor(j.image.width*X),Ae=Math.floor(j.image.height*X);_e.setTexture2D(j,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,A.x,A.y,ae,Ae),Se.unbindTexture()},this.copyTextureToTexture=function(A,j,J,X=0){const ae=j.image.width,Ae=j.image.height,ze=Z.convert(J.format),Oe=Z.convert(J.type);_e.setTexture2D(J,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment),j.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,A.x,A.y,ae,Ae,ze,Oe,j.image.data):j.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,ze,j.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,X,A.x,A.y,ze,Oe,j.image),X===0&&J.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,j,J,X,ae=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=A.max.x-A.min.x+1,ze=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,qe=Z.convert(X.format),Ve=Z.convert(X.type);let je;if(X.isData3DTexture)_e.setTexture3D(X,0),je=F.TEXTURE_3D;else if(X.isDataArrayTexture)_e.setTexture2DArray(X,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Ye=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wt=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),ki=F.getParameter(F.UNPACK_SKIP_IMAGES),wt=J.isCompressedTexture?J.mipmaps[0]:J.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?F.texSubImage3D(je,ae,j.x,j.y,j.z,Ae,ze,Oe,qe,Ve,wt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(je,ae,j.x,j.y,j.z,Ae,ze,Oe,qe,wt.data)):F.texSubImage3D(je,ae,j.x,j.y,j.z,Ae,ze,Oe,qe,Ve,wt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),ae===0&&X.generateMipmaps&&F.generateMipmap(je),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?_e.setTextureCube(A,0):A.isData3DTexture?_e.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_e.setTexture2DArray(A,0):_e.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){M=0,S=0,y=null,Se.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?sr:Hd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Qe:Xn}},K0=class extends fp{};K0.prototype.isWebGL1Renderer=!0;class yh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=i}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}let Q0=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},ey=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ty=class extends ey{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ny=class{constructor(e,t,i=0,r=1/0){this.ray=new Jd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Dl(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dl(e[r],this,i,t);return i.sort(ju),i}};function ju(n,e){return n.distance-e.distance}function Dl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Dl(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);const iy="124",ry=0,Yu=1,sy=2,dp=1,oy=2,Qs=3,sc=0,Ut=1,oc=2,pp=1,no=0,io=1,Zu=2,Ju=3,Ku=4,ay=5,is=100,cy=101,ly=102,Qu=103,ef=104,hy=200,uy=201,fy=202,dy=203,mp=204,gp=205,py=206,my=207,gy=208,_y=209,vy=210,xy=0,yy=1,My=2,Il=3,by=4,Sy=5,Ey=6,wy=7,ac=0,Ty=1,Ay=2,ro=0,Ry=1,Ly=2,Cy=3,Py=4,Dy=5,_p=300,Mh=301,bh=302,tf=303,nf=304,Sh=306,Eh=307,Ul=1e3,ln=1001,Nl=1002,jt=1003,rf=1004,sf=1005,Gt=1006,Iy=1007,cc=1008,wh=1009,Uy=1010,Ny=1011,Ha=1012,Fy=1013,Ba=1014,Pi=1015,ka=1016,Oy=1017,By=1018,zy=1019,so=1020,Gy=1021,cr=1022,Un=1023,Hy=1024,ky=1025,ms=1026,fo=1027,Vy=1028,Wy=1029,Xy=1030,$y=1031,qy=1032,jy=1033,of=33776,af=33777,cf=33778,lf=33779,hf=35840,uf=35841,ff=35842,df=35843,Yy=36196,pf=37492,mf=37496,Zy=37808,Jy=37809,Ky=37810,Qy=37811,eM=37812,tM=37813,nM=37814,iM=37815,rM=37816,sM=37817,oM=37818,aM=37819,cM=37820,lM=37821,hM=36492,uM=37840,fM=37841,dM=37842,pM=37843,mM=37844,gM=37845,_M=37846,vM=37847,xM=37848,yM=37849,MM=37850,bM=37851,SM=37852,EM=37853,wM=2200,TM=2201,AM=2202,Va=2300,za=2301,qc=2302,ss=2400,os=2401,Wa=2402,Th=2500,vp=2501,RM=0,Po=3e3,xp=3001,LM=3007,CM=3002,PM=3003,DM=3004,IM=3005,UM=3006,NM=3200,FM=3201,Us=0,OM=1,jc=7680,BM=519,lc=35044,po=35048,gf="300 es";function Zn(){}Object.assign(Zn.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;const i=this._listeners[n];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;const t=this._listeners[n.type];if(t!==void 0){n.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n)}}});const It=[];for(let n=0;n<256;n++)It[n]=(n<16?"0":"")+n.toString(16);let na=1234567;const $e={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},lerp:function(n,e,t){return(1-t)*n+t*e},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(na=n%2147483647),na=na*16807%2147483647,(na-1)/2147483646},degToRad:function(n){return n*$e.DEG2RAD},radToDeg:function(n){return n*$e.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)===0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class xe{constructor(e=0,t=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class Kt{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],v=r[0],g=r[3],p=r[6],_=r[1],M=r[4],S=r[7],y=r[2],x=r[5],w=r[8];return s[0]=o*v+a*_+c*y,s[3]=o*g+a*M+c*x,s[6]=o*p+a*S+c*w,s[1]=l*v+u*_+h*y,s[4]=l*g+u*M+h*x,s[7]=l*p+u*S+h*w,s[2]=f*v+d*_+m*y,s[5]=f*g+d*M+m*x,s[8]=f*p+d*S+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}}let Br;const Ns={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{Br===void 0&&(Br=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Br.width=n.width,Br.height=n.height;const t=Br.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=Br}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let zM=0;function vt(n=vt.DEFAULT_IMAGE,e=vt.DEFAULT_MAPPING,t=ln,i=ln,r=Gt,s=cc,o=Un,a=wh,c=1,l=Po){Object.defineProperty(this,"id",{value:zM++}),this.uuid=$e.generateUUID(),this.name="",this.image=n,this.mipmaps=[],this.mapping=e,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}vt.DEFAULT_IMAGE=void 0;vt.DEFAULT_MAPPING=_p;vt.prototype=Object.assign(Object.create(Zn.prototype),{constructor:vt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.name=n.name,this.image=n.image,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.encoding=n.encoding,this},toJSON:function(n){const e=n===void 0||typeof n=="string";if(!e&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=$e.generateUUID()),!e&&n.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Yc(i[s].image)):r.push(Yc(i[s]))}else r=Yc(i);n.images[i.uuid]={uuid:i.uuid,url:r}}t.image=i.uuid}return e||(n.textures[this.uuid]=t),t},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(n){if(this.mapping!==_p)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Ul:n.x=n.x-Math.floor(n.x);break;case ln:n.x=n.x<0?0:1;break;case Nl:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Ul:n.y=n.y-Math.floor(n.y);break;case ln:n.y=n.y<0?0:1;break;case Nl:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}});Object.defineProperty(vt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ns.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class pt{constructor(e=0,t=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(d+1)/2,y=(p+1)/2,x=(u+f)/4,w=(h+v)/4,G=(m+g)/4;return M>S&&M>y?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=x/i,s=w/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=x/r,s=G/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=w/s,r=G/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-v)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Nn(n,e,t){this.width=n,this.height=e,this.scissor=new pt(0,0,n,e),this.scissorTest=!1,this.viewport=new pt(0,0,n,e),t=t||{},this.texture=new vt(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.image={},this.texture.image.width=n,this.texture.image.height=e,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null}Nn.prototype=Object.assign(Object.create(Zn.prototype),{constructor:Nn,isWebGLRenderTarget:!0,setSize:function(n,e){(this.width!==n||this.height!==e)&&(this.width=n,this.height=e,this.texture.image.width=n,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,n,e),this.scissor.set(0,0,n,e)},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.width=n.width,this.height=n.height,this.viewport.copy(n.viewport),this.texture=n.texture.clone(),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function _f(n,e,t){Nn.call(this,n,e,t),this.samples=4}_f.prototype=Object.assign(Object.create(Nn.prototype),{constructor:_f,isWebGLMultisampleRenderTarget:!0,copy:function(n){return Nn.prototype.copy.call(this,n),this.samples=n.samples,this}});class Ht{constructor(e=0,t=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return i.copy(e).slerp(t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(h!==v||c!==f||l!==d||u!==m){let g=1-a;const p=c*f+l*d+u*m+h*v,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const y=Math.sqrt(M),x=Math.atan2(y,p*_);g=Math.sin(g*x)/y,a=Math.sin(a*x)/y}const S=a*_;if(c=c*g+f*S,l=l*g+d*S,u=u*g+m*S,h=h*g+v*S,g===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class O{constructor(e=0,t=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const Zc=new O,vf=new Ht;class Gi{constructor(e,t){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new O(1/0,1/0,1/0),this.max=t!==void 0?t:new O(-1/0,-1/0,-1/0)}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Kc.copy(t.boundingBox),Kc.applyMatrix4(e.matrixWorld),this.union(Kc));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new O),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vs),Vs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),ia.subVectors(this.max,Ws),zr.subVectors(e.a,Ws),Gr.subVectors(e.b,Ws),Hr.subVectors(e.c,Ws),Si.subVectors(Gr,zr),Ei.subVectors(Hr,Gr),ji.subVectors(zr,Hr);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-ji.z,ji.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,ji.z,0,-ji.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-ji.y,ji.x,0];return!Jc(t,zr,Gr,Hr,ia)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,zr,Gr,Hr,ia))?!1:(ra.crossVectors(Si,Ei),t=[ra.x,ra.y,ra.z],Jc(t,zr,Gr,Hr,ia))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new O),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Vs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Jc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yi.fromArray(n,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ii=[new O,new O,new O,new O,new O,new O,new O,new O],Vs=new O,Kc=new Gi,zr=new O,Gr=new O,Hr=new O,Si=new O,Ei=new O,ji=new O,Ws=new O,ia=new O,ra=new O,Yi=new O,GM=new Gi;class Hi{constructor(e,t){this.center=e!==void 0?e:new O,this.radius=t!==void 0?t:-1}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):GM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new O),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Gi),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const ri=new O,Qc=new O,sa=new O,wi=new O,el=new O,oa=new O,tl=new O;class Do{constructor(e,t){this.origin=e!==void 0?e:new O,this.direction=t!==void 0?t:new O(0,0,-1)}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new O),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new O),t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.direction).multiplyScalar(t).add(this.origin),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qc.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Qc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=wi.dot(this.direction),c=-wi.dot(sa),l=wi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(sa).multiplyScalar(f).add(Qc),d}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){el.subVectors(t,e),oa.subVectors(i,e),tl.crossVectors(el,oa);let o=this.direction.dot(tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const c=a*this.direction.dot(oa.crossVectors(wi,oa));if(c<0)return null;const l=a*this.direction.dot(el.cross(wi));if(l<0||c+l>o)return null;const u=-a*wi.dot(tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class et{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,kM)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ti.crossVectors(i,an),Ti.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ti.crossVectors(i,an)),Ti.normalize(),aa.crossVectors(an,Ti),r[0]=Ti.x,r[4]=aa.x,r[8]=an.x,r[1]=Ti.y,r[5]=aa.y,r[9]=an.y,r[2]=Ti.z,r[6]=aa.z,r[10]=an.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],_=i[3],M=i[7],S=i[11],y=i[15],x=r[0],w=r[4],G=r[8],b=r[12],C=r[1],N=r[5],B=r[9],D=r[13],I=r[2],L=r[6],z=r[10],k=r[14],W=r[3],ee=r[7],Q=r[11],ge=r[15];return s[0]=o*x+a*C+c*I+l*W,s[4]=o*w+a*N+c*L+l*ee,s[8]=o*G+a*B+c*z+l*Q,s[12]=o*b+a*D+c*k+l*ge,s[1]=u*x+h*C+f*I+d*W,s[5]=u*w+h*N+f*L+d*ee,s[9]=u*G+h*B+f*z+d*Q,s[13]=u*b+h*D+f*k+d*ge,s[2]=m*x+v*C+g*I+p*W,s[6]=m*w+v*N+g*L+p*ee,s[10]=m*G+v*B+g*z+p*Q,s[14]=m*b+v*D+g*k+p*ge,s[3]=_*x+M*C+S*I+y*W,s[7]=_*w+M*N+S*L+y*ee,s[11]=_*G+M*B+S*z+y*Q,s[15]=_*b+M*D+S*k+y*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+g*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],_=h*g*l-v*f*l+v*c*d-a*g*d-h*c*p+a*f*p,M=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,S=u*v*l-m*h*l+m*a*d-o*v*d-u*a*p+o*h*p,y=m*h*c-u*v*c-m*a*f+o*v*f+u*a*g-o*h*g,x=t*_+i*M+r*S+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=_*w,e[1]=(v*f*s-h*g*s-v*r*d+i*g*d+h*r*p-i*f*p)*w,e[2]=(a*g*s-v*c*s+v*r*l-i*g*l-a*r*p+i*c*p)*w,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*w,e[4]=M*w,e[5]=(u*g*s-m*f*s+m*r*d-t*g*d-u*r*p+t*f*p)*w,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*w,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*w,e[8]=S*w,e[9]=(m*h*s-u*v*s-m*i*d+t*v*d+u*i*p-t*h*p)*w,e[10]=(o*v*s-m*a*s+m*i*l-t*v*l-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*w,e[12]=y*w,e[13]=(u*v*r-m*h*r+m*i*f-t*v*f-u*i*g+t*h*g)*w,e[14]=(m*a*r-o*v*r-m*i*c+t*v*c+o*i*g-t*a*g)*w,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,v=o*u,g=o*h,p=a*h,_=c*l,M=c*u,S=c*h,y=i.x,x=i.y,w=i.z;return r[0]=(1-(v+p))*y,r[1]=(d+S)*y,r[2]=(m-M)*y,r[3]=0,r[4]=(d-S)*x,r[5]=(1-(f+p))*x,r[6]=(g+_)*x,r[7]=0,r[8]=(m+M)*w,r[9]=(g-_)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const l=1/s,u=1/o,h=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const kr=new O,Tn=new et,HM=new O(0,0,0),kM=new O(1,1,1),Ti=new O,aa=new O,an=new O;class Fs{constructor(e=0,t=0,i=0,r=Fs.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){const r=$e.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new O(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Fs.DefaultOrder="XYZ";Fs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const xf=new et,yf=new Ht;class yp{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let VM=0;const Mf=new O,Vr=new Ht,si=new et,ca=new O,Xs=new O,WM=new O,XM=new Ht,bf=new O(1,0,0),Sf=new O(0,1,0),Ef=new O(0,0,1),$M={type:"added"},wf={type:"removed"};function We(){Object.defineProperty(this,"id",{value:VM++}),this.uuid=$e.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const n=new O,e=new Fs,t=new Ht,i=new O(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Kt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}We.DefaultUp=new O(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype=Object.assign(Object.create(Zn.prototype),{constructor:We,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Vr.setFromAxisAngle(n,e),this.quaternion.multiply(Vr),this},rotateOnWorldAxis:function(n,e){return Vr.setFromAxisAngle(n,e),this.quaternion.premultiply(Vr),this},rotateX:function(n){return this.rotateOnAxis(bf,n)},rotateY:function(n){return this.rotateOnAxis(Sf,n)},rotateZ:function(n){return this.rotateOnAxis(Ef,n)},translateOnAxis:function(n,e){return Mf.copy(n).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(bf,n)},translateY:function(n){return this.translateOnAxis(Sf,n)},translateZ:function(n){return this.translateOnAxis(Ef,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(si.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?ca.copy(n):ca.set(n,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Xs,ca,this.up):si.lookAt(ca,Xs,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(si),this.quaternion.premultiply(Vr.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent($M)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(wf)),this},clear:function(){for(let n=0;n<this.children.length;n++){const e=this.children[n];e.parent=null,e.dispatchEvent(wf)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),si.multiply(n.parent.matrixWorld)),n.applyMatrix4(si),n.updateWorldMatrix(!1,!1),this.add(n),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new O),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new Ht),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,n,WM),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new O),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,XM,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new O),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){const e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){const t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){const e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(n.shapes,u)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){const o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),u=s(n.shapes),h=s(n.skeletons),f=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),f.length>0&&(t.animations=f)}return t.object=i,t;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){const i=n.children[t];this.add(i.clone())}return this}});const nl=new O,qM=new O,jM=new Kt;class li{constructor(e,t){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new O(1,0,0),this.constant=t!==void 0?t:0}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nl.subVectors(i,t).cross(qM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new O),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new O);const i=e.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new O),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jM.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const An=new O,oi=new O,il=new O,ai=new O,Wr=new O,Xr=new O,Tf=new O,rl=new O,sl=new O,ol=new O;class zt{constructor(e,t,i){this.a=e!==void 0?e:new O,this.b=t!==void 0?t:new O,this.c=i!==void 0?i:new O}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new O),r.subVectors(i,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){An.subVectors(r,t),oi.subVectors(i,t),il.subVectors(e,t);const o=An.dot(An),a=An.dot(oi),c=An.dot(il),l=oi.dot(oi),u=oi.dot(il),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new O),h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ai),c.set(0,0),c.addScaledVector(s,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c}static isFrontFacing(e,t,i,r){return An.subVectors(i,t),oi.subVectors(e,t),An.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),An.cross(oi).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new O),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new li),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new O);const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),Xr.subVectors(s,i),rl.subVectors(e,i);const c=Wr.dot(rl),l=Xr.dot(rl);if(c<=0&&l<=0)return t.copy(i);sl.subVectors(e,r);const u=Wr.dot(sl),h=Xr.dot(sl);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Wr,o);ol.subVectors(e,s);const d=Wr.dot(ol),m=Xr.dot(ol);if(m>=0&&d<=m)return t.copy(s);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Xr,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Tf.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Tf,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},la={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function cl(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Ge{constructor(e,t,i){return Object.defineProperty(this,"isColor",{value:!0}),t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=$e.euclideanModulo(e,1),t=$e.clamp(t,0,1),i=$e.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=al(s,r,e+1/3),this.g=al(s,r,e),this.b=al(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Mp[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=i,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(la);const i=$e.lerp(Rn.h,la.h,t),r=$e.lerp(Rn.s,la.s,t),s=$e.lerp(Rn.l,la.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ge.NAMES=Mp;Ge.prototype.r=1;Ge.prototype.g=1;Ge.prototype.b=1;class Fl{constructor(e,t,i,r,s,o=0){this.a=e,this.b=t,this.c=i,this.normal=r&&r.isVector3?r:new O,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new Ge,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,i=e.vertexNormals.length;t<i;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,i=e.vertexColors.length;t<i;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}}let YM=0;function Xe(){Object.defineProperty(this,"id",{value:YM++}),this.uuid=$e.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=io,this.side=sc,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mp,this.blendDst=gp,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jc,this.stencilZFail=jc,this.stencilZPass=jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Xe.prototype=Object.assign(Object.create(Zn.prototype),{constructor:Xe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(const e in n){const t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===pp;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){const e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(t.blending=this.blending),this.flatShading===!0&&(t.flatShading=this.flatShading),this.side!==sc&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.flatShading=n.flatShading,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const e=n.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Xe.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});function fr(n){Xe.call(this),this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(n)}fr.prototype=Object.create(Xe.prototype);fr.prototype.constructor=fr;fr.prototype.isMeshBasicMaterial=!0;fr.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this};const _t=new O,ha=new xe;function Ze(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=lc,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ze.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Ze.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new Ge),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new xe),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new O),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new pt),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(n),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)_t.fromBufferAttribute(this,e),_t.applyMatrix3(n),this.setXYZ(e,_t.x,_t.y,_t.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)_t.x=this.getX(e),_t.y=this.getY(e),_t.z=this.getZ(e),_t.applyMatrix4(n),this.setXYZ(e,_t.x,_t.y,_t.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)_t.x=this.getX(e),_t.y=this.getY(e),_t.z=this.getZ(e),_t.applyNormalMatrix(n),this.setXYZ(e,_t.x,_t.y,_t.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)_t.x=this.getX(e),_t.y=this.getY(e),_t.z=this.getZ(e),_t.transformDirection(n),this.setXYZ(e,_t.x,_t.y,_t.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Ol(n,e,t){Ze.call(this,new Int8Array(n),e,t)}Ol.prototype=Object.create(Ze.prototype);Ol.prototype.constructor=Ol;function Bl(n,e,t){Ze.call(this,new Uint8Array(n),e,t)}Bl.prototype=Object.create(Ze.prototype);Bl.prototype.constructor=Bl;function zl(n,e,t){Ze.call(this,new Uint8ClampedArray(n),e,t)}zl.prototype=Object.create(Ze.prototype);zl.prototype.constructor=zl;function Gl(n,e,t){Ze.call(this,new Int16Array(n),e,t)}Gl.prototype=Object.create(Ze.prototype);Gl.prototype.constructor=Gl;function mo(n,e,t){Ze.call(this,new Uint16Array(n),e,t)}mo.prototype=Object.create(Ze.prototype);mo.prototype.constructor=mo;function Hl(n,e,t){Ze.call(this,new Int32Array(n),e,t)}Hl.prototype=Object.create(Ze.prototype);Hl.prototype.constructor=Hl;function go(n,e,t){Ze.call(this,new Uint32Array(n),e,t)}go.prototype=Object.create(Ze.prototype);go.prototype.constructor=go;function Xa(n,e,t){Ze.call(this,new Uint16Array(n),e,t)}Xa.prototype=Object.create(Ze.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isFloat16BufferAttribute=!0;function ut(n,e,t){Ze.call(this,new Float32Array(n),e,t)}ut.prototype=Object.create(Ze.prototype);ut.prototype.constructor=ut;function kl(n,e,t){Ze.call(this,new Float64Array(n),e,t)}kl.prototype=Object.create(Ze.prototype);kl.prototype.constructor=kl;class ZM{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const t=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,t.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,t.push(i)),this.groups=t}fromGeometry(e){const t=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let p=0;p<c;p++)l[p]={name:a[p].name,data:[]};this.morphTargets.position=l}const u=e.morphNormals,h=u.length;let f;if(h>0){f=[];for(let p=0;p<h;p++)f[p]={name:u[p].name,data:[]};this.morphTargets.normal=f}const d=e.skinIndices,m=e.skinWeights,v=d.length===i.length,g=m.length===i.length;i.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let p=0;p<t.length;p++){const _=t[p];this.vertices.push(i[_.a],i[_.b],i[_.c]);const M=_.vertexNormals;if(M.length===3)this.normals.push(M[0],M[1],M[2]);else{const y=_.normal;this.normals.push(y,y,y)}const S=_.vertexColors;if(S.length===3)this.colors.push(S[0],S[1],S[2]);else{const y=_.color;this.colors.push(y,y,y)}if(s===!0){const y=r[0][p];y!==void 0?this.uvs.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",p),this.uvs.push(new xe,new xe,new xe))}if(o===!0){const y=r[1][p];y!==void 0?this.uvs2.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",p),this.uvs2.push(new xe,new xe,new xe))}for(let y=0;y<c;y++){const x=a[y].vertices;l[y].data.push(x[_.a],x[_.b],x[_.c])}for(let y=0;y<h;y++){const x=u[y].vertexNormals[p];f[y].data.push(x.a,x.b,x.c)}v&&this.skinIndices.push(d[_.a],d[_.b],d[_.c]),g&&this.skinWeights.push(m[_.a],m[_.b],m[_.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function bp(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}const JM={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ua(n,e){return new JM[n](e)}let KM=1;const Bn=new et,hl=new We,$r=new O,cn=new Gi,$s=new Gi,Dt=new O;function mt(){Object.defineProperty(this,"id",{value:KM+=2}),this.uuid=$e.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}mt.prototype=Object.assign(Object.create(Zn.prototype),{constructor:mt,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(bp(n)>65535?go:mo)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new Kt().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Bn.makeRotationX(n),this.applyMatrix4(Bn),this},rotateY:function(n){return Bn.makeRotationY(n),this.applyMatrix4(Bn),this},rotateZ:function(n){return Bn.makeRotationZ(n),this.applyMatrix4(Bn),this},translate:function(n,e,t){return Bn.makeTranslation(n,e,t),this.applyMatrix4(Bn),this},scale:function(n,e,t){return Bn.makeScale(n,e,t),this.applyMatrix4(Bn),this},lookAt:function(n){return hl.lookAt(n),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this},setFromObject:function(n){const e=n.geometry;if(n.isPoints||n.isLine){const t=new ut(e.vertices.length*3,3),i=new ut(e.colors.length*3,3);if(this.setAttribute("position",t.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new ut(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else n.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(n){const e=[];for(let t=0,i=n.length;t<i;t++){const r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(e,3)),this},updateFromObject:function(n){let e=n.geometry;if(n.isMesh){let t=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(t=void 0,e.elementsNeedUpdate=!1),t===void 0)return this.fromGeometry(e);t.verticesNeedUpdate=e.verticesNeedUpdate,t.normalsNeedUpdate=e.normalsNeedUpdate,t.colorsNeedUpdate=e.colorsNeedUpdate,t.uvsNeedUpdate=e.uvsNeedUpdate,t.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=t}if(e.verticesNeedUpdate===!0){const t=this.attributes.position;t!==void 0&&(t.copyVector3sArray(e.vertices),t.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const t=this.attributes.normal;t!==void 0&&(t.copyVector3sArray(e.normals),t.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const t=this.attributes.color;t!==void 0&&(t.copyColorsArray(e.colors),t.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const t=this.attributes.uv;t!==void 0&&(t.copyVector2sArray(e.uvs),t.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const t=this.attributes.lineDistance;t!==void 0&&(t.copyArray(e.lineDistances),t.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(n.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(n){return n.__directGeometry=new ZM().fromGeometry(n),this.fromDirectGeometry(n.__directGeometry)},fromDirectGeometry:function(n){const e=new Float32Array(n.vertices.length*3);if(this.setAttribute("position",new Ze(e,3).copyVector3sArray(n.vertices)),n.normals.length>0){const t=new Float32Array(n.normals.length*3);this.setAttribute("normal",new Ze(t,3).copyVector3sArray(n.normals))}if(n.colors.length>0){const t=new Float32Array(n.colors.length*3);this.setAttribute("color",new Ze(t,3).copyColorsArray(n.colors))}if(n.uvs.length>0){const t=new Float32Array(n.uvs.length*2);this.setAttribute("uv",new Ze(t,2).copyVector2sArray(n.uvs))}if(n.uvs2.length>0){const t=new Float32Array(n.uvs2.length*2);this.setAttribute("uv2",new Ze(t,2).copyVector2sArray(n.uvs2))}this.groups=n.groups;for(const t in n.morphTargets){const i=[],r=n.morphTargets[t];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new ut(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[t]=i}if(n.skinIndices.length>0){const t=new ut(n.skinIndices.length*4,4);this.setAttribute("skinIndex",t.copyVector4sArray(n.skinIndices))}if(n.skinWeights.length>0){const t=new ut(n.skinWeights.length*4,4);this.setAttribute("skinWeight",t.copyVector4sArray(n.skinWeights))}return n.boundingSphere!==null&&(this.boundingSphere=n.boundingSphere.clone()),n.boundingBox!==null&&(this.boundingBox=n.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Gi);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(n){const t=this.boundingSphere.center;if(cn.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,$s.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,$s.max),cn.expandByPoint(Dt)):(cn.expandByPoint($s.min),cn.expandByPoint($s.max))}cn.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)Dt.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(Dt));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Dt.fromBufferAttribute(o,c),a&&($r.fromBufferAttribute(n,c),Dt.add($r)),i=Math.max(i,t.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,f=t.count;h<f;h++)t.setXYZ(h,0,0,0);const i=new O,r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O;if(n)for(let h=0,f=n.count;h<f;h+=3){const d=n.getX(h+0),m=n.getX(h+1),v=n.getX(h+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),c.fromBufferAttribute(t,v),o.add(l),a.add(l),c.add(l),t.setXYZ(d,o.x,o.y,o.z),t.setXYZ(m,a.x,a.y,a.z),t.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const i in t){if(n.attributes[i]===void 0)continue;const s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)Dt.fromBufferAttribute(n,e),Dt.normalize(),n.setXYZ(e,Dt.x,Dt.y,Dt.z)},toNonIndexed:function(){function n(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let f=0,d=0;for(let m=0,v=a.length;m<v;m++){f=a[m]*l;for(let g=0;g<l;g++)h[d++]=c[f++]}return new Ze(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new mt,t=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=n(a,t);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],f=n(h,t);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};const e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const a in t){const c=t[a],l=c.toJSON(n.data);c.name!==""&&(l.name=c.name),n.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=f.toJSON(n.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new mt().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=n.name;const t=n.index;t!==null&&this.setIndex(t.clone(e));const i=n.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=n.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;const s=n.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Af=new et,Zi=new Do,ul=new Hi,Ai=new O,Ri=new O,Li=new O,fl=new O,dl=new O,pl=new O,fa=new O,da=new O,pa=new O,as=new xe,cs=new xe,ls=new xe,oo=new O,ma=new O;function kt(n=new mt,e=new fr){We.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}kt.prototype=Object.assign(Object.create(We.prototype),{constructor:kt,isMesh:!0,copy:function(n){return We.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){const t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),ul.copy(t.boundingSphere),ul.applyMatrix4(r),n.ray.intersectsSphere(ul)===!1)||(Af.copy(r).invert(),Zi.copy(n.ray).applyMatrix4(Af),t.boundingBox!==null&&Zi.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){const o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,f=t.groups,d=t.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=i[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(g.start+g.count,d.start+d.count);for(let S=_,y=M;S<y;S+=3){const x=o.getX(S),w=o.getX(S+1),G=o.getX(S+2);s=ga(this,p,n,Zi,a,c,l,u,h,x,w,G),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=o.getX(g),M=o.getX(g+1),S=o.getX(g+2);s=ga(this,i,n,Zi,a,c,l,u,h,_,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=i[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(g.start+g.count,d.start+d.count);for(let S=_,y=M;S<y;S+=3){const x=S,w=S+1,G=S+2;s=ga(this,p,n,Zi,a,c,l,u,h,x,w,G),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=g,M=g+1,S=g+2;s=ga(this,i,n,Zi,a,c,l,u,h,_,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}else if(t.isGeometry){const o=Array.isArray(i),a=t.vertices,c=t.faces;let l;const u=t.faceVertexUvs[0];u.length>0&&(l=u);for(let h=0,f=c.length;h<f;h++){const d=c[h],m=o?i[d.materialIndex]:i;if(m===void 0)continue;const v=a[d.a],g=a[d.b],p=a[d.c];if(s=Sp(this,m,n,Zi,v,g,p,oo),s){if(l&&l[h]){const _=l[h];as.copy(_[0]),cs.copy(_[1]),ls.copy(_[2]),s.uv=zt.getUV(oo,v,g,p,as,cs,ls,new xe)}s.face=d,s.faceIndex=h,e.push(s)}}}}});function Sp(n,e,t,i,r,s,o,a){let c;if(e.side===Ut?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==oc,a),c===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ma);return l<t.near||l>t.far?null:{distance:l,point:ma.clone(),object:n}}function ga(n,e,t,i,r,s,o,a,c,l,u,h){Ai.fromBufferAttribute(r,l),Ri.fromBufferAttribute(r,u),Li.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(e.morphTargets&&s&&f){fa.set(0,0,0),da.set(0,0,0),pa.set(0,0,0);for(let m=0,v=s.length;m<v;m++){const g=f[m],p=s[m];g!==0&&(fl.fromBufferAttribute(p,l),dl.fromBufferAttribute(p,u),pl.fromBufferAttribute(p,h),o?(fa.addScaledVector(fl,g),da.addScaledVector(dl,g),pa.addScaledVector(pl,g)):(fa.addScaledVector(fl.sub(Ai),g),da.addScaledVector(dl.sub(Ri),g),pa.addScaledVector(pl.sub(Li),g)))}Ai.add(fa),Ri.add(da),Li.add(pa)}n.isSkinnedMesh&&(n.boneTransform(l,Ai),n.boneTransform(u,Ri),n.boneTransform(h,Li));const d=Sp(n,e,t,i,Ai,Ri,Li,oo);if(d){a&&(as.fromBufferAttribute(a,l),cs.fromBufferAttribute(a,u),ls.fromBufferAttribute(a,h),d.uv=zt.getUV(oo,Ai,Ri,Li,as,cs,ls,new xe)),c&&(as.fromBufferAttribute(c,l),cs.fromBufferAttribute(c,u),ls.fromBufferAttribute(c,h),d.uv2=zt.getUV(oo,Ai,Ri,Li,as,cs,ls,new xe));const m=new Fl(l,u,h);zt.getNormal(Ai,Ri,Li,m.normal),d.face=m}return d}class Ep extends mt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function m(v,g,p,_,M,S,y,x,w,G,b){const C=S/w,N=y/G,B=S/2,D=y/2,I=x/2,L=w+1,z=G+1;let k=0,W=0;const ee=new O;for(let Q=0;Q<z;Q++){const ge=Q*N-D;for(let ue=0;ue<L;ue++){const K=ue*C-B;ee[v]=K*_,ee[g]=ge*M,ee[p]=I,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[p]=x>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(ue/w),h.push(1-Q/G),k+=1}}for(let Q=0;Q<G;Q++)for(let ge=0;ge<w;ge++){const ue=f+ge+L*Q,K=f+ge+L*(Q+1),oe=f+(ge+1)+L*(Q+1),q=f+(ge+1)+L*Q;c.push(ue,K,q),c.push(K,oe,q),W+=6}a.addGroup(d,W,b),d+=W,f+=k}}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const r in i)e[r]=i[r]}return e}const QM={clone:Ms,merge:Bt};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function tn(n){Xe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}tn.prototype=Object.create(Xe.prototype);tn.prototype.constructor=tn;tn.prototype.isShaderMaterial=!0;tn.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Ms(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};tn.prototype.toJSON=function(n){const e=Xe.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Oi(){We.call(this),this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}Oi.prototype=Object.assign(Object.create(We.prototype),{constructor:Oi,isCamera:!0,copy:function(n,e){return We.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new O),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){We.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){We.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Nt(n=50,e=1,t=.1,i=2e3){Oi.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Nt.prototype=Object.assign(Object.create(Oi.prototype),{constructor:Nt,isPerspectiveCamera:!0,copy:function(n,e){return Oi.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){const e=.5*this.getFilmHeight()/n;this.fov=$e.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const n=Math.tan($e.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return $e.RAD2DEG*2*Math.atan(Math.tan($e.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const n=this.near;let e=n*Math.tan($e.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}const o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){const e=We.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const qr=90,jr=1;function bs(n,e,t){if(We.call(this),this.type="CubeCamera",t.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=t;const i=new Nt(qr,jr,n,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const r=new Nt(qr,jr,n,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(-1,0,0)),this.add(r);const s=new Nt(qr,jr,n,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new O(0,1,0)),this.add(s);const o=new Nt(qr,jr,n,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new O(0,-1,0)),this.add(o);const a=new Nt(qr,jr,n,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new O(0,0,1)),this.add(a);const c=new Nt(qr,jr,n,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;const d=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,l.setRenderTarget(t,0),l.render(u,i),l.setRenderTarget(t,1),l.render(u,r),l.setRenderTarget(t,2),l.render(u,s),l.setRenderTarget(t,3),l.render(u,o),l.setRenderTarget(t,4),l.render(u,a),t.texture.generateMipmaps=d,l.setRenderTarget(t,5),l.render(u,c),l.setRenderTarget(f),l.xr.enabled=h}}bs.prototype=Object.create(We.prototype);bs.prototype.constructor=bs;function Bi(n,e,t,i,r,s,o,a,c,l){n=n!==void 0?n:[],e=e!==void 0?e:Mh,o=o!==void 0?o:cr,vt.call(this,n,e,t,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}Bi.prototype=Object.create(vt.prototype);Bi.prototype.constructor=Bi;Bi.prototype.isCubeTexture=!0;Object.defineProperty(Bi.prototype,"images",{get:function(){return this.image},set:function(n){this.image=n}});function dr(n,e,t){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=t),Nn.call(this,n,n,e),e=e||{},this.texture=new Bi(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}dr.prototype=Object.create(Nn.prototype);dr.prototype.constructor=dr;dr.prototype.isWebGLCubeRenderTarget=!0;dr.prototype.fromEquirectangularTexture=function(n,e){this.texture.type=e.type,this.texture.format=Un,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},i=new Ep(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ms(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ut,blending:no});r.uniforms.tEquirect.value=e;const s=new kt(i,r),o=e.minFilter;return e.minFilter===cc&&(e.minFilter=Gt),new bs(1,10,this).update(n,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};dr.prototype.clear=function(n,e,t,i){const r=n.getRenderTarget();for(let s=0;s<6;s++)n.setRenderTarget(this,s),n.clear(e,t,i);n.setRenderTarget(r)};function Ss(n,e,t,i,r,s,o,a,c,l,u,h){vt.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:n||null,width:e||1,height:t||1},this.magFilter=c!==void 0?c:jt,this.minFilter=l!==void 0?l:jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ss.prototype=Object.create(vt.prototype);Ss.prototype.constructor=Ss;Ss.prototype.isDataTexture=!0;const Yr=new Hi,_a=new O;class hc{constructor(e,t,i,r,s,o){this.planes=[e!==void 0?e:new li,t!==void 0?t:new li,i!==void 0?i:new li,r!==void 0?r:new li,s!==void 0?s:new li,o!==void 0?o:new li]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],m=i[10],v=i[11],g=i[12],p=i[13],_=i[14],M=i[15];return t[0].setComponents(a-r,h-c,v-f,M-g).normalize(),t[1].setComponents(a+r,h+c,v+f,M+g).normalize(),t[2].setComponents(a+s,h+l,v+d,M+p).normalize(),t[3].setComponents(a-s,h-l,v-d,M-p).normalize(),t[4].setComponents(a-o,h-u,v-m,M-_).normalize(),t[5].setComponents(a+o,h+u,v+m,M+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}}function wp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121),{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,l),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class ib extends mt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const _=p*f-o;for(let M=0;M<l;M++){const S=M*h-s;m.push(S,-_,0),v.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const M=_+l*p,S=_+l*(p+1),y=_+1+l*(p+1),x=_+1+l*p;d.push(M,S,x),d.push(S,y,x)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(g,2))}}var rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb="vec3 transformed = vec3( position );",hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,vb=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nb=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Wb=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rS=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,uS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,dS=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,mS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,gS=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,zS=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,GS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,HS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,VS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,WS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,XS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bE=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,EE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const rt={alphamap_fragment:rb,alphamap_pars_fragment:sb,alphatest_fragment:ob,aomap_fragment:ab,aomap_pars_fragment:cb,begin_vertex:lb,beginnormal_vertex:hb,bsdfs:ub,bumpmap_pars_fragment:fb,clipping_planes_fragment:db,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:_b,color_pars_fragment:vb,color_pars_vertex:xb,color_vertex:yb,common:Mb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:Eb,displacementmap_vertex:wb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,encodings_fragment:Rb,encodings_pars_fragment:Lb,envmap_fragment:Cb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Db,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:Wb,envmap_vertex:Ub,fog_vertex:Nb,fog_pars_vertex:Fb,fog_fragment:Ob,fog_pars_fragment:Bb,gradientmap_pars_fragment:zb,lightmap_fragment:Gb,lightmap_pars_fragment:Hb,lights_lambert_vertex:kb,lights_pars_begin:Vb,lights_toon_fragment:Xb,lights_toon_pars_fragment:$b,lights_phong_fragment:qb,lights_phong_pars_fragment:jb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Jb,lights_fragment_maps:Kb,lights_fragment_end:Qb,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:oS,map_particle_pars_fragment:aS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:lS,morphnormal_vertex:hS,morphtarget_pars_vertex:uS,morphtarget_vertex:fS,normal_fragment_begin:dS,normal_fragment_maps:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:vS,packing:xS,premultiplied_alpha_fragment:yS,project_vertex:MS,dithering_fragment:bS,dithering_pars_fragment:SS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:AS,shadowmap_vertex:RS,shadowmask_pars_fragment:LS,skinbase_vertex:CS,skinning_pars_vertex:PS,skinning_vertex:DS,skinnormal_vertex:IS,specularmap_fragment:US,specularmap_pars_fragment:NS,tonemapping_fragment:FS,tonemapping_pars_fragment:OS,transmissionmap_fragment:BS,transmissionmap_pars_fragment:zS,uv_pars_fragment:GS,uv_pars_vertex:HS,uv_vertex:kS,uv2_pars_fragment:VS,uv2_pars_vertex:WS,uv2_vertex:XS,worldpos_vertex:$S,background_frag:qS,background_vert:jS,cube_frag:YS,cube_vert:ZS,depth_frag:JS,depth_vert:KS,distanceRGBA_frag:QS,distanceRGBA_vert:eE,equirect_frag:tE,equirect_vert:nE,linedashed_frag:iE,linedashed_vert:rE,meshbasic_frag:sE,meshbasic_vert:oE,meshlambert_frag:aE,meshlambert_vert:cE,meshmatcap_frag:lE,meshmatcap_vert:hE,meshtoon_frag:uE,meshtoon_vert:fE,meshphong_frag:dE,meshphong_vert:pE,meshphysical_frag:mE,meshphysical_vert:gE,normal_frag:_E,normal_vert:vE,points_frag:xE,points_vert:yE,shadow_frag:ME,shadow_vert:bE,sprite_frag:SE,sprite_vert:EE},Pe={common:{diffuse:{value:new Ge(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ge(15658734)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Kt}}},Hn={basic:{uniforms:Bt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Bt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Bt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Bt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Bt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Bt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Bt([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Bt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Bt([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Bt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.normal_vert,fragmentShader:rt.normal_frag},sprite:{uniforms:Bt([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},cube:{uniforms:Bt([Pe.envmap,{opacity:{value:1}}]),vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Bt([Pe.common,Pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Bt([Pe.lights,Pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Hn.physical={uniforms:Bt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ge(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};function wE(n,e,t,i,r){const s=new Ge(0);let o=0,a,c,l=null,u=0,h=null;function f(m,v,g,p){let _=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=e.get(_));const M=n.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?d(s,o):_&&_.isColor&&(d(_,1),p=!0),(n.autoClear||p)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.isWebGLCubeRenderTarget||_.mapping===Sh)?(c===void 0&&(c=new kt(new Ep(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ms(Hn.cube.uniforms),vertexShader:Hn.cube.vertexShader,fragmentShader:Hn.cube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_.isWebGLCubeRenderTarget&&(_=_.texture),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,(l!==_||u!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=_,u=_.version,h=n.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(a===void 0&&(a=new kt(new ib(2,2),new tn({name:"BackgroundMaterial",uniforms:Ms(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:sc,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),a.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||u!==_.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,l=_,u=_.version,h=n.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function d(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),o=v,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,d(s,o)},render:f}}function TE(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null);let l=c;function u(D,I,L,z,k){let W=!1;if(o){const ee=m(z,L,I);l!==ee&&(l=ee,f(l.object)),W=g(z,k),W&&p(z,k)}else{const ee=I.wireframe===!0;(l.geometry!==z.id||l.program!==L.id||l.wireframe!==ee)&&(l.geometry=z.id,l.program=L.id,l.wireframe=ee,W=!0)}D.isInstancedMesh===!0&&(W=!0),k!==null&&t.update(k,34963),W&&(w(D,I,L,z),k!==null&&n.bindBuffer(34963,t.get(k).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function d(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,I,L){const z=L.wireframe===!0;let k=a[D.id];k===void 0&&(k={},a[D.id]=k);let W=k[I.id];W===void 0&&(W={},k[I.id]=W);let ee=W[z];return ee===void 0&&(ee=v(h()),W[z]=ee),ee}function v(D){const I=[],L=[],z=[];for(let k=0;k<r;k++)I[k]=0,L[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:z,object:D,attributes:{},index:null}}function g(D,I){const L=l.attributes,z=D.attributes;let k=0;for(const W in z){const ee=L[W],Q=z[W];if(ee===void 0||ee.attribute!==Q||ee.data!==Q.data)return!0;k++}return l.attributesNum!==k||l.index!==I}function p(D,I){const L={},z=D.attributes;let k=0;for(const W in z){const ee=z[W],Q={};Q.attribute=ee,ee.data&&(Q.data=ee.data),L[W]=Q,k++}l.attributes=L,l.attributesNum=k,l.index=I}function _(){const D=l.newAttributes;for(let I=0,L=D.length;I<L;I++)D[I]=0}function M(D){S(D,0)}function S(D,I){const L=l.newAttributes,z=l.enabledAttributes,k=l.attributeDivisors;L[D]=1,z[D]===0&&(n.enableVertexAttribArray(D),z[D]=1),k[D]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),k[D]=I)}function y(){const D=l.newAttributes,I=l.enabledAttributes;for(let L=0,z=I.length;L<z;L++)I[L]!==D[L]&&(n.disableVertexAttribArray(L),I[L]=0)}function x(D,I,L,z,k,W){i.isWebGL2===!0&&(L===5124||L===5125)?n.vertexAttribIPointer(D,I,L,k,W):n.vertexAttribPointer(D,I,L,z,k,W)}function w(D,I,L,z){if(i.isWebGL2===!1&&(D.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const k=z.attributes,W=L.getAttributes(),ee=I.defaultAttributeValues;for(const Q in W){const ge=W[Q];if(ge>=0){const ue=k[Q];if(ue!==void 0){const K=ue.normalized,oe=ue.itemSize,q=t.get(ue);if(q===void 0)continue;const we=q.buffer,F=q.type,Re=q.bytesPerElement;if(ue.isInterleavedBufferAttribute){const be=ue.data,ve=be.stride,Se=ue.offset;be&&be.isInstancedInterleavedBuffer?(S(ge,be.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=be.meshPerAttribute*be.count)):M(ge),n.bindBuffer(34962,we),x(ge,oe,F,K,ve*Re,Se*Re)}else ue.isInstancedBufferAttribute?(S(ge,ue.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)):M(ge),n.bindBuffer(34962,we),x(ge,oe,F,K,0,0)}else if(Q==="instanceMatrix"){const K=t.get(D.instanceMatrix);if(K===void 0)continue;const oe=K.buffer,q=K.type;S(ge+0,1),S(ge+1,1),S(ge+2,1),S(ge+3,1),n.bindBuffer(34962,oe),n.vertexAttribPointer(ge+0,4,q,!1,64,0),n.vertexAttribPointer(ge+1,4,q,!1,64,16),n.vertexAttribPointer(ge+2,4,q,!1,64,32),n.vertexAttribPointer(ge+3,4,q,!1,64,48)}else if(Q==="instanceColor"){const K=t.get(D.instanceColor);if(K===void 0)continue;const oe=K.buffer,q=K.type;S(ge,1),n.bindBuffer(34962,oe),n.vertexAttribPointer(ge,3,q,!1,12,0)}else if(ee!==void 0){const K=ee[Q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ge,K);break;case 3:n.vertexAttrib3fv(ge,K);break;case 4:n.vertexAttrib4fv(ge,K);break;default:n.vertexAttrib1fv(ge,K)}}}}y()}function G(){N();for(const D in a){const I=a[D];for(const L in I){const z=I[L];for(const k in z)d(z[k].object),delete z[k];delete I[L]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const I=a[D.id];for(const L in I){const z=I[L];for(const k in z)d(z[k].object),delete z[k];delete I[L]}delete a[D.id]}function C(D){for(const I in a){const L=a[I];if(L[D.id]===void 0)continue;const z=L[D.id];for(const k in z)d(z[k].object),delete z[k];delete L[D.id]}}function N(){B(),l!==c&&(l=c,f(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:B,dispose:G,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:M,disableUnusedAttributes:y}}function AE(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function RE(n,e,t){let i;function r(){if(i!==void 0)return i;const x=e.get("EXT_texture_filter_anisotropic");return x!==null?i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),f=n.getParameter(3379),d=n.getParameter(34076),m=n.getParameter(34921),v=n.getParameter(36347),g=n.getParameter(36348),p=n.getParameter(36349),_=h>0,M=o||!!e.get("OES_texture_float"),S=_&&M,y=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:y}}function LE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new li,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const m=h.length!==0||f||i!==0||r;return r=f,t=u(h,d,0),i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const _=s?0:i,M=_*4;let S=p.clippingState||null;c.value=S,S=u(m,f,M,d);for(let y=0;y!==M;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,S=d;M!==v;++M,S+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function CE(n){let e=new WeakMap;function t(o,a){return a===tf?o.mapping=Mh:a===nf&&(o.mapping=bh),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tf||a===nf)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=n.getRenderList(),u=n.getRenderTarget(),h=new dr(c.height/2);return h.fromEquirectangularTexture(n,o),e.set(o,h),n.setRenderTarget(u),n.setRenderList(l),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function PE(n){const e={};return{has:function(t){if(e[t]!==void 0)return e[t]!==null;let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return e[t]=i,i!==null},get:function(t){return this.has(t)||console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e[t]}}}function DE(n,e,t,i){const r=new WeakMap,s=new WeakMap;function o(h){const f=h.target,d=r.get(f);d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);f.removeEventListener("dispose",o),r.delete(f);const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){let d=r.get(f);return d||(f.addEventListener("dispose",o),f.isBufferGeometry?d=f:f.isGeometry&&(f._bufferGeometry===void 0&&(f._bufferGeometry=new mt().setFromObject(h)),d=f._bufferGeometry),r.set(f,d),t.memory.geometries++,d)}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],34962);const d=h.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],34962)}}function l(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let M=0,S=_.length;M<S;M+=3){const y=_[M+0],x=_[M+1],w=_[M+2];f.push(y,x,x,w,w,y)}}else{const _=m.array;v=m.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const y=M+0,x=M+1,w=M+2;f.push(y,x,x,w,w,y)}}const g=new(bp(f)>65535?go:mo)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function IE(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,m){if(m===0)return;let v,g;if(r)v=n,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,d,a,f*c,m),t.update(d,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function UE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NE(n,e){return n[0]-e[0]}function FE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function OE(n){const e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let g=0;g<u;g++)h[g]=[g,0];e[o.id]=h}for(let g=0;g<u;g++){const p=h[g];p[0]=g,p[1]=l[g]}h.sort(FE);for(let g=0;g<8;g++)g<u&&h[g][1]?(i[g][0]=h[g][0],i[g][1]=h[g][1]):(i[g][0]=Number.MAX_SAFE_INTEGER,i[g][1]=0);i.sort(NE);const f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal;let m=0;for(let g=0;g<8;g++){const p=i[g],_=p[0],M=p[1];_!==Number.MAX_SAFE_INTEGER&&M?(f&&o.getAttribute("morphTarget"+g)!==f[_]&&o.setAttribute("morphTarget"+g,f[_]),d&&o.getAttribute("morphNormal"+g)!==d[_]&&o.setAttribute("morphNormal"+g,d[_]),t[g]=M,m+=M):(f&&o.hasAttribute("morphTarget"+g)===!0&&o.deleteAttribute("morphTarget"+g),d&&o.hasAttribute("morphNormal"+g)===!0&&o.deleteAttribute("morphNormal"+g),t[g]=0)}const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function BE(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(u.isGeometry&&h.updateFromObject(c),e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}function _o(n=null,e=1,t=1,i=1){vt.call(this,null),this.image={data:n,width:e,height:t,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}_o.prototype=Object.create(vt.prototype);_o.prototype.constructor=_o;_o.prototype.isDataTexture2DArray=!0;function vo(n=null,e=1,t=1,i=1){vt.call(this,null),this.image={data:n,width:e,height:t,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}vo.prototype=Object.create(vt.prototype);vo.prototype.constructor=vo;vo.prototype.isDataTexture3D=!0;const Tp=new vt,zE=new _o,GE=new vo,Ap=new Bi,Rf=[],Lf=[],Cf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rf[r];if(s===void 0&&(s=new Float32Array(r),Rf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rp(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function VE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function WE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function XE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(vn(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),hn(t,i)}}function $E(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(vn(t,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),hn(t,i)}}function qE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(vn(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),hn(t,i)}}function jE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Tp,r)}function YE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zE,r)}function ZE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||GE,r)}function JE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Ap,r)}function KE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QE(n,e){const t=this.cache;vn(t,e)||(n.uniform2iv(this.addr,e),hn(t,e))}function ew(n,e){const t=this.cache;vn(t,e)||(n.uniform3iv(this.addr,e),hn(t,e))}function tw(n,e){const t=this.cache;vn(t,e)||(n.uniform4iv(this.addr,e),hn(t,e))}function nw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iw(n){switch(n){case 5126:return HE;case 35664:return kE;case 35665:return VE;case 35666:return WE;case 35674:return XE;case 35675:return $E;case 35676:return qE;case 5124:case 35670:return KE;case 35667:case 35671:return QE;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return YE}}function rw(n,e){n.uniform1fv(this.addr,e)}function sw(n,e){n.uniform1iv(this.addr,e)}function ow(n,e){n.uniform2iv(this.addr,e)}function aw(n,e){n.uniform3iv(this.addr,e)}function cw(n,e){n.uniform4iv(this.addr,e)}function lw(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function hw(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function uw(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function fw(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dw(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pw(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mw(n,e,t){const i=e.length,r=Rp(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Tp,r[s])}function gw(n,e,t){const i=e.length,r=Rp(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Ap,r[s])}function _w(n){switch(n){case 5126:return rw;case 35664:return lw;case 35665:return hw;case 35666:return uw;case 35674:return fw;case 35675:return dw;case 35676:return pw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35680:case 36300:case 36308:case 36293:return gw}}function vw(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=iw(e.type)}function Lp(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=_w(e.type)}Lp.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),hn(e,n)};function Cp(n){this.id=n,this.seq=[],this.map={}}Cp.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const ml=/(\w+)(\])?(\[|\.)?/g;function If(n,e){n.seq.push(e),n.map[e.id]=e}function xw(n,e,t){const i=n.name,r=i.length;for(ml.lastIndex=0;;){const s=ml.exec(i),o=ml.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){If(t,l===void 0?new vw(a,n,e):new Lp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Cp(a),If(t,h)),t=h}}}function Ui(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);xw(r,s,this)}}Ui.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};Ui.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};Ui.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};Ui.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function Uf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let yw=0;function Mw(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Pp(n){switch(n){case Po:return["Linear","( value )"];case xp:return["sRGB","( value )"];case CM:return["RGBE","( value )"];case DM:return["RGBM","( value, 7.0 )"];case IM:return["RGBM","( value, 16.0 )"];case UM:return["RGBD","( value, 256.0 )"];case LM:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case PM:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Nf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+Mw(s)}function qs(n,e){const t=Pp(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function bw(n,e){const t=Pp(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sw(n,e){let t;switch(e){case Ry:t="Linear";break;case Ly:t="Reinhard";break;case Cy:t="OptimizedCineon";break;case Py:t="ACESFilmic";break;case Dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ew(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function ww(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function eo(n){return n!==""}function Ff(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(Aw,Rw)}function Rw(n,e){const t=rt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vl(t)}const Lw=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(n){return n.replace(Cw,Dp).replace(Lw,Pw)}function Pw(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Dp(n,e,t,i)}function Dp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qs&&(e="SHADOWMAP_TYPE_VSM"),e}function Iw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mh:case bh:e="ENVMAP_TYPE_CUBE";break;case Sh:case Eh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bh:case Eh:e="ENVMAP_MODE_REFRACTION";break}return e}function Nw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Ty:e="ENVMAP_BLENDING_MIX";break;case Ay:e="ENVMAP_BLENDING_ADD";break}return e}function Fw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Dw(t),l=Iw(t),u=Uw(t),h=Nw(t),f=n.gammaFactor>0?n.gammaFactor:1,d=t.isWebGL2?"":Ew(t),m=ww(s),v=r.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(eo).join(`
`),g.length>0&&(g+=`
`),p=[d,m].filter(eo).join(`
`),p.length>0&&(p+=`
`)):(g=[zf(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),p=[d,zf(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ro?"#define TONE_MAPPING":"",t.toneMapping!==ro?rt.tonemapping_pars_fragment:"",t.toneMapping!==ro?Sw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",rt.encodings_pars_fragment,t.map?qs("mapTexelToLinear",t.mapEncoding):"",t.matcap?qs("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?qs("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?qs("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?qs("lightMapTexelToLinear",t.lightMapEncoding):"",bw("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),o=Vl(o),o=Ff(o,t),o=Of(o,t),a=Vl(a),a=Ff(a,t),a=Of(a,t),o=Bf(o),a=Bf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===gf?"":"out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+g+o,S=_+p+a,y=Uf(r,35633,M),x=Uf(r,35632,S);if(r.attachShader(v,y),r.attachShader(v,x),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(v).trim(),C=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(x).trim();let B=!0,D=!0;if(r.getProgramParameter(v,35714)===!1){B=!1;const I=Nf(r,y,"vertex"),L=Nf(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",b,I,L)}else b!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",b):(C===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:b,vertexShader:{log:C,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(y),r.deleteShader(x);let w;this.getUniforms=function(){return w===void 0&&(w=new Ui(r,v)),w};let G;return this.getAttributes=function(){return G===void 0&&(G=Tw(r,v)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=x,this}function Ow(n,e,t,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(x){const G=x.skeleton.bones;if(l)return 1024;{const C=Math.floor((u-20)/4),N=Math.min(C,G.length);return N<G.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+G.length+" bones. This GPU supports "+N+"."),0):N}}function g(x){let w;return x&&x.isTexture?w=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=x.texture.encoding):w=Po,w}function p(x,w,G,b,C){const N=b.fog,B=x.isMeshStandardMaterial?b.environment:null,D=e.get(x.envMap||B),I=d[x.type],L=C.isSkinnedMesh?v(C):0;x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let z,k;if(I){const Q=Hn[I];z=Q.vertexShader,k=Q.fragmentShader}else z=x.vertexShader,k=x.fragmentShader;const W=n.getRenderTarget();return{isWebGL2:a,shaderID:I,shaderName:x.type,vertexShader:z,fragmentShader:k,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W!==null?g(W.texture):n.outputEncoding,map:!!x.map,mapEncoding:g(x.map),matcap:!!x.matcap,matcapEncoding:g(x.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:g(D),envMapCubeUV:!!D&&(D.mapping===Sh||D.mapping===Eh),lightMap:!!x.lightMap,lightMapEncoding:g(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:g(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===OM,tangentSpaceNormalMap:x.normalMapType===Us,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.transmissionMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&L>0,maxBones:L,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:n.maxMorphTargets,maxMorphNormals:n.maxMorphNormals,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:ro,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===oc,flipSided:x.side===Ut,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function _(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.fragmentShader),w.push(x.vertexShader)),x.defines!==void 0)for(const G in x.defines)w.push(G),w.push(x.defines[G]);if(x.isRawShaderMaterial===!1){for(let G=0;G<m.length;G++)w.push(x[m[G]]);w.push(n.outputEncoding),w.push(n.gammaFactor)}return w.push(x.customProgramCacheKey),w.join()}function M(x){const w=d[x.type];let G;if(w){const b=Hn[w];G=QM.clone(b.uniforms)}else G=x.uniforms;return G}function S(x,w){let G;for(let b=0,C=o.length;b<C;b++){const N=o[b];if(N.cacheKey===w){G=N,++G.usedTimes;break}}return G===void 0&&(G=new Fw(n,w,x,r),o.push(G)),G}function y(x){if(--x.usedTimes===0){const w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:p,getProgramCacheKey:_,getUniforms:M,acquireProgram:S,releaseProgram:y,programs:o}}function Bw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gf(n){const e=[];let t=0;const i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(f,d,m,v,g,p){let _=e[t];const M=n.get(m);return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,program:M.program||s,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},e[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.program=M.program||s,_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=g,_.group=p),t++,_}function c(f,d,m,v,g,p){const _=a(f,d,m,v,g,p);(m.transparent===!0?r:i).push(_)}function l(f,d,m,v,g,p){const _=a(f,d,m,v,g,p);(m.transparent===!0?r:i).unshift(_)}function u(f,d){i.length>1&&i.sort(f||zw),r.length>1&&r.sort(d||Gw)}function h(){for(let f=t,d=e.length;f<d;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Hw(n){let e=new WeakMap;function t(r,s){const o=e.get(r);let a;return o===void 0?(a=new Gf(n),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Gf(n),o.set(s,a))),a}function i(){e=new WeakMap}return{get:t,dispose:i}}function kw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Vw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ww=0;function Xw(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function $w(n,e){const t=new kw,i=Vw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new et,a=new et;function c(u){let h=0,f=0,d=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let m=0,v=0,g=0,p=0,_=0,M=0,S=0,y=0;u.sort(Xw);for(let w=0,G=u.length;w<G;w++){const b=u[w],C=b.color,N=b.intensity,B=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=C.r*N,f+=C.g*N,d+=C.b*N;else if(b.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(b.sh.coefficients[I],N);else if(b.isDirectionalLight){const I=t.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const L=b.shadow,z=i.get(b);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,r.directionalShadow[m]=z,r.directionalShadowMap[m]=D,r.directionalShadowMatrix[m]=b.shadow.matrix,M++}r.directional[m]=I,m++}else if(b.isSpotLight){const I=t.get(b);if(I.position.setFromMatrixPosition(b.matrixWorld),I.color.copy(C).multiplyScalar(N),I.distance=B,I.coneCos=Math.cos(b.angle),I.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),I.decay=b.decay,b.castShadow){const L=b.shadow,z=i.get(b);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,r.spotShadow[g]=z,r.spotShadowMap[g]=D,r.spotShadowMatrix[g]=b.shadow.matrix,y++}r.spot[g]=I,g++}else if(b.isRectAreaLight){const I=t.get(b);I.color.copy(C).multiplyScalar(N),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),r.rectArea[p]=I,p++}else if(b.isPointLight){const I=t.get(b);if(I.color.copy(b.color).multiplyScalar(b.intensity),I.distance=b.distance,I.decay=b.decay,b.castShadow){const L=b.shadow,z=i.get(b);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,z.shadowCameraNear=L.camera.near,z.shadowCameraFar=L.camera.far,r.pointShadow[v]=z,r.pointShadowMap[v]=D,r.pointShadowMatrix[v]=b.shadow.matrix,S++}r.point[v]=I,v++}else if(b.isHemisphereLight){const I=t.get(b);I.skyColor.copy(b.color).multiplyScalar(N),I.groundColor.copy(b.groundColor).multiplyScalar(N),r.hemi[_]=I,_++}}p>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=d;const x=r.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==g||x.rectAreaLength!==p||x.hemiLength!==_||x.numDirectionalShadows!==M||x.numPointShadows!==S||x.numSpotShadows!==y)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=v,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=y,x.directionalLength=m,x.pointLength=v,x.spotLength=g,x.rectAreaLength=p,x.hemiLength=_,x.numDirectionalShadows=M,x.numPointShadows=S,x.numSpotShadows=y,r.version=Ww++)}function l(u,h){let f=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let _=0,M=u.length;_<M;_++){const S=u[_];if(S.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(S.isSpotLight){const y=r.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const y=r.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),g++}}}return{setup:c,setupView:l,state:r}}function Hf(n,e){const t=new $w(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){t.setup(i)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qw(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Hf(n,e),t.set(s,[]),t.get(s).push(a)):o>=t.get(s).length?(a=new Hf(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}function pr(n){Xe.call(this),this.type="MeshDepthMaterial",this.depthPacking=NM,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(n)}pr.prototype=Object.create(Xe.prototype);pr.prototype.constructor=pr;pr.prototype.isMeshDepthMaterial=!0;pr.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.depthPacking=n.depthPacking,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this};function mr(n){Xe.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(n)}mr.prototype=Object.create(Xe.prototype);mr.prototype.constructor=mr;mr.prototype.isMeshDistanceMaterial=!0;mr.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.referencePosition.copy(n.referencePosition),this.nearDistance=n.nearDistance,this.farDistance=n.farDistance,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this};var jw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ip(n,e,t){let i=new hc;const r=new xe,s=new xe,o=new pt,a=[],c=[],l={},u={0:Ut,1:sc,2:oc},h=new tn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Yw,fragmentShader:jw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const d=new mt;d.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new kt(d,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp,this.render=function(y,x,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const G=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(no),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let B=0,D=y.length;B<D;B++){const I=y[B],L=I.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const z=L.getFrameExtents();if(r.multiply(z),s.copy(L.mapSize),(r.x>t||r.y>t)&&(r.x>t&&(s.x=Math.floor(t/z.x),r.x=s.x*z.x,L.mapSize.x=s.x),r.y>t&&(s.y=Math.floor(t/z.y),r.y=s.y*z.y,L.mapSize.y=s.y)),L.map===null&&!L.isPointLightShadow&&this.type===Qs){const W={minFilter:Gt,magFilter:Gt,format:Un};L.map=new Nn(r.x,r.y,W),L.map.texture.name=I.name+".shadowMap",L.mapPass=new Nn(r.x,r.y,W),L.camera.updateProjectionMatrix()}if(L.map===null){const W={minFilter:jt,magFilter:jt,format:Un};L.map=new Nn(r.x,r.y,W),L.map.texture.name=I.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const k=L.getViewportCount();for(let W=0;W<k;W++){const ee=L.getViewport(W);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),N.viewport(o),L.updateMatrices(I,W),i=L.getFrustum(),S(x,w,L.camera,I,this.type)}!L.isPointLightShadow&&this.type===Qs&&g(L,w),L.needsUpdate=!1}v.needsUpdate=!1,n.setRenderTarget(G,b,C)};function g(y,x){const w=e.update(m);h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(x,null,w,h,m,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(x,null,w,f,m,null)}function p(y,x,w){const G=y<<0|x<<1|w<<2;let b=a[G];return b===void 0&&(b=new pr({depthPacking:FM,morphTargets:y,skinning:x}),a[G]=b),b}function _(y,x,w){const G=y<<0|x<<1|w<<2;let b=c[G];return b===void 0&&(b=new mr({morphTargets:y,skinning:x}),c[G]=b),b}function M(y,x,w,G,b,C,N){let B=null,D=p,I=y.customDepthMaterial;if(G.isPointLight===!0&&(D=_,I=y.customDistanceMaterial),I===void 0){let L=!1;w.morphTargets===!0&&(L=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let z=!1;y.isSkinnedMesh===!0&&(w.skinning===!0?z=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));const k=y.isInstancedMesh===!0;B=D(L,z,k)}else B=I;if(n.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0){const L=B.uuid,z=w.uuid;let k=l[L];k===void 0&&(k={},l[L]=k);let W=k[z];W===void 0&&(W=B.clone(),k[z]=W),B=W}return B.visible=w.visible,B.wireframe=w.wireframe,N===Qs?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:u[w.side],B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,G.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(G.matrixWorld),B.nearDistance=b,B.farDistance=C),B}function S(y,x,w,G,b){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Qs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const B=e.update(y),D=y.material;if(Array.isArray(D)){const I=B.groups;for(let L=0,z=I.length;L<z;L++){const k=I[L],W=D[k.materialIndex];if(W&&W.visible){const ee=M(y,B,W,G,w.near,w.far,b);n.renderBufferDirect(w,null,B,ee,y,k)}}}else if(D.visible){const I=M(y,B,D,G,w.near,w.far,b);n.renderBufferDirect(w,null,B,I,y,null)}}const N=y.children;for(let B=0,D=N.length;B<D;B++)S(N[B],x,w,G,b)}}function Zw(n,e,t){const i=t.isWebGL2;function r(){let H=!1;const T=new pt;let E=null;const $=new pt(0,0,0,0);return{setMask:function(Y){E!==Y&&!H&&(n.colorMask(Y,Y,Y,Y),E=Y)},setLocked:function(Y){H=Y},setClear:function(Y,te,le,Me,he){he===!0&&(Y*=Me,te*=Me,le*=Me),T.set(Y,te,le,Me),$.equals(T)===!1&&(n.clearColor(Y,te,le,Me),$.copy(T))},reset:function(){H=!1,E=null,$.set(-1,0,0,0)}}}function s(){let H=!1,T=null,E=null,$=null;return{setTest:function(Y){Y?Q(2929):ge(2929)},setMask:function(Y){T!==Y&&!H&&(n.depthMask(Y),T=Y)},setFunc:function(Y){if(E!==Y){if(Y)switch(Y){case xy:n.depthFunc(512);break;case yy:n.depthFunc(519);break;case My:n.depthFunc(513);break;case Il:n.depthFunc(515);break;case by:n.depthFunc(514);break;case Sy:n.depthFunc(518);break;case Ey:n.depthFunc(516);break;case wy:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);E=Y}},setLocked:function(Y){H=Y},setClear:function(Y){$!==Y&&(n.clearDepth(Y),$=Y)},reset:function(){H=!1,T=null,E=null,$=null}}}function o(){let H=!1,T=null,E=null,$=null,Y=null,te=null,le=null,Me=null,he=null;return{setTest:function(Z){H||(Z?Q(2960):ge(2960))},setMask:function(Z){T!==Z&&!H&&(n.stencilMask(Z),T=Z)},setFunc:function(Z,Te,Ue){(E!==Z||$!==Te||Y!==Ue)&&(n.stencilFunc(Z,Te,Ue),E=Z,$=Te,Y=Ue)},setOp:function(Z,Te,Ue){(te!==Z||le!==Te||Me!==Ue)&&(n.stencilOp(Z,Te,Ue),te=Z,le=Te,Me=Ue)},setLocked:function(Z){H=Z},setClear:function(Z){he!==Z&&(n.clearStencil(Z),he=Z)},reset:function(){H=!1,T=null,E=null,$=null,Y=null,te=null,le=null,Me=null,he=null}}}const a=new r,c=new s,l=new o;let u={},h=null,f=null,d=null,m=null,v=null,g=null,p=null,_=null,M=null,S=!1,y=null,x=null,w=null,G=null,b=null;const C=n.getParameter(35661);let N=!1,B=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(D)[1]),N=B>=1):D.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),N=B>=2);let I=null,L={};const z=new pt,k=new pt;function W(H,T,E){const $=new Uint8Array(4),Y=n.createTexture();n.bindTexture(H,Y),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let te=0;te<E;te++)n.texImage2D(T+te,0,6408,1,1,0,6408,5121,$);return Y}const ee={};ee[3553]=W(3553,3553,1),ee[34067]=W(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Q(2929),c.setFunc(Il),F(!1),Re(Yu),Q(2884),q(no);function Q(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ge(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function ue(H){return h!==H?(n.useProgram(H),h=H,!0):!1}const K={[is]:32774,[cy]:32778,[ly]:32779};if(i)K[Qu]=32775,K[ef]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(K[Qu]=H.MIN_EXT,K[ef]=H.MAX_EXT)}const oe={[hy]:0,[uy]:1,[fy]:768,[mp]:770,[vy]:776,[gy]:774,[py]:772,[dy]:769,[gp]:771,[_y]:775,[my]:773};function q(H,T,E,$,Y,te,le,Me){if(H===no){f&&(ge(3042),f=!1);return}if(f||(Q(3042),f=!0),H!==ay){if(H!==d||Me!==S){if((m!==is||p!==is)&&(n.blendEquation(32774),m=is,p=is),Me)switch(H){case io:n.blendFuncSeparate(1,771,1,771);break;case Zu:n.blendFunc(1,1);break;case Ju:n.blendFuncSeparate(0,0,769,771);break;case Ku:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case io:n.blendFuncSeparate(770,771,1,771);break;case Zu:n.blendFunc(770,1);break;case Ju:n.blendFunc(0,769);break;case Ku:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,g=null,_=null,M=null,d=H,S=Me}return}Y=Y||T,te=te||E,le=le||$,(T!==m||Y!==p)&&(n.blendEquationSeparate(K[T],K[Y]),m=T,p=Y),(E!==v||$!==g||te!==_||le!==M)&&(n.blendFuncSeparate(oe[E],oe[$],oe[te],oe[le]),v=E,g=$,_=te,M=le),d=H,S=null}function we(H,T){H.side===oc?ge(2884):Q(2884);let E=H.side===Ut;T&&(E=!E),F(E),H.blending===io&&H.transparent===!1?q(no):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const $=H.stencilWrite;l.setTest($),$&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits)}function F(H){y!==H&&(H?n.frontFace(2304):n.frontFace(2305),y=H)}function Re(H){H!==ry?(Q(2884),H!==x&&(H===Yu?n.cullFace(1029):H===sy?n.cullFace(1028):n.cullFace(1032))):ge(2884),x=H}function be(H){H!==w&&(N&&n.lineWidth(H),w=H)}function ve(H,T,E){H?(Q(32823),(G!==T||b!==E)&&(n.polygonOffset(T,E),G=T,b=E)):ge(32823)}function Se(H){H?Q(3089):ge(3089)}function de(H){H===void 0&&(H=33984+C-1),I!==H&&(n.activeTexture(H),I=H)}function se(H,T){I===null&&de();let E=L[I];E===void 0&&(E={type:void 0,texture:void 0},L[I]=E),(E.type!==H||E.texture!==T)&&(n.bindTexture(H,T||ee[H]),E.type=H,E.texture=T)}function _e(){const H=L[I];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function De(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function R(H){z.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),z.copy(H))}function pe(H){k.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),k.copy(H))}function me(){u={},I=null,L={},h=null,f=null,d=null,m=null,v=null,g=null,p=null,_=null,M=null,S=!1,y=null,x=null,w=null,G=null,b=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Q,disable:ge,useProgram:ue,setBlending:q,setMaterial:we,setFlipSided:F,setCullFace:Re,setLineWidth:be,setPolygonOffset:ve,setScissorTest:Se,activeTexture:de,bindTexture:se,unbindTexture:_e,compressedTexImage2D:De,texImage2D:Ee,texImage3D:U,scissor:R,viewport:pe,reset:me}}function Jw(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=new WeakMap;let d,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,R){return m?new OffscreenCanvas(U,R):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function g(U,R,pe,me){let H=1;if((U.width>me||U.height>me)&&(H=me/Math.max(U.width,U.height)),H<1||R===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const T=R?$e.floorPowerOfTwo:Math.floor,E=T(H*U.width),$=T(H*U.height);d===void 0&&(d=v(E,$));const Y=pe?v(E,$):d;return Y.width=E,Y.height=$,Y.getContext("2d").drawImage(U,0,0,E,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+E+"x"+$+")."),Y}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function p(U){return $e.isPowerOfTwo(U.width)&&$e.isPowerOfTwo(U.height)}function _(U){return a?!1:U.wrapS!==ln||U.wrapT!==ln||U.minFilter!==jt&&U.minFilter!==Gt}function M(U,R){return U.generateMipmaps&&R&&U.minFilter!==jt&&U.minFilter!==Gt}function S(U,R,pe,me){n.generateMipmap(U);const H=i.get(R);H.__maxMipLevel=Math.log(Math.max(pe,me))*Math.LOG2E}function y(U,R,pe){if(a===!1)return R;if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=R;return R===6403&&(pe===5126&&(me=33326),pe===5131&&(me=33325),pe===5121&&(me=33321)),R===6407&&(pe===5126&&(me=34837),pe===5131&&(me=34843),pe===5121&&(me=32849)),R===6408&&(pe===5126&&(me=34836),pe===5131&&(me=34842),pe===5121&&(me=32856)),(me===33325||me===33326||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function x(U){return U===jt||U===rf||U===sf?9728:9729}function w(U){const R=U.target;R.removeEventListener("dispose",w),b(R),R.isVideoTexture&&f.delete(R),o.memory.textures--}function G(U){const R=U.target;R.removeEventListener("dispose",G),C(R),o.memory.textures--}function b(U){const R=i.get(U);R.__webglInit!==void 0&&(n.deleteTexture(R.__webglTexture),i.remove(U))}function C(U){const R=i.get(U),pe=i.get(U.texture);if(U){if(pe.__webglTexture!==void 0&&n.deleteTexture(pe.__webglTexture),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)n.deleteFramebuffer(R.__webglFramebuffer[me]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[me]);else n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer&&n.deleteRenderbuffer(R.__webglColorRenderbuffer),R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer);i.remove(U.texture),i.remove(U)}}let N=0;function B(){N=0}function D(){const U=N;return U>=c&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+c),N+=1,U}function I(U,R){const pe=i.get(U);if(U.isVideoTexture&&de(U),U.version>0&&pe.__version!==U.version){const me=U.image;if(me===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(pe,U,R);return}}t.activeTexture(33984+R),t.bindTexture(3553,pe.__webglTexture)}function L(U,R){const pe=i.get(U);if(U.version>0&&pe.__version!==U.version){ue(pe,U,R);return}t.activeTexture(33984+R),t.bindTexture(35866,pe.__webglTexture)}function z(U,R){const pe=i.get(U);if(U.version>0&&pe.__version!==U.version){ue(pe,U,R);return}t.activeTexture(33984+R),t.bindTexture(32879,pe.__webglTexture)}function k(U,R){const pe=i.get(U);if(U.version>0&&pe.__version!==U.version){K(pe,U,R);return}t.activeTexture(33984+R),t.bindTexture(34067,pe.__webglTexture)}const W={[Ul]:10497,[ln]:33071,[Nl]:33648},ee={[jt]:9728,[rf]:9984,[sf]:9986,[Gt]:9729,[Iy]:9985,[cc]:9987};function Q(U,R,pe){pe?(n.texParameteri(U,10242,W[R.wrapS]),n.texParameteri(U,10243,W[R.wrapT]),(U===32879||U===35866)&&n.texParameteri(U,32882,W[R.wrapR]),n.texParameteri(U,10240,ee[R.magFilter]),n.texParameteri(U,10241,ee[R.minFilter])):(n.texParameteri(U,10242,33071),n.texParameteri(U,10243,33071),(U===32879||U===35866)&&n.texParameteri(U,32882,33071),(R.wrapS!==ln||R.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(U,10240,x(R.magFilter)),n.texParameteri(U,10241,x(R.minFilter)),R.minFilter!==jt&&R.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const me=e.get("EXT_texture_filter_anisotropic");if(me){if(R.type===Pi&&e.get("OES_texture_float_linear")===null||R.type===ka&&(a||e.get("OES_texture_half_float_linear"))===null)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(n.texParameterf(U,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function ge(U,R){U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",w),U.__webglTexture=n.createTexture(),o.memory.textures++)}function ue(U,R,pe){let me=3553;R.isDataTexture2DArray&&(me=35866),R.isDataTexture3D&&(me=32879),ge(U,R),t.activeTexture(33984+pe),t.bindTexture(me,U.__webglTexture),n.pixelStorei(37440,R.flipY),n.pixelStorei(37441,R.premultiplyAlpha),n.pixelStorei(3317,R.unpackAlignment);const H=_(R)&&p(R.image)===!1,T=g(R.image,H,!1,u),E=p(T)||a,$=s.convert(R.format);let Y=s.convert(R.type),te=y(R.internalFormat,$,Y);Q(me,R,E);let le;const Me=R.mipmaps;if(R.isDepthTexture)te=6402,a?R.type===Pi?te=36012:R.type===Ba?te=33190:R.type===so?te=35056:te=33189:R.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===ms&&te===6402&&R.type!==Ha&&R.type!==Ba&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ha,Y=s.convert(R.type)),R.format===fo&&te===6402&&(te=34041,R.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=so,Y=s.convert(R.type))),t.texImage2D(3553,0,te,T.width,T.height,0,$,Y,null);else if(R.isDataTexture)if(Me.length>0&&E){for(let he=0,Z=Me.length;he<Z;he++)le=Me[he],t.texImage2D(3553,he,te,le.width,le.height,0,$,Y,le.data);R.generateMipmaps=!1,U.__maxMipLevel=Me.length-1}else t.texImage2D(3553,0,te,T.width,T.height,0,$,Y,T.data),U.__maxMipLevel=0;else if(R.isCompressedTexture){for(let he=0,Z=Me.length;he<Z;he++)le=Me[he],R.format!==Un&&R.format!==cr?$!==null?t.compressedTexImage2D(3553,he,te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,he,te,le.width,le.height,0,$,Y,le.data);U.__maxMipLevel=Me.length-1}else if(R.isDataTexture2DArray)t.texImage3D(35866,0,te,T.width,T.height,T.depth,0,$,Y,T.data),U.__maxMipLevel=0;else if(R.isDataTexture3D)t.texImage3D(32879,0,te,T.width,T.height,T.depth,0,$,Y,T.data),U.__maxMipLevel=0;else if(Me.length>0&&E){for(let he=0,Z=Me.length;he<Z;he++)le=Me[he],t.texImage2D(3553,he,te,$,Y,le);R.generateMipmaps=!1,U.__maxMipLevel=Me.length-1}else t.texImage2D(3553,0,te,$,Y,T),U.__maxMipLevel=0;M(R,E)&&S(me,R,T.width,T.height),U.__version=R.version,R.onUpdate&&R.onUpdate(R)}function K(U,R,pe){if(R.image.length!==6)return;ge(U,R),t.activeTexture(33984+pe),t.bindTexture(34067,U.__webglTexture),n.pixelStorei(37440,R.flipY);const me=R&&(R.isCompressedTexture||R.image[0].isCompressedTexture),H=R.image[0]&&R.image[0].isDataTexture,T=[];for(let he=0;he<6;he++)!me&&!H?T[he]=g(R.image[he],!1,!0,l):T[he]=H?R.image[he].image:R.image[he];const E=T[0],$=p(E)||a,Y=s.convert(R.format),te=s.convert(R.type),le=y(R.internalFormat,Y,te);Q(34067,R,$);let Me;if(me){for(let he=0;he<6;he++){Me=T[he].mipmaps;for(let Z=0;Z<Me.length;Z++){const Te=Me[Z];R.format!==Un&&R.format!==cr?Y!==null?t.compressedTexImage2D(34069+he,Z,le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+he,Z,le,Te.width,Te.height,0,Y,te,Te.data)}}U.__maxMipLevel=Me.length-1}else{Me=R.mipmaps;for(let he=0;he<6;he++)if(H){t.texImage2D(34069+he,0,le,T[he].width,T[he].height,0,Y,te,T[he].data);for(let Z=0;Z<Me.length;Z++){const Ue=Me[Z].image[he].image;t.texImage2D(34069+he,Z+1,le,Ue.width,Ue.height,0,Y,te,Ue.data)}}else{t.texImage2D(34069+he,0,le,Y,te,T[he]);for(let Z=0;Z<Me.length;Z++){const Te=Me[Z];t.texImage2D(34069+he,Z+1,le,Y,te,Te.image[he])}}U.__maxMipLevel=Me.length}M(R,$)&&S(34067,R,E.width,E.height),U.__version=R.version,R.onUpdate&&R.onUpdate(R)}function oe(U,R,pe,me){const H=s.convert(R.texture.format),T=s.convert(R.texture.type),E=y(R.texture.internalFormat,H,T);t.texImage2D(me,0,E,R.width,R.height,0,H,T,null),n.bindFramebuffer(36160,U),n.framebufferTexture2D(36160,pe,me,i.get(R.texture).__webglTexture,0),n.bindFramebuffer(36160,null)}function q(U,R,pe){if(n.bindRenderbuffer(36161,U),R.depthBuffer&&!R.stencilBuffer){let me=33189;if(pe){const H=R.depthTexture;H&&H.isDepthTexture&&(H.type===Pi?me=36012:H.type===Ba&&(me=33190));const T=Se(R);n.renderbufferStorageMultisample(36161,T,me,R.width,R.height)}else n.renderbufferStorage(36161,me,R.width,R.height);n.framebufferRenderbuffer(36160,36096,36161,U)}else if(R.depthBuffer&&R.stencilBuffer){if(pe){const me=Se(R);n.renderbufferStorageMultisample(36161,me,35056,R.width,R.height)}else n.renderbufferStorage(36161,34041,R.width,R.height);n.framebufferRenderbuffer(36160,33306,36161,U)}else{const me=s.convert(R.texture.format),H=s.convert(R.texture.type),T=y(R.texture.internalFormat,me,H);if(pe){const E=Se(R);n.renderbufferStorageMultisample(36161,E,T,R.width,R.height)}else n.renderbufferStorage(36161,T,R.width,R.height)}n.bindRenderbuffer(36161,null)}function we(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),I(R.depthTexture,0);const me=i.get(R.depthTexture).__webglTexture;if(R.depthTexture.format===ms)n.framebufferTexture2D(36160,36096,3553,me,0);else if(R.depthTexture.format===fo)n.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function F(U){const R=i.get(U),pe=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture){if(pe)throw new Error("target.depthTexture not supported in Cube render targets");we(R.__webglFramebuffer,U)}else if(pe){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(36160,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]=n.createRenderbuffer(),q(R.__webglDepthbuffer[me],U,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),q(R.__webglDepthbuffer,U,!1);n.bindFramebuffer(36160,null)}function Re(U){const R=i.get(U),pe=i.get(U.texture);U.addEventListener("dispose",G),pe.__webglTexture=n.createTexture(),o.memory.textures++;const me=U.isWebGLCubeRenderTarget===!0,H=U.isWebGLMultisampleRenderTarget===!0,T=p(U)||a;if(a&&U.texture.format===cr&&(U.texture.type===Pi||U.texture.type===ka)&&(U.texture.format=Un,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),me){R.__webglFramebuffer=[];for(let E=0;E<6;E++)R.__webglFramebuffer[E]=n.createFramebuffer()}else if(R.__webglFramebuffer=n.createFramebuffer(),H)if(a){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer);const E=s.convert(U.texture.format),$=s.convert(U.texture.type),Y=y(U.texture.internalFormat,E,$),te=Se(U);n.renderbufferStorageMultisample(36161,te,Y,U.width,U.height),n.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,R.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),U.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),q(R.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(me){t.bindTexture(34067,pe.__webglTexture),Q(34067,U.texture,T);for(let E=0;E<6;E++)oe(R.__webglFramebuffer[E],U,36064,34069+E);M(U.texture,T)&&S(34067,U.texture,U.width,U.height),t.bindTexture(34067,null)}else t.bindTexture(3553,pe.__webglTexture),Q(3553,U.texture,T),oe(R.__webglFramebuffer,U,36064,3553),M(U.texture,T)&&S(3553,U.texture,U.width,U.height),t.bindTexture(3553,null);U.depthBuffer&&F(U)}function be(U){const R=U.texture,pe=p(U)||a;if(M(R,pe)){const me=U.isWebGLCubeRenderTarget?34067:3553,H=i.get(R).__webglTexture;t.bindTexture(me,H),S(me,R,U.width,U.height),t.bindTexture(me,null)}}function ve(U){if(U.isWebGLMultisampleRenderTarget)if(a){const R=i.get(U);n.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,R.__webglFramebuffer);const pe=U.width,me=U.height;let H=16384;U.depthBuffer&&(H|=256),U.stencilBuffer&&(H|=1024),n.blitFramebuffer(0,0,pe,me,0,0,pe,me,H,9728),n.bindFramebuffer(36160,R.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Se(U){return a&&U.isWebGLMultisampleRenderTarget?Math.min(h,U.samples):0}function de(U){const R=o.render.frame;f.get(U)!==R&&(f.set(U,R),U.update())}let se=!1,_e=!1;function De(U,R){U&&U.isWebGLRenderTarget&&(se===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),se=!0),U=U.texture),I(U,R)}function Ee(U,R){U&&U.isWebGLCubeRenderTarget&&(_e===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),_e=!0),U=U.texture),k(U,R)}this.allocateTextureUnit=D,this.resetTextureUnits=B,this.setTexture2D=I,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=k,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ve,this.safeSetTexture2D=De,this.safeSetTextureCube=Ee}function Kw(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===wh)return 5121;if(s===Oy)return 32819;if(s===By)return 32820;if(s===zy)return 33635;if(s===Uy)return 5120;if(s===Ny)return 5122;if(s===Ha)return 5123;if(s===Fy)return 5124;if(s===Ba)return 5125;if(s===Pi)return 5126;if(s===ka)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Gy)return 6406;if(s===cr)return 6407;if(s===Un)return 6408;if(s===Hy)return 6409;if(s===ky)return 6410;if(s===ms)return 6402;if(s===fo)return 34041;if(s===Vy)return 6403;if(s===Wy)return 36244;if(s===Xy)return 33319;if(s===$y)return 33320;if(s===qy)return 36248;if(s===jy)return 36249;if(s===of||s===af||s===cf||s===lf)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===of)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===af)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cf)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hf||s===uf||s===ff||s===df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ff)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===pf||s===mf)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===pf)return o.COMPRESSED_RGB8_ETC2;if(s===mf)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Zy||s===Jy||s===Ky||s===Qy||s===eM||s===tM||s===nM||s===iM||s===rM||s===sM||s===oM||s===aM||s===cM||s===lM||s===uM||s===fM||s===dM||s===pM||s===mM||s===gM||s===_M||s===vM||s===xM||s===yM||s===MM||s===bM||s===SM||s===EM)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===hM)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===so)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Wl(n=[]){Nt.call(this),this.cameras=n}Wl.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Wl,isArrayCamera:!0});function hs(){We.call(this),this.type="Group"}hs.prototype=Object.assign(Object.create(We.prototype),{constructor:hs,isGroup:!0});function ao(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(ao.prototype,{constructor:ao,getHandSpace:function(){if(this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let n=0;n<=window.XRHand.LITTLE_PHALANX_TIP;n++){const e=new hs;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(c&&n.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(n.hand[l]){const u=e.getJointPose(n.hand[l],t),h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;const f=c.joints[window.XRHand.INDEX_PHALANX_TIP],d=c.joints[window.XRHand.THUMB_PHALANX_TIP],m=f.position.distanceTo(d.position),v=.02,g=.005;c.inputState.pinching&&m>v+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&m<=v-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}}else o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Up(n,e){const t=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new Nt;u.layers.enable(1),u.viewport=new pt;const h=new Nt;h.layers.enable(2),h.viewport=new pt;const f=[u,h],d=new Wl;d.layers.enable(1),d.layers.enable(2);let m=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let B=c[N];return B===void 0&&(B=new ao,c[N]=B),B.getTargetRaySpace()},this.getControllerGrip=function(N){let B=c[N];return B===void 0&&(B=new ao,c[N]=B),B.getGripSpace()},this.getHand=function(N){let B=c[N];return B===void 0&&(B=new ao,c[N]=B),B.getHandSpace()};function g(N){const B=l.get(N.inputSource);B&&B.dispatchEvent({type:N.type,data:N.inputSource})}function p(){l.forEach(function(N,B){N.disconnect(B)}),l.clear(),n.setFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),C.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}function _(N){s=N,C.setContext(i),C.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(N){r=N,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(N){if(i=N,i!==null){i.addEventListener("select",g),i.addEventListener("selectstart",g),i.addEventListener("selectend",g),i.addEventListener("squeeze",g),i.addEventListener("squeezestart",g),i.addEventListener("squeezeend",g),i.addEventListener("end",p);const B=e.getContextAttributes();B.xrCompatible!==!0&&e.makeXRCompatible();const D={antialias:B.antialias,alpha:B.alpha,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r},I=new XRWebGLLayer(i,e,D);i.updateRenderState({baseLayer:I}),i.requestReferenceSpace(o).then(_),i.addEventListener("inputsourceschange",M)}};function M(N){const B=i.inputSources;for(let D=0;D<c.length;D++)l.set(B[D],c[D]);for(let D=0;D<N.removed.length;D++){const I=N.removed[D],L=l.get(I);L&&(L.dispatchEvent({type:"disconnected",data:I}),l.delete(I))}for(let D=0;D<N.added.length;D++){const I=N.added[D],L=l.get(I);L&&L.dispatchEvent({type:"connected",data:I})}}const S=new O,y=new O;function x(N,B,D){S.setFromMatrixPosition(B.matrixWorld),y.setFromMatrixPosition(D.matrixWorld);const I=S.distanceTo(y),L=B.projectionMatrix.elements,z=D.projectionMatrix.elements,k=L[14]/(L[10]-1),W=L[14]/(L[10]+1),ee=(L[9]+1)/L[5],Q=(L[9]-1)/L[5],ge=(L[8]-1)/L[0],ue=(z[8]+1)/z[0],K=k*ge,oe=k*ue,q=I/(-ge+ue),we=q*-ge;B.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(q),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const F=k+q,Re=W+q,be=K-we,ve=oe+(I-we),Se=ee*W/Re*F,de=Q*W/Re*F;N.projectionMatrix.makePerspective(be,ve,Se,de,F,Re)}function w(N,B){B===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(B.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.getCamera=function(N){d.near=h.near=u.near=N.near,d.far=h.far=u.far=N.far,(m!==d.near||v!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),m=d.near,v=d.far);const B=N.parent,D=d.cameras;w(d,B);for(let L=0;L<D.length;L++)w(D[L],B);N.matrixWorld.copy(d.matrixWorld);const I=N.children;for(let L=0,z=I.length;L<z;L++)I[L].updateMatrixWorld(!0);return D.length===2?x(d,u,h):d.projectionMatrix.copy(u.projectionMatrix),d};let G=null;function b(N,B){if(a=B.getViewerPose(s),a!==null){const I=a.views,L=i.renderState.baseLayer;n.setFramebuffer(L.framebuffer);let z=!1;I.length!==d.cameras.length&&(d.cameras.length=0,z=!0);for(let k=0;k<I.length;k++){const W=I[k],ee=L.getViewport(W),Q=f[k];Q.matrix.fromArray(W.transform.matrix),Q.projectionMatrix.fromArray(W.projectionMatrix),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),k===0&&d.matrix.copy(Q.matrix),z===!0&&d.cameras.push(Q)}}const D=i.inputSources;for(let I=0;I<c.length;I++){const L=c[I],z=D[I];L.update(z,B,s)}G&&G(N,B)}const C=new wp;C.setAnimationLoop(b),this.setAnimationLoop=function(N){G=N},this.dispose=function(){}}Object.assign(Up.prototype,Zn.prototype);function Qw(n){function e(p,_){p.fogColor.value.copy(_.color),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function t(p,_,M,S){_.isMeshBasicMaterial?i(p,_):_.isMeshLambertMaterial?(i(p,_),c(p,_)):_.isMeshToonMaterial?(i(p,_),u(p,_)):_.isMeshPhongMaterial?(i(p,_),l(p,_)):_.isMeshStandardMaterial?(i(p,_),_.isMeshPhysicalMaterial?f(p,_):h(p,_)):_.isMeshMatcapMaterial?(i(p,_),d(p,_)):_.isMeshDepthMaterial?(i(p,_),m(p,_)):_.isMeshDistanceMaterial?(i(p,_),v(p,_)):_.isMeshNormalMaterial?(i(p,_),g(p,_)):_.isLineBasicMaterial?(r(p,_),_.isLineDashedMaterial&&s(p,_)):_.isPointsMaterial?o(p,_,M,S):_.isSpriteMaterial?a(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap),_.specularMap&&(p.specularMap.value=_.specularMap);const M=n.get(_).envMap;if(M){p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,p.reflectivity.value=_.reflectivity,p.refractionRatio.value=_.refractionRatio;const x=n.get(M).__maxMipLevel;x!==void 0&&(p.maxMipLevel.value=x)}_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity);let S;_.map?S=_.map:_.specularMap?S=_.specularMap:_.displacementMap?S=_.displacementMap:_.normalMap?S=_.normalMap:_.bumpMap?S=_.bumpMap:_.roughnessMap?S=_.roughnessMap:_.metalnessMap?S=_.metalnessMap:_.alphaMap?S=_.alphaMap:_.emissiveMap?S=_.emissiveMap:_.clearcoatMap?S=_.clearcoatMap:_.clearcoatNormalMap?S=_.clearcoatNormalMap:_.clearcoatRoughnessMap&&(S=_.clearcoatRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;_.aoMap?y=_.aoMap:_.lightMap&&(y=_.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity}function s(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function o(p,_,M,S){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*M,p.scale.value=S*.5,_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap);let y;_.map?y=_.map:_.alphaMap&&(y=_.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap);let M;_.map?M=_.map:_.alphaMap&&(M=_.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,_){_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap)}function l(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===Ut&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===Ut&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function u(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===Ut&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===Ut&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function h(p,_){p.roughness.value=_.roughness,p.metalness.value=_.metalness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===Ut&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===Ut&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),n.get(_).envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_){h(p,_),p.reflectivity.value=_.reflectivity,p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.sheen&&p.sheen.value.copy(_.sheen),_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),p.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Ut&&p.clearcoatNormalScale.value.negate()),p.transmission.value=_.transmission,_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap)}function d(p,_){_.matcap&&(p.matcap.value=_.matcap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===Ut&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===Ut&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function m(p,_){_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function v(p,_){_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),p.referencePosition.value.copy(_.referencePosition),p.nearDistance.value=_.nearDistance,p.farDistance.value=_.farDistance}function g(p,_){_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===Ut&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===Ut&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function eT(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function uc(n){n=n||{};const e=n.canvas!==void 0?n.canvas:eT(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Po,this.physicallyCorrectLights=!1,this.toneMapping=ro,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const m=this;let v=!1,g=null,p=0,_=0,M=null,S=null,y=-1,x=null;const w=new pt,G=new pt;let b=null,C=e.width,N=e.height,B=1,D=null,I=null;const L=new pt(0,0,C,N),z=new pt(0,0,C,N);let k=!1;const W=new hc;let ee=!1,Q=!1;const ge=new et,ue=new O,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?B:1}let q=t;function we(P,ie){for(let ne=0;ne<P.length;ne++){const fe=P[ne],Le=e.getContext(fe,ie);if(Le!==null)return Le}return null}try{const P={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Ue,!1),q===null){const ie=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&ie.shift(),q=we(ie,P),q===null)throw we(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let F,Re,be,ve,Se,de,se,_e,De,Ee,U,R,pe,me,H,T,E,$,Y,te,le;function Me(){F=new PE(q),Re=new RE(q,F,n),Re.isWebGL2===!1&&(F.get("WEBGL_depth_texture"),F.get("OES_texture_float"),F.get("OES_texture_half_float"),F.get("OES_texture_half_float_linear"),F.get("OES_standard_derivatives"),F.get("OES_element_index_uint"),F.get("OES_vertex_array_object"),F.get("ANGLE_instanced_arrays")),F.get("OES_texture_float_linear"),te=new Kw(q,F,Re),be=new Zw(q,F,Re),be.scissor(G.copy(z).multiplyScalar(B).floor()),be.viewport(w.copy(L).multiplyScalar(B).floor()),ve=new UE,Se=new Bw,de=new Jw(q,F,be,Se,Re,te,ve),se=new CE(m),_e=new nb(q,Re),le=new TE(q,F,_e,Re),De=new DE(q,_e,ve,le),Ee=new BE(q,De,_e,ve),E=new OE(q),H=new LE(Se),U=new Ow(m,se,F,Re,le,H),R=new Qw(Se),pe=new Hw(Se),me=new qw(F,Re),T=new wE(m,se,be,Ee,a),$=new AE(q,F,ve,Re),Y=new IE(q,F,ve,Re),ve.programs=U.programs,m.capabilities=Re,m.extensions=F,m.properties=Se,m.renderLists=pe,m.state=be,m.info=ve}Me();const he=new Up(m,q);this.xr=he;const Z=new Ip(m,Ee,Re.maxTextureSize);this.shadowMap=Z,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=F.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=F.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(C,N,!1))},this.getSize=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),P=new xe),P.set(C,N)},this.setSize=function(P,ie,ne){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,N=ie,e.width=Math.floor(P*B),e.height=Math.floor(ie*B),ne!==!1&&(e.style.width=P+"px",e.style.height=ie+"px"),this.setViewport(0,0,P,ie)},this.getDrawingBufferSize=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),P=new xe),P.set(C*B,N*B).floor()},this.setDrawingBufferSize=function(P,ie,ne){C=P,N=ie,B=ne,e.width=Math.floor(P*ne),e.height=Math.floor(ie*ne),this.setViewport(0,0,P,ie)},this.getCurrentViewport=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),P=new pt),P.copy(w)},this.getViewport=function(P){return P.copy(L)},this.setViewport=function(P,ie,ne,fe){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,ie,ne,fe),be.viewport(w.copy(L).multiplyScalar(B).floor())},this.getScissor=function(P){return P.copy(z)},this.setScissor=function(P,ie,ne,fe){P.isVector4?z.set(P.x,P.y,P.z,P.w):z.set(P,ie,ne,fe),be.scissor(G.copy(z).multiplyScalar(B).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(P){be.setScissorTest(k=P)},this.setOpaqueSort=function(P){D=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),P=new Ge),P.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor.apply(T,arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha.apply(T,arguments)},this.clear=function(P,ie,ne){let fe=0;(P===void 0||P)&&(fe|=16384),(ie===void 0||ie)&&(fe|=256),(ne===void 0||ne)&&(fe|=1024),q.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ue,!1),pe.dispose(),me.dispose(),Se.dispose(),se.dispose(),Ee.dispose(),le.dispose(),he.dispose(),V.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1,Me()}function ke(P){const ie=P.target;ie.removeEventListener("dispose",ke),Fe(ie)}function Fe(P){Be(P),Se.remove(P)}function Be(P){const ie=Se.get(P).program;ie!==void 0&&U.releaseProgram(ie)}function st(P,ie){P.render(function(ne){m.renderBufferImmediate(ne,ie)})}this.renderBufferImmediate=function(P,ie){le.initAttributes();const ne=Se.get(P);P.hasPositions&&!ne.position&&(ne.position=q.createBuffer()),P.hasNormals&&!ne.normal&&(ne.normal=q.createBuffer()),P.hasUvs&&!ne.uv&&(ne.uv=q.createBuffer()),P.hasColors&&!ne.color&&(ne.color=q.createBuffer());const fe=ie.getAttributes();P.hasPositions&&(q.bindBuffer(34962,ne.position),q.bufferData(34962,P.positionArray,35048),le.enableAttribute(fe.position),q.vertexAttribPointer(fe.position,3,5126,!1,0,0)),P.hasNormals&&(q.bindBuffer(34962,ne.normal),q.bufferData(34962,P.normalArray,35048),le.enableAttribute(fe.normal),q.vertexAttribPointer(fe.normal,3,5126,!1,0,0)),P.hasUvs&&(q.bindBuffer(34962,ne.uv),q.bufferData(34962,P.uvArray,35048),le.enableAttribute(fe.uv),q.vertexAttribPointer(fe.uv,2,5126,!1,0,0)),P.hasColors&&(q.bindBuffer(34962,ne.color),q.bufferData(34962,P.colorArray,35048),le.enableAttribute(fe.color),q.vertexAttribPointer(fe.color,3,5126,!1,0,0)),le.disableUnusedAttributes(),q.drawArrays(4,0,P.count),P.count=0},this.renderBufferDirect=function(P,ie,ne,fe,Le,tt){ie===null&&(ie=K);const Je=Le.isMesh&&Le.matrixWorld.determinant()<0,it=ht(P,ie,fe,Le);be.setMaterial(fe,Je);let Ke=ne.index;const A=ne.attributes.position;if(Ke===null){if(A===void 0||A.count===0)return}else if(Ke.count===0)return;let j=1;fe.wireframe===!0&&(Ke=De.getWireframeAttribute(ne),j=2),(fe.morphTargets||fe.morphNormals)&&E.update(Le,ne,fe,it),le.setup(Le,fe,it,ne,Ke);let J,X=$;Ke!==null&&(J=_e.get(Ke),X=Y,X.setIndex(J));const ae=Ke!==null?Ke.count:A.count,Ae=ne.drawRange.start*j,ze=ne.drawRange.count*j,Oe=tt!==null?tt.start*j:0,qe=tt!==null?tt.count*j:1/0,Ve=Math.max(Ae,Oe),je=Math.min(ae,Ae+ze,Oe+qe)-1,Ye=Math.max(0,je-Ve+1);if(Ye!==0){if(Le.isMesh)fe.wireframe===!0?(be.setLineWidth(fe.wireframeLinewidth*oe()),X.setMode(1)):X.setMode(4);else if(Le.isLine){let ot=fe.linewidth;ot===void 0&&(ot=1),be.setLineWidth(ot*oe()),Le.isLineSegments?X.setMode(1):Le.isLineLoop?X.setMode(2):X.setMode(3)}else Le.isPoints?X.setMode(0):Le.isSprite&&X.setMode(4);if(Le.isInstancedMesh)X.renderInstances(Ve,Ye,Le.count);else if(ne.isInstancedBufferGeometry){const ot=Math.min(ne.instanceCount,ne._maxInstanceCount);X.renderInstances(Ve,Ye,ot)}else X.render(Ve,Ye)}},this.compile=function(P,ie){f=me.get(P),f.init(),P.traverseVisible(function(fe){fe.isLight&&fe.layers.test(ie.layers)&&(f.pushLight(fe),fe.castShadow&&f.pushShadow(fe))}),f.setupLights();const ne=new WeakMap;P.traverse(function(fe){const Le=fe.material;if(Le)if(Array.isArray(Le))for(let tt=0;tt<Le.length;tt++){const Je=Le[tt];ne.has(Je)===!1&&(Ne(Je,P,fe),ne.set(Je))}else ne.has(Le)===!1&&(Ne(Le,P,fe),ne.set(Le))})};let lt=null;function bt(P){he.isPresenting||lt&&lt(P)}const V=new wp;V.setAnimationLoop(bt),typeof window<"u"&&V.setContext(window),this.setAnimationLoop=function(P){lt=P,he.setAnimationLoop(P),P===null?V.stop():V.start()},this.render=function(P,ie){let ne,fe;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),ne=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),fe=arguments[3]),ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;le.resetDefaultState(),y=-1,x=null,P.autoUpdate===!0&&P.updateMatrixWorld(),ie.parent===null&&ie.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(ie=he.getCamera(ie)),P.isScene===!0&&P.onBeforeRender(m,P,ie,ne||M),f=me.get(P,d.length),f.init(),d.push(f),ge.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),W.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,ee=H.init(this.clippingPlanes,Q,ie),h=pe.get(P,ie),h.init(),ce(P,ie,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(D,I),ee===!0&&H.beginShadows();const Le=f.state.shadowsArray;Z.render(Le,P,ie),f.setupLights(),f.setupLightsView(ie),ee===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne!==void 0&&this.setRenderTarget(ne),T.render(h,P,ie,fe);const tt=h.opaque,Je=h.transparent;tt.length>0&&ye(tt,P,ie),Je.length>0&&ye(Je,P,ie),P.isScene===!0&&P.onAfterRender(m,P,ie),M!==null&&(de.updateRenderTargetMipmap(M),de.updateMultisampleRenderTarget(M)),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),d.pop(),d.length>0?f=d[d.length-1]:f=null,h=null};function ce(P,ie,ne,fe){if(P.visible===!1)return;if(P.layers.test(ie.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ie);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||W.intersectsSprite(P)){fe&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Je=Ee.update(P),it=P.material;it.visible&&h.push(P,Je,it,ne,ue.z,null)}}else if(P.isImmediateRenderObject)fe&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge),h.push(P,null,P.material,ne,ue.z,null);else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==ve.render.frame&&(P.skeleton.update(),P.skeleton.frame=ve.render.frame),!P.frustumCulled||W.intersectsObject(P))){fe&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Je=Ee.update(P),it=P.material;if(Array.isArray(it)){const Ke=Je.groups;for(let A=0,j=Ke.length;A<j;A++){const J=Ke[A],X=it[J.materialIndex];X&&X.visible&&h.push(P,Je,X,ne,ue.z,J)}}else it.visible&&h.push(P,Je,it,ne,ue.z,null)}}const tt=P.children;for(let Je=0,it=tt.length;Je<it;Je++)ce(tt[Je],ie,ne,fe)}function ye(P,ie,ne){const fe=ie.isScene===!0?ie.overrideMaterial:null;for(let Le=0,tt=P.length;Le<tt;Le++){const Je=P[Le],it=Je.object,Ke=Je.geometry,A=fe===null?Je.material:fe,j=Je.group;if(ne.isArrayCamera){const J=ne.cameras;for(let X=0,ae=J.length;X<ae;X++){const Ae=J[X];it.layers.test(Ae.layers)&&(be.viewport(w.copy(Ae.viewport)),f.setupLightsView(Ae),Ie(it,ie,Ae,Ke,A,j))}}else Ie(it,ie,ne,Ke,A,j)}}function Ie(P,ie,ne,fe,Le,tt){if(P.onBeforeRender(m,ie,ne,fe,Le,tt),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),P.isImmediateRenderObject){const Je=ht(ne,ie,Le,P);be.setMaterial(Le),le.reset(),st(P,Je)}else m.renderBufferDirect(ne,ie,fe,Le,P,tt);P.onAfterRender(m,ie,ne,fe,Le,tt)}function Ne(P,ie,ne){ie.isScene!==!0&&(ie=K);const fe=Se.get(P),Le=f.state.lights,tt=f.state.shadowsArray,Je=Le.state.version,it=U.getParameters(P,Le.state,tt,ie,ne),Ke=U.getProgramCacheKey(it);let A=fe.program,j=!0;if(A===void 0)P.addEventListener("dispose",ke);else if(A.cacheKey!==Ke)Be(P);else if(fe.lightsStateVersion!==Je)j=!1;else if(it.shaderID!==void 0){const Ae=P.isMeshStandardMaterial?ie.environment:null;fe.envMap=se.get(P.envMap||Ae);return}else j=!1;j&&(it.uniforms=U.getUniforms(P),P.onBeforeCompile(it,m),A=U.acquireProgram(it,Ke),fe.program=A,fe.uniforms=it.uniforms,fe.outputEncoding=it.outputEncoding);const J=fe.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(fe.numClippingPlanes=H.numPlanes,fe.numIntersection=H.numIntersection,J.clippingPlanes=H.uniform),fe.environment=P.isMeshStandardMaterial?ie.environment:null,fe.fog=ie.fog,fe.envMap=se.get(P.envMap||fe.environment),fe.needsLights=Lt(P),fe.lightsStateVersion=Je,fe.needsLights&&(J.ambientLightColor.value=Le.state.ambient,J.lightProbe.value=Le.state.probe,J.directionalLights.value=Le.state.directional,J.directionalLightShadows.value=Le.state.directionalShadow,J.spotLights.value=Le.state.spot,J.spotLightShadows.value=Le.state.spotShadow,J.rectAreaLights.value=Le.state.rectArea,J.ltc_1.value=Le.state.rectAreaLTC1,J.ltc_2.value=Le.state.rectAreaLTC2,J.pointLights.value=Le.state.point,J.pointLightShadows.value=Le.state.pointShadow,J.hemisphereLights.value=Le.state.hemi,J.directionalShadowMap.value=Le.state.directionalShadowMap,J.directionalShadowMatrix.value=Le.state.directionalShadowMatrix,J.spotShadowMap.value=Le.state.spotShadowMap,J.spotShadowMatrix.value=Le.state.spotShadowMatrix,J.pointShadowMap.value=Le.state.pointShadowMap,J.pointShadowMatrix.value=Le.state.pointShadowMatrix);const X=fe.program.getUniforms(),ae=Ui.seqWithValue(X.seq,J);fe.uniformsList=ae}function ht(P,ie,ne,fe){ie.isScene!==!0&&(ie=K),de.resetTextureUnits();const Le=ie.fog,tt=ne.isMeshStandardMaterial?ie.environment:null,Je=M===null?m.outputEncoding:M.texture.encoding,it=se.get(ne.envMap||tt),Ke=Se.get(ne),A=f.state.lights;if(ee===!0&&(Q===!0||P!==x)){const Oe=P===x&&ne.id===y;H.setState(ne,P,Oe)}ne.version===Ke.__version?(ne.fog&&Ke.fog!==Le||Ke.environment!==tt||Ke.needsLights&&Ke.lightsStateVersion!==A.state.version||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==H.numPlanes||Ke.numIntersection!==H.numIntersection)||Ke.outputEncoding!==Je||Ke.envMap!==it)&&Ne(ne,ie,fe):(Ne(ne,ie,fe),Ke.__version=ne.version);let j=!1,J=!1,X=!1;const ae=Ke.program,Ae=ae.getUniforms(),ze=Ke.uniforms;if(be.useProgram(ae.program)&&(j=!0,J=!0,X=!0),ne.id!==y&&(y=ne.id,J=!0),j||x!==P){if(Ae.setValue(q,"projectionMatrix",P.projectionMatrix),Re.logarithmicDepthBuffer&&Ae.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),x!==P&&(x=P,J=!0,X=!0),ne.isShaderMaterial||ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshStandardMaterial||ne.envMap){const Oe=Ae.map.cameraPosition;Oe!==void 0&&Oe.setValue(q,ue.setFromMatrixPosition(P.matrixWorld))}(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ae.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial||ne.isShadowMaterial||ne.skinning)&&Ae.setValue(q,"viewMatrix",P.matrixWorldInverse)}if(ne.skinning){Ae.setOptional(q,fe,"bindMatrix"),Ae.setOptional(q,fe,"bindMatrixInverse");const Oe=fe.skeleton;if(Oe){const qe=Oe.bones;if(Re.floatVertexTextures){if(Oe.boneTexture===null){let Ve=Math.sqrt(qe.length*4);Ve=$e.ceilPowerOfTwo(Ve),Ve=Math.max(Ve,4);const je=new Float32Array(Ve*Ve*4);je.set(Oe.boneMatrices);const Ye=new Ss(je,Ve,Ve,Un,Pi);Oe.boneMatrices=je,Oe.boneTexture=Ye,Oe.boneTextureSize=Ve}Ae.setValue(q,"boneTexture",Oe.boneTexture,de),Ae.setValue(q,"boneTextureSize",Oe.boneTextureSize)}else Ae.setOptional(q,Oe,"boneMatrices")}}return(J||Ke.receiveShadow!==fe.receiveShadow)&&(Ke.receiveShadow=fe.receiveShadow,Ae.setValue(q,"receiveShadow",fe.receiveShadow)),J&&(Ae.setValue(q,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&ft(ze,X),Le&&ne.fog&&R.refreshFogUniforms(ze,Le),R.refreshMaterialUniforms(ze,ne,B,N),Ui.upload(q,Ke.uniformsList,ze,de)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ui.upload(q,Ke.uniformsList,ze,de),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ae.setValue(q,"center",fe.center),Ae.setValue(q,"modelViewMatrix",fe.modelViewMatrix),Ae.setValue(q,"normalMatrix",fe.normalMatrix),Ae.setValue(q,"modelMatrix",fe.matrixWorld),ae}function ft(P,ie){P.ambientLightColor.needsUpdate=ie,P.lightProbe.needsUpdate=ie,P.directionalLights.needsUpdate=ie,P.directionalLightShadows.needsUpdate=ie,P.pointLights.needsUpdate=ie,P.pointLightShadows.needsUpdate=ie,P.spotLights.needsUpdate=ie,P.spotLightShadows.needsUpdate=ie,P.rectAreaLights.needsUpdate=ie,P.hemisphereLights.needsUpdate=ie}function Lt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.setFramebuffer=function(P){g!==P&&M===null&&q.bindFramebuffer(36160,P),g=P},this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return _},this.getRenderList=function(){return h},this.setRenderList=function(P){h=P},this.getRenderTarget=function(){return M},this.setRenderTarget=function(P,ie=0,ne=0){M=P,p=ie,_=ne,P&&Se.get(P).__webglFramebuffer===void 0&&de.setupRenderTarget(P);let fe=g,Le=!1;if(P){const tt=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(fe=tt[ie],Le=!0):P.isWebGLMultisampleRenderTarget?fe=Se.get(P).__webglMultisampledFramebuffer:fe=tt,w.copy(P.viewport),G.copy(P.scissor),b=P.scissorTest}else w.copy(L).multiplyScalar(B).floor(),G.copy(z).multiplyScalar(B).floor(),b=k;if(S!==fe&&(q.bindFramebuffer(36160,fe),S=fe),be.viewport(w),be.scissor(G),be.setScissorTest(b),Le){const tt=Se.get(P.texture);q.framebufferTexture2D(36160,36064,34069+ie,tt.__webglTexture,ne)}},this.readRenderTargetPixels=function(P,ie,ne,fe,Le,tt,Je){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(it=it[Je]),it){let Ke=!1;it!==S&&(q.bindFramebuffer(36160,it),Ke=!0);try{const A=P.texture,j=A.format,J=A.type;if(j!==Un&&te.convert(j)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(J!==wh&&te.convert(J)!==q.getParameter(35738)&&!(J===Pi&&(Re.isWebGL2||F.get("OES_texture_float")||F.get("WEBGL_color_buffer_float")))&&!(J===ka&&(Re.isWebGL2?F.get("EXT_color_buffer_float"):F.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q.checkFramebufferStatus(36160)===36053?ie>=0&&ie<=P.width-fe&&ne>=0&&ne<=P.height-Le&&q.readPixels(ie,ne,fe,Le,te.convert(j),te.convert(J),tt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ke&&q.bindFramebuffer(36160,S)}}},this.copyFramebufferToTexture=function(P,ie,ne=0){const fe=Math.pow(2,-ne),Le=Math.floor(ie.image.width*fe),tt=Math.floor(ie.image.height*fe),Je=te.convert(ie.format);de.setTexture2D(ie,0),q.copyTexImage2D(3553,ne,Je,P.x,P.y,Le,tt,0),be.unbindTexture()},this.copyTextureToTexture=function(P,ie,ne,fe=0){const Le=ie.image.width,tt=ie.image.height,Je=te.convert(ne.format),it=te.convert(ne.type);de.setTexture2D(ne,0),q.pixelStorei(37440,ne.flipY),q.pixelStorei(37441,ne.premultiplyAlpha),q.pixelStorei(3317,ne.unpackAlignment),ie.isDataTexture?q.texSubImage2D(3553,fe,P.x,P.y,Le,tt,Je,it,ie.image.data):ie.isCompressedTexture?q.compressedTexSubImage2D(3553,fe,P.x,P.y,ie.mipmaps[0].width,ie.mipmaps[0].height,Je,ie.mipmaps[0].data):q.texSubImage2D(3553,fe,P.x,P.y,Je,it,ie.image),fe===0&&ne.generateMipmaps&&q.generateMipmap(3553),be.unbindTexture()},this.initTexture=function(P){de.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){be.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function kf(n){uc.call(this,n)}kf.prototype=Object.assign(Object.create(uc.prototype),{constructor:kf,isWebGL1Renderer:!0});class tT extends We{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}function gn(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=lc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$e.generateUUID()}Object.defineProperty(gn.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(gn.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new gn(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Ji=new O;function gr(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(gr.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(gr.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Ji.x=this.getX(e),Ji.y=this.getY(e),Ji.z=this.getZ(e),Ji.applyMatrix4(n),this.setXYZ(e,Ji.x,Ji.y,Ji.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new gr(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function _r(n){Xe.call(this),this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(n)}_r.prototype=Object.create(Xe.prototype);_r.prototype.constructor=_r;_r.prototype.isSpriteMaterial=!0;_r.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.rotation=n.rotation,this.sizeAttenuation=n.sizeAttenuation,this};let Zr;const js=new O,Jr=new O,Kr=new O,Qr=new xe,Ys=new xe,Np=new et,va=new O,Zs=new O,xa=new O,Vf=new xe,gl=new xe,Wf=new xe;function Xf(n){if(We.call(this),this.type="Sprite",Zr===void 0){Zr=new mt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new gn(e,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new gr(t,3,0,!1)),Zr.setAttribute("uv",new gr(t,2,3,!1))}this.geometry=Zr,this.material=n!==void 0?n:new _r,this.center=new xe(.5,.5)}Xf.prototype=Object.assign(Object.create(We.prototype),{constructor:Xf,isSprite:!0,raycast:function(n,e){n.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Np.copy(n.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(n.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),n.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Kr.z);const t=this.material.rotation;let i,r;t!==0&&(r=Math.cos(t),i=Math.sin(t));const s=this.center;ya(va.set(-.5,-.5,0),Kr,s,Jr,i,r),ya(Zs.set(.5,-.5,0),Kr,s,Jr,i,r),ya(xa.set(.5,.5,0),Kr,s,Jr,i,r),Vf.set(0,0),gl.set(1,0),Wf.set(1,1);let o=n.ray.intersectTriangle(va,Zs,xa,!1,js);if(o===null&&(ya(Zs.set(-.5,.5,0),Kr,s,Jr,i,r),gl.set(0,1),o=n.ray.intersectTriangle(va,xa,Zs,!1,js),o===null))return;const a=n.ray.origin.distanceTo(js);a<n.near||a>n.far||e.push({distance:a,point:js.clone(),uv:zt.getUV(js,va,Zs,xa,Vf,gl,Wf,new xe),face:null,object:this})},copy:function(n){return We.prototype.copy.call(this,n),n.center!==void 0&&this.center.copy(n.center),this.material=n.material,this}});function ya(n,e,t,i,r,s){Qr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ys.x=s*Qr.x-r*Qr.y,Ys.y=r*Qr.x+s*Qr.y):Ys.copy(Qr),n.copy(e),n.x+=Ys.x,n.y+=Ys.y,n.applyMatrix4(Np)}const Ma=new O,$f=new O;function Xl(){We.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Xl.prototype=Object.assign(Object.create(We.prototype),{constructor:Xl,isLOD:!0,copy:function(n){We.prototype.copy.call(this,n,!1);const e=n.levels;for(let t=0,i=e.length;t<i;t++){const r=e[t];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=n.autoUpdate,this},addLevel:function(n,e=0){e=Math.abs(e);const t=this.levels;let i;for(i=0;i<t.length&&!(e<t[i].distance);i++);return t.splice(i,0,{distance:e,object:n}),this.add(n),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(n){const e=this.levels;if(e.length>0){let t,i;for(t=1,i=e.length;t<i&&!(n<e[t].distance);t++);return e[t-1].object}return null},raycast:function(n,e){if(this.levels.length>0){Ma.setFromMatrixPosition(this.matrixWorld);const i=n.ray.origin.distanceTo(Ma);this.getObjectForDistance(i).raycast(n,e)}},update:function(n){const e=this.levels;if(e.length>1){Ma.setFromMatrixPosition(n.matrixWorld),$f.setFromMatrixPosition(this.matrixWorld);const t=Ma.distanceTo($f)/n.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&t>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(n){const e=We.prototype.toJSON.call(this,n);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const t=this.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});const qf=new O,jf=new pt,Yf=new pt,nT=new O,Zf=new et;function $l(n,e){n&&n.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),kt.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new et,this.bindMatrixInverse=new et}$l.prototype=Object.assign(Object.create(kt.prototype),{constructor:$l,isSkinnedMesh:!0,copy:function(n){return kt.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const n=new pt,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);const r=1/n.manhattanLength();r!==1/0?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){kt.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){const t=this.skeleton,i=this.geometry;jf.fromBufferAttribute(i.attributes.skinIndex,n),Yf.fromBufferAttribute(i.attributes.skinWeight,n),qf.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Yf.getComponent(r);if(s!==0){const o=jf.getComponent(r);Zf.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(nT.copy(qf).applyMatrix4(Zf),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function ql(){We.call(this),this.type="Bone"}ql.prototype=Object.assign(Object.create(We.prototype),{constructor:ql,isBone:!0});const Jf=new et,iT=new et;function jl(n=[],e=[]){this.uuid=$e.generateUUID(),this.bones=n.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(jl.prototype,{init:function(){const n=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(n.length*16),e.length===0)this.calculateInverses();else if(n.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,i=this.bones.length;t<i;t++)this.boneInverses.push(new et)}},calculateInverses:function(){this.boneInverses.length=0;for(let n=0,e=this.bones.length;n<e;n++){const t=new et;this.bones[n]&&t.copy(this.bones[n].matrixWorld).invert(),this.boneInverses.push(t)}},pose:function(){for(let n=0,e=this.bones.length;n<e;n++){const t=this.bones[n];t&&t.matrixWorld.copy(this.boneInverses[n]).invert()}for(let n=0,e=this.bones.length;n<e;n++){const t=this.bones[n];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}},update:function(){const n=this.bones,e=this.boneInverses,t=this.boneMatrices,i=this.boneTexture;for(let r=0,s=n.length;r<s;r++){const o=n[r]?n[r].matrixWorld:iT;Jf.multiplyMatrices(o,e[r]),Jf.toArray(t,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new jl(this.bones,this.boneInverses)},getBoneByName:function(n){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];if(i.name===n)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(n,e){this.uuid=n.uuid;for(let t=0,i=n.bones.length;t<i;t++){const r=n.bones[t];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new ql),this.bones.push(s),this.boneInverses.push(new et().fromArray(n.boneInverses[t]))}return this.init(),this},toJSON:function(){const n={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};n.uuid=this.uuid;const e=this.bones,t=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];n.bones.push(s.uuid);const o=t[i];n.boneInverses.push(o.toArray())}return n}});const Kf=new et,Qf=new et,ba=[],Js=new kt;function ed(n,e,t){kt.call(this,n,e),this.instanceMatrix=new Ze(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}ed.prototype=Object.assign(Object.create(kt.prototype),{constructor:ed,isInstancedMesh:!0,copy:function(n){return kt.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){const t=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Kf),Qf.multiplyMatrices(t,Kf),Js.matrixWorld=Qf,Js.raycast(n,ba);for(let s=0,o=ba.length;s<o;s++){const a=ba[s];a.instanceId=r,a.object=this,e.push(a)}ba.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new Ze(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function xn(n){Xe.call(this),this.type="LineBasicMaterial",this.color=new Ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(n)}xn.prototype=Object.create(Xe.prototype);xn.prototype.constructor=xn;xn.prototype.isLineBasicMaterial=!0;xn.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.linewidth=n.linewidth,this.linecap=n.linecap,this.linejoin=n.linejoin,this.morphTargets=n.morphTargets,this};const td=new O,nd=new O,id=new et,Sa=new Do,Ea=new Hi;function Es(n=new mt,e=new xn){We.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Es.prototype=Object.assign(Object.create(We.prototype),{constructor:Es,isLine:!0,copy:function(n){return We.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)td.fromBufferAttribute(e,i-1),nd.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=td.distanceTo(nd);n.setAttribute("lineDistance",new ut(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(n.isGeometry){const e=n.vertices,t=n.lineDistances;t[0]=0;for(let i=1,r=e.length;i<r;i++)t[i]=t[i-1],t[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Ea.copy(t.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,n.ray.intersectsSphere(Ea)===!1)return;id.copy(i).invert(),Sa.copy(n.ray).applyMatrix4(id);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new O,c=new O,l=new O,u=new O,h=this.isLineSegments?2:1;if(t.isBufferGeometry){const f=t.index,m=t.attributes.position;if(f!==null){const v=f.array;for(let g=0,p=v.length-1;g<p;g+=h){const _=v[g],M=v[g+1];if(a.fromBufferAttribute(m,_),c.fromBufferAttribute(m,M),Sa.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const y=n.ray.origin.distanceTo(u);y<n.near||y>n.far||e.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else for(let v=0,g=m.count-1;v<g;v+=h){if(a.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),Sa.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const _=n.ray.origin.distanceTo(u);_<n.near||_>n.far||e.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else if(t.isGeometry){const f=t.vertices,d=f.length;for(let m=0;m<d-1;m+=h){if(Sa.distanceSqToSegment(f[m],f[m+1],u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const g=n.ray.origin.distanceTo(u);g<n.near||g>n.far||e.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const wa=new O,Ta=new O;function $a(n,e){Es.call(this,n,e),this.type="LineSegments"}$a.prototype=Object.assign(Object.create(Es.prototype),{constructor:$a,isLineSegments:!0,computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)wa.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+wa.distanceTo(Ta);n.setAttribute("lineDistance",new ut(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(n.isGeometry){const e=n.vertices,t=n.lineDistances;for(let i=0,r=e.length;i<r;i+=2)wa.copy(e[i]),Ta.copy(e[i+1]),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+wa.distanceTo(Ta)}return this}});function rd(n,e){Es.call(this,n,e),this.type="LineLoop"}rd.prototype=Object.assign(Object.create(Es.prototype),{constructor:rd,isLineLoop:!0});function vr(n){Xe.call(this),this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(n)}vr.prototype=Object.create(Xe.prototype);vr.prototype.constructor=vr;vr.prototype.isPointsMaterial=!0;vr.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.morphTargets=n.morphTargets,this};const sd=new et,Yl=new Do,Aa=new Hi,Ra=new O;function od(n=new mt,e=new vr){We.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}od.prototype=Object.assign(Object.create(We.prototype),{constructor:od,isPoints:!0,copy:function(n){return We.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Aa.copy(t.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,n.ray.intersectsSphere(Aa)===!1)return;sd.copy(i).invert(),Yl.copy(n.ray).applyMatrix4(sd);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(t.isBufferGeometry){const a=t.index,l=t.attributes.position;if(a!==null){const u=a.array;for(let h=0,f=u.length;h<f;h++){const d=u[h];Ra.fromBufferAttribute(l,d),_l(Ra,d,o,i,n,e,this)}}else for(let u=0,h=l.count;u<h;u++)Ra.fromBufferAttribute(l,u),_l(Ra,u,o,i,n,e,this)}else{const a=t.vertices;for(let c=0,l=a.length;c<l;c++)_l(a[c],c,o,i,n,e,this)}},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function _l(n,e,t,i,r,s,o){const a=Yl.distanceSqToPoint(n);if(a<t){const c=new O;Yl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function ad(n,e,t,i,r,s,o,a,c){vt.call(this,n,e,t,i,r,s,o,a,c),this.format=o!==void 0?o:cr,this.minFilter=s!==void 0?s:Gt,this.magFilter=r!==void 0?r:Gt,this.generateMipmaps=!1;const l=this;function u(){l.needsUpdate=!0,n.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in n&&n.requestVideoFrameCallback(u)}ad.prototype=Object.assign(Object.create(vt.prototype),{constructor:ad,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const n=this.image;"requestVideoFrameCallback"in n===!1&&n.readyState>=n.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function xo(n,e,t,i,r,s,o,a,c,l,u,h){vt.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:e,height:t},this.mipmaps=n,this.flipY=!1,this.generateMipmaps=!1}xo.prototype=Object.create(vt.prototype);xo.prototype.constructor=xo;xo.prototype.isCompressedTexture=!0;function qa(n,e,t,i,r,s,o,a,c){vt.call(this,n,e,t,i,r,s,o,a,c),this.needsUpdate=!0}qa.prototype=Object.create(vt.prototype);qa.prototype.constructor=qa;qa.prototype.isCanvasTexture=!0;function ja(n,e,t,i,r,s,o,a,c,l){if(l=l!==void 0?l:ms,l!==ms&&l!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&l===ms&&(t=Ha),t===void 0&&l===fo&&(t=so),vt.call(this,null,i,r,s,o,a,l,t,c),this.image={width:n,height:e},this.magFilter=o!==void 0?o:jt,this.minFilter=a!==void 0?a:jt,this.flipY=!1,this.generateMipmaps=!1}ja.prototype=Object.create(vt.prototype);ja.prototype.constructor=ja;ja.prototype.isDepthTexture=!0;let rT=0;const zn=new et,vl=new We,La=new O;function In(){Object.defineProperty(this,"id",{value:rT+=2}),this.uuid=$e.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}In.prototype=Object.assign(Object.create(Zn.prototype),{constructor:In,isGeometry:!0,applyMatrix4:function(n){const e=new Kt().getNormalMatrix(n);for(let t=0,i=this.vertices.length;t<i;t++)this.vertices[t].applyMatrix4(n);for(let t=0,i=this.faces.length;t<i;t++){const r=this.faces[t];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(n){return zn.makeRotationX(n),this.applyMatrix4(zn),this},rotateY:function(n){return zn.makeRotationY(n),this.applyMatrix4(zn),this},rotateZ:function(n){return zn.makeRotationZ(n),this.applyMatrix4(zn),this},translate:function(n,e,t){return zn.makeTranslation(n,e,t),this.applyMatrix4(zn),this},scale:function(n,e,t){return zn.makeScale(n,e,t),this.applyMatrix4(zn),this},lookAt:function(n){return vl.lookAt(n),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this},fromBufferGeometry:function(n){const e=this,t=n.index!==null?n.index:void 0,i=n.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new O().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new Ge().fromBufferAttribute(o,h));function l(h,f,d,m){const v=o===void 0?[]:[e.colors[h].clone(),e.colors[f].clone(),e.colors[d].clone()],g=s===void 0?[]:[new O().fromBufferAttribute(s,h),new O().fromBufferAttribute(s,f),new O().fromBufferAttribute(s,d)],p=new Fl(h,f,d,g,v,m);e.faces.push(p),a!==void 0&&e.faceVertexUvs[0].push([new xe().fromBufferAttribute(a,h),new xe().fromBufferAttribute(a,f),new xe().fromBufferAttribute(a,d)]),c!==void 0&&e.faceVertexUvs[1].push([new xe().fromBufferAttribute(c,h),new xe().fromBufferAttribute(c,f),new xe().fromBufferAttribute(c,d)])}const u=n.groups;if(u.length>0)for(let h=0;h<u.length;h++){const f=u[h],d=f.start,m=f.count;for(let v=d,g=d+m;v<g;v+=3)t!==void 0?l(t.getX(v),t.getX(v+1),t.getX(v+2),f.materialIndex):l(v,v+1,v+2,f.materialIndex)}else if(t!==void 0)for(let h=0;h<t.count;h+=3)l(t.getX(h),t.getX(h+1),t.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),n.boundingBox!==null&&(this.boundingBox=n.boundingBox.clone()),n.boundingSphere!==null&&(this.boundingSphere=n.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(La).negate(),this.translate(La.x,La.y,La.z),this},normalize:function(){this.computeBoundingSphere();const n=this.boundingSphere.center,e=this.boundingSphere.radius,t=e===0?1:1/e,i=new et;return i.set(t,0,0,-t*n.x,0,t,0,-t*n.y,0,0,t,-t*n.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const n=new O,e=new O;for(let t=0,i=this.faces.length;t<i;t++){const r=this.faces[t],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];n.subVectors(a,o),e.subVectors(s,o),n.cross(e),n.normalize(),r.normal.copy(n)}},computeVertexNormals:function(n=!0){const e=new Array(this.vertices.length);for(let t=0,i=this.vertices.length;t<i;t++)e[t]=new O;if(n){const t=new O,i=new O;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];t.subVectors(l,c),i.subVectors(a,c),t.cross(i),e[o.a].add(t),e[o.b].add(t),e[o.c].add(t)}}else{this.computeFaceNormals();for(let t=0,i=this.faces.length;t<i;t++){const r=this.faces[t];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let t=0,i=this.vertices.length;t<i;t++)e[t].normalize();for(let t=0,i=this.faces.length;t<i;t++){const r=this.faces[t],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let n=0,e=this.faces.length;n<e;n++){const t=this.faces[n],i=t.vertexNormals;i.length===3?(i[0].copy(t.normal),i[1].copy(t.normal),i[2].copy(t.normal)):(i[0]=t.normal.clone(),i[1]=t.normal.clone(),i[2]=t.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,t=this.faces.length;e<t;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const n=new In;n.faces=this.faces;for(let e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new O,l={a:new O,b:new O,c:new O};r.push(c),s.push(l)}}const i=this.morphNormals[e];n.vertices=this.morphTargets[e].vertices,n.computeFaceNormals(),n.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,t=this.faces.length;e<t;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Hi),this.boundingSphere.setFromPoints(this.vertices)},merge:function(n,e,t=0){if(!(n&&n.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",n);return}let i;const r=this.vertices.length,s=this.vertices,o=n.vertices,a=this.faces,c=n.faces,l=this.colors,u=n.colors;e!==void 0&&(i=new Kt().getNormalMatrix(e));for(let h=0,f=o.length;h<f;h++){const m=o[h].clone();e!==void 0&&m.applyMatrix4(e),s.push(m)}for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone());for(let h=0,f=c.length;h<f;h++){const d=c[h];let m,v;const g=d.vertexNormals,p=d.vertexColors,_=new Fl(d.a+r,d.b+r,d.c+r);_.normal.copy(d.normal),i!==void 0&&_.normal.applyMatrix3(i).normalize();for(let M=0,S=g.length;M<S;M++)m=g[M].clone(),i!==void 0&&m.applyMatrix3(i).normalize(),_.vertexNormals.push(m);_.color.copy(d.color);for(let M=0,S=p.length;M<S;M++)v=p[M],_.vertexColors.push(v.clone());_.materialIndex=d.materialIndex+t,a.push(_)}for(let h=0,f=n.faceVertexUvs.length;h<f;h++){const d=n.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,v=d.length;m<v;m++){const g=d[m],p=[];for(let _=0,M=g.length;_<M;_++)p.push(g[_].clone());this.faceVertexUvs[h].push(p)}}},mergeMesh:function(n){if(!(n&&n.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",n);return}n.matrixAutoUpdate&&n.updateMatrix(),this.merge(n.geometry,n.matrix)},mergeVertices:function(n=4){const e={},t=[],i=[],r=Math.pow(10,n);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],u=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[u]===void 0?(e[u]=a,t.push(this.vertices[a]),i[a]=t.length-1):i[a]=i[e[u]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];const u=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(u[h]===u[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,u=this.faceVertexUvs.length;l<u;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-t.length;return this.vertices=t,o},setFromPoints:function(n){this.vertices=[];for(let e=0,t=n.length;e<t;e++){const i=n[e];this.vertices.push(new O(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const n=this.faces,e=n.length;for(let a=0;a<e;a++)n[a]._id=a;function t(a,c){return a.materialIndex-c.materialIndex}n.sort(t);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=n[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const n={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(n[m]=d[m]);return n}const e=[];for(let d=0;d<this.vertices.length;d++){const m=this.vertices[d];e.push(m.x,m.y,m.z)}const t=[],i=[],r={},s=[],o={},a=[],c={};for(let d=0;d<this.faces.length;d++){const m=this.faces[d],v=!0,g=!1,p=this.faceVertexUvs[0][d]!==void 0,_=m.normal.length()>0,M=m.vertexNormals.length>0,S=m.color.r!==1||m.color.g!==1||m.color.b!==1,y=m.vertexColors.length>0;let x=0;if(x=l(x,0,0),x=l(x,1,v),x=l(x,2,g),x=l(x,3,p),x=l(x,4,_),x=l(x,5,M),x=l(x,6,S),x=l(x,7,y),t.push(x),t.push(m.a,m.b,m.c),t.push(m.materialIndex),p){const w=this.faceVertexUvs[0][d];t.push(f(w[0]),f(w[1]),f(w[2]))}if(_&&t.push(u(m.normal)),M){const w=m.vertexNormals;t.push(u(w[0]),u(w[1]),u(w[2]))}if(S&&t.push(h(m.color)),y){const w=m.vertexColors;t.push(h(w[0]),h(w[1]),h(w[2]))}}function l(d,m,v){return v?d|1<<m:d&~(1<<m)}function u(d){const m=d.x.toString()+d.y.toString()+d.z.toString();return r[m]!==void 0||(r[m]=i.length/3,i.push(d.x,d.y,d.z)),r[m]}function h(d){const m=d.r.toString()+d.g.toString()+d.b.toString();return o[m]!==void 0||(o[m]=s.length,s.push(d.getHex())),o[m]}function f(d){const m=d.x.toString()+d.y.toString();return c[m]!==void 0||(c[m]=a.length/2,a.push(d.x,d.y)),c[m]}return n.data={},n.data.vertices=e,n.data.normals=i,s.length>0&&(n.data.colors=s),a.length>0&&(n.data.uvs=[a]),n.data.faces=t,n},clone:function(){return new In().copy(this)},copy:function(n){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=n.name;const e=n.vertices;for(let h=0,f=e.length;h<f;h++)this.vertices.push(e[h].clone());const t=n.colors;for(let h=0,f=t.length;h<f;h++)this.colors.push(t[h].clone());const i=n.faces;for(let h=0,f=i.length;h<f;h++)this.faces.push(i[h].clone());for(let h=0,f=n.faceVertexUvs.length;h<f;h++){const d=n.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,v=d.length;m<v;m++){const g=d[m],p=[];for(let _=0,M=g.length;_<M;_++){const S=g[_];p.push(S.clone())}this.faceVertexUvs[h].push(p)}}const r=n.morphTargets;for(let h=0,f=r.length;h<f;h++){const d={};if(d.name=r[h].name,r[h].vertices!==void 0){d.vertices=[];for(let m=0,v=r[h].vertices.length;m<v;m++)d.vertices.push(r[h].vertices[m].clone())}if(r[h].normals!==void 0){d.normals=[];for(let m=0,v=r[h].normals.length;m<v;m++)d.normals.push(r[h].normals[m].clone())}this.morphTargets.push(d)}const s=n.morphNormals;for(let h=0,f=s.length;h<f;h++){const d={};if(s[h].vertexNormals!==void 0){d.vertexNormals=[];for(let m=0,v=s[h].vertexNormals.length;m<v;m++){const g=s[h].vertexNormals[m],p={};p.a=g.a.clone(),p.b=g.b.clone(),p.c=g.c.clone(),d.vertexNormals.push(p)}}if(s[h].faceNormals!==void 0){d.faceNormals=[];for(let m=0,v=s[h].faceNormals.length;m<v;m++)d.faceNormals.push(s[h].faceNormals[m].clone())}this.morphNormals.push(d)}const o=n.skinWeights;for(let h=0,f=o.length;h<f;h++)this.skinWeights.push(o[h].clone());const a=n.skinIndices;for(let h=0,f=a.length;h<f;h++)this.skinIndices.push(a[h].clone());const c=n.lineDistances;for(let h=0,f=c.length;h<f;h++)this.lineDistances.push(c[h]);const l=n.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=n.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=n.elementsNeedUpdate,this.verticesNeedUpdate=n.verticesNeedUpdate,this.uvsNeedUpdate=n.uvsNeedUpdate,this.normalsNeedUpdate=n.normalsNeedUpdate,this.colorsNeedUpdate=n.colorsNeedUpdate,this.lineDistancesNeedUpdate=n.lineDistancesNeedUpdate,this.groupsNeedUpdate=n.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});new O;new O;new O;new zt;const sT={triangulate:function(n,e,t){t=t||2;const i=e&&e.length,r=i?e[0]*t:n.length;let s=Fp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(i&&(s=hT(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let m=t;m<r;m+=t)h=n[m],f=n[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?1/d:0}return yo(s,o,t,a,c,d),o}};function Fp(n,e,t,i,r){let s,o;if(r===MT(n,e,t,i)>0)for(s=e;s<t;s+=i)o=cd(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=cd(s,n[s],n[s+1],o);return o&&fc(o,o.next)&&(bo(o),o=o.next),o}function zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fc(t,t.next)||St(t.prev,t,t.next)===0)){if(bo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&mT(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?aT(n,i,r,s):oT(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),bo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=cT(zi(n),e,t),yo(n,e,t,i,r,s,2)):o===2&&lT(n,e,t,i,r,s):yo(zi(n),e,t,i,r,s,1);break}}}function oT(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(us(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&St(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function aT(n,e,t,i){const r=n.prev,s=n,o=n.next;if(St(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Zl(a,c,e,t,i),f=Zl(l,u,e,t,i);let d=n.prevZ,m=n.nextZ;for(;d&&d.z>=h&&m&&m.z<=f;){if(d!==n.prev&&d!==n.next&&us(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&St(d.prev,d,d.next)>=0||(d=d.prevZ,m!==n.prev&&m!==n.next&&us(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&St(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=h;){if(d!==n.prev&&d!==n.next&&us(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&St(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=f;){if(m!==n.prev&&m!==n.next&&us(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function cT(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!fc(r,s)&&Op(r,i,i.next,s)&&Mo(r,s)&&Mo(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),bo(i),bo(i.next),i=n=s),i=i.next}while(i!==n);return zi(i)}function lT(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vT(o,a)){let c=Bp(o,a);o=zi(o,o.next),c=zi(c,c.next),yo(o,e,t,i,r,s),yo(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function hT(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Fp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(_T(l));for(r.sort(uT),s=0;s<r.length;s++)fT(r[s],t),t=zi(t,t.next);return t}function uT(n,e){return n.x-e.x}function fT(n,e){if(e=dT(n,e),e){const t=Bp(e,n);zi(e,e.next),zi(t,t.next)}}function dT(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s){if(s=f,f===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&us(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),Mo(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&pT(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function pT(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function mT(n,e,t,i){let r=n;do r.z===null&&(r.z=Zl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,gT(r)}function gT(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function Zl(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _T(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function us(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function vT(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!xT(n,e)&&(Mo(n,e)&&Mo(e,n)&&yT(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||fc(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fc(n,e){return n.x===e.x&&n.y===e.y}function Op(n,e,t,i){const r=Pa(St(n,e,t)),s=Pa(St(n,e,i)),o=Pa(St(t,i,n)),a=Pa(St(t,i,e));return!!(r!==s&&o!==a||r===0&&Ca(n,t,e)||s===0&&Ca(n,i,e)||o===0&&Ca(t,n,i)||a===0&&Ca(t,e,i))}function Ca(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Pa(n){return n>0?1:n<0?-1:0}function xT(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Op(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Mo(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function yT(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Bp(n,e){const t=new Jl(n.i,n.x,n.y),i=new Jl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function cd(n,e,t,i){const r=new Jl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function MT(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}const Ni={area:function(n){const e=n.length;let t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return Ni.area(n)<0},triangulateShape:function(n,e){const t=[],i=[],r=[];ld(n),hd(t,n);let s=n.length;e.forEach(ld);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,hd(t,e[a]);const o=sT.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function ld(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function hd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class zp extends mt{constructor(e,t){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:d-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:bT;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let M,S=!1,y,x,w,G;p&&(M=p.getSpacedPoints(u),S=!0,f=!1,y=p.computeFrenetFrames(u,!1),x=new O,w=new O,G=new O),f||(g=0,d=0,m=0,v=0);const b=a.extractPoints(l);let C=b.shape;const N=b.holes;if(!Ni.isClockWise(C)){C=C.reverse();for(let de=0,se=N.length;de<se;de++){const _e=N[de];Ni.isClockWise(_e)&&(N[de]=_e.reverse())}}const D=Ni.triangulateShape(C,N),I=C;for(let de=0,se=N.length;de<se;de++){const _e=N[de];C=C.concat(_e)}function L(de,se,_e){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().multiplyScalar(_e).add(de)}const z=C.length,k=D.length;function W(de,se,_e){let De,Ee,U;const R=de.x-se.x,pe=de.y-se.y,me=_e.x-de.x,H=_e.y-de.y,T=R*R+pe*pe,E=R*H-pe*me;if(Math.abs(E)>Number.EPSILON){const $=Math.sqrt(T),Y=Math.sqrt(me*me+H*H),te=se.x-pe/$,le=se.y+R/$,Me=_e.x-H/Y,he=_e.y+me/Y,Z=((Me-te)*H-(he-le)*me)/(R*H-pe*me);De=te+R*Z-de.x,Ee=le+pe*Z-de.y;const Te=De*De+Ee*Ee;if(Te<=2)return new xe(De,Ee);U=Math.sqrt(Te/2)}else{let $=!1;R>Number.EPSILON?me>Number.EPSILON&&($=!0):R<-Number.EPSILON?me<-Number.EPSILON&&($=!0):Math.sign(pe)===Math.sign(H)&&($=!0),$?(De=-pe,Ee=R,U=Math.sqrt(T)):(De=R,Ee=pe,U=Math.sqrt(T/2))}return new xe(De/U,Ee/U)}const ee=[];for(let de=0,se=I.length,_e=se-1,De=de+1;de<se;de++,_e++,De++)_e===se&&(_e=0),De===se&&(De=0),ee[de]=W(I[de],I[_e],I[De]);const Q=[];let ge,ue=ee.concat();for(let de=0,se=N.length;de<se;de++){const _e=N[de];ge=[];for(let De=0,Ee=_e.length,U=Ee-1,R=De+1;De<Ee;De++,U++,R++)U===Ee&&(U=0),R===Ee&&(R=0),ge[De]=W(_e[De],_e[U],_e[R]);Q.push(ge),ue=ue.concat(ge)}for(let de=0;de<g;de++){const se=de/g,_e=d*Math.cos(se*Math.PI/2),De=m*Math.sin(se*Math.PI/2)+v;for(let Ee=0,U=I.length;Ee<U;Ee++){const R=L(I[Ee],ee[Ee],De);F(R.x,R.y,-_e)}for(let Ee=0,U=N.length;Ee<U;Ee++){const R=N[Ee];ge=Q[Ee];for(let pe=0,me=R.length;pe<me;pe++){const H=L(R[pe],ge[pe],De);F(H.x,H.y,-_e)}}}const K=m+v;for(let de=0;de<z;de++){const se=f?L(C[de],ue[de],K):C[de];S?(w.copy(y.normals[0]).multiplyScalar(se.x),x.copy(y.binormals[0]).multiplyScalar(se.y),G.copy(M[0]).add(w).add(x),F(G.x,G.y,G.z)):F(se.x,se.y,0)}for(let de=1;de<=u;de++)for(let se=0;se<z;se++){const _e=f?L(C[se],ue[se],K):C[se];S?(w.copy(y.normals[de]).multiplyScalar(_e.x),x.copy(y.binormals[de]).multiplyScalar(_e.y),G.copy(M[de]).add(w).add(x),F(G.x,G.y,G.z)):F(_e.x,_e.y,h/u*de)}for(let de=g-1;de>=0;de--){const se=de/g,_e=d*Math.cos(se*Math.PI/2),De=m*Math.sin(se*Math.PI/2)+v;for(let Ee=0,U=I.length;Ee<U;Ee++){const R=L(I[Ee],ee[Ee],De);F(R.x,R.y,h+_e)}for(let Ee=0,U=N.length;Ee<U;Ee++){const R=N[Ee];ge=Q[Ee];for(let pe=0,me=R.length;pe<me;pe++){const H=L(R[pe],ge[pe],De);S?F(H.x,H.y+M[u-1].y,M[u-1].x+_e):F(H.x,H.y,h+_e)}}}oe(),q();function oe(){const de=r.length/3;if(f){let se=0,_e=z*se;for(let De=0;De<k;De++){const Ee=D[De];Re(Ee[2]+_e,Ee[1]+_e,Ee[0]+_e)}se=u+g*2,_e=z*se;for(let De=0;De<k;De++){const Ee=D[De];Re(Ee[0]+_e,Ee[1]+_e,Ee[2]+_e)}}else{for(let se=0;se<k;se++){const _e=D[se];Re(_e[2],_e[1],_e[0])}for(let se=0;se<k;se++){const _e=D[se];Re(_e[0]+z*u,_e[1]+z*u,_e[2]+z*u)}}i.addGroup(de,r.length/3-de,0)}function q(){const de=r.length/3;let se=0;we(I,se),se+=I.length;for(let _e=0,De=N.length;_e<De;_e++){const Ee=N[_e];we(Ee,se),se+=Ee.length}i.addGroup(de,r.length/3-de,1)}function we(de,se){let _e=de.length;for(;--_e>=0;){const De=_e;let Ee=_e-1;Ee<0&&(Ee=de.length-1);for(let U=0,R=u+g*2;U<R;U++){const pe=z*U,me=z*(U+1),H=se+De+pe,T=se+Ee+pe,E=se+Ee+me,$=se+De+me;be(H,T,E,$)}}}function F(de,se,_e){c.push(de),c.push(se),c.push(_e)}function Re(de,se,_e){ve(de),ve(se),ve(_e);const De=r.length/3,Ee=_.generateTopUV(i,r,De-3,De-2,De-1);Se(Ee[0]),Se(Ee[1]),Se(Ee[2])}function be(de,se,_e,De){ve(de),ve(se),ve(De),ve(se),ve(_e),ve(De);const Ee=r.length/3,U=_.generateSideWallUV(i,r,Ee-6,Ee-3,Ee-2,Ee-1);Se(U[0]),Se(U[1]),Se(U[3]),Se(U[1]),Se(U[2]),Se(U[3])}function ve(de){r.push(c[de*3+0]),r.push(c[de*3+1]),r.push(c[de*3+2])}function Se(de){s.push(de.x),s.push(de.y)}}}toJSON(){const e=mt.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return ST(t,i,e)}}const bT={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new xe(s,o),new xe(a,c),new xe(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<.01?[new xe(o,1-c),new xe(l,1-h),new xe(f,1-m),new xe(v,1-p)]:[new xe(a,1-c),new xe(u,1-h),new xe(d,1-m),new xe(g,1-p)]}};function ST(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ET extends In{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new zp(e,t)),this.mergeVertices()}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return wT(t,i,e)}}function wT(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ya(n,e,t){mt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:n,slices:e,stacks:t};const i=[],r=[],s=[],o=[],a=1e-5,c=new O,l=new O,u=new O,h=new O,f=new O;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=e+1;for(let m=0;m<=t;m++){const v=m/t;for(let g=0;g<=e;g++){const p=g/e;n(p,v,l),r.push(l.x,l.y,l.z),p-a>=0?(n(p-a,v,u),h.subVectors(l,u)):(n(p+a,v,u),h.subVectors(u,l)),v-a>=0?(n(p,v-a,u),f.subVectors(l,u)):(n(p,v+a,u),f.subVectors(u,l)),c.crossVectors(h,f).normalize(),s.push(c.x,c.y,c.z),o.push(p,v)}}for(let m=0;m<t;m++)for(let v=0;v<e;v++){const g=m*d+v,p=m*d+v+1,_=(m+1)*d+v+1,M=(m+1)*d+v;i.push(g,p,M),i.push(p,_,M)}this.setIndex(i),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2))}Ya.prototype=Object.create(mt.prototype);Ya.prototype.constructor=Ya;function Kl(n,e,t){In.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t},this.fromBufferGeometry(new Ya(n,e,t)),this.mergeVertices()}Kl.prototype=Object.create(In.prototype);Kl.prototype.constructor=Kl;class TT extends mt{constructor(e,t=12){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;Ni.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];Ni.isClockWise(_)===!0&&(m[g]=_.reverse())}const v=Ni.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){const _=d[g];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,p=v.length;g<p;g++){const _=v[g],M=_[0]+h,S=_[1]+h,y=_[2]+h;i.push(M,S,y),c+=3}}}toJSON(){const e=mt.prototype.toJSON.call(this),t=this.parameters.shapes;return AT(t,e)}}function AT(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class RT extends In{constructor(e,t){super(),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new TT(e,t)),this.mergeVertices()}toJSON(){const e=In.prototype.toJSON.call(this),t=this.parameters.shapes;return LT(t,e)}}function LT(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}function ws(n){Xe.call(this),this.type="ShadowMaterial",this.color=new Ge(0),this.transparent=!0,this.setValues(n)}ws.prototype=Object.create(Xe.prototype);ws.prototype.constructor=ws;ws.prototype.isShadowMaterial=!0;ws.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this};function So(n){tn.call(this,n),this.type="RawShaderMaterial"}So.prototype=Object.create(tn.prototype);So.prototype.constructor=So;So.prototype.isRawShaderMaterial=!0;function di(n){Xe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(n)}di.prototype=Object.create(Xe.prototype);di.prototype.constructor=di;di.prototype.isMeshStandardMaterial=!0;di.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.vertexTangents=n.vertexTangents,this};function xr(n){di.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=$e.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}xr.prototype=Object.create(di.prototype);xr.prototype.constructor=xr;xr.prototype.isMeshPhysicalMaterial=!0;xr.prototype.copy=function(n){return di.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new Ge).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};function yr(n){Xe.call(this),this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(n)}yr.prototype=Object.create(Xe.prototype);yr.prototype.constructor=yr;yr.prototype.isMeshPhongMaterial=!0;yr.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.specular.copy(n.specular),this.shininess=n.shininess,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this};function Ts(n){Xe.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(n)}Ts.prototype=Object.create(Xe.prototype);Ts.prototype.constructor=Ts;Ts.prototype.isMeshToonMaterial=!0;Ts.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.map=n.map,this.gradientMap=n.gradientMap,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this};function As(n){Xe.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(n)}As.prototype=Object.create(Xe.prototype);As.prototype.constructor=As;As.prototype.isMeshNormalMaterial=!0;As.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this};function Rs(n){Xe.call(this),this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(n)}Rs.prototype=Object.create(Xe.prototype);Rs.prototype.constructor=Rs;Rs.prototype.isMeshLambertMaterial=!0;Rs.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this};function Ls(n){Xe.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(n)}Ls.prototype=Object.create(Xe.prototype);Ls.prototype.constructor=Ls;Ls.prototype.isMeshMatcapMaterial=!0;Ls.prototype.copy=function(n){return Xe.prototype.copy.call(this,n),this.defines={MATCAP:""},this.color.copy(n.color),this.matcap=n.matcap,this.map=n.map,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this};function Cs(n){xn.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(n)}Cs.prototype=Object.create(xn.prototype);Cs.prototype.constructor=Cs;Cs.prototype.isLineDashedMaterial=!0;Cs.prototype.copy=function(n){return xn.prototype.copy.call(this,n),this.scale=n.scale,this.dashSize=n.dashSize,this.gapSize=n.gapSize,this};var CT=Object.freeze({__proto__:null,ShadowMaterial:ws,SpriteMaterial:_r,RawShaderMaterial:So,ShaderMaterial:tn,PointsMaterial:vr,MeshPhysicalMaterial:xr,MeshStandardMaterial:di,MeshPhongMaterial:yr,MeshToonMaterial:Ts,MeshNormalMaterial:As,MeshLambertMaterial:Rs,MeshDepthMaterial:pr,MeshDistanceMaterial:mr,MeshBasicMaterial:fr,MeshMatcapMaterial:Ls,LineDashedMaterial:Cs,LineBasicMaterial:xn,Material:Xe});const yt={arraySlice:function(n,e,t){return yt.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const m=l.times[d]*r;if(!(m<t||m>=i)){h.push(l.times[d]);for(let v=0;v<u;++v)f.push(l.values[d*u+v])}}h.length!==0&&(l.times=yt.convertArray(h,l.times.constructor),l.values=yt.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=n.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=a.times.length-1;let v;if(s<=a.times[0]){const p=u,_=h-u;v=yt.arraySlice(a.values,p,_)}else if(s>=a.times[m]){const p=m*h+u,_=p+h-u;v=yt.arraySlice(a.values,p,_)}else{const p=a.createInterpolant(),_=u,M=h-u;p.evaluate(s),v=yt.arraySlice(p.resultBuffer,_,M)}c==="quaternion"&&new Ht().fromArray(v).normalize().conjugate().toArray(v);const g=l.times.length;for(let p=0;p<g;++p){const _=p*d+f;if(c==="quaternion")Ht.multiplyQuaternionsFlat(l.values,_,v,0,l.values,_);else{const M=d-f*2;for(let S=0;S<M;++S)l.values[_+S]-=v[S]}}}return n.blendMode=vp,n}};function _n(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(_n.prototype,{evaluate:function(n){const e=this.parameterPositions;let t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){const o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){const o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){const e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(_n.prototype,{beforeStart_:_n.prototype.copySampleValue_,afterEnd_:_n.prototype.copySampleValue_});function Ql(n,e,t,i){_n.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Ql.prototype=Object.assign(Object.create(_n.prototype),{constructor:Ql,DefaultSettings_:{endingStart:ss,endingEnd:ss},intervalChanged_:function(n,e,t){const i=this.parameterPositions;let r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case os:r=n,o=2*e-t;break;case Wa:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case os:s=n,a=2*t-e;break;case Wa:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}const c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,d=(t-e)/(i-e),m=d*d,v=m*d,g=-h*v+2*h*m-h*d,p=(1+h)*v+(-1.5-2*h)*m+(-.5+h)*d+1,_=(-1-f)*v+(1.5+f)*m+.5*d,M=f*v-f*m;for(let S=0;S!==o;++S)r[S]=g*s[l+S]+p*s[c+S]+_*s[a+S]+M*s[u+S];return r}});function Za(n,e,t,i){_n.call(this,n,e,t,i)}Za.prototype=Object.assign(Object.create(_n.prototype),{constructor:Za,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function eh(n,e,t,i){_n.call(this,n,e,t,i)}eh.prototype=Object.assign(Object.create(_n.prototype),{constructor:eh,interpolate_:function(n){return this.copySampleValue_(n-1)}});function Vt(n,e,t,i){if(n===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+n);this.name=n,this.times=yt.convertArray(e,this.TimeBufferType),this.values=yt.convertArray(t,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(Vt,{toJSON:function(n){const e=n.constructor;let t;if(e.toJSON!==void 0)t=e.toJSON(n);else{t={name:n.name,times:yt.convertArray(n.times,Array),values:yt.convertArray(n.values,Array)};const i=n.getInterpolation();i!==n.DefaultInterpolation&&(t.interpolation=i)}return t.type=n.ValueTypeName,t}});Object.assign(Vt.prototype,{constructor:Vt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:za,InterpolantFactoryMethodDiscrete:function(n){return new eh(this.times,this.values,this.getValueSize(),n)},InterpolantFactoryMethodLinear:function(n){return new Za(this.times,this.values,this.getValueSize(),n)},InterpolantFactoryMethodSmooth:function(n){return new Ql(this.times,this.values,this.getValueSize(),n)},setInterpolation:function(n){let e;switch(n){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case qc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(n!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return qc}},getValueSize:function(){return this.values.length/this.times.length},shift:function(n){if(n!==0){const e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]+=n}return this},scale:function(n){if(n!==1){const e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]*=n}return this},trim:function(n,e){const t=this.times,i=t.length;let r=0,s=i-1;for(;r!==i&&t[r]<n;)++r;for(;s!==-1&&t[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=yt.arraySlice(t,r,s),this.values=yt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let n=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),n=!1);const t=this.times,i=this.values,r=t.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),n=!1);let s=null;for(let o=0;o!==r;o++){const a=t[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),n=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),n=!1;break}s=a}if(i!==void 0&&yt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),n=!1;break}}return n},optimize:function(){const n=yt.arraySlice(this.times),e=yt.arraySlice(this.values),t=this.getValueSize(),i=this.getInterpolation()===qc,r=n.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=n[o],l=n[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const u=o*t,h=u-t,f=u+t;for(let d=0;d!==t;++d){const m=e[u+d];if(m!==e[h+d]||m!==e[f+d]){a=!0;break}}}if(a){if(o!==s){n[s]=n[o];const u=o*t,h=s*t;for(let f=0;f!==t;++f)e[h+f]=e[u+f]}++s}}if(r>0){n[s]=n[r];for(let o=r*t,a=s*t,c=0;c!==t;++c)e[a+c]=e[o+c];++s}return s!==n.length?(this.times=yt.arraySlice(n,0,s),this.values=yt.arraySlice(e,0,s*t)):(this.times=n,this.values=e),this},clone:function(){const n=yt.arraySlice(this.times,0),e=yt.arraySlice(this.values,0),t=this.constructor,i=new t(this.name,n,e);return i.createInterpolant=this.createInterpolant,i}});function th(n,e,t){Vt.call(this,n,e,t)}th.prototype=Object.assign(Object.create(Vt.prototype),{constructor:th,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Va,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function nh(n,e,t,i){Vt.call(this,n,e,t,i)}nh.prototype=Object.assign(Object.create(Vt.prototype),{constructor:nh,ValueTypeName:"color"});function Eo(n,e,t,i){Vt.call(this,n,e,t,i)}Eo.prototype=Object.assign(Object.create(Vt.prototype),{constructor:Eo,ValueTypeName:"number"});function ih(n,e,t,i){_n.call(this,n,e,t,i)}ih.prototype=Object.assign(Object.create(_n.prototype),{constructor:ih,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e);let c=n*o;for(let l=c+o;c!==l;c+=4)Ht.slerpFlat(r,0,s,c-o,s,c,a);return r}});function Ja(n,e,t,i){Vt.call(this,n,e,t,i)}Ja.prototype=Object.assign(Object.create(Vt.prototype),{constructor:Ja,ValueTypeName:"quaternion",DefaultInterpolation:za,InterpolantFactoryMethodLinear:function(n){return new ih(this.times,this.values,this.getValueSize(),n)},InterpolantFactoryMethodSmooth:void 0});function rh(n,e,t,i){Vt.call(this,n,e,t,i)}rh.prototype=Object.assign(Object.create(Vt.prototype),{constructor:rh,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Va,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function wo(n,e,t,i){Vt.call(this,n,e,t,i)}wo.prototype=Object.assign(Object.create(Vt.prototype),{constructor:wo,ValueTypeName:"vector"});function Dn(n,e=-1,t,i=Th){this.name=n,this.tracks=t,this.duration=e,this.blendMode=i,this.uuid=$e.generateUUID(),this.duration<0&&this.resetDuration()}function PT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return nh;case"quaternion":return Ja;case"bool":case"boolean":return th;case"string":return rh}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function DT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=PT(n.type);if(n.times===void 0){const t=[],i=[];yt.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}Object.assign(Dn,{parse:function(n){const e=[],t=n.tracks,i=1/(n.fps||1);for(let s=0,o=t.length;s!==o;++s)e.push(DT(t[s]).scale(i));const r=new Dn(n.name,n.duration,e,n.blendMode);return r.uuid=n.uuid,r},toJSON:function(n){const e=[],t=n.tracks,i={name:n.name,duration:n.duration,tracks:e,uuid:n.uuid,blendMode:n.blendMode};for(let r=0,s=t.length;r!==s;++r)e.push(Vt.toJSON(t[r]));return i},CreateFromMorphTargetSequence:function(n,e,t,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=yt.getKeyframeOrder(a);a=yt.sortedArray(a,1,l),c=yt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Eo(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/t))}return new Dn(n,-1,s)},findByName:function(n,e){let t=n;if(!Array.isArray(n)){const i=n;t=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<t.length;i++)if(t[i].name===e)return t[i];return null},CreateClipsFromMorphTargetSequences:function(n,e,t){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=n.length;o<a;o++){const c=n[o],l=c.name.match(r);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Dn.CreateFromMorphTargetSequence(o,i[o],e,t));return s},parseAnimation:function(n,e){if(!n)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const t=function(u,h,f,d,m){if(f.length!==0){const v=[],g=[];yt.flattenJSON(f,v,g,d),v.length!==0&&m.push(new u(h,v,g))}},i=[],r=n.name||"default",s=n.fps||30,o=n.blendMode;let a=n.length||-1;const c=n.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let d;for(d=0;d<h.length;d++)if(h[d].morphTargets)for(let m=0;m<h[d].morphTargets.length;m++)f[h[d].morphTargets[m]]=-1;for(const m in f){const v=[],g=[];for(let p=0;p!==h[d].morphTargets.length;++p){const _=h[d];v.push(_.time),g.push(_.morphTarget===m?1:0)}i.push(new Eo(".morphTargetInfluence["+m+"]",v,g))}a=f.length*(s||1)}else{const f=".bones["+e[u].name+"]";t(wo,f+".position",h,"pos",i),t(Ja,f+".quaternion",h,"rot",i),t(wo,f+".scale",h,"scl",i)}}return i.length===0?null:new Dn(r,a,i,o)}});Object.assign(Dn.prototype,{resetDuration:function(){const n=this.tracks;let e=0;for(let t=0,i=n.length;t!==i;++t){const r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let n=0;n<this.tracks.length;n++)this.tracks[n].trim(0,this.duration);return this},validate:function(){let n=!0;for(let e=0;e<this.tracks.length;e++)n=n&&this.tracks[e].validate();return n},optimize:function(){for(let n=0;n<this.tracks.length;n++)this.tracks[n].optimize();return this},clone:function(){const n=[];for(let e=0;e<this.tracks.length;e++)n.push(this.tracks[e].clone());return new Dn(this.name,this.duration,n,this.blendMode)},toJSON:function(){return Dn.toJSON(this)}});const Ps={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function IT(n,e,t){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],d=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const UT=new IT;function gt(n){this.manager=n!==void 0?n:UT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(gt.prototype,{load:function(){},loadAsync:function(n,e){const t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});const Ln={};function pi(n){gt.call(this,n)}pi.prototype=Object.assign(Object.create(gt.prototype),{constructor:pi,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=Ps.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(Ln[n]!==void 0){Ln[n].push({onLoad:e,onProgress:t,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const m=new Uint8Array(h.length);for(let g=0;g<h.length;g++)m[g]=h.charCodeAt(g);d==="blob"?f=new Blob([m.buffer],{type:l}):f=m.buffer;break;case"document":f=new DOMParser().parseFromString(h,l);break;case"json":f=JSON.parse(h);break;default:f=h;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(n)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{Ln[n]=[],Ln[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){const u=this.response,h=Ln[n];if(delete Ln[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Ps.add(n,u);for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onLoad&&m.onLoad(u)}r.manager.itemEnd(n)}else{for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){const u=Ln[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=Ln[n];delete Ln[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){const u=Ln[n];delete Ln[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});function ud(n){gt.call(this,n)}ud.prototype=Object.assign(Object.create(gt.prototype),{constructor:ud,load:function(n,e,t,i){const r=this,s=new pi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(n,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(n)}},t,i)},parse:function(n){const e=[];for(let t=0;t<n.length;t++){const i=Dn.parse(n[t]);e.push(i)}return e}});function fd(n){gt.call(this,n)}fd.prototype=Object.assign(Object.create(gt.prototype),{constructor:fd,load:function(n,e,t,i){const r=this,s=[],o=new xo,a=new pi(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(n[u],function(h){const f=r.parse(h,!0);s[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Gt),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let u=0,h=n.length;u<h;++u)l(u);else a.load(n,function(u){const h=r.parse(u,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let m=0;m<h.mipmapCount;m++)s[d].mipmaps.push(h.mipmaps[d*h.mipmapCount+m]),s[d].format=h.format,s[d].width=h.width,s[d].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Gt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});function Ka(n){gt.call(this,n)}Ka.prototype=Object.assign(Object.create(gt.prototype),{constructor:Ka,load:function(n,e,t,i){this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=Ps.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),Ps.add(n,this),e&&e(this),r.manager.itemEnd(n)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(n),r.manager.itemEnd(n)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),n.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(n),o.src=n,o}});function sh(n){gt.call(this,n)}sh.prototype=Object.assign(Object.create(gt.prototype),{constructor:sh,load:function(n,e,t,i){const r=new Bi,s=new Ka(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(n[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<n.length;++c)a(c);return r}});function dd(n){gt.call(this,n)}dd.prototype=Object.assign(Object.create(gt.prototype),{constructor:dd,load:function(n,e,t,i){const r=this,s=new Ss,o=new pi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:ln,s.wrapT=c.wrapT!==void 0?c.wrapT:ln,s.magFilter=c.magFilter!==void 0?c.magFilter:Gt,s.minFilter=c.minFilter!==void 0?c.minFilter:Gt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=cc),c.mipmapCount===1&&(s.minFilter=Gt),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function oh(n){gt.call(this,n)}oh.prototype=Object.assign(Object.create(gt.prototype),{constructor:oh,load:function(n,e,t,i){const r=new vt,s=new Ka(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;const a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?cr:Un,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function He(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(He.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){const t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){const n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);const l=t[i],h=t[i+1]-l,f=(s-l)/h;return(i+f)/(r-1)},getTangent:function(n,e){let i=n-1e-4,r=n+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new xe:new O);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){const t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){const t=new O,i=[],r=[],s=[],o=new O,a=new et;for(let f=0;f<=n;f++){const d=f/n;i[f]=this.getTangentAt(d,new O),i[f].normalize()}r[0]=new O,s[0]=new O;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),u<=c&&(c=u,t.set(0,1,0)),h<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=n;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos($e.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos($e.clamp(r[0].dot(r[n]),-1,1));f/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(f=-f);for(let d=1;d<=n;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){const n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});function yn(n,e,t,i,r,s,o,a){He.call(this),this.type="EllipseCurve",this.aX=n||0,this.aY=e||0,this.xRadius=t||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}yn.prototype=Object.create(He.prototype);yn.prototype.constructor=yn;yn.prototype.isEllipseCurve=!0;yn.prototype.getPoint=function(n,e){const t=e||new xe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+n*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,f=c-this.aY;a=h*l-f*u+this.aX,c=h*u+f*l+this.aY}return t.set(a,c)};yn.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.aX=n.aX,this.aY=n.aY,this.xRadius=n.xRadius,this.yRadius=n.yRadius,this.aStartAngle=n.aStartAngle,this.aEndAngle=n.aEndAngle,this.aClockwise=n.aClockwise,this.aRotation=n.aRotation,this};yn.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.aX=this.aX,n.aY=this.aY,n.xRadius=this.xRadius,n.yRadius=this.yRadius,n.aStartAngle=this.aStartAngle,n.aEndAngle=this.aEndAngle,n.aClockwise=this.aClockwise,n.aRotation=this.aRotation,n};yn.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.aX=n.aX,this.aY=n.aY,this.xRadius=n.xRadius,this.yRadius=n.yRadius,this.aStartAngle=n.aStartAngle,this.aEndAngle=n.aEndAngle,this.aClockwise=n.aClockwise,this.aRotation=n.aRotation,this};function To(n,e,t,i,r,s){yn.call(this,n,e,t,t,i,r,s),this.type="ArcCurve"}To.prototype=Object.create(yn.prototype);To.prototype.constructor=To;To.prototype.isArcCurve=!0;function Ah(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Da=new O,xl=new Ah,yl=new Ah,Ml=new Ah;function un(n=[],e=!1,t="centripetal",i=.5){He.call(this),this.type="CatmullRomCurve3",this.points=n,this.closed=e,this.curveType=t,this.tension=i}un.prototype=Object.create(He.prototype);un.prototype.constructor=un;un.prototype.isCatmullRomCurve3=!0;un.prototype.getPoint=function(n,e=new O){const t=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*n;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Da.subVectors(i[0],i[1]).add(i[0]),c=Da);const u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Da.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Da),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(l),f);m<1e-4&&(m=1),d<1e-4&&(d=m),v<1e-4&&(v=m),xl.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,d,m,v),yl.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,d,m,v),Ml.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,d,m,v)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),yl.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),Ml.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return t.set(xl.calc(a),yl.calc(a),Ml.calc(a)),t};un.prototype.copy=function(n){He.prototype.copy.call(this,n),this.points=[];for(let e=0,t=n.points.length;e<t;e++){const i=n.points[e];this.points.push(i.clone())}return this.closed=n.closed,this.curveType=n.curveType,this.tension=n.tension,this};un.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);n.points=[];for(let e=0,t=this.points.length;e<t;e++){const i=this.points[e];n.points.push(i.toArray())}return n.closed=this.closed,n.curveType=this.curveType,n.tension=this.tension,n};un.prototype.fromJSON=function(n){He.prototype.fromJSON.call(this,n),this.points=[];for(let e=0,t=n.points.length;e<t;e++){const i=n.points[e];this.points.push(new O().fromArray(i))}return this.closed=n.closed,this.curveType=n.curveType,this.tension=n.tension,this};function pd(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function NT(n,e){const t=1-n;return t*t*e}function FT(n,e){return 2*(1-n)*n*e}function OT(n,e){return n*n*e}function co(n,e,t,i){return NT(n,e)+FT(n,t)+OT(n,i)}function BT(n,e){const t=1-n;return t*t*t*e}function zT(n,e){const t=1-n;return 3*t*t*n*e}function GT(n,e){return 3*(1-n)*n*n*e}function HT(n,e){return n*n*n*e}function lo(n,e,t,i,r){return BT(n,e)+zT(n,t)+GT(n,i)+HT(n,r)}function $n(n=new xe,e=new xe,t=new xe,i=new xe){He.call(this),this.type="CubicBezierCurve",this.v0=n,this.v1=e,this.v2=t,this.v3=i}$n.prototype=Object.create(He.prototype);$n.prototype.constructor=$n;$n.prototype.isCubicBezierCurve=!0;$n.prototype.getPoint=function(n,e=new xe){const t=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return t.set(lo(n,i.x,r.x,s.x,o.x),lo(n,i.y,r.y,s.y,o.y)),t};$n.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this.v3.copy(n.v3),this};$n.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n.v3=this.v3.toArray(),n};$n.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this.v3.fromArray(n.v3),this};function mi(n=new O,e=new O,t=new O,i=new O){He.call(this),this.type="CubicBezierCurve3",this.v0=n,this.v1=e,this.v2=t,this.v3=i}mi.prototype=Object.create(He.prototype);mi.prototype.constructor=mi;mi.prototype.isCubicBezierCurve3=!0;mi.prototype.getPoint=function(n,e=new O){const t=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return t.set(lo(n,i.x,r.x,s.x,o.x),lo(n,i.y,r.y,s.y,o.y),lo(n,i.z,r.z,s.z,o.z)),t};mi.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this.v3.copy(n.v3),this};mi.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n.v3=this.v3.toArray(),n};mi.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this.v3.fromArray(n.v3),this};function fn(n=new xe,e=new xe){He.call(this),this.type="LineCurve",this.v1=n,this.v2=e}fn.prototype=Object.create(He.prototype);fn.prototype.constructor=fn;fn.prototype.isLineCurve=!0;fn.prototype.getPoint=function(n,e=new xe){const t=e;return n===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(n).add(this.v1)),t};fn.prototype.getPointAt=function(n,e){return this.getPoint(n,e)};fn.prototype.getTangent=function(n,e){const t=e||new xe;return t.copy(this.v2).sub(this.v1).normalize(),t};fn.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v1.copy(n.v1),this.v2.copy(n.v2),this};fn.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n};fn.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this};function qn(n=new O,e=new O){He.call(this),this.type="LineCurve3",this.v1=n,this.v2=e}qn.prototype=Object.create(He.prototype);qn.prototype.constructor=qn;qn.prototype.isLineCurve3=!0;qn.prototype.getPoint=function(n,e=new O){const t=e;return n===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(n).add(this.v1)),t};qn.prototype.getPointAt=function(n,e){return this.getPoint(n,e)};qn.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v1.copy(n.v1),this.v2.copy(n.v2),this};qn.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n};qn.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this};function jn(n=new xe,e=new xe,t=new xe){He.call(this),this.type="QuadraticBezierCurve",this.v0=n,this.v1=e,this.v2=t}jn.prototype=Object.create(He.prototype);jn.prototype.constructor=jn;jn.prototype.isQuadraticBezierCurve=!0;jn.prototype.getPoint=function(n,e=new xe){const t=e,i=this.v0,r=this.v1,s=this.v2;return t.set(co(n,i.x,r.x,s.x),co(n,i.y,r.y,s.y)),t};jn.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this};jn.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n};jn.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this};function gi(n=new O,e=new O,t=new O){He.call(this),this.type="QuadraticBezierCurve3",this.v0=n,this.v1=e,this.v2=t}gi.prototype=Object.create(He.prototype);gi.prototype.constructor=gi;gi.prototype.isQuadraticBezierCurve3=!0;gi.prototype.getPoint=function(n,e=new O){const t=e,i=this.v0,r=this.v1,s=this.v2;return t.set(co(n,i.x,r.x,s.x),co(n,i.y,r.y,s.y),co(n,i.z,r.z,s.z)),t};gi.prototype.copy=function(n){return He.prototype.copy.call(this,n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this};gi.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n};gi.prototype.fromJSON=function(n){return He.prototype.fromJSON.call(this,n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this};function Yn(n=[]){He.call(this),this.type="SplineCurve",this.points=n}Yn.prototype=Object.create(He.prototype);Yn.prototype.constructor=Yn;Yn.prototype.isSplineCurve=!0;Yn.prototype.getPoint=function(n,e=new xe){const t=e,i=this.points,r=(i.length-1)*n,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return t.set(pd(o,a.x,c.x,l.x,u.x),pd(o,a.y,c.y,l.y,u.y)),t};Yn.prototype.copy=function(n){He.prototype.copy.call(this,n),this.points=[];for(let e=0,t=n.points.length;e<t;e++){const i=n.points[e];this.points.push(i.clone())}return this};Yn.prototype.toJSON=function(){const n=He.prototype.toJSON.call(this);n.points=[];for(let e=0,t=this.points.length;e<t;e++){const i=this.points[e];n.points.push(i.toArray())}return n};Yn.prototype.fromJSON=function(n){He.prototype.fromJSON.call(this,n),this.points=[];for(let e=0,t=n.points.length;e<t;e++){const i=n.points[e];this.points.push(new xe().fromArray(i))}return this};var kT=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:un,CubicBezierCurve:$n,CubicBezierCurve3:mi,EllipseCurve:yn,LineCurve:fn,LineCurve3:qn,QuadraticBezierCurve:jn,QuadraticBezierCurve3:gi,SplineCurve:Yn});function Di(){He.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Di.prototype=Object.assign(Object.create(He.prototype),{constructor:Di,add:function(n){this.curves.push(n)},closePath:function(){const n=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);n.equals(e)||this.curves.push(new fn(e,n))},getPoint:function(n){const e=n*this.getLength(),t=this.getCurveLengths();let i=0;for(;i<t.length;){if(t[i]>=e){const r=t[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const n=this.getCurveLengths();return n[n.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const n=[];let e=0;for(let t=0,i=this.curves.length;t<i;t++)e+=this.curves[t].getLength(),n.push(e);return this.cacheLengths=n,n},getSpacedPoints:function(n=40){const e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return this.autoClose&&e.push(e[0]),e},getPoints:function(n=12){const e=[];let t;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?n*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?n*s.points.length:n,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];t&&t.equals(l)||(e.push(l),t=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(n){He.prototype.copy.call(this,n),this.curves=[];for(let e=0,t=n.curves.length;e<t;e++){const i=n.curves[e];this.curves.push(i.clone())}return this.autoClose=n.autoClose,this},toJSON:function(){const n=He.prototype.toJSON.call(this);n.autoClose=this.autoClose,n.curves=[];for(let e=0,t=this.curves.length;e<t;e++){const i=this.curves[e];n.curves.push(i.toJSON())}return n},fromJSON:function(n){He.prototype.fromJSON.call(this,n),this.autoClose=n.autoClose,this.curves=[];for(let e=0,t=n.curves.length;e<t;e++){const i=n.curves[e];this.curves.push(new kT[i.type]().fromJSON(i))}return this}});function kn(n){Di.call(this),this.type="Path",this.currentPoint=new xe,n&&this.setFromPoints(n)}kn.prototype=Object.assign(Object.create(Di.prototype),{constructor:kn,setFromPoints:function(n){this.moveTo(n[0].x,n[0].y);for(let e=1,t=n.length;e<t;e++)this.lineTo(n[e].x,n[e].y);return this},moveTo:function(n,e){return this.currentPoint.set(n,e),this},lineTo:function(n,e){const t=new fn(this.currentPoint.clone(),new xe(n,e));return this.curves.push(t),this.currentPoint.set(n,e),this},quadraticCurveTo:function(n,e,t,i){const r=new jn(this.currentPoint.clone(),new xe(n,e),new xe(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this},bezierCurveTo:function(n,e,t,i,r,s){const o=new $n(this.currentPoint.clone(),new xe(n,e),new xe(t,i),new xe(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(n){const e=[this.currentPoint.clone()].concat(n),t=new Yn(e);return this.curves.push(t),this.currentPoint.copy(n[n.length-1]),this},arc:function(n,e,t,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(n+o,e+a,t,i,r,s),this},absarc:function(n,e,t,i,r,s){return this.absellipse(n,e,t,t,i,r,s),this},ellipse:function(n,e,t,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(n+c,e+l,t,i,r,s,o,a),this},absellipse:function(n,e,t,i,r,s,o,a){const c=new yn(n,e,t,i,r,s,o,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(n){return Di.prototype.copy.call(this,n),this.currentPoint.copy(n.currentPoint),this},toJSON:function(){const n=Di.prototype.toJSON.call(this);return n.currentPoint=this.currentPoint.toArray(),n},fromJSON:function(n){return Di.prototype.fromJSON.call(this,n),this.currentPoint.fromArray(n.currentPoint),this}});function gs(n){kn.call(this,n),this.uuid=$e.generateUUID(),this.type="Shape",this.holes=[]}gs.prototype=Object.assign(Object.create(kn.prototype),{constructor:gs,getPointsHoles:function(n){const e=[];for(let t=0,i=this.holes.length;t<i;t++)e[t]=this.holes[t].getPoints(n);return e},extractPoints:function(n){return{shape:this.getPoints(n),holes:this.getPointsHoles(n)}},copy:function(n){kn.prototype.copy.call(this,n),this.holes=[];for(let e=0,t=n.holes.length;e<t;e++){const i=n.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const n=kn.prototype.toJSON.call(this);n.uuid=this.uuid,n.holes=[];for(let e=0,t=this.holes.length;e<t;e++){const i=this.holes[e];n.holes.push(i.toJSON())}return n},fromJSON:function(n){kn.prototype.fromJSON.call(this,n),this.uuid=n.uuid,this.holes=[];for(let e=0,t=n.holes.length;e<t;e++){const i=n.holes[e];this.holes.push(new kn().fromJSON(i))}return this}});function xt(n,e=1){We.call(this),this.type="Light",this.color=new Ge(n),this.intensity=e}xt.prototype=Object.assign(Object.create(We.prototype),{constructor:xt,isLight:!0,copy:function(n){return We.prototype.copy.call(this,n),this.color.copy(n.color),this.intensity=n.intensity,this},toJSON:function(n){const e=We.prototype.toJSON.call(this,n);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function md(n,e,t){xt.call(this,n,t),this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new Ge(e)}md.prototype=Object.assign(Object.create(xt.prototype),{constructor:md,isHemisphereLight:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.groundColor.copy(n.groundColor),this}});function _i(n){this.camera=n,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}Object.assign(_i.prototype,{_projScreenMatrix:new et,_lightPositionWorld:new O,_lookTarget:new O,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(n){const e=this.camera,t=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(n.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(n.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(e.projectionMatrix),t.multiply(e.matrixWorldInverse)},getViewport:function(n){return this._viewports[n]},getFrameExtents:function(){return this._frameExtents},copy:function(n){return this.camera=n.camera.clone(),this.bias=n.bias,this.radius=n.radius,this.mapSize.copy(n.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const n={};return this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}});function ah(){_i.call(this,new Nt(50,1,.5,500)),this.focus=1}ah.prototype=Object.assign(Object.create(_i.prototype),{constructor:ah,isSpotLightShadow:!0,updateMatrices:function(n){const e=this.camera,t=$e.RAD2DEG*2*n.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=n.distance||e.far;(t!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=t,e.aspect=i,e.far=r,e.updateProjectionMatrix()),_i.prototype.updateMatrices.call(this,n)}});function gd(n,e,t,i,r,s){xt.call(this,n,e),this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=t!==void 0?t:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new ah}gd.prototype=Object.assign(Object.create(xt.prototype),{constructor:gd,isSpotLight:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.distance=n.distance,this.angle=n.angle,this.penumbra=n.penumbra,this.decay=n.decay,this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}});function ch(){_i.call(this,new Nt(90,1,.5,500)),this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}ch.prototype=Object.assign(Object.create(_i.prototype),{constructor:ch,isPointLightShadow:!0,updateMatrices:function(n,e=0){const t=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(n.matrixWorld),t.position.copy(r),s.copy(t.position),s.add(this._cubeDirections[e]),t.up.copy(this._cubeUps[e]),t.lookAt(s),t.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function _d(n,e,t,i){xt.call(this,n,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=t!==void 0?t:0,this.decay=i!==void 0?i:1,this.shadow=new ch}_d.prototype=Object.assign(Object.create(xt.prototype),{constructor:_d,isPointLight:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.distance=n.distance,this.decay=n.decay,this.shadow=n.shadow.clone(),this}});function lh(n=-1,e=1,t=1,i=-1,r=.1,s=2e3){Oi.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}lh.prototype=Object.assign(Object.create(Oi.prototype),{constructor:lh,isOrthographicCamera:!0,copy:function(n,e){return Oi.prototype.copy.call(this,n,e),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this},setViewOffset:function(n,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const n=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-n,s=t+n,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){const e=We.prototype.toJSON.call(this,n);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function hh(){_i.call(this,new lh(-5,5,5,-5,.5,500))}hh.prototype=Object.assign(Object.create(_i.prototype),{constructor:hh,isDirectionalLightShadow:!0,updateMatrices:function(n){_i.prototype.updateMatrices.call(this,n)}});function vd(n,e){xt.call(this,n,e),this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new hh}vd.prototype=Object.assign(Object.create(xt.prototype),{constructor:vd,isDirectionalLight:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}});function xd(n,e){xt.call(this,n,e),this.type="AmbientLight"}xd.prototype=Object.assign(Object.create(xt.prototype),{constructor:xd,isAmbientLight:!0});function yd(n,e,t,i){xt.call(this,n,e),this.type="RectAreaLight",this.width=t!==void 0?t:10,this.height=i!==void 0?i:10}yd.prototype=Object.assign(Object.create(xt.prototype),{constructor:yd,isRectAreaLight:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.width=n.width,this.height=n.height,this},toJSON:function(n){const e=xt.prototype.toJSON.call(this,n);return e.object.width=this.width,e.object.height=this.height,e}});class VT{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new O)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}function Wn(n,e){xt.call(this,void 0,e),this.type="LightProbe",this.sh=n!==void 0?n:new VT}Wn.prototype=Object.assign(Object.create(xt.prototype),{constructor:Wn,isLightProbe:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.sh.copy(n.sh),this},fromJSON:function(n){return this.intensity=n.intensity,this.sh.fromArray(n.sh),this},toJSON:function(n){const e=xt.prototype.toJSON.call(this,n);return e.object.sh=this.sh.toArray(),e}});function Md(n){gt.call(this,n),this.textures={}}Md.prototype=Object.assign(Object.create(gt.prototype),{constructor:Md,load:function(n,e,t,i){const r=this,s=new pi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(n,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(n)}},t,i)},parse:function(n){const e=this.textures;function t(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new CT[n.type];if(n.uuid!==void 0&&(i.uuid=n.uuid),n.name!==void 0&&(i.name=n.name),n.color!==void 0&&i.color!==void 0&&i.color.setHex(n.color),n.roughness!==void 0&&(i.roughness=n.roughness),n.metalness!==void 0&&(i.metalness=n.metalness),n.sheen!==void 0&&(i.sheen=new Ge().setHex(n.sheen)),n.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(n.emissive),n.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(n.specular),n.shininess!==void 0&&(i.shininess=n.shininess),n.clearcoat!==void 0&&(i.clearcoat=n.clearcoat),n.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=n.clearcoatRoughness),n.fog!==void 0&&(i.fog=n.fog),n.flatShading!==void 0&&(i.flatShading=n.flatShading),n.blending!==void 0&&(i.blending=n.blending),n.combine!==void 0&&(i.combine=n.combine),n.side!==void 0&&(i.side=n.side),n.opacity!==void 0&&(i.opacity=n.opacity),n.transparent!==void 0&&(i.transparent=n.transparent),n.alphaTest!==void 0&&(i.alphaTest=n.alphaTest),n.depthTest!==void 0&&(i.depthTest=n.depthTest),n.depthWrite!==void 0&&(i.depthWrite=n.depthWrite),n.colorWrite!==void 0&&(i.colorWrite=n.colorWrite),n.stencilWrite!==void 0&&(i.stencilWrite=n.stencilWrite),n.stencilWriteMask!==void 0&&(i.stencilWriteMask=n.stencilWriteMask),n.stencilFunc!==void 0&&(i.stencilFunc=n.stencilFunc),n.stencilRef!==void 0&&(i.stencilRef=n.stencilRef),n.stencilFuncMask!==void 0&&(i.stencilFuncMask=n.stencilFuncMask),n.stencilFail!==void 0&&(i.stencilFail=n.stencilFail),n.stencilZFail!==void 0&&(i.stencilZFail=n.stencilZFail),n.stencilZPass!==void 0&&(i.stencilZPass=n.stencilZPass),n.wireframe!==void 0&&(i.wireframe=n.wireframe),n.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=n.wireframeLinewidth),n.wireframeLinecap!==void 0&&(i.wireframeLinecap=n.wireframeLinecap),n.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=n.wireframeLinejoin),n.rotation!==void 0&&(i.rotation=n.rotation),n.linewidth!==1&&(i.linewidth=n.linewidth),n.dashSize!==void 0&&(i.dashSize=n.dashSize),n.gapSize!==void 0&&(i.gapSize=n.gapSize),n.scale!==void 0&&(i.scale=n.scale),n.polygonOffset!==void 0&&(i.polygonOffset=n.polygonOffset),n.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=n.polygonOffsetFactor),n.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=n.polygonOffsetUnits),n.skinning!==void 0&&(i.skinning=n.skinning),n.morphTargets!==void 0&&(i.morphTargets=n.morphTargets),n.morphNormals!==void 0&&(i.morphNormals=n.morphNormals),n.dithering!==void 0&&(i.dithering=n.dithering),n.vertexTangents!==void 0&&(i.vertexTangents=n.vertexTangents),n.visible!==void 0&&(i.visible=n.visible),n.toneMapped!==void 0&&(i.toneMapped=n.toneMapped),n.userData!==void 0&&(i.userData=n.userData),n.vertexColors!==void 0&&(typeof n.vertexColors=="number"?i.vertexColors=n.vertexColors>0:i.vertexColors=n.vertexColors),n.uniforms!==void 0)for(const r in n.uniforms){const s=n.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=t(s.value);break;case"c":i.uniforms[r].value=new Ge().setHex(s.value);break;case"v2":i.uniforms[r].value=new xe().fromArray(s.value);break;case"v3":i.uniforms[r].value=new O().fromArray(s.value);break;case"v4":i.uniforms[r].value=new pt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new Kt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new et().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(n.defines!==void 0&&(i.defines=n.defines),n.vertexShader!==void 0&&(i.vertexShader=n.vertexShader),n.fragmentShader!==void 0&&(i.fragmentShader=n.fragmentShader),n.extensions!==void 0)for(const r in n.extensions)i.extensions[r]=n.extensions[r];if(n.shading!==void 0&&(i.flatShading=n.shading===1),n.size!==void 0&&(i.size=n.size),n.sizeAttenuation!==void 0&&(i.sizeAttenuation=n.sizeAttenuation),n.map!==void 0&&(i.map=t(n.map)),n.matcap!==void 0&&(i.matcap=t(n.matcap)),n.alphaMap!==void 0&&(i.alphaMap=t(n.alphaMap)),n.bumpMap!==void 0&&(i.bumpMap=t(n.bumpMap)),n.bumpScale!==void 0&&(i.bumpScale=n.bumpScale),n.normalMap!==void 0&&(i.normalMap=t(n.normalMap)),n.normalMapType!==void 0&&(i.normalMapType=n.normalMapType),n.normalScale!==void 0){let r=n.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new xe().fromArray(r)}return n.displacementMap!==void 0&&(i.displacementMap=t(n.displacementMap)),n.displacementScale!==void 0&&(i.displacementScale=n.displacementScale),n.displacementBias!==void 0&&(i.displacementBias=n.displacementBias),n.roughnessMap!==void 0&&(i.roughnessMap=t(n.roughnessMap)),n.metalnessMap!==void 0&&(i.metalnessMap=t(n.metalnessMap)),n.emissiveMap!==void 0&&(i.emissiveMap=t(n.emissiveMap)),n.emissiveIntensity!==void 0&&(i.emissiveIntensity=n.emissiveIntensity),n.specularMap!==void 0&&(i.specularMap=t(n.specularMap)),n.envMap!==void 0&&(i.envMap=t(n.envMap)),n.envMapIntensity!==void 0&&(i.envMapIntensity=n.envMapIntensity),n.reflectivity!==void 0&&(i.reflectivity=n.reflectivity),n.refractionRatio!==void 0&&(i.refractionRatio=n.refractionRatio),n.lightMap!==void 0&&(i.lightMap=t(n.lightMap)),n.lightMapIntensity!==void 0&&(i.lightMapIntensity=n.lightMapIntensity),n.aoMap!==void 0&&(i.aoMap=t(n.aoMap)),n.aoMapIntensity!==void 0&&(i.aoMapIntensity=n.aoMapIntensity),n.gradientMap!==void 0&&(i.gradientMap=t(n.gradientMap)),n.clearcoatMap!==void 0&&(i.clearcoatMap=t(n.clearcoatMap)),n.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=t(n.clearcoatRoughnessMap)),n.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=t(n.clearcoatNormalMap)),n.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new xe().fromArray(n.clearcoatNormalScale)),n.transmission!==void 0&&(i.transmission=n.transmission),n.transmissionMap!==void 0&&(i.transmissionMap=t(n.transmissionMap)),i},setTextures:function(n){return this.textures=n,this}});const WT={decodeText:function(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(n){const e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function Qa(){mt.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Qa.prototype=Object.assign(Object.create(mt.prototype),{constructor:Qa,isInstancedBufferGeometry:!0,copy:function(n){return mt.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const n=mt.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function uh(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ze.call(this,n,e,t),this.meshPerAttribute=i||1}uh.prototype=Object.assign(Object.create(Ze.prototype),{constructor:uh,isInstancedBufferAttribute:!0,copy:function(n){return Ze.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){const n=Ze.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});function bd(n){gt.call(this,n)}bd.prototype=Object.assign(Object.create(gt.prototype),{constructor:bd,load:function(n,e,t,i){const r=this,s=new pi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(n,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(n)}},t,i)},parse:function(n){const e={},t={};function i(f,d){if(e[d]!==void 0)return e[d];const v=f.interleavedBuffers[d],g=r(f,v.buffer),p=ua(v.type,g),_=new gn(p,v.stride);return _.uuid=v.uuid,e[d]=_,_}function r(f,d){if(t[d]!==void 0)return t[d];const v=f.arrayBuffers[d],g=new Uint32Array(v).buffer;return t[d]=g,g}const s=n.isInstancedBufferGeometry?new Qa:new mt,o=n.data.index;if(o!==void 0){const f=ua(o.type,o.array);s.setIndex(new Ze(f,1))}const a=n.data.attributes;for(const f in a){const d=a[f];let m;if(d.isInterleavedBufferAttribute){const v=i(n.data,d.data);m=new gr(v,d.itemSize,d.offset,d.normalized)}else{const v=ua(d.type,d.array),g=d.isInstancedBufferAttribute?uh:Ze;m=new g(v,d.itemSize,d.normalized)}d.name!==void 0&&(m.name=d.name),s.setAttribute(f,m)}const c=n.data.morphAttributes;if(c)for(const f in c){const d=c[f],m=[];for(let v=0,g=d.length;v<g;v++){const p=d[v];let _;if(p.isInterleavedBufferAttribute){const M=i(n.data,p.data);_=new gr(M,p.itemSize,p.offset,p.normalized)}else{const M=ua(p.type,p.array);_=new Ze(M,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),m.push(_)}s.morphAttributes[f]=m}n.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=n.data.groups||n.data.drawcalls||n.data.offsets;if(u!==void 0)for(let f=0,d=u.length;f!==d;++f){const m=u[f];s.addGroup(m.start,m.count,m.materialIndex)}const h=n.data.boundingSphere;if(h!==void 0){const f=new O;h.center!==void 0&&f.fromArray(h.center),s.boundingSphere=new Hi(f,h.radius)}return n.name&&(s.name=n.name),n.userData&&(s.userData=n.userData),s}});function Sd(n){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),gt.call(this,n),this.options={premultiplyAlpha:"none"}}Sd.prototype=Object.assign(Object.create(gt.prototype),{constructor:Sd,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=Ps.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){Ps.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});function Gp(){this.type="ShapePath",this.color=new Ge,this.subPaths=[],this.currentPath=null}Object.assign(Gp.prototype,{moveTo:function(n,e){return this.currentPath=new kn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(n,e),this},lineTo:function(n,e){return this.currentPath.lineTo(n,e),this},quadraticCurveTo:function(n,e,t,i){return this.currentPath.quadraticCurveTo(n,e,t,i),this},bezierCurveTo:function(n,e,t,i,r,s){return this.currentPath.bezierCurveTo(n,e,t,i,r,s),this},splineThru:function(n){return this.currentPath.splineThru(n),this},toShapes:function(n,e){function t(p){const _=[];for(let M=0,S=p.length;M<S;M++){const y=p[M],x=new gs;x.curves=y.curves,_.push(x)}return _}function i(p,_){const M=_.length;let S=!1;for(let y=M-1,x=0;x<M;y=x++){let w=_[y],G=_[x],b=G.x-w.x,C=G.y-w.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(w=_[x],b=-b,G=_[y],C=-C),p.y<w.y||p.y>G.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const N=C*(p.x-w.x)-b*(p.y-w.y);if(N===0)return!0;if(N<0)continue;S=!S}}else{if(p.y!==w.y)continue;if(G.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=G.x)return!0}}return S}const r=Ni.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return t(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new gs,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=n?!u:u;const h=[],f=[];let d=[],m=0,v;f[m]=void 0,d[m]=[];for(let p=0,_=s.length;p<_;p++)a=s[p],v=a.getPoints(),o=r(v),o=n?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new gs,p:v},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1;const _=[];for(let M=0,S=f.length;M<S;M++)h[M]=[];for(let M=0,S=f.length;M<S;M++){const y=d[M];for(let x=0;x<y.length;x++){const w=y[x];let G=!0;for(let b=0;b<f.length;b++)i(w.p,f[b].p)&&(M!==b&&_.push({froms:M,tos:b,hole:x}),G?(G=!1,h[b].push(w)):p=!0);G&&h[M].push(w)}}_.length>0&&(p||(d=h))}let g;for(let p=0,_=f.length;p<_;p++){c=f[p].s,l.push(c),g=d[p];for(let M=0,S=g.length;M<S;M++)c.holes.push(g[M].h)}return l}});function Hp(n){this.type="Font",this.data=n}Object.assign(Hp.prototype,{isFont:!0,generateShapes:function(n,e=100){const t=[],i=XT(n,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(t,i[r].toShapes());return t}});function XT(n,e,t){const i=Array.from?Array.from(n):String(n).split(""),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=$T(u,r,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function $T(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new Gp;let a,c,l,u,h,f,d,m;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=v.length;g<p;)switch(v[g++]){case"m":a=v[g++]*e+t,c=v[g++]*e+i,o.moveTo(a,c);break;case"l":a=v[g++]*e+t,c=v[g++]*e+i,o.lineTo(a,c);break;case"q":l=v[g++]*e+t,u=v[g++]*e+i,h=v[g++]*e+t,f=v[g++]*e+i,o.quadraticCurveTo(h,f,l,u);break;case"b":l=v[g++]*e+t,u=v[g++]*e+i,h=v[g++]*e+t,f=v[g++]*e+i,d=v[g++]*e+t,m=v[g++]*e+i,o.bezierCurveTo(h,f,d,m,l,u);break}}return{offsetX:s.ha*e,path:o}}function Ed(n){gt.call(this,n)}Ed.prototype=Object.assign(Object.create(gt.prototype),{constructor:Ed,load:function(n,e,t,i){const r=this,s=new pi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(n,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},t,i)},parse:function(n){return new Hp(n)}});let Ia;const qT={getContext:function(){return Ia===void 0&&(Ia=new(window.AudioContext||window.webkitAudioContext)),Ia},setContext:function(n){Ia=n}};function wd(n){gt.call(this,n)}wd.prototype=Object.assign(Object.create(gt.prototype),{constructor:wd,load:function(n,e,t,i){const r=this,s=new pi(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(n,function(o){try{const a=o.slice(0);qT.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(n)}},t,i)}});function Td(n,e,t){Wn.call(this,void 0,t);const i=new Ge().set(n),r=new Ge().set(e),s=new O(i.r,i.g,i.b),o=new O(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Td.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Td,isHemisphereLightProbe:!0,copy:function(n){return Wn.prototype.copy.call(this,n),this},toJSON:function(n){return Wn.prototype.toJSON.call(this,n)}});function Ad(n,e){Wn.call(this,void 0,e);const t=new Ge().set(n);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}Ad.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Ad,isAmbientLightProbe:!0,copy:function(n){return Wn.prototype.copy.call(this,n),this},toJSON:function(n){return Wn.prototype.toJSON.call(this,n)}});const Rd=new et,Ld=new et;function jT(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(jT.prototype,{update:function(n){const e=this._cache;if(e.focus!==n.focus||e.fov!==n.fov||e.aspect!==n.aspect*this.aspect||e.near!==n.near||e.far!==n.far||e.zoom!==n.zoom||e.eyeSep!==this.eyeSep){e.focus=n.focus,e.fov=n.fov,e.aspect=n.aspect*this.aspect,e.near=n.near,e.far=n.far,e.zoom=n.zoom,e.eyeSep=this.eyeSep;const i=n.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan($e.DEG2RAD*e.fov*.5)/e.zoom;let a,c;Ld.elements[12]=-r,Rd.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(n.matrixWorld).multiply(Ld),this.cameraR.matrixWorld.copy(n.matrixWorld).multiply(Rd)}});function kp(n,e,t){this.binding=n,this.valueSize=t;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(t*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(t*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(t*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(kp.prototype,{accumulate:function(n,e){const t=this.buffer,i=this.valueSize,r=n*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)t[r+o]=t[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(t,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(n){const e=this.buffer,t=this.valueSize,i=t*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,n,t),this.cumulativeWeightAdditive+=n},apply:function(n){const e=this.valueSize,t=this.buffer,i=n*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(t,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(t,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(t[a]!==t[a+e]){o.setValue(t,i);break}},saveOriginalState:function(){const n=this.binding,e=this.buffer,t=this.valueSize,i=t*this._origIndex;n.getValue(e,i);for(let r=t,s=i;r!==s;++r)e[r]=e[i+r%t];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const n=this.valueSize*3;this.binding.setValue(this.buffer,n)},_setAdditiveIdentityNumeric:function(){const n=this._addIndex*this.valueSize,e=n+this.valueSize;for(let t=n;t<e;t++)this.buffer[t]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const n=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let t=0;t<this.valueSize;t++)this.buffer[e+t]=this.buffer[n+t]},_select:function(n,e,t,i,r){if(i>=.5)for(let s=0;s!==r;++s)n[e+s]=n[t+s]},_slerp:function(n,e,t,i){Ht.slerpFlat(n,e,n,e,n,t,i)},_slerpAdditive:function(n,e,t,i,r){const s=this._workIndex*r;Ht.multiplyQuaternionsFlat(n,s,n,e,n,t),Ht.slerpFlat(n,e,n,e,n,s,i)},_lerp:function(n,e,t,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;n[a]=n[a]*s+n[t+o]*i}},_lerpAdditive:function(n,e,t,i,r){for(let s=0;s!==r;++s){const o=e+s;n[o]=n[o]+n[t+s]*i}}});const Rh="\\[\\]\\.:\\/",YT=new RegExp("["+Rh+"]","g"),Lh="[^"+Rh+"]",ZT="[^"+Rh.replace("\\.","")+"]",JT=/((?:WC+[\/:])*)/.source.replace("WC",Lh),KT=/(WCOD+)?/.source.replace("WCOD",ZT),QT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),eA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),tA=new RegExp("^"+JT+KT+QT+eA+"$"),nA=["material","materials","bones"];function Vp(n,e,t){const i=t||Zt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(Vp.prototype,{getValue:function(n,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function Zt(n,e,t){this.path=e,this.parsedPath=t||Zt.parseTrackName(e),this.node=Zt.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(Zt,{Composite:Vp,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new Zt.Composite(n,e,t):new Zt(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(YT,"")},parseTrackName:function(n){const e=tA.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);const t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=t.nodeName.substring(i+1);nA.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){const t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){const t=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(Zt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node;const e=this.parsedPath,t=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(n||(n=Zt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let c=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let l=0;l<n.length;l++)if(n[l].name===c){c=l;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(c!==void 0){if(n[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[c]}}const s=n[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(Zt.prototype,{_getValue_unbound:Zt.prototype.getValue,_setValue_unbound:Zt.prototype.setValue});function iA(){this.uuid=$e.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const n={};this._indicesByUUID=n;for(let t=0,i=arguments.length;t!==i;++t)n[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(iA.prototype,{isAnimationObjectGroup:!0,add:function(){const n=this._objects,e=this._indicesByUUID,t=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=n.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){const h=arguments[l],f=h.uuid;let d=e[f];if(d===void 0){d=a++,e[f]=d,n.push(h);for(let m=0,v=s;m!==v;++m)r[m].push(new Zt(h,t[m],i[m]))}else if(d<c){o=n[d];const m=--c,v=n[m];e[v.uuid]=d,n[d]=v,e[f]=m,n[m]=h;for(let g=0,p=s;g!==p;++g){const _=r[g],M=_[m];let S=_[d];_[d]=M,S===void 0&&(S=new Zt(h,t[g],i[g])),_[m]=S}}else n[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const n=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const u=r++,h=n[u];e[h.uuid]=l,n[l]=h,e[c]=u,n[u]=a;for(let f=0,d=i;f!==d;++f){const m=t[f],v=m[u],g=m[l];m[l]=v,m[u]=g}}}this.nCachedObjects_=r},uncache:function(){const n=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length;let r=this.nCachedObjects_,s=n.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0)if(delete e[l],u<r){const h=--r,f=n[h],d=--s,m=n[d];e[f.uuid]=u,n[u]=f,e[m.uuid]=h,n[h]=m,n.pop();for(let v=0,g=i;v!==g;++v){const p=t[v],_=p[h],M=p[d];p[u]=_,p[h]=M,p.pop()}}else{const h=--s,f=n[h];h>0&&(e[f.uuid]=u),n[u]=f,n.pop();for(let d=0,m=i;d!==m;++d){const v=t[d];v[u]=v[h],v.pop()}}}this.nCachedObjects_=r},subscribe_:function(n,e){const t=this._bindingsIndicesByPath;let i=t[n];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,t[n]=i,s.push(n),o.push(e),r.push(u);for(let h=l,f=a.length;h!==f;++h){const d=a[h];u[h]=new Zt(d,n,e)}return u},unsubscribe_:function(n){const e=this._bindingsIndicesByPath,t=e[n];if(t!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=n[o];e[c]=t,s[t]=a,s.pop(),r[t]=r[o],r.pop(),i[t]=i[o],i.pop()}}});class rA{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:ss,endingEnd:ss};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=TM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case vp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Th:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===AM;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===wM){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=os,r.endingEnd=os):(e?r.endingStart=this.zeroSlopeAtStart?os:ss:r.endingStart=Wa,t?r.endingEnd=this.zeroSlopeAtEnd?os:ss:r.endingEnd=Wa)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}}function Cd(n){this._root=n,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Cd.prototype=Object.assign(Object.create(Zn.prototype),{constructor:Cd,_bindAction:function(n,e){const t=n._localRoot||this._root,i=n._clip.tracks,r=i.length,s=n._propertyBindings,o=n._interpolants,a=t.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){const h=i[u],f=h.name;let d=l[f];if(d!==void 0)s[u]=d;else{if(d=s[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;d=new kp(Zt.create(t,f,m),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),s[u]=d}o[u].resultBuffer=d.buffer}},_activateAction:function(n){if(!this._isActiveAction(n)){if(n._cacheIndex===null){const t=(n._localRoot||this._root).uuid,i=n._clip.uuid,r=this._actionsByClip[i];this._bindAction(n,r&&r.knownActions[0]),this._addInactiveAction(n,i,t)}const e=n._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const r=e[t];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(n)}},_deactivateAction:function(n){if(this._isActiveAction(n)){const e=n._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const r=e[t];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(n)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const n=this;this.stats={actions:{get total(){return n._actions.length},get inUse(){return n._nActiveActions}},bindings:{get total(){return n._bindings.length},get inUse(){return n._nActiveBindings}},controlInterpolants:{get total(){return n._controlInterpolants.length},get inUse(){return n._nActiveControlInterpolants}}}},_isActiveAction:function(n){const e=n._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(n,e,t){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[n],actionByRoot:{}},n._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;n._byClipCacheIndex=o.length,o.push(n)}n._cacheIndex=i.length,i.push(n),s.actionByRoot[t]=n},_removeInactiveAction:function(n){const e=this._actions,t=e[e.length-1],i=n._cacheIndex;t._cacheIndex=i,e[i]=t,e.pop(),n._cacheIndex=null;const r=n._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=n._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),n._byClipCacheIndex=null;const u=o.actionByRoot,h=(n._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(n)},_removeInactiveBindingsForAction:function(n){const e=n._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const r=e[t];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(n){const e=this._actions,t=n._cacheIndex,i=this._nActiveActions++,r=e[i];n._cacheIndex=i,e[i]=n,r._cacheIndex=t,e[t]=r},_takeBackAction:function(n){const e=this._actions,t=n._cacheIndex,i=--this._nActiveActions,r=e[i];n._cacheIndex=i,e[i]=n,r._cacheIndex=t,e[t]=r},_addInactiveBinding:function(n,e,t){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[t]=n,n._cacheIndex=r.length,r.push(n)},_removeInactiveBinding:function(n){const e=this._bindings,t=n.binding,i=t.rootNode.uuid,r=t.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=n._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(n){const e=this._bindings,t=n._cacheIndex,i=this._nActiveBindings++,r=e[i];n._cacheIndex=i,e[i]=n,r._cacheIndex=t,e[t]=r},_takeBackBinding:function(n){const e=this._bindings,t=n._cacheIndex,i=--this._nActiveBindings,r=e[i];n._cacheIndex=i,e[i]=n,r._cacheIndex=t,e[t]=r},_lendControlInterpolant:function(){const n=this._controlInterpolants,e=this._nActiveControlInterpolants++;let t=n[e];return t===void 0&&(t=new Za(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),t.__cacheIndex=e,n[e]=t),t},_takeBackControlInterpolant:function(n){const e=this._controlInterpolants,t=n.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];n.__cacheIndex=i,e[i]=n,r.__cacheIndex=t,e[t]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(n,e,t){const i=e||this._root,r=i.uuid;let s=typeof n=="string"?Dn.findByName(i,n):n;const o=s!==null?s.uuid:n,a=this._actionsByClip[o];let c=null;if(t===void 0&&(s!==null?t=s.blendMode:t=Th),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===t)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new rA(this,s,e,t);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(n,e){const t=e||this._root,i=t.uuid,r=typeof n=="string"?Dn.findByName(t,n):n,s=r?r.uuid:n,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const n=this._actions,e=this._nActiveActions;for(let t=e-1;t>=0;--t)n[t].stop();return this},update:function(n){n*=this.timeScale;const e=this._actions,t=this._nActiveActions,i=this.time+=n,r=Math.sign(n),s=this._accuIndex^=1;for(let c=0;c!==t;++c)e[c]._update(i,n,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(n){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(n)},getRoot:function(){return this._root},uncacheClip:function(n){const e=this._actions,t=n.uuid,i=this._actionsByClip,r=i[t];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,e[l]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[t]}},uncacheRoot:function(n){const e=n.uuid,t=this._actionsByClip;for(const s in t){const o=t[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(n,e){const t=this.existingAction(n,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}});function Pd(n,e,t){gn.call(this,n,e),this.meshPerAttribute=t||1}Pd.prototype=Object.assign(Object.create(gn.prototype),{constructor:Pd,isInstancedInterleavedBuffer:!0,copy:function(n){return gn.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){const e=gn.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){const e=gn.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Wp(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Wp.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Wp.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function Xp(n,e,t,i){this.ray=new Do(n,e),this.near=t||0,this.far=i||1/0,this.camera=null,this.layers=new yp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Dd(n,e){return n.distance-e.distance}function fh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)fh(r[s],e,t,!0)}}Object.assign(Xp.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e,t){const i=t||[];return fh(n,this,i,e),i.sort(Dd),i},intersectObjects:function(n,e,t){const i=t||[];if(Array.isArray(n)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=n.length;r<s;r++)fh(n[r],this,i,e);return i.sort(Dd),i}});const Id=new xe;class sA{constructor(e,t){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new xe(1/0,1/0),this.max=t!==void 0?t:new xe(-1/0,-1/0)}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Id.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new xe),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new xe),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new xe),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new xe),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Id.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function ec(n){We.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ec.prototype=Object.create(We.prototype);ec.prototype.constructor=ec;ec.prototype.isImmediateRenderObject=!0;const Ci=new O,Ua=new et,bl=new et;class oA extends $a{constructor(e){const t=$p(e),i=new mt,r=[],s=[],o=new Ge(0,0,1),a=new Ge(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new ut(r,3)),i.setAttribute("color",new ut(s,3));const c=new xn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");bl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ua.multiplyMatrices(bl,a.matrixWorld),Ci.setFromMatrixPosition(Ua),r.setXYZ(o,Ci.x,Ci.y,Ci.z),Ua.multiplyMatrices(bl,a.parent.matrixWorld),Ci.setFromMatrixPosition(Ua),r.setXYZ(o+1,Ci.x,Ci.y,Ci.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function $p(n){const e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,$p(n.children[t]));return e}class aA extends $a{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const v=f===s?i:r;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}const u=new mt;u.setAttribute("position",new ut(c,3)),u.setAttribute("color",new ut(l,3));const h=new xn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const cA=new Float32Array(1);new Int32Array(cA.buffer);He.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(He.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Object.assign(Di.prototype,{createPointsGeometry:function(n){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(n);return this.createGeometry(e)},createSpacedPointsGeometry:function(n){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(n);return this.createGeometry(e)},createGeometry:function(n){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new In;for(let t=0,i=n.length;t<i;t++){const r=n[t];e.vertices.push(new O(r.x,r.y,r.z||0))}return e}});Object.assign(kn.prototype,{fromPoints:function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)}});Object.create(un.prototype);Object.create(un.prototype);function qp(n){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),un.call(this,n),this.type="catmullrom"}qp.prototype=Object.create(un.prototype);Object.assign(qp.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});aA.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};oA.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(gt.prototype,{extractUrlBase:function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),WT.extractUrlBase(n)}});gt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(sA.prototype,{center:function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},size:function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)}});Object.assign(Gi.prototype,{center:function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},isIntersectionSphere:function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)},size:function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)}});Object.assign(Hi.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});hc.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Object.assign($e,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),$e.floorPowerOfTwo(n)},nextPowerOfTwo:function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),$e.ceilPowerOfTwo(n)}});Object.assign(Kt.prototype,{flattenToArrayOffset:function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)},multiplyVector3:function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()}});Object.assign(et.prototype,{extractPosition:function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)},flattenToArrayOffset:function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new O().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},multiplyVector4:function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)},crossVector:function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)},getInverse:function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()}});li.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};Object.assign(Ht.prototype,{multiplyVector3:function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(Do.prototype,{isIntersectionBox:function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},isIntersectionPlane:function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)},isIntersectionSphere:function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)}});Object.assign(zt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)},midpoint:function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)},normal:function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)},plane:function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)}});Object.assign(zt,{barycoordFromPoint:function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),zt.getBarycoord(n,e,t,i,r)},normal:function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),zt.getNormal(n,e,t,i)}});Object.assign(gs.prototype,{extractAllPoints:function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)},extrude:function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ET(this,n)},makeGeometry:function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new RT(this,n)}});Object.assign(xe.prototype,{fromAttribute:function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},distanceToManhattan:function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(O.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)},getScaleFromMatrix:function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)},getColumnFromMatrix:function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)},applyProjection:function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)},fromAttribute:function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},distanceToManhattan:function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(pt.prototype,{fromAttribute:function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(In.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(n){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)}});Object.assign(We.prototype,{getChildByName:function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)}});Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(kt.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(kt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),RM},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Xl.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(jl.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});$l.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(He.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});Nt.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(xt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Ze.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===po},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(po)}}});Object.assign(Ze.prototype,{setDynamic:function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?po:lc),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(mt.prototype,{addIndex:function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)},addAttribute:function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Ze(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)},addDrawCall:function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)},applyMatrix:function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)}});Object.defineProperties(mt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Qa.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(Xp.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(gn.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===po},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});Object.assign(gn.prototype,{setDynamic:function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?po:lc),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(zp.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(tT.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Xe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===pp}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(yr.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(xr.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(tn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Object.assign(uc.prototype,{clearTarget:function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)},animate:function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(uc.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?xp:Po}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ip.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Nn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});bs.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};bs.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Ns.crossOrigin=void 0;Ns.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new oh;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Ns.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new sh;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Ns.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ns.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iy}}));var tc=function(n){var e=this,t={type:"change"},i=1e-6;this.object=n,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0;var r=function(a){e.deviceOrientation=a},s=function(){e.screenOrientation=window.orientation||0},o=function(){var a=new O(0,0,1),c=new Fs,l=new Ht,u=new Ht(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(h,f,d,m,v){c.set(d,f,-m,"YXZ"),h.setFromEuler(c),h.multiply(u),h.multiply(l.setFromAxisAngle(a,-v))}}();this.connect=function(){s(),window.DeviceOrientationEvent!==void 0&&typeof window.DeviceOrientationEvent.requestPermission=="function"?window.DeviceOrientationEvent.requestPermission().then(function(a){a=="granted"&&(window.addEventListener("orientationchange",s,!1),window.addEventListener("deviceorientation",r,!1))}).catch(function(a){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",a)}):(window.addEventListener("orientationchange",s,!1),window.addEventListener("deviceorientation",r,!1)),e.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",s,!1),window.removeEventListener("deviceorientation",r,!1),e.enabled=!1},this.update=function(){var a=new Ht;return function(){if(e.enabled!==!1){var c=e.deviceOrientation;if(c){var l=c.alpha?$e.degToRad(c.alpha)+e.alphaOffset:0,u=c.beta?$e.degToRad(c.beta):0,h=c.gamma?$e.degToRad(c.gamma):0,f=e.screenOrientation?$e.degToRad(e.screenOrientation):0;o(e.object.quaternion,l,u,h,f),8*(1-a.dot(e.object.quaternion))>i&&(a.copy(e.object.quaternion),e.dispatchEvent(t))}}}}(),this.dispose=function(){e.disconnect()},this.connect()};tc.prototype=Object.create(Zn.prototype);tc.prototype.constructor=tc;const es=new mh(0,0,0,"YXZ"),ts=new re,lA={type:"change"},hA={type:"lock"},uA={type:"unlock"},Ud=Math.PI/2;class fA extends Mr{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=dA.bind(this),this._onPointerlockChange=pA.bind(this),this._onPointerlockError=mA.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;ts.setFromMatrixColumn(t.matrix,0),ts.crossVectors(t.up,ts),t.position.addScaledVector(ts,e)}moveRight(e){const t=this.camera;ts.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ts,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function dA(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;es.setFromQuaternion(i.quaternion),es.y-=e*.002*this.pointerSpeed,es.x-=t*.002*this.pointerSpeed,es.x=Math.max(Ud-this.maxPolarAngle,Math.min(Ud-this.minPolarAngle,es.x)),i.quaternion.setFromEuler(es),this.dispatchEvent(lA)}function pA(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(hA),this.isLocked=!0):(this.dispatchEvent(uA),this.isLocked=!1)}function mA(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}var Mt=function(n){n=n||{},this._container=n.container||document.body,this._strokeStyle=n.strokeStyle||"white",this._stickEl=n.stickElement||this._buildJoystickStick(),this._baseEl=n.baseElement||this._buildJoystickBase(),this._mouseSupport=n.mouseSupport!==void 0?n.mouseSupport:!1,this._stationaryBase=n.stationaryBase||!1,this._baseX=this._stickX=n.baseX||0,this._baseY=this._stickY=n.baseY||0,this._limitStickTravel=n.limitStickTravel||!1,this._stickRadius=n.stickRadius!==void 0?n.stickRadius:100,this._useCssTransform=n.useCssTransform!==void 0?n.useCssTransform:!1,this._container.style.position="relative",this._container.appendChild(this._baseEl),this._baseEl.style.position="absolute",this._baseEl.style.display="none",this._container.appendChild(this._stickEl),this._stickEl.style.position="absolute",this._stickEl.style.display="none",this._pressed=!1,this._touchIdx=null,this._stationaryBase===!0&&(this._baseEl.style.display="",this._baseEl.style.left=this._baseX-this._baseEl.width/2+"px",this._baseEl.style.top=this._baseY-this._baseEl.height/2+"px"),this._transform=this._useCssTransform?this._getTransformProperty():!1,this._has3d=this._check3D();var e=function(t,i){return function(){return t.apply(i,arguments)}};this._$onTouchStart=e(this._onTouchStart,this),this._$onTouchEnd=e(this._onTouchEnd,this),this._$onTouchMove=e(this._onTouchMove,this),this._container.addEventListener("touchstart",this._$onTouchStart,!1),this._container.addEventListener("touchend",this._$onTouchEnd,!1),this._container.addEventListener("touchmove",this._$onTouchMove,!1),this._mouseSupport&&(this._$onMouseDown=e(this._onMouseDown,this),this._$onMouseUp=e(this._onMouseUp,this),this._$onMouseMove=e(this._onMouseMove,this),this._container.addEventListener("mousedown",this._$onMouseDown,!1),this._container.addEventListener("mouseup",this._$onMouseUp,!1),this._container.addEventListener("mousemove",this._$onMouseMove,!1))};Mt.prototype.destroy=function(){this._container.removeChild(this._baseEl),this._container.removeChild(this._stickEl),this._container.removeEventListener("touchstart",this._$onTouchStart,!1),this._container.removeEventListener("touchend",this._$onTouchEnd,!1),this._container.removeEventListener("touchmove",this._$onTouchMove,!1),this._mouseSupport&&(this._container.removeEventListener("mouseup",this._$onMouseUp,!1),this._container.removeEventListener("mousedown",this._$onMouseDown,!1),this._container.removeEventListener("mousemove",this._$onMouseMove,!1))};Mt.touchScreenAvailable=function(){return"createTouch"in document};(function(n){n.addEventListener=function(e,t){return this._events===void 0&&(this._events={}),this._events[e]=this._events[e]||[],this._events[e].push(t),t},n.removeEventListener=function(e,t){this._events===void 0&&(this._events={}),e in this._events&&this._events[e].splice(this._events[e].indexOf(t),1)},n.dispatchEvent=function(e){if(this._events===void 0&&(this._events={}),this._events[e]!==void 0)for(var t=this._events[e].slice(),i=0;i<t.length;i++){var r=t[i].apply(this,Array.prototype.slice.call(arguments,1));if(r!==void 0)return r}}})(Mt.prototype);Mt.prototype.deltaX=function(){return this._stickX-this._baseX};Mt.prototype.deltaY=function(){return this._stickY-this._baseY};Mt.prototype.up=function(){if(this._pressed===!1)return!1;var n=this.deltaX(),e=this.deltaY();return!(e>=0||Math.abs(n)>2*Math.abs(e))};Mt.prototype.down=function(){if(this._pressed===!1)return!1;var n=this.deltaX(),e=this.deltaY();return!(e<=0||Math.abs(n)>2*Math.abs(e))};Mt.prototype.right=function(){if(this._pressed===!1)return!1;var n=this.deltaX(),e=this.deltaY();return!(n<=0||Math.abs(e)>2*Math.abs(n))};Mt.prototype.left=function(){if(this._pressed===!1)return!1;var n=this.deltaX(),e=this.deltaY();return!(n>=0||Math.abs(e)>2*Math.abs(n))};Mt.prototype._onUp=function(){this._pressed=!1,this._stickEl.style.display="none",this._stationaryBase==!1&&(this._baseEl.style.display="none",this._baseX=this._baseY=0,this._stickX=this._stickY=0)};Mt.prototype._onDown=function(n,e){if(this._pressed=!0,this._stationaryBase==!1&&(this._baseX=n,this._baseY=e,this._baseEl.style.display="",this._move(this._baseEl.style,this._baseX-this._baseEl.width/2,this._baseY-this._baseEl.height/2)),this._stickX=n,this._stickY=e,this._limitStickTravel===!0){var t=this.deltaX(),i=this.deltaY(),r=Math.sqrt(t*t+i*i);if(r>this._stickRadius){var s=t/r,o=i/r;this._stickX=s*this._stickRadius+this._baseX,this._stickY=o*this._stickRadius+this._baseY}}this._stickEl.style.display="",this._move(this._stickEl.style,this._stickX-this._stickEl.width/2,this._stickY-this._stickEl.height/2)};Mt.prototype._onMove=function(n,e){if(this._pressed===!0){if(this._stickX=n,this._stickY=e,this._limitStickTravel===!0){var t=this.deltaX(),i=this.deltaY(),r=Math.sqrt(t*t+i*i);if(r>this._stickRadius){var s=t/r,o=i/r;this._stickX=s*this._stickRadius+this._baseX,this._stickY=o*this._stickRadius+this._baseY}}this._move(this._stickEl.style,this._stickX-this._stickEl.width/2,this._stickY-this._stickEl.height/2)}};Mt.prototype._onMouseUp=function(n){return this._onUp()};Mt.prototype._onMouseDown=function(n){n.preventDefault();var e=n.clientX,t=n.clientY;return this._onDown(e,t)};Mt.prototype._onMouseMove=function(n){var e=n.clientX,t=n.clientY;return this._onMove(e,t)};Mt.prototype._onTouchStart=function(n){if(this._touchIdx===null){var e=this.dispatchEvent("touchStartValidation",n);if(e!==!1){this.dispatchEvent("touchStart",n),n.preventDefault();var t=n.changedTouches[0];this._touchIdx=t.identifier;var i=t.pageX,r=t.pageY;return this._onDown(i,r)}}};Mt.prototype._onTouchEnd=function(n){if(this._touchIdx!==null){this.dispatchEvent("touchEnd",n);for(var e=n.changedTouches,t=0;t<e.length&&e[t].identifier!==this._touchIdx;t++);if(t!==e.length)return this._touchIdx=null,n.preventDefault(),this._onUp()}};Mt.prototype._onTouchMove=function(n){if(this._touchIdx!==null){for(var e=n.changedTouches,t=0;t<e.length&&e[t].identifier!==this._touchIdx;t++);if(t!==e.length){var i=e[t];n.preventDefault();var r=i.pageX,s=i.pageY;return this._onMove(r,s)}}};Mt.prototype._buildJoystickBase=function(){var n=document.createElement("canvas");n.width=50,n.height=50;var e=n.getContext("2d");return e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=1,e.arc(n.width/2,n.width/2,10,0,Math.PI*2,!0),e.stroke(),e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=2,e.arc(n.width/2,n.width/2,15,0,Math.PI*2,!0),e.stroke(),n};Mt.prototype._buildJoystickStick=function(){var n=document.createElement("canvas");n.width=70,n.height=70;var e=n.getContext("2d");return e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=2,e.arc(n.width/2,n.width/2,30,0,Math.PI*2,!0),e.stroke(),n};Mt.prototype._move=function(n,e,t){this._transform?this._has3d?n[this._transform]="translate3d("+e+"px,"+t+"px, 0)":n[this._transform]="translate("+e+"px,"+t+"px)":(n.left=e+"px",n.top=t+"px")};Mt.prototype._getTransformProperty=function(){for(var n=["webkitTransform","MozTransform","msTransform","OTransform","transform"],e=document.createElement("p"),t,i=0;i<n.length;i++)if(t=n[i],e.style[t]!=null)return t};Mt.prototype._check3D=function(){var n=this._getTransformProperty();if(!n||!window.getComputedStyle)return Yp.exports=!1;var e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"},t=document.createElement("div");t.style[n]="translate3d(1px,1px,1px)",document.body.insertBefore(t,null);var i=getComputedStyle(t).getPropertyValue(e[n]);document.body.removeChild(t);var r=i!=null&&i.length&&i!="none";return r};class gA{constructor(e){this.blocker=document.getElementById("blocker"),this.instructions=document.getElementById("instructions"),this.camera=e,this.joystick=null,this.controls=null,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.update=()=>{},this.prevTime=performance.now(),this.velocity=new re,this.direction=new re,this.isMobile()?this.createMobileControls():this.createDesktopControls()}createDesktopControls(){this.changeSpanText(),this.controls=new fA(this.camera,document.body),this.instructions.addEventListener("click",()=>{this.controls.lock(),this.openFullscreen()}),this.controls.addEventListener("unlock",()=>{this.blocker.style.display="block",this.instructions.style.display=""}),this.controls.addEventListener("lock",()=>{this.clearBlocker()}),this.update=this.updateDesktop,document.addEventListener("keydown",this.onKeyDown.bind(this),!1),document.addEventListener("keyup",this.onKeyUp.bind(this),!1)}createMobileControls(){this.changeSpanText(),this.instructions.addEventListener("click",()=>{this.openFullscreen(),this.clearBlocker(),this.controls=new tc(this.camera),this.joystick=new Mt({container:document.body,mouseSupport:!0}),this.update=this.updateMobile},!1)}clearBlocker(){this.instructions.style.display="none",this.blocker.style.display="none"}changeSpanText(){const e=document.getElementById("text-span");this.instructions.style.backgroundColor="rgba(255,255,255,1)",e.innerText="Нажмите для продолжения"}openFullscreen(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen().then(()=>{}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)}updateMobile(){this.controls.update();let e=this.joystick.deltaX();(e>-40&&e<0||e>0&&e<40)&&(e=0);let t=this.joystick.deltaY();const i=1e-6,r=1e-6,s=performance.now(),o=new re;this.camera.getWorldDirection(o);const a=new re;a.crossVectors(o,new re(0,1,0));const c=a.multiplyScalar(e*s*r),l=o.multiplyScalar(-t*s*i),u=.1;l.length()>u&&l.normalize().multiplyScalar(u),c.length()>u&&c.normalize().multiplyScalar(u),this.camera.position.add(l),this.camera.position.add(c),this.camera.position.y=10}updateDesktop(){const e=performance.now();if(this.controls.isLocked===!0){const t=(e-this.prevTime)/500;this.velocity.x-=this.velocity.x*75*t,this.velocity.z-=this.velocity.z*75*t,this.velocity.y-=9.8*100*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*400*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*400*t),this.controls.moveRight(-this.velocity.x*t),this.controls.moveForward(-this.velocity.z*t),this.controls.getObject().position.y=10}this.prevTime=e}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}}}class _A{constructor(){this.cubes=[],this.scene=this.createScene(),this.camera=this.createCamera(),this.renderer=this.createRenderer(),this.controls=null,this.animate=()=>{},this.createLight(),this.createWalls(),this.loadModel(),window.addEventListener("resize",this.onWindowResize.bind(this))}anim(){this.checkCollisions(),this.controls.update(),this.checkCollisions(),this.renderer.render(this.scene,this.camera)}createCamera(){let e=new mn(75,window.innerWidth/window.innerHeight,.01,1e3);return e.position.set(7,10,3),this.scene.add(e),e}createScene(){let e=new Q0;return e.background=new dt(16777215),e.fog=new yh(16777215,0,750),e}createRenderer(){let e=new fp({antialias:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.render(this.scene,this.camera),document.body.appendChild(e.domElement),e.render(this.scene,this.camera),e}loadModel(){const e="https://etoart.github.io/museumdefence/models/comp.glb",t=document.getElementById("loading-bar-progress");caches.open("my-cache").then(i=>{i.match(e).then(r=>{r?r.json().then(s=>{const a=new(void 0)().parse(s).scene;a.scale.set(6,6,6),this.scene.add(a)}):new(void 0)().load(e,o=>{const a=o.scene;a.scale.set(6,6,6),this.scene.add(a),i.put(e,new Response(JSON.stringify(o.clone())))},o=>{const a=o.loaded/o.total*100;t.style.width=a+"%"},o=>{console.log("Ошибка загрузки модели: "+o.message)})})}).catch(i=>{console.log("Ошибка кэширования: "+i.message)}),this.controls=new gA(this.camera),this.animate=this.anim}createLight(){const e=new ty(15658751,7829384,1.2);e.position.set(.5,1,.75),this.scene.add(e)}createWalls(){const e=new _h({visible:!1});[{position:[0,0,15],size:[75,30,6],rotation:[0,0,0]},{position:[-28.5,0,-15],size:[20,30,6],rotation:[0,0,0]},{position:[21,0,-15],size:[40,30,4],rotation:[0,0,0]},{position:[0,0,-32],size:[75,30,10],rotation:[0,0,0]},{position:[38,0,0],size:[70,30,10],rotation:[0,Math.PI/2,0]},{position:[-37,0,0],size:[70,30,10],rotation:[0,Math.PI/2,0]},{position:[0,0,0],size:[7,30,7],rotation:[0,Math.PI/2,0]}].forEach(i=>{const r=new ui(new Ds(...i.size),e);r.position.set(...i.position),r.rotation.set(...i.rotation),this.scene.add(r),this.cubes.push(r)})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}checkCollisions(){const e=this.camera.position.clone();[{direction:new re(1,0,0),axis:"x",offset:-.1},{direction:new re(-1,0,0),axis:"x",offset:.1},{direction:new re(0,0,-1),axis:"z",offset:.1},{direction:new re(0,0,1),axis:"z",offset:-.1}].forEach(({direction:i,axis:r,offset:s})=>{const a=new ny(e,i).intersectObjects(this.cubes);a.length>0&&a[0].distance<1&&(this.camera.position[r]+=s)})}}let vA=new _A;jp();function jp(){requestAnimationFrame(jp),vA.animate()}});export default xA();
//# sourceMappingURL=index-c8fb272b.js.map
