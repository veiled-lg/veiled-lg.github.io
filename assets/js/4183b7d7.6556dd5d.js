"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[9199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="register",l={unversionedId:"lua/veiled/register",id:"lua/veiled/register",title:"register",description:"Registers a script for the desired process, which will be executed as soon as the process is started.",source:"@site/docs/lua/veiled/register.md",sourceDirName:"lua/veiled",slug:"/lua/veiled/register",permalink:"/docs/lua/veiled/register",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Veiled",permalink:"/docs/category/veiled"},next:{title:"bit_mask",permalink:"/docs/lua/veiled/bit_mask"}},s={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>process</code>",id:"process",level:3},{value:"<code>script</code>",id:"script",level:3},{value:"Return value",id:"return-value",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register"},"register"),(0,i.kt)("p",null,"Registers a ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," for the desired ",(0,i.kt)("inlineCode",{parentName:"p"},"process"),", which will be executed as soon as the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," is started."),(0,i.kt)("h2",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".register(process, script)")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Veiled.register('csgo.exe', 'some-script');\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"process"},(0,i.kt)("inlineCode",{parentName:"h3"},"process")),(0,i.kt)("p",null,"The name of the target process."),(0,i.kt)("h3",{id:"script"},(0,i.kt)("inlineCode",{parentName:"h3"},"script")),(0,i.kt)("p",null,"The name of the script to run when ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," exists."),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"The function returns no value."))}u.isMDXComponent=!0}}]);