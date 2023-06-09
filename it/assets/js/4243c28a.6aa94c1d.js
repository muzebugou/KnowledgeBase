"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4938],{4137:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={title:"Common installer errors",sidebar_position:6},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/common-installer-errors",id:"adguard-for-windows/solving-problems/common-installer-errors",title:"Common installer errors",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/common-installer-errors.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/common-installer-errors",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/common-installer-errors",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/common-installer-errors.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Common installer errors",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to collect Windows system logs",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/system-logs"},next:{title:"Advanced (low-level) Settings guide",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/low-level-settings"}},l={},p=[{value:"Error 5: Access Denied",id:"error-5",level:3},{value:"Error 112: Disk is full, Error 1632: Temporary folder full or inaccessible",id:"error-112",level:3},{value:"Error 1601: Windows Installer is not accessible",id:"error-1601",level:3},{value:"Error 1602: Canceled by user",id:"error-1602",level:3},{value:"Error 1603: Fatal error during installation",id:"error-1603",level:3},{value:"Error 1618: Another installation is already in progress",id:"error-1618",level:3},{value:"Error 1638: Another version of this product is already installed",id:"error-1638",level:3},{value:"Other errors",id:"other",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"This article contains some of the most common errors that you can encounter during the AdGuard for Windows installation, and possible ways to solve them."),(0,n.kt)("h3",{id:"error-5"},"Error 5: Access Denied"),(0,n.kt)("p",null,"This error occurs when there's something wrong with permissions. There may be several different reasons why AdGuard installer doesn't have the permissions it requires to properly finish the installation process. You can try the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Temporarily disable your antiviruses. Some of them may interfere with the installation, depending on the severity of their settings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reboot your computer. Sometimes the permission issues are temporary and can be solved by restarting the PC."))),(0,n.kt)("h3",{id:"error-112"},"Error 112: Disk is full, Error 1632: Temporary folder full or inaccessible"),(0,n.kt)("p",null,"These are two different errors with very similar solutions. As their names suggest, AdGuard installer didn't find enough disk space to complete the installation. There are several things you can attempt to fix the problem:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uninstall some programs or delete unnecessary files from the drive you were trying to install AdGuard to.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download, install, and run ",(0,n.kt)("a",{parentName:"p",href:"http://www.bleepingcomputer.com/download/adwcleaner/"},"AdwCleaner"),', a free piece of software by Malwarebytes. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstall programs and such. It will help clean up some disk space.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reboot your computer. Sometimes temporary files can take up a considerable amount of disk space, and restarting your PC is the most reliable way to get rid of them."))),(0,n.kt)("h3",{id:"error-1601"},"Error 1601: Windows Installer is not accessible"),(0,n.kt)("p",null,"You could say this is a particular sub-case of Error 1603. The possible solutions are similar:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Start and re-register Microsoft Installer service. It requires some work."),(0,n.kt)("p",{parentName:"li"},"  1) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R")," and enter ",(0,n.kt)("strong",{parentName:"p"},"services.msc"),". 2) Find in the list and double click ",(0,n.kt)("em",{parentName:"p"},"Windows Installer"),". 3) Hit ",(0,n.kt)("em",{parentName:"p"},"Start")," button under ",(0,n.kt)("em",{parentName:"p"},"Service status")," and hit ",(0,n.kt)("em",{parentName:"p"},"OK"),". If the service status is ",(0,n.kt)("strong",{parentName:"p"},"running"),", you should click ",(0,n.kt)("em",{parentName:"p"},"Stop")," first and then hit ",(0,n.kt)("em",{parentName:"p"},"Start"),". 4) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R"),", type and enter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"msiexec /unregister"))," and hit ",(0,n.kt)("em",{parentName:"p"},"Enter"),". 5) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R")," again, type and enter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"msiexec /regserver"))," and hit ",(0,n.kt)("em",{parentName:"p"},"Enter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reboot the PC and start the installation all over again. Sometimes that's enough to fix the problem."))),(0,n.kt)("h3",{id:"error-1602"},"Error 1602: Canceled by user"),(0,n.kt)("p",null,"If you got this error code, chances are you have interrupted the installation process manually in one way or another. What you can do is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Don't close the installer window. When the installation is complete, it will close automatically.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'If a dialogue window pops up during the installation, hit "Yes" to grant the installer the required permissions. Clicking "No" will cancel the installation.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Don't start other processes while the installation process is going on."))),(0,n.kt)("h3",{id:"error-1603"},"Error 1603: Fatal error during installation"),(0,n.kt)("p",null,"The error sounds scarier than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Press the ",(0,n.kt)("em",{parentName:"p"},"Win")," key, search for ",(0,n.kt)("em",{parentName:"p"},"Command Prompt")," and run it. There, type in ",(0,n.kt)("inlineCode",{parentName:"p"},"sfc /scannow")," and press ",(0,n.kt)("em",{parentName:"p"},"Enter"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uninstall AdGuard using our special ",(0,n.kt)("a",{parentName:"p",href:"../../installation#advanced"},"uninstall tool")," and then repeat the installation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Start and re-register Microsoft Installer service. It requires some work."),(0,n.kt)("p",{parentName:"li"},"  1) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R")," and enter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"services.msc")),". 2) Find in the list and double click ",(0,n.kt)("em",{parentName:"p"},"Windows Installer"),". 3) Hit ",(0,n.kt)("em",{parentName:"p"},"Start")," button under ",(0,n.kt)("em",{parentName:"p"},"Service status")," and hit ",(0,n.kt)("em",{parentName:"p"},"OK"),". If the service status is ",(0,n.kt)("strong",{parentName:"p"},"running"),", you should click ",(0,n.kt)("em",{parentName:"p"},"Stop")," first and then hit ",(0,n.kt)("em",{parentName:"p"},"Start"),". 4) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R"),", type and enter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"msiexec /unregister"))," and hit ",(0,n.kt)("em",{parentName:"p"},"Enter"),". 5) Press ",(0,n.kt)("em",{parentName:"p"},"Win + R")," again, type and enter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"msiexec /regserver"))," and hit ",(0,n.kt)("em",{parentName:"p"},"Enter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don\u2019t have full permissions on the file location. It's also not as easy as some of the other solutions:"),(0,n.kt)("p",{parentName:"li"},"  1) Open ",(0,n.kt)("em",{parentName:"p"},"File Explorer"),", right-click the drive containing the installation location and select ",(0,n.kt)("em",{parentName:"p"},"Properties"),". 2) Go to ",(0,n.kt)("em",{parentName:"p"},"Security")," tab and click ",(0,n.kt)("em",{parentName:"p"},"Edit"),". 3) Single-click ",(0,n.kt)("em",{parentName:"p"},"SYSTEM")," and ensure that the ",(0,n.kt)("em",{parentName:"p"},"Allow")," box of every item in ",(0,n.kt)("em",{parentName:"p"},"Permissions for SYSTEM")," is checked (if it is checkable). Do the same check for ",(0,n.kt)("em",{parentName:"p"},"Administrators"),". 4) Click ",(0,n.kt)("em",{parentName:"p"},"OK")," to go back to ",(0,n.kt)("em",{parentName:"p"},"Properties")," dialog. Then click ",(0,n.kt)("em",{parentName:"p"},"Advanced"),". 5) Click ",(0,n.kt)("em",{parentName:"p"},"Change Permissions"),". 6) On ",(0,n.kt)("em",{parentName:"p"},"Permissions")," tab, double-click ",(0,n.kt)("em",{parentName:"p"},"Administrators"),". 7) Select ",(0,n.kt)("em",{parentName:"p"},"This folder, subfolders and files")," for ",(0,n.kt)("em",{parentName:"p"},"Applies to")," field and tick all the available ",(0,n.kt)("em",{parentName:"p"},"Basic permissions"),". After that hit ",(0,n.kt)("em",{parentName:"p"},"OK"),". 8) Do the same operation above (from item 7) for ",(0,n.kt)("em",{parentName:"p"},"SYSTEM"),". 9) Click ",(0,n.kt)("em",{parentName:"p"},"OK")," all the way out. Try installing AdGuard again."))),(0,n.kt)("h3",{id:"error-1618"},"Error 1618: Another installation is already in progress"),(0,n.kt)("p",null,"This error occurs when there are several instances of AdGuard installer launched at the same time. What to do if you get this error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Don't make multiple clicks on the installer even if doesn't start right away. Sometimes it may take a few seconds to display the installer UI."))),(0,n.kt)("h3",{id:"error-1638"},"Error 1638: Another version of this product is already installed"),(0,n.kt)("p",null,"It's very likely that you've already installed AdGuard before."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check if AdGuard is already installed on your computer. You can do it by pressing the ",(0,n.kt)("em",{parentName:"p"},"Win")," key and typing in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"AdGuard")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Maybe there's some leftover files from a previous AdGuard installation. Uninstall AdGuard using our special ",(0,n.kt)("a",{parentName:"p",href:"../../installation#advanced"},"uninstall tool")," and then repeat the installation."))),(0,n.kt)("h3",{id:"other"},"Other errors"),(0,n.kt)("p",null,"If you've encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find and archive ",(0,n.kt)("strong",{parentName:"p"},"AdGuard installation logs")," as it is described in ",(0,n.kt)("a",{parentName:"p",href:"../installation-logs"},"this article"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find and save to disk ",(0,n.kt)("strong",{parentName:"p"},"Event Viewer")," logs. ",(0,n.kt)("a",{parentName:"p",href:"../system-logs"},"This article")," explains how to do that.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Please email all these files from two previous steps to the support team at ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com"))," and describe the problem in the message body. Our tech support agents will reply to you as soon as possible."))))}d.isMDXComponent=!0}}]);