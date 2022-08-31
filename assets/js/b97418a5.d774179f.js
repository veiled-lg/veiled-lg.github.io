"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[9051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,f=d["".concat(u,".").concat(v)]||d[v]||s[v]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"bool"},l="set_bool",i={unversionedId:"lua/config/cvar/set/bool",id:"lua/config/cvar/set/bool",title:"set_bool",description:"Set value if the internal type is boolean, number or string.",source:"@site/docs/lua/config/cvar/set/bool.md",sourceDirName:"lua/config/cvar/set",slug:"/lua/config/cvar/set/bool",permalink:"/docs/lua/config/cvar/set/bool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"bool"},sidebar:"tutorialSidebar",previous:{title:"Setter",permalink:"/docs/category/setter"},next:{title:"int",permalink:"/docs/lua/config/cvar/set/int"}},u={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"<code>weapon_id</code>",id:"weapon_id",level:3},{value:"Return value",id:"return-value",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set_bool"},"set_bool"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," if the internal type is ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":set_bool(value[, weapon_id])")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"my_var:set_bool(false)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," of the respective ",(0,a.kt)("inlineCode",{parentName:"p"},"CVar"),"."),(0,a.kt)("h3",{id:"weapon_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"weapon_id")),(0,a.kt)("p",null,"Optional the index of the current weapon to get an individual value, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," for the default value."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"The function returns no value."))}s.isMDXComponent=!0}}]);