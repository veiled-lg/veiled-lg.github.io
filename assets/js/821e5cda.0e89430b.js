"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[8014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="Integer",l={unversionedId:"lua/config/cvar/creation/int",id:"lua/config/cvar/creation/int",title:"Integer",description:"Creates a new CVar userdata and sets the internal type to int.",source:"@site/docs/lua/config/cvar/creation/int.md",sourceDirName:"lua/config/cvar/creation",slug:"/lua/config/cvar/creation/int",permalink:"/docs/lua/config/cvar/creation/int",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Boolean",permalink:"/docs/lua/config/cvar/creation/bool"},next:{title:"Floating",permalink:"/docs/lua/config/cvar/creation/float"}},p={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>weapon_based</code>",id:"weapon_based",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"Return value",id:"return-value",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integer"},"Integer"),(0,i.kt)("p",null,"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,i.kt)("inlineCode",{parentName:"p"},"userdata")," and sets the internal type to ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,i.kt)("h2",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".create_int(name, weapon_based, description, value[, min, max])")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local aim_time = CVar.create_int(\n  'aim_time',\n  nil,\n  'Determines the time in ms in which the Aimbot should be active',\n  0, 0, 10000\n);\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,"The internal name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CVar")," ",(0,i.kt)("inlineCode",{parentName:"p"},"userdata"),", which must be an unique ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("h3",{id:"weapon_based"},(0,i.kt)("inlineCode",{parentName:"h3"},"weapon_based")),(0,i.kt)("p",null,"Determines if the ",(0,i.kt)("inlineCode",{parentName:"p"},"CVar")," has multiple ways to represent a value, must be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,i.kt)("h3",{id:"description"},(0,i.kt)("inlineCode",{parentName:"h3"},"Description")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is not an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," will be written above when saving.\nThere is also the possibility to use it in the UI (as an example: tooltip)."),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("p",null,"The current ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("h3",{id:"min"},(0,i.kt)("inlineCode",{parentName:"h3"},"min")),(0,i.kt)("p",null,"The maximum value that ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," must not exceed"),(0,i.kt)("h3",{id:"max"},(0,i.kt)("inlineCode",{parentName:"h3"},"max")),(0,i.kt)("p",null,"The minimum value that ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," must not exceed"),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This method uses ",(0,i.kt)("inlineCode",{parentName:"p"},"alloc")," under the hood and should ",(0,i.kt)("strong",{parentName:"p"},"not")," be called in a loop, but at a safe place at the beginning of a script.\nVeiled releases the memory when terminated with ",(0,i.kt)("inlineCode",{parentName:"p"},"free"),".")),(0,i.kt)("p",null,"If the function succeeds, the return type is ",(0,i.kt)("inlineCode",{parentName:"p"},"userdata"),"."),(0,i.kt)("p",null,"If the function fails, the return value is ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."))}d.isMDXComponent=!0}}]);