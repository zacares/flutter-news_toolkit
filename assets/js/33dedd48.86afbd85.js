"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[277],{1916:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=s(5893),r=s(1151);const i={sidebar_position:11,description:"Learn how the toolkit caches your news application's state."},n="Cache your application state",a={id:"flutter_development/cache_application_state",title:"Cache your application state",description:"Learn how the toolkit caches your news application's state.",source:"@site/docs/flutter_development/cache_application_state.md",sourceDirName:"flutter_development",slug:"/flutter_development/cache_application_state",permalink:"/news_toolkit/flutter_development/cache_application_state",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/cache_application_state.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"Learn how the toolkit caches your news application's state."},sidebar:"tutorialSidebar",previous:{title:"Privacy policy & terms of service",permalink:"/news_toolkit/flutter_development/privacy_policy"},next:{title:"Server Development",permalink:"/news_toolkit/category/server-development"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Debug mode caching",id:"debug-mode-caching",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"cache-your-application-state",children:"Cache your application state"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pub.dev/packages/hydrated_bloc",children:"Hydrated Bloc"})," is an extension to the BLoC pattern. It helps automatically persist and restore bloc states, ensuring that the app's state is retained across app restarts or crashes."]}),"\n",(0,o.jsxs)(t.p,{children:["The project relies on ",(0,o.jsx)(t.code,{children:"hydrated_bloc"})," to persist the state of the following blocs:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"feed_bloc"}),": Persists the feed state. It contains the list of feed articles fetched from the API."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"article_bloc"})," : Persists each article information fetched from the API."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"categories_bloc"}),": Persists all feed categories fetched from the API."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"theme_mode_bloc"})," : Persists the theme mode of the app selected by the user."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"hydrated_bloc"})," package uses its own ",(0,o.jsx)(t.code,{children:"hydrated_storage"})," to persist the state of blocs on the application's side. It is enabled by default."]}),"\n",(0,o.jsx)(t.p,{children:"Upon launching the application, if the feed state is empty, it retrieves the feed articles from the API. If the feed state is not empty, it displays the cached feed articles. As the user scrolls to the end of the feed page, older feed articles are fetched from the API and added to the feed state that will be persisted."}),"\n",(0,o.jsx)(t.p,{children:"Actions such as opening the app from background or terminated state will not affect the state of the blocs. Those will be persisted and restored when the user restarts the app."}),"\n",(0,o.jsx)(t.p,{children:"In order for the user to see the most recent articles, they must refresh the feed by pulling down the feed page."}),"\n",(0,o.jsx)(t.p,{children:"If there are any errors while fetching the feed articles, the user will be notified by a 'Network Error' screen. The user can retry fetching the articles by tapping on the 'Retry' button."}),"\n",(0,o.jsx)(t.h2,{id:"debug-mode-caching",children:"Debug mode caching"}),"\n",(0,o.jsxs)(t.p,{children:["In this project, ",(0,o.jsx)(t.code,{children:"hydrated_bloc"})," caching is automatically disabled for debug mode. Every restart of the application will clear the ",(0,o.jsx)(t.code,{children:"hydrated_bloc"})," storage state, so no state will be restored. In order to enable it, the following code must be removed from the ",(0,o.jsx)(t.code,{children:"bootstrap.dart"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"if (kDebugMode) {\n    await HydratedBloc.storage.clear();\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>n});var o=s(7294);const r={},i=o.createContext(r);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);