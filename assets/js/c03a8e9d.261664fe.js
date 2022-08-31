"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[7733],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7003:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},l="From hex",i={unversionedId:"lua/render/color/new/hex",id:"lua/render/color/new/hex",title:"From hex",description:"Creates a new Color userdata and assigns it the values from hex to it.",source:"@site/docs/lua/render/color/new/hex.md",sourceDirName:"lua/render/color/new",slug:"/lua/render/color/new/hex",permalink:"/docs/lua/render/color/new/hex",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"From rgba",permalink:"/docs/lua/render/color/new/rgba"},next:{title:"From string",permalink:"/docs/lua/render/color/new/string"}},c={},u=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>hex</code>",id:"hex",level:3},{value:"Return value",id:"return-value",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"from-hex"},"From hex"),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")," ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," and assigns it the values from ",(0,a.kt)("inlineCode",{parentName:"p"},"hex")," to it."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".new(hex)")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- r: 0, g: 176, b: 255\nlocal col = Color.new(0xFF00B0FF)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"hex"},(0,a.kt)("inlineCode",{parentName:"h3"},"hex")),(0,a.kt)("p",null,"The color code as 32 bit hexadecimal."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"The function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Color"),"."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hex = 0xFF00B0FF\n")),(0,a.kt)("p",null,"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," type is returned, then an allocation is performed in the background.\nAccordingly, the method should ",(0,a.kt)("strong",{parentName:"p"},"not")," be called in a loop, but at a safe place at the beginning of a script."))}s.isMDXComponent=!0}}]);