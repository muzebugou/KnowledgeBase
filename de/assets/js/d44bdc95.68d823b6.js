"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2995],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(4137));const o={title:"Documentation for admins",sidebar_position:5},i=void 0,s={unversionedId:"adguard-for-windows/admins-documentation",id:"adguard-for-windows/admins-documentation",title:"Documentation for admins",description:"This page describes the features and details of AdGuard\u2019s central management of policies and preferences.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-windows/admins-documentation.md",sourceDirName:"adguard-for-windows",slug:"/adguard-for-windows/admins-documentation",permalink:"/KnowledgeBase/de/adguard-for-windows/admins-documentation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/admins-documentation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Documentation for admins",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Known issues of AdGuard for Windows",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/known-issues"},next:{title:"Features overview",permalink:"/KnowledgeBase/de/adguard-for-mac/overview"}},d={},l=[{value:"1. Download the MSI",id:"msi-download",level:2},{value:"2. Configure the settings for your network",id:"settings-configuring",level:2},{value:"3. Make sure that AdGuard servers are available",id:"servers-available",level:2},{value:"4. Push the MSI out to your network",id:"msi-push",level:2},{value:"5. Test your installation",id:"installation-test",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes the features and details of AdGuard\u2019s central management of policies and preferences."),(0,r.kt)("h2",{id:"msi-download"},"1. Download the MSI"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.adtidy.org/public/Windows/AdGuard.msi"},"AdGuard MSI"),"."),(0,r.kt)("h2",{id:"settings-configuring"},"2. Configure the settings for your network"),(0,r.kt)("p",null,"On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE")," in the following path: ",(0,r.kt)("inlineCode",{parentName:"p"},"Software\\Policies\\AdGuard\\"),"."),(0,r.kt)("p",null,"The only supported policy is ",(0,r.kt)("inlineCode",{parentName:"p"},"LicenseKey"),". If this policy is set, AdGuard will prefer it over what user can enter in the interface. This license key will be used for checking license status."),(0,r.kt)("h2",{id:"servers-available"},"3. Make sure that AdGuard servers are available"),(0,r.kt)("p",null,"AdGuard connects to two hosts: ",(0,r.kt)("inlineCode",{parentName:"p"},"api.adguard.org")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filters.adtidy.org"),". Make sure that both servers are available."),(0,r.kt)("h2",{id:"msi-push"},"4. Push the MSI out to your network"),(0,r.kt)("p",null,"If you usually use SMS or other tools, use them to push out the AdGuard MSI just as you would normally do with any other installation bundle."),(0,r.kt)("p",null,"Otherwise, you can run the MSI on the target machine directly (and silently) with this command: ",(0,r.kt)("inlineCode",{parentName:"p"},"Msiexec /q /i AdGuard.msi")),(0,r.kt)("p",null,"If you need to roll out an update, use this command: ",(0,r.kt)("inlineCode",{parentName:"p"},"Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note, that you must run these commands with admin privileges.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to install AdGuard on a Windows 7 computer, make sure that it has .NET 4 Client Profile installed: ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=24872"},"https://www.microsoft.com/en-us/download/details.aspx?id=24872"),"\n",(0,r.kt)("strong",{parentName:"p"},"Important!")," Automatic updates are disabled when you install AdGuard for Windows from MSI. If you want to allow updates for a user (which is not recommended because centralized updates will become impossible), set the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowCheckUpdates")," parameter for the ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Adguard")," key to ",(0,r.kt)("inlineCode",{parentName:"p"},"YES")," (case insensitive). In this case automatic updates will be allowed, any other value or no value for this parameter disables automatic updates.")),(0,r.kt)("h2",{id:"installation-test"},"5. Test your installation"),(0,r.kt)("p",null,'On a target machine, launch AdGuard. Open the license screen to check that it uses the one you\'ve set. You might need to click "Refresh status" to make AdGuard validate the license key.'))}c.isMDXComponent=!0}}]);