"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7354],{4137:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),u=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,w=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return n?t.createElement(w,s(s({ref:r},l),{},{components:n})):t.createElement(w,s({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6907:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(7462),o=(n(7294),n(4137));const a={title:"Known issues of AdGuard for Windows",sidebar_position:10},s=void 0,i={unversionedId:"adguard-for-windows/solving-problems/known-issues",id:"adguard-for-windows/solving-problems/known-issues",title:"Known issues of AdGuard for Windows",description:"AdGuard for Windows and AdGuard VPN for Windows compatibility issues",source:"@site/docs/adguard-for-windows/solving-problems/known-issues.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/known-issues",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/known-issues.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Known issues of AdGuard for Windows",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/dns-leaks"},next:{title:"Documentation for admins",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/admins-documentation"}},d={},u=[{value:"AdGuard for Windows and AdGuard VPN for Windows compatibility issues",id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues",level:2}],l={toc:u};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues"},"AdGuard for Windows and AdGuard VPN for Windows compatibility issues"),(0,o.kt)("p",null,"Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some of their default settings may cause the apps to work incorrectly when they run at the same time."),(0,o.kt)("p",null,"There are two specific settings in AdGuard for Windows: ",(0,o.kt)("em",{parentName:"p"},"Use redirect driver mode")," and ",(0,o.kt)("em",{parentName:"p"},"Filter localhost"),". By default, the first is disabled, and the second is enabled. Changing any of these settings will inevitably disrupt AdGuard's filtering if both AdGuard Ad Blocker and AdGuard VPN are enabled on your device.   "),(0,o.kt)("p",null,"Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as  antiviruses, VPNs, and network filters. If you come across a situation where you need to change the default state of the above settings and still want AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose"},"create an issue on GitHub")," so we can help you personally."),(0,o.kt)("p",null,"We are currently working on overcoming the above-listed limitations of the simultaneous work of our apps."))}c.isMDXComponent=!0}}]);