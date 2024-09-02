"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[60],{4950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(4848),r=n(8453);const i={sidebar_position:5,description:"Learn how to configure analytics in your Flutter news application."},s="Analytics",o={id:"flutter_development/analytics",title:"Analytics",description:"Learn how to configure analytics in your Flutter news application.",source:"@site/docs/flutter_development/analytics.md",sourceDirName:"flutter_development",slug:"/flutter_development/analytics",permalink:"/news_toolkit/flutter_development/analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/analytics.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn how to configure analytics in your Flutter news application."},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/news_toolkit/flutter_development/theming"},next:{title:"Authentication",permalink:"/news_toolkit/flutter_development/authentication"}},c={},l=[];function u(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"analytics",children:"Analytics"})}),"\n",(0,a.jsx)(t.p,{children:"Google Analytics is an app measurement solution, available at no charge, that provides insight on app usage and user engagement."}),"\n",(0,a.jsxs)(t.p,{children:["This project uses the ",(0,a.jsx)(t.code,{children:"firebase_analytics"})," package to track user activity within the app. To use ",(0,a.jsx)(t.code,{children:"firebase_analytics"}),", you must have a Firebase project setup correctly. For instructions on how to add Firebase to your flutter app, check out ",(0,a.jsx)(t.a,{href:"https://firebase.google.com/docs/flutter/setup",children:"Add Firebase to your Flutter app"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/flutter/news_toolkit/blob/main/flutter_news_example/packages/analytics_repository/lib/src/analytics_repository.dart#L38",children:"AnalyticsRepository"})," handles event tracking and can be accessed globally within the app using ",(0,a.jsx)(t.code,{children:"BuildContext"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class AnalyticsRepository {\n  const AnalyticsRepository(FirebaseAnalytics analytics)\n      : _analytics = analytics;\n\n  final FirebaseAnalytics _analytics;\n\n  /// Tracks the provided [AnalyticsEvent].\n  Future<void> track(AnalyticsEvent event) async {\n    try {\n      await _analytics.logEvent(\n        name: event.name,\n        parameters: event.properties,\n      );\n    } catch (error, stackTrace) {\n      Error.throwWithStackTrace(TrackEventFailure(error), stackTrace);\n    }\n  }\n  ...\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);