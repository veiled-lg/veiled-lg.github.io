"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[6904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3,sidebar_label:"g"},o="g",i={unversionedId:"lua/render/color/g",id:"lua/render/color/g",title:"g",description:"Returns the green tone and optionally offers the possibility to update it.",source:"@site/docs/lua/render/color/g.md",sourceDirName:"lua/render/color",slug:"/lua/render/color/g",permalink:"/docs/lua/render/color/g",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"g"},sidebar:"tutorialSidebar",previous:{title:"r",permalink:"/docs/lua/render/color/r"},next:{title:"b",permalink:"/docs/lua/render/color/b"}},u={},p=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"Return value",id:"return-value",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"g"},"g"),(0,a.kt)("p",null,"Returns the green tone and optionally offers the possibility to update it."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":g([value])")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- read\nprint(col:g())\n\n-- write\ncol:g(180)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"Optionally the green tone between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"255")," to update the color value."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"If the function succeeds, the return value is ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," between ",(0,a.kt)("inlineCode",{parentName:"p"},"255")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"If the function fails, the return value is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The function can only fail if it was called as a table method with ",(0,a.kt)("inlineCode",{parentName:"p"},".")," instead of a metatable method with ",(0,a.kt)("inlineCode",{parentName:"p"},":"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- bad, prints "nil"\nprint(col.g())\n\n-- bad, does nothing\ncol.g(25)\n')))}d.isMDXComponent=!0}}]);