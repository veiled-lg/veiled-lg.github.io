"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[2380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="From rgba",l={unversionedId:"lua/config/cvar/creation/color/rgba",id:"lua/config/cvar/creation/color/rgba",title:"From rgba",description:"Creates a new CVar userdata and sets the internal type to u8[4].",source:"@site/docs/lua/config/cvar/creation/color/rgba.md",sourceDirName:"lua/config/cvar/creation/color",slug:"/lua/config/cvar/creation/color/rgba",permalink:"/docs/lua/config/cvar/creation/color/rgba",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/docs/category/color-1"},next:{title:"From hex",permalink:"/docs/lua/config/cvar/creation/color/hex"}},p={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>weapon_based</code>",id:"weapon_based",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>r</code>",id:"r",level:3},{value:"<code>g</code>",id:"g",level:3},{value:"<code>b</code>",id:"b",level:3},{value:"<code>a</code>",id:"a",level:3},{value:"Return value",id:"return-value",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"from-rgba"},"From rgba"),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata")," and sets the internal type to ",(0,r.kt)("inlineCode",{parentName:"p"},"u8[4]"),"."),(0,r.kt)("h2",{id:"declaration"},"Declaration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".create_color(name, weapon_based, description, r, g, b[, a])")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local aim_active = CVar.create_bool('aim_active', nil, 'Enables the aimbot', true);\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"The internal name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata"),", which must be an unique ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("h3",{id:"weapon_based"},(0,r.kt)("inlineCode",{parentName:"h3"},"weapon_based")),(0,r.kt)("p",null,"Determines if the ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," has multiple ways to represent a value, must be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,r.kt)("h3",{id:"description"},(0,r.kt)("inlineCode",{parentName:"h3"},"Description")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," is not an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," will be written above when saving.\nThere is also the possibility to use it in the UI (as an example: tooltip)."),(0,r.kt)("h3",{id:"r"},(0,r.kt)("inlineCode",{parentName:"h3"},"r")),(0,r.kt)("p",null,"The value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"255")," for the red tone of the color."),(0,r.kt)("h3",{id:"g"},(0,r.kt)("inlineCode",{parentName:"h3"},"g")),(0,r.kt)("p",null,"The value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"255")," for the green tone of the color."),(0,r.kt)("h3",{id:"b"},(0,r.kt)("inlineCode",{parentName:"h3"},"b")),(0,r.kt)("p",null,"The value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"255")," for the blue tone of the color."),(0,r.kt)("h3",{id:"a"},(0,r.kt)("inlineCode",{parentName:"h3"},"a")),(0,r.kt)("p",null,"Optional the value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"255")," (default) for the alpha value (transparency) of the color."),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This method uses ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," under the hood and should ",(0,r.kt)("strong",{parentName:"p"},"not")," be called in a loop, but at a safe place at the beginning of a script.\nVeiled releases the memory when terminated with ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),".")),(0,r.kt)("p",null,"If the function succeeds, the return type is ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata"),"."),(0,r.kt)("p",null,"If the function fails, the return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."))}u.isMDXComponent=!0}}]);