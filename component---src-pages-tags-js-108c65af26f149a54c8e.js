(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{enK5:function(e,t,r){"use strict";r.r(t);r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r.n(n),c=r("3yDT"),o=(r("Z2Ku"),r("L9s1"),r("Wbzz")),i=function(e){var t=e.category,r=e.posts;return r=r.filter((function(e){return e.tags.includes(t)})),a.a.createElement("ul",{className:"category"},a.a.createElement("h2",{id:t,className:"category--name"},t),r.map((function(e){return u(e)})))},u=function(e){return a.a.createElement("li",{className:"category--item l-flex",key:e.id},a.a.createElement(o.Link,{to:e.path,className:"category--link"},e.title),a.a.createElement("time",{className:"category--entry-date"},e.date))},l=r("vrFN");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"pageQuery",(function(){return p}));t.default=function(e){var t=e.data.allMdx,r=t.group,n=t.edges.map((function(e){var t=e.node;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.frontmatter,{id:t.id})})),o=r.map((function(e){return e.fieldValue}));return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"Categories"}),o.map((function(e){return a.a.createElement(i,{category:e,posts:n,key:e})})))};var p="1125795662"}}]);
//# sourceMappingURL=component---src-pages-tags-js-108c65af26f149a54c8e.js.map