"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[8873],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),N=r,g=k["".concat(m,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2487:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Billboard"},m="Billboard",p={unversionedId:"components/Billboard",id:"components/Billboard",isDocsHomePage:!1,title:"Billboard",description:"Billboard is a billboard primitive in the BillboardCollection.",source:"@site/docs/components/Billboard.mdx",sourceDirName:"components",slug:"/components/Billboard",permalink:"/components/Billboard",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/Billboard.mdx",tags:[],version:"current",frontMatter:{title:"Billboard"},sidebar:"docs",previous:{title:"Guide",permalink:"/guide"},next:{title:"BillboardCollection",permalink:"/components/BillboardCollection"}},d=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],u={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"billboard"},"Billboard"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Billboard")," is a billboard primitive in the ",(0,l.kt)("inlineCode",{parentName:"p"},"BillboardCollection"),"."),(0,l.kt)("p",null,"Primitive is a low layer API for geographical visualization.\n",(0,l.kt)("a",{parentName:"p",href:"/components/entity"},"Entity")," is more recommended unless performance issues."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,l.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html"},"Billboard")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/billboard--basic%22"},"Billboard"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Only inside ",(0,l.kt)("a",{parentName:"p",href:"/components/BillboardCollection"},"BillboardCollection")," components.\nA billboard object will be attached to the parent BillboardCollection."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alignedAxis"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableDepthTestDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eyeOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"heightReference"),(0,l.kt)("td",{parentName:"tr",align:null},"HeightReference"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"horizontalOrigin"),(0,l.kt)("td",{parentName:"tr",align:null},"HorizontalOrigin"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pixelOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pixelOffsetScaleByDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"NearFarScalar"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rotation"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scale"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scaleByDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"NearFarScalar"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sizeInMeters"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"translucencyByDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"NearFarScalar"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verticalOrigin"),(0,l.kt)("td",{parentName:"tr",align:null},"VerticalOrigin"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDoubleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchStart"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseEnter"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseLeave"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);