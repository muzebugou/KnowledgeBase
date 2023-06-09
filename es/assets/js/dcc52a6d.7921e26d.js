"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4749],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5887:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(4137));const i={title:"How to avoid compatibility problem with FaceTime",sidebar_position:3},a=void 0,l={unversionedId:"adguard-for-ios/solving-problems/facetime-compatibility-issues",id:"adguard-for-ios/solving-problems/facetime-compatibility-issues",title:"How to avoid compatibility problem with FaceTime",description:"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/facetime-compatibility-issues.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/facetime-compatibility-issues",permalink:"/KnowledgeBase/es/adguard-for-ios/solving-problems/facetime-compatibility-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/facetime-compatibility-issues.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to avoid compatibility problem with FaceTime",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to configure system-wide filtering with AdGuard for iOS",permalink:"/KnowledgeBase/es/adguard-for-ios/solving-problems/system-wide-filtering"},next:{title:"How to block YouTube ads in Safari",permalink:"/KnowledgeBase/es/adguard-for-ios/solving-problems/block-youtube-ads"}},s={},u=[],d={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime."),(0,n.kt)("p",null,"Some users have encountered the problem that FaceTime does not work on the device when the AdGuard app for iOS is in Full-Tunnel mode."),(0,n.kt)("p",null,"It is likely but not guaranteed that FaceTime will work when AdGuard is in Full-Tunnel mode without VPN icon because it is also incompatible with other VPN apps and unstable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If you want to use FaceTime and make sure that video/audio calls don't stop working, use Split-Tunnel mode.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!",alt:"Tunnel mode screen *mobile"})),(0,n.kt)("p",null,"To enable it, follow the instructions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to AdGuard for iOS ",(0,n.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"General settings"),"."),(0,n.kt)("li",{parentName:"ol"},"Enable ",(0,n.kt)("em",{parentName:"li"},"Advanced mode")," and go to the ",(0,n.kt)("em",{parentName:"li"},"Advanced settings")," section that appears right after."),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("em",{parentName:"li"},"Tunnel mode")," and select ",(0,n.kt)("em",{parentName:"li"},"Split-Tunnel"),".")),(0,n.kt)("p",null,"Done! Now there should be no problems with FaceTime compatibility."))}p.isMDXComponent=!0}}]);