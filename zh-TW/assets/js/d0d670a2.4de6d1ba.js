"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1794],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(o),m=n,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return o?r.createElement(g,l(l({ref:t},d),{},{components:o})):r.createElement(g,l({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(4137));const a={title:"How to get Logcat log",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get Logcat log",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get Logcat log",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/tasker"},next:{title:"How to get HAR files",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/har"}},p={},s=[{value:"General Instruction",id:"general-instruction",level:2},{value:"Capture a bug report from a device",id:"capture-a-bug-report-from-a-device",level:2},{value:"Additional Instruction (for old Android versions)",id:"additional-instruction-for-old-android-versions",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"general-instruction"},"General Instruction"),(0,n.kt)("p",null,"For troubleshooting problems with crashes a regular log is almost always not enough. In such cases to identify the origin of the problem we need the system log. Below is the instruction how to collect and get it."),(0,n.kt)("h2",{id:"capture-a-bug-report-from-a-device"},"Capture a bug report from a device"),(0,n.kt)("p",null,"To get a bug report directly from your device, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Be sure you have ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Developer Options")," enabled.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Developer options"),", tap ",(0,n.kt)("strong",{parentName:"p"},"Take bug report"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"Bug report *mobile"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select the type of bug report you want and tap ",(0,n.kt)("strong",{parentName:"li"},"Report"),". >After a moment you get a notification that the bug report is ready (see figure 2).")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png",alt:"Bug report *mobile"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"To share the bug report, tap the notification.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"Bug report *mobile_border"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Send this log to our support team.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")),(0,n.kt)("h2",{id:"additional-instruction-for-old-android-versions"},"Additional Instruction (for old Android versions)"),(0,n.kt)("p",null,"On old Android devices there is no such option to take a bug report automatically. It has to be done manually by following this instruction:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part #1: prepare the device")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch device to the developer mode. To do this: go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"About")," \u2192 tap ",(0,n.kt)("strong",{parentName:"p"},"Build Number")," 7 times.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Developer Options"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable ",(0,n.kt)("strong",{parentName:"p"},"USB debugging"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Increase ",(0,n.kt)("strong",{parentName:"p"},"Logger buffer")," sizes to 4MB per log buffer."))),(0,n.kt)("p",null,"4MB should be enough for storing the logs we need until you're able to do the second part (getting log from the device);"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," you need to reproduce the problem after you've done with the first part!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part #2: get the log")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your device to PC with USB cable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and install Minimal ADB:"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://forum.xda-developers.com/showthread.php?t=2317790"},"http://forum.xda-developers.com/showthread.php?t=2317790")),(0,n.kt)("p",null,"Direct download link:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.androidfilehost.com/?fid=24052804347803384"},"https://www.androidfilehost.com/?fid=24052804347803384")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Run this command in the console (it will be opened after install):")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"adb logcat -v threadtime -d > C:\\logcat.txt")),(0,n.kt)("p",null,"Send this log to us by contacting support or by any other way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Alternative way for ROOT users:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and run ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Record")," in the menu. Choose a name for a log file or just press ",(0,n.kt)("strong",{parentName:"p"},"OK"),". Now you can press ",(0,n.kt)("strong",{parentName:"p"},"Home")," button, CatLog will continue recording the log in background.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open CatLog and press ",(0,n.kt)("strong",{parentName:"p"},"Stop record")," in the menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Send this log to our support team."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))}u.isMDXComponent=!0}}]);