"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[753],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"Protect Mail Activity and AdGuard",sidebar_position:8},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/protect-mail-activity",id:"adguard-for-mac/solving-problems/protect-mail-activity",title:"Protect Mail Activity and AdGuard",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/protect-mail-activity.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/protect-mail-activity",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/protect-mail-activity",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/protect-mail-activity.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Protect Mail Activity and AdGuard",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"iCloud Private Relay and AdGuard",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/icloud-private-relay"},next:{title:"Advanced Settings guide",permalink:"/KnowledgeBase/it/adguard-for-mac/solving-problems/advanced-settings"}},s={},d=[{value:"In a nutshell",id:"in-a-nutshell",level:2},{value:"In detail",id:"in-detail",level:2},{value:"Recommended solution",id:"recommended-solution",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"in-a-nutshell"},"In a nutshell"),(0,n.kt)("p",null,"Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg",alt:"Mail privacy protection"})),(0,n.kt)("p",null,"However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically."),(0,n.kt)("p",null,"Apple explains this issue ",(0,n.kt)("a",{parentName:"p",href:"https://support.apple.com/HT212797"},"here"),"."),(0,n.kt)("h2",{id:"in-detail"},"In detail"),(0,n.kt)("p",null,"AdGuard for Mac now uses macOS built-in socket filtering based on the network extensions API. This new and rather buggy mechanism replaced good old Kernel extensions. Over the last 1.5 years, we've reported more than 20(!) bugs to Apple regarding their new filtering method."),(0,n.kt)("p",null,'The network extensions API has a VPN-like configuration with a list of route-like entries. On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.'),(0,n.kt)("p",null,"On Monterey, iCloud Private Relay got introduced. Privacy features of Mail.app also use Private Relay servers."),(0,n.kt)("p",null,"As a result, AdGuard can't work together with iCloud Private Relay and Mail.app privacy features:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"iCloud Private Relay is applied to connections at the library level - before they reach the socket level, where AdGuard operates."),(0,n.kt)("li",{parentName:"ol"},"iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available."),(0,n.kt)("li",{parentName:"ol"},"As AdGuard blocks QUIC, including iCloud Private Relay traffic - otherwise, ad blocking is impossible."),(0,n.kt)("li",{parentName:"ol"},'When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can\'t open websites in Safari.'),(0,n.kt)("li",{parentName:"ol"},'To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel"),' restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.'),(0,n.kt)("h2",{id:"recommended-solution"},"Recommended solution"),(0,n.kt)("p",null,"At this point, we recommend using a more traditional VPN service, such as ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),", instead of the new Apple's privacy features."))}c.isMDXComponent=!0}}]);