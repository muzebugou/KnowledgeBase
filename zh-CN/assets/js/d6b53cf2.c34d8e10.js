"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5365],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),d=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||n;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const n={title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:16},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",id:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",title:"How to use Samsung Pay with AdGuard in South Korea",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/compatibility-issues"},next:{title:"Features overview",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/overview"}},u={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,a.kt)("p",null,"This problem occurs almost exclusively on devices registered in South Korea. Samsung Pay occasionally doesn't work on such devices with running VPN services. However, there is a way to solve this problem."),(0,a.kt)("p",null,"By default, AdGuard uses Local VPN to filter traffic. This was the reason why the South Korean users had to disable AdGuard when making payments with Samsung Pay. Now it is possible to avoid such difficulties."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},'"pref.samsungpay.autopause.enable"'),' feature was developed specifically for South Korean users. So, what process does it initiate? If the "pref.samsungpay.autopause.enable" option is enabled, the AdGuard app is suspended when a user opens the Samsung Pay app. But once the app is closed, AdGuard resumes operation.'),(0,a.kt)("p",null,"Let's see how it works."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif",alt:"samsungpay *mobile"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," this feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.")))}p.isMDXComponent=!0}}]);