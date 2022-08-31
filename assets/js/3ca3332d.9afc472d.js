"use strict";(self.webpackChunk_veiled_lg_veiled_lg_github_io=self.webpackChunk_veiled_lg_veiled_lg_github_io||[]).push([[6557],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=l,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(7462),l=(t(7294),t(3905));const a={sidebar_position:5},i="circle",o={unversionedId:"lua/render/draw/circle",id:"lua/render/draw/circle",title:"circle",description:"Draws a circle.",source:"@site/docs/lua/render/draw/circle.md",sourceDirName:"lua/render/draw",slug:"/lua/render/draw/circle",permalink:"/docs/lua/render/draw/circle",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"filled_rect",permalink:"/docs/lua/render/draw/filled_rect"},next:{title:"filled_circle",permalink:"/docs/lua/render/draw/filled_circle"}},c={},d=[{value:"Declaration",id:"declaration",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>radius</code>",id:"radius",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>segments</code>",id:"segments",level:3},{value:"<code>thickness</code>",id:"thickness",level:3},{value:"Return value",id:"return-value",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:d};function s(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"circle"},"circle"),(0,l.kt)("p",null,"Draws a circle."),(0,l.kt)("h2",{id:"declaration"},"Declaration"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".circle(x, y, radius, color, segments[, thickness])")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Draw.circle(5, 5, 25, 'rgb(0, 255, 0)', 30)\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"x"},(0,l.kt)("inlineCode",{parentName:"h3"},"x")),(0,l.kt)("p",null,"The X coordinates of the window in pixels."),(0,l.kt)("h3",{id:"y"},(0,l.kt)("inlineCode",{parentName:"h3"},"y")),(0,l.kt)("p",null,"The Y coordinates of the window in pixels."),(0,l.kt)("h3",{id:"radius"},(0,l.kt)("inlineCode",{parentName:"h3"},"radius")),(0,l.kt)("p",null,"The circle radius in pixels."),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"The color of the line, allowed types are ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," (32 bit hexadecimal), ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"userdata")," of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Color"),"."),(0,l.kt)("h3",{id:"segments"},(0,l.kt)("inlineCode",{parentName:"h3"},"segments")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," of segments for the circle. The higher the better, but can negatively affect the performance. ",(0,l.kt)("inlineCode",{parentName:"p"},"30")," is a good value."),(0,l.kt)("h3",{id:"thickness"},(0,l.kt)("inlineCode",{parentName:"h3"},"thickness")),(0,l.kt)("p",null,"Optionally the thickness of the rectangle (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,l.kt)("h2",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"The function returns no value."),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The method must be called within a render callback."))}s.isMDXComponent=!0}}]);