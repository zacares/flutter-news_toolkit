"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[928],{9341:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(5893),i=o(1151);const a={sidebar_position:7,description:"Learn how to setup continous deployments for your application."},r="App deployment setup",c={id:"project_configuration/app_deployment",title:"App deployment setup",description:"Learn how to setup continous deployments for your application.",source:"@site/docs/project_configuration/app_deployment.md",sourceDirName:"project_configuration",slug:"/project_configuration/app_deployment",permalink:"/news_toolkit/project_configuration/app_deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/app_deployment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Learn how to setup continous deployments for your application."},sidebar:"tutorialSidebar",previous:{title:"App Store setup",permalink:"/news_toolkit/project_configuration/appstore"},next:{title:"API deployment setup",permalink:"/news_toolkit/project_configuration/api_deployment"}},s={},d=[{value:"Codemagic",id:"codemagic",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"app-deployment-setup",children:"App deployment setup"})}),"\n",(0,n.jsx)(t.h2,{id:"codemagic",children:"Codemagic"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Codemagic is not a required service for this project. You're welcome to use other automated CI/CD services for your apps, if desired."})}),"\n",(0,n.jsx)(t.p,{children:"Codemagic is an automated CI/CD service that streamlines deployments to the Google Play Store and App Store Connect. You can configure your CI/CD pipeline up front and trigger deployments automatically with each subsequent code change."}),"\n",(0,n.jsxs)(t.p,{children:["To use this service, login or ",(0,n.jsx)(t.a,{href:"https://codemagic.io/signup?campaign=flutter-ci-header_sign_up_btn",children:"create a Codemagic account"})," and follow the ",(0,n.jsx)(t.a,{href:"https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/",children:"getting started guide"})," guide to set up a ",(0,n.jsx)(t.code,{children:"codemagic.yaml"})," build configuration file. Be sure to populate all 'TODO' fields in your ",(0,n.jsx)(t.code,{children:"codemagic.yaml"})," file."]}),"\n",(0,n.jsxs)(t.p,{children:["For this project, specifically, be sure to create an ",(0,n.jsx)(t.a,{href:"https://docs.codemagic.io/yaml-code-signing/signing-ios/#creating-the-app-store-connect-api-key",children:"App Store API Key"})," and add this to your Codemagic account. In addition, ",(0,n.jsx)(t.a,{href:"https://docs.codemagic.io/yaml-code-signing/signing-android/#generating-a-keystore",children:"generate a keytore"})," for signing your release builds."]}),"\n",(0,n.jsxs)(t.p,{children:["A service account is required when publishing to Google Play. The service account JSON key file must be added to Codemagic to authenticate with these services. To set up a service account for authentication with Google Play and Firebase, use the instructions at ",(0,n.jsx)(t.a,{href:"https://docs.codemagic.io/knowledge-base/google-services-authentication/",children:"Google services authetication"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var n=o(7294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);