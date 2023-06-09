"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6679],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={title:"Launch issues on macOS",sidebar_position:6},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/launch-issues",id:"adguard-for-mac/solving-problems/launch-issues",title:"Launch issues on macOS",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/launch-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/launch-issues",permalink:"/KnowledgeBase/ko/adguard-for-mac/solving-problems/launch-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/launch-issues.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Launch issues on macOS",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation problems solving",permalink:"/KnowledgeBase/ko/adguard-for-mac/solving-problems/installation-issues"},next:{title:"iCloud Private Relay and AdGuard",permalink:"/KnowledgeBase/ko/adguard-for-mac/solving-problems/icloud-private-relay"}},s={},c=[{value:"Launch issues on macOS 11 and higher",id:"launch-issues-on-macos-11-and-higher",level:2},{value:"Launch issues on macOS 10",id:"launch-issues-on-macos-10",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,r.kt)("p",null,"Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. In this case you should follow one of these instructions, based on your OS version."),(0,r.kt)("h2",{id:"launch-issues-on-macos-11-and-higher"},"Launch issues on macOS 11 and higher"),(0,r.kt)("p",null,"If you have problems launching AdGuard for Mac on Big Sur and Monterey operating systems, please use this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reboot Mac and enter ",(0,r.kt)("a",{parentName:"li",href:"https://support.apple.com/en-us/HT201255"},"recovery mode"),"."),(0,r.kt)("li",{parentName:"ol"},"Disable SIP (Launch ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," from the ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," menu and type ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil disable"),")."),(0,r.kt)("li",{parentName:"ol"},"Reboot Mac."),(0,r.kt)("li",{parentName:"ol"},"Close the AdGuard app, open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and type ",(0,r.kt)("inlineCode",{parentName:"li"},"systemextensionsctl reset"),"."),(0,r.kt)("li",{parentName:"ol"},"Reboot Mac and enter recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Enable SIP (Launch ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," from the ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," menu and type ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil enable"),")."),(0,r.kt)("li",{parentName:"ol"},"Launch the AdGuard app and enable protection.")),(0,r.kt)("h2",{id:"launch-issues-on-macos-10"},"Launch issues on macOS 10"),(0,r.kt)("p",null,"If you have problems launching AdGuard for Mac on Sierra, Mojave and Catalina operating systems, please use this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and enter command ",(0,r.kt)("inlineCode",{parentName:"li"},"ls -@lOae /private/var/db/KernelExtensionManagement"),"."),(0,r.kt)("li",{parentName:"ol"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"li"},"restricted")," flag is not present (like on the screenshot).")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg",alt:"Command example *border"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac in recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Terminal"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter administrator password."),(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," and enter the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo chflags restricted /private/var/db/KernelExtensionManagement"),"."),(0,r.kt)("li",{parentName:"ol"},"Reboot your Mac in recovery mode."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," \u2192 Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"csrutil enable")," \u2192 Enter administrator password \u2192 Reboot your Mac."),(0,r.kt)("li",{parentName:"ol"},"AdGuard \ubcf4\ud638\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")))}p.isMDXComponent=!0}}]);