"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[7384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="From hex",l={unversionedId:"lua/config/cvar/creation/color/hex",id:"lua/config/cvar/creation/color/hex",title:"From hex",description:"Creates a new CVar userdata and sets the internal type to u8[8].",source:"@site/docs/lua/config/cvar/creation/color/hex.md",sourceDirName:"lua/config/cvar/creation/color",slug:"/lua/config/cvar/creation/color/hex",permalink:"/docs/lua/config/cvar/creation/color/hex",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"From rgba",permalink:"/docs/lua/config/cvar/creation/color/rgba"},next:{title:"String",permalink:"/docs/lua/config/cvar/creation/string"}},c={},p=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>weapon_based</code>",id:"weapon_based",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>hex</code>",id:"hex",level:3},{value:"Return value",id:"return-value",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"from-hex"},"From hex"),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," and sets the internal type to ",(0,a.kt)("inlineCode",{parentName:"p"},"u8[8]"),"."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".create_color(name, weapon_based, description, hex)")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local aim_active = CVar.create_bool('aim_active', nil, 'Enables the aimbot', true);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h3"},"name")),(0,a.kt)("p",null,"The internal name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata"),", which must be an unique ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("h3",{id:"weapon_based"},(0,a.kt)("inlineCode",{parentName:"h3"},"weapon_based")),(0,a.kt)("p",null,"Determines if the ",(0,a.kt)("inlineCode",{parentName:"p"},"CVar")," has multiple ways to represent a value, must be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("h3",{id:"description"},(0,a.kt)("inlineCode",{parentName:"h3"},"Description")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," is not an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," will be written above when saving.\nThere is also the possibility to use it in the UI (as an example: tooltip)."),(0,a.kt)("h3",{id:"hex"},(0,a.kt)("inlineCode",{parentName:"h3"},"hex")),(0,a.kt)("p",null,"The color code as 32 bit hexadecimal."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This method uses ",(0,a.kt)("inlineCode",{parentName:"p"},"alloc")," under the hood and should ",(0,a.kt)("strong",{parentName:"p"},"not")," be called in a loop, but at a safe place at the beginning of a script.\nVeiled releases the memory when terminated with ",(0,a.kt)("inlineCode",{parentName:"p"},"free"),".")),(0,a.kt)("p",null,"If the function succeeds, the return type is ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata"),"."),(0,a.kt)("p",null,"If the function fails, the return value is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."))}s.isMDXComponent=!0}}]);