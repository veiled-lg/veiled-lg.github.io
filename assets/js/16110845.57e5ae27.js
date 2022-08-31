"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[3767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:2},i="line",o={unversionedId:"lua/render/draw/line",id:"lua/render/draw/line",title:"line",description:"Draws a line.",source:"@site/docs/lua/render/draw/line.md",sourceDirName:"lua/render/draw",slug:"/lua/render/draw/line",permalink:"/docs/lua/render/draw/line",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Constants",permalink:"/docs/lua/render/draw/constants"},next:{title:"rect",permalink:"/docs/lua/render/draw/rect"}},d={},c=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>start_x</code>",id:"start_x",level:3},{value:"<code>start_</code>",id:"start_",level:3},{value:"<code>end_x</code>",id:"end_x",level:3},{value:"<code>end_y</code>",id:"end_y",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>thickness</code>",id:"thickness",level:3},{value:"Return value",id:"return-value",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"line"},"line"),(0,a.kt)("p",null,"Draws a line."),(0,a.kt)("h2",{id:"declaration"},"Declaration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".line(start_x, start_y, end_x, end_y, color[, thickness])")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- draws a red line from 5|5 to 50|50\nDraw.line(5, 5, 50, 50, 0xFFFF0000)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"start_x"},(0,a.kt)("inlineCode",{parentName:"h3"},"start_x")),(0,a.kt)("p",null,"The start coordinates on the X axis of the window."),(0,a.kt)("h3",{id:"start_"},(0,a.kt)("inlineCode",{parentName:"h3"},"start_")),(0,a.kt)("p",null,"The start coordinates on the Y axis of the window."),(0,a.kt)("h3",{id:"end_x"},(0,a.kt)("inlineCode",{parentName:"h3"},"end_x")),(0,a.kt)("p",null,"The destination coordinates on the X axis of the window."),(0,a.kt)("h3",{id:"end_y"},(0,a.kt)("inlineCode",{parentName:"h3"},"end_y")),(0,a.kt)("p",null,"The destination coordinates on the X axis of the window."),(0,a.kt)("h3",{id:"color"},(0,a.kt)("inlineCode",{parentName:"h3"},"color")),(0,a.kt)("p",null,"The color of the line, allowed types are ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," (32 bit hexadecimal), ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"userdata")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Color"),"."),(0,a.kt)("h3",{id:"thickness"},(0,a.kt)("inlineCode",{parentName:"h3"},"thickness")),(0,a.kt)("p",null,"Optionally the thickness of the line (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"The function returns no value."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The method must be called within a render callback."))}u.isMDXComponent=!0}}]);