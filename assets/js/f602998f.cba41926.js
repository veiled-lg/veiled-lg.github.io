"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[2430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,v=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},l="Using hex",i={unversionedId:"lua/config/cvar/set/color/hex",id:"lua/config/cvar/set/color/hex",title:"Using hex",description:"Sets the respective color channels.",source:"@site/docs/lua/config/cvar/set/color/hex.md",sourceDirName:"lua/config/cvar/set/color",slug:"/lua/config/cvar/set/color/hex",permalink:"/docs/lua/config/cvar/set/color/hex",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"set_color",permalink:"/docs/lua/config/cvar/set/color/rgba"}},c={},u=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>hex</code>",id:"hex",level:3},{value:"<code>weapon_id</code>",id:"weapon_id",level:3},{value:"Return value",id:"return-value",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-hex"},"Using hex"),(0,o.kt)("p",null,"Sets the respective color channels."),(0,o.kt)("h2",{id:"declaration"},"Declaration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":set_color(hex[, weapon_id])")),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local col = my_var:color();\n\nif col ~= nil then\n  print(string.format("0x%.8X", col))\nend\n\nmy_var:color(nil, 0xFF323232)\n')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"hex"},(0,o.kt)("inlineCode",{parentName:"h3"},"hex")),(0,o.kt)("p",null,"The color code as 32 bit hexadecimal."),(0,o.kt)("h3",{id:"weapon_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"weapon_id")),(0,o.kt)("p",null,"Optional the index of the current weapon to get an individual value, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," for the default value."),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"The function returns no value."))}s.isMDXComponent=!0}}]);