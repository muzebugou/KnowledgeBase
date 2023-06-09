"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6739],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={title:"Manual certificate installation",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/manual-certificate-installation",id:"adguard-for-mac/solving-problems/manual-certificate-installation",title:"Manual certificate installation",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/manual-certificate-installation.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/manual-certificate-installation",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/solving-problems/manual-certificate-installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/manual-certificate-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Manual certificate installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Browser Assistant",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/browser-assistant"},next:{title:"Protection cannot be enabled",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/solving-problems/protection-cannot-be-enabled"}},s={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"AdGuard for Mac needs to install the root certificate into certificate storage to be able to ",(0,n.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filter HTTPS traffic"),". This action is performed automatically in most cases as you run the app for the first time, but users of Gecko-based browsers (Firefox, Waterfox etc.) who have a master password set up for their browser may be required to take additional steps (because these browsers use their own certificate storage instead of the system one). They need to either enter the master password when prompted (to grant AdGuard access to the certificate storage) or manually install the certificate."),(0,n.kt)("p",null,"To manually install the certificate into Firefox-like browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Open "Preferences"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Go to "Privacy & Security" \u2014 "Certificates"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click on "View Certificates"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Navigate to the "Authorities" tab and click the "Import..." button')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select file ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer")," or just download it from ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard"))),(0,n.kt)("p",null,"Exact actions required for different Gecko-based browsers may vary, but the general sequence and the path to ",(0,n.kt)("inlineCode",{parentName:"p"},"AdGuard Personal CA.cer")," file will be the same."),(0,n.kt)("p",null,"PS: For ",(0,n.kt)("a",{parentName:"p",href:"https://setapp.com/apps/adguard"},"Setapp application version")," the file path is the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer")))}d.isMDXComponent=!0}}]);