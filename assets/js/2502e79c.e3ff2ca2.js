"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[1054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,v=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"int"},o="set_int",l={unversionedId:"lua/config/cvar/set/int",id:"lua/config/cvar/set/int",title:"set_int",description:"Set value and cast / format it before, if the internal type is not int.",source:"@site/docs/lua/config/cvar/set/int.md",sourceDirName:"lua/config/cvar/set",slug:"/lua/config/cvar/set/int",permalink:"/docs/lua/config/cvar/set/int",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"int"},sidebar:"tutorialSidebar",previous:{title:"bool",permalink:"/docs/lua/config/cvar/set/bool"},next:{title:"float",permalink:"/docs/lua/config/cvar/set/float"}},c={},u=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"<code>weapon_id</code>",id:"weapon_id",level:3},{value:"Return value",id:"return-value",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set_int"},"set_int"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and cast / format it before, if the internal type is not ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":set_int(value[, weapon_id])")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"my_var:set_int(10)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," of the respective ",(0,a.kt)("inlineCode",{parentName:"p"},"CVar"),"."),(0,a.kt)("h3",{id:"weapon_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"weapon_id")),(0,a.kt)("p",null,"Optional the index of the current weapon to get an individual value, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," for the default value."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"The function returns no value."))}s.isMDXComponent=!0}}]);