"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[267],{7597:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"project_configuration/api_deployment","title":"API deployment setup","description":"Learn how to setup continous deployments for your API.","source":"@site/docs/project_configuration/api_deployment.md","sourceDirName":"project_configuration","slug":"/project_configuration/api_deployment","permalink":"/news_toolkit/project_configuration/api_deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/api_deployment.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"description":"Learn how to setup continous deployments for your API."},"sidebar":"tutorialSidebar","previous":{"title":"App deployment setup","permalink":"/news_toolkit/project_configuration/app_deployment"},"next":{"title":"Upgrading your project","permalink":"/news_toolkit/project_configuration/upgrading"}}');var r=o(4848),i=o(8453);const s={sidebar_position:8,description:"Learn how to setup continous deployments for your API."},l="API deployment setup",d={},c=[{value:"Google Cloud",id:"google-cloud",level:2},{value:"Deployment Steps",id:"deployment-steps",level:3},{value:"Other",id:"other",level:2},{value:"Accessing your API",id:"accessing-your-api",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"api-deployment-setup",children:"API deployment setup"})}),"\n",(0,r.jsxs)(n.p,{children:["The Flutter News Toolkit uses ",(0,r.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/overview",children:"Dart Frog"})," to simplify the backend build by aggregating, composing, and normalizing data from multiple sources. You must deploy your Dart Frog API to serve requests to the internet."]}),"\n",(0,r.jsx)(n.h2,{id:"google-cloud",children:"Google Cloud"}),"\n",(0,r.jsxs)(n.p,{children:["You can deploy your Dart Frog API to ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/run/docs/overview/what-is-cloud-run",children:"Cloud Run"}),", a managed compute platform that lets you run containers directly on top of Google's scalable infrustructure. To deploy your API to Cloud Run, check out the Dart Frog instructions at ",(0,r.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/deploy/google-cloud-run",children:"Google Cloud Run"})," and review the details below. Also, set up a ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/blog/products/identity-security/enabling-keyless-authentication-from-github-actions",children:"GitHub Action Service Account"})," to ease the process of authenticating and authorizing GitHub Actions Workflows to Google Cloud."]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,r.jsx)(n.p,{children:"If you've created a development and production flavor for your application, you'll want two corresponding Google Cloud Projects where the API must be deployed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Development:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"project_id: example-name-dev"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"service_name : example-name-api-dev"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Production:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"project_id: example-name-prod"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"service_name : example-name-api-prod"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Every time a change is made inside the API, a new version must be deployed to Cloud Run for both GCP projects. To do so, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure you have the ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Google Cloud SDK"})," installed and configured."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure you have the ",(0,r.jsx)(n.a,{href:"https://dart.dev/get-dart",children:"Dart SDK"})," and the ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/dart_frog",children:"Dart Frog"})," packages installed and configured."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Login into the GCP account using the ",(0,r.jsx)(n.code,{children:"gcloud auth login"})," command, selecting the email account that has access to your project's GCP accounts."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.code,{children:"gcloud config set project <project_id>"})," command to set the project to be one of the app's projects."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a terminal inside the ",(0,r.jsx)(n.code,{children:"api"})," folder, and run the ",(0,r.jsx)(n.code,{children:"dart_frog build"})," command. This will create a ",(0,r.jsx)(n.code,{children:"/build"})," directory with all the files needed to deploy the API."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to deploy the API to Cloud Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gcloud run deploy [service_name]  \\\n\n--source build \\\n\n--project=[project_id] \\\n\n--region=us-central \\\n\n--allow-unauthenticated\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Note: the ",(0,r.jsx)(n.code,{children:"--allow-unauthenticated"})," is needed because the api can be publicly accessed."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the deploy was made to the already existing service (by using the ",(0,r.jsx)(n.code,{children:"service_name"})," values provided above), the URL will be the same as the previous version. Otherwise, it must be updated as ",(0,r.jsx)(n.code,{children:"API_BASE_URL"})," inside the ",(0,r.jsx)(n.code,{children:"launch.json"})," file of the project."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can optionally configure ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication",children:"API authentication"})," and ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/run/docs/authenticating/end-users#cicp-firebase-auth",children:"user authentication for your API"}),", if desired."]})}),"\n",(0,r.jsx)(n.h2,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.p,{children:["You can also deploy your Dart Frog API to other services, like ",(0,r.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/deploy/aws-app-runner",children:"AWS App Runner"})," or ",(0,r.jsx)(n.a,{href:"https://dartfrog.vgv.dev/docs/deploy/digital-ocean-app-platform",children:"Digital Ocean App Platform"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-your-api",children:"Accessing your API"}),"\n",(0,r.jsxs)(n.p,{children:["By default, your app expects to receive news data from ",(0,r.jsx)(n.code,{children:"localhost"}),". In order to receive data from your deployed API, you must point your app towards your new URL."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you're using an android emulator, you must set ",(0,r.jsx)(n.code,{children:"http://10.0.2.2:8080"})," as the ",(0,r.jsx)(n.code,{children:"baseUrl"})," instead of ",(0,r.jsx)(n.code,{children:"http://localhost:8080"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.code,{children:"ApiClient"})," class that extends ",(0,r.jsx)(n.code,{children:"FlutterNewsExampleApiClient"})," and set the ",(0,r.jsx)(n.code,{children:"baseUrl"})," field to your new API URL. Additionally, override any ",(0,r.jsx)(n.code,{children:"FlutterNewsExampleApiClient"})," methods which diverge from your API request schema, and implement them to handle the request appropriately."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, edit the ",(0,r.jsx)(n.code,{children:"main_flavor.dart"})," file for every app flavor you want receiving data from your deployed API. Remove the assignment of ",(0,r.jsx)(n.code,{children:"apiClient"})," to ",(0,r.jsx)(n.code,{children:"FlutterNewsExampleApiClient.localhost"})," and assign ",(0,r.jsx)(n.code,{children:"apiClient"})," to an instance of your new API client. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"final apiClient = YourNewsApiClient(\n    tokenProvider: tokenStorage.readToken,\n    baseURL: 'https://yourApiBaseURL',\n);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);