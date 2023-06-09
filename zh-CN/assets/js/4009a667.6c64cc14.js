"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7832],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const a={title:"Problems caused by multiple user profiles",sidebar_position:14},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/multiple-profiles-issue",id:"adguard-for-android/solving-problems/multiple-profiles-issue",title:"Problems caused by multiple user profiles",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/multiple-profiles-issue.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/multiple-profiles-issue",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/multiple-profiles-issue",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/multiple-profiles-issue.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Problems caused by multiple user profiles",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/https-certificate-for-rooted"},next:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/compatibility-issues"}},s={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("p",null,"On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. It happens because AdGuard is installed for a different user profile on the device."),(0,o.kt)("p",null,'If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message "You can\'t install the app on your device".'),(0,o.kt)("p",null,"To solve this problem, you need to uninstall the application for all users: go to Settings \u2192 All apps \u2192 AdGuard. Tap the three dots at the upper right corner and select ",(0,o.kt)("em",{parentName:"p"},"Uninstall for all users"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst_en.png",alt:"Uninstall *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst2_en.png",alt:"Uninstall *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/multiple-profiles-issue/uninst3_en.png",alt:"Uninstall *mobile"})))}u.isMDXComponent=!0}}]);