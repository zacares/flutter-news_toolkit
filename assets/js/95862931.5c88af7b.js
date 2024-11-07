"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[612],{1534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"server_development/testing","title":"Testing","description":"Learn how to write and run tests for your API.","source":"@site/docs/server_development/testing.md","sourceDirName":"server_development","slug":"/server_development/testing","permalink":"/news_toolkit/server_development/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/flutter/news_toolkit/tree/main/docs/docs/server_development/testing.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Learn how to write and run tests for your API."},"sidebar":"tutorialSidebar","previous":{"title":"Connecting your data source","permalink":"/news_toolkit/server_development/connecting_your_data_source"},"next":{"title":"Working with blocks","permalink":"/news_toolkit/server_development/blocks"}}');var n=r(4848),s=r(8453);const i={sidebar_position:3,description:"Learn how to write and run tests for your API."},a="Testing",c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"testing",children:"Testing"})}),"\n",(0,n.jsxs)(t.p,{children:["The Flutter News Toolkit server comes with 100% test coverage out of the box. Tests are located in a parallel file structure relative to your server source code, residing in the ",(0,n.jsx)(t.code,{children:"api/test"})," directory that mirrors the ",(0,n.jsx)(t.code,{children:"api/lib"})," and ",(0,n.jsx)(t.code,{children:"api/routes"})," directories. Tests are automatically run on your server codebase using ",(0,n.jsx)(t.a,{href:"https://github.com/VeryGoodOpenSource/very_good_workflows",children:"Very Good Workflows"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Server tests are written in pure Dart and don't test any Flutter functionality. These tests evaluate the routes, middleware, and any additional classes and functions implemented in the ",(0,n.jsx)(t.code,{children:"api/lib"})," folder."]}),"\n",(0,n.jsxs)(t.p,{children:["Changes you make to your server such as ",(0,n.jsx)(t.a,{href:"connecting_your_data_source",children:"implementing an API data source"})," might reduce test coverage or cause existing tests to fail. We recommend maintaining 100% test coverage within your server in order to support stability and scalability."]}),"\n",(0,n.jsxs)(t.p,{children:["To support 100% test coverage in your server, make sure that your tests capture any changes you make to the server behavior. For example, if you implement a new data source ",(0,n.jsx)(t.code,{children:"your_data_source.dart"}),", create a corresponding ",(0,n.jsx)(t.code,{children:"your_data_source_test.dart"})," file that properly tests your new data source's behavior."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["for information on testing Dart Frog servers, check out the ",(0,n.jsx)(t.a,{href:"https://dartfrog.vgv.dev/docs/basics/testing",children:"Dart Frog testing documentation"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var o=r(6540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);