"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[257],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(n),y=i,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,a(a({ref:e},s),{},{components:n})):r.createElement(d,a({ref:e},s))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6251:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"EntityDescription"},l="EntityDescription",p={unversionedId:"components/EntityDescription",id:"components/EntityDescription",isDocsHomePage:!1,title:"EntityDescription",description:"EntityDescription provides a way to render description of the entity with React.",source:"@site/docs/components/EntityDescription.mdx",sourceDirName:"components",slug:"/components/EntityDescription",permalink:"/components/EntityDescription",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/EntityDescription.mdx",tags:[],version:"current",frontMatter:{title:"EntityDescription"},sidebar:"docs",previous:{title:"Entity",permalink:"/components/Entity"},next:{title:"Fog",permalink:"/components/Fog"}},s=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:s};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entitydescription"},"EntityDescription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"EntityDescription")," provides a way to render description of the entity with React."),(0,o.kt)("p",null,"Its children will be rendered to the container element specified by container prop (by default, rendered to the info box of the viewer) with React Portal. So you can use any event or dynamic state inside children of this component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": ",(0,o.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/entitydescription--basic%22"},"EntityDescription"))),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("p",null,"EntityDescription can be mounted only inside",(0,o.kt)("a",{parentName:"p",href:"/components/Entity"},"Entity")," components,\nand can not be mounted more than once for each entity."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"container"),(0,o.kt)("td",{parentName:"tr",align:null},"Element"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resizeInfoBox"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);