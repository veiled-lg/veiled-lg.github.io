"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[4923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Boolean",l={unversionedId:"lua/config/cvar/creation/bool",id:"lua/config/cvar/creation/bool",title:"Boolean",description:"Creates a new CVar userdata and sets the internal type to bool.",source:"@site/docs/lua/config/cvar/creation/bool.md",sourceDirName:"lua/config/cvar/creation",slug:"/lua/config/cvar/creation/bool",permalink:"/docs/lua/config/cvar/creation/bool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Register",permalink:"/docs/category/register"},next:{title:"Integer",permalink:"/docs/lua/config/cvar/creation/int"}},p={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>weapon_based</code>",id:"weapon_based",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"Return value",id:"return-value",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boolean"},"Boolean"),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata")," and sets the internal type to ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,r.kt)("h2",{id:"declaration"},"Declaration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".create_bool(name, weapon_based, description, value)")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local aim_active = CVar.create_bool('aim_active', nil, 'Enables the aimbot', true);\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"The internal name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata"),", which must be an unique ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("h3",{id:"weapon_based"},(0,r.kt)("inlineCode",{parentName:"h3"},"weapon_based")),(0,r.kt)("p",null,"Determines if the ",(0,r.kt)("inlineCode",{parentName:"p"},"CVar")," has multiple ways to represent a value, must be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,r.kt)("h3",{id:"description"},(0,r.kt)("inlineCode",{parentName:"h3"},"Description")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," is not an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," will be written above when saving.\nThere is also the possibility to use it in the UI (as an example: tooltip)."),(0,r.kt)("h3",{id:"value"},(0,r.kt)("inlineCode",{parentName:"h3"},"value")),(0,r.kt)("p",null,"The current value as ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," (",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This method uses ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," under the hood and should ",(0,r.kt)("strong",{parentName:"p"},"not")," be called in a loop, but at a safe place at the beginning of a script.\nVeiled releases the memory when terminated with ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),".")),(0,r.kt)("p",null,"If the function succeeds, the return type is ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata"),"."),(0,r.kt)("p",null,"If the function fails, the return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."))}s.isMDXComponent=!0}}]);