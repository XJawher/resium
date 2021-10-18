"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5801],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=p(n),c=r,s=k["".concat(m,".").concat(c)]||k[c]||d[c]||l;return n?a.createElement(s,o(o({ref:e},u),{},{components:n})):a.createElement(s,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7270:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"KmlDataSource"},m="KmlDataSource",p={unversionedId:"components/KmlDataSource",id:"components/KmlDataSource",isDocsHomePage:!1,title:"KmlDataSource",description:"KmlDataSource provides the way to load and show KML data into the scene.",source:"@site/docs/components/KmlDataSource.mdx",sourceDirName:"components",slug:"/components/KmlDataSource",permalink:"/components/KmlDataSource",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/KmlDataSource.mdx",tags:[],version:"current",frontMatter:{title:"KmlDataSource"},sidebar:"docs",previous:{title:"ImageryLayerCollection",permalink:"/components/ImageryLayerCollection"},next:{title:"Label",permalink:"/components/Label"}},u=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],d={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kmldatasource"},"KmlDataSource"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KmlDataSource")," provides the way to load and show KML data into the scene.\nBoth KML and KMZ are supported, and can be loaded from a URL, string or raw object."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,l.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html"},"KmlDataSource")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/kmldatasource--basic%22"},"KmlDataSource"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Inside ",(0,l.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,l.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clustering"),(0,l.kt)("td",{parentName:"tr",align:null},"EntityCluster"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ellipsoid"),(0,l.kt)("td",{parentName:"tr",align:null},"Ellipsoid"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas"),(0,l.kt)("td",{parentName:"tr",align:null},"HTMLCanvasElement"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camera"),(0,l.kt)("td",{parentName:"tr",align:null},"Camera"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credit"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Credit"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sourceUri"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Resource"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clampToGround"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDoubleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchStart"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseEnter"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseLeave"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSource: KmlDataSource) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSource: KmlDataSource, error: any) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSource: KmlDataSource, isLoaded: boolean) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSource: KmlDataSource, urlComponent: string) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onUnsupportedNode"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSource: KmlDataSource) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLoad"),(0,l.kt)("td",{parentName:"tr",align:null},"(kmlDataSouce: KmlDataSource) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null},"Calls when the Promise for loading data is fullfilled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," Resource ","|"," Document ","|"," Blob"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);