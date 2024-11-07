"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[490],{7509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"project_configuration/github","title":"GitHub setup","description":"Learn how to configure your repository on GitHub.","source":"@site/docs/project_configuration/github.md","sourceDirName":"project_configuration","slug":"/project_configuration/github","permalink":"/news_toolkit/project_configuration/github","draft":false,"unlisted":false,"editUrl":"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/github.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Learn how to configure your repository on GitHub."},"sidebar":"tutorialSidebar","previous":{"title":"Project Configuration","permalink":"/news_toolkit/category/project-configuration"},"next":{"title":"Firebase setup","permalink":"/news_toolkit/project_configuration/firebase"}}');var n=r(4848),i=r(8453);const s={sidebar_position:1,description:"Learn how to configure your repository on GitHub."},a="GitHub setup",c={},u=[{value:"Create repository",id:"create-repository",level:2},{value:"Branch protection rules",id:"branch-protection-rules",level:2},{value:"Slack integration",id:"slack-integration",level:2},{value:"Configuring PR merges",id:"configuring-pr-merges",level:2},{value:"Draft PRs",id:"draft-prs",level:2}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"github-setup",children:"GitHub setup"})}),"\n",(0,n.jsx)(t.p,{children:"Below are the recommended configuration settings for your repository on GitHub. Note that you're welcome to use other development hosting services, if desired."}),"\n",(0,n.jsx)(t.h2,{id:"create-repository",children:"Create repository"}),"\n",(0,n.jsxs)(t.p,{children:["If you don't already have an account, please follow GitHub's ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account",children:"getting started guide"})," to generate and configure your account. Check out the instructions to ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/create-a-repo",children:"create a repo"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"branch-protection-rules",children:"Branch protection rules"}),"\n",(0,n.jsxs)(t.p,{children:["You can protect important branches by setting ",(0,n.jsx)(t.em,{children:"branch protection rules"}),", which define whether collaborators can delete or force push to a branch, and set requirements for pushing to a branch, such as passing status checks or requiring a linear commit history. We recommend that you enable the following branch protection rules for your project:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Require a pull request before merging (require approvals, dismiss stale pull request approvals when new commits are pushed, require review from code owners)."}),"\n",(0,n.jsx)(t.li,{children:"Require status checks to pass before merging (require branches to be up to date before merging)."}),"\n",(0,n.jsx)(t.li,{children:"Require linear history."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To learn more, check out ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches",children:"branch protection rules"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"slack-integration",children:"Slack integration"}),"\n",(0,n.jsxs)(t.p,{children:["The GitHub integration for Slack gives you and your team full visibility into your GitHub projects right in Slack channels, where you can generate ideas, triage issues, and collaborate with other teams to move projects forward. To configure this for your repository, check out ",(0,n.jsx)(t.a,{href:"https://github.com/integrations/slack/blob/master/README.md",children:"GitHub and Slack integration"})," (recommended)."]}),"\n",(0,n.jsx)(t.h2,{id:"configuring-pr-merges",children:"Configuring PR merges"}),"\n",(0,n.jsxs)(t.p,{children:["Whenever you propose a change in Git, you create a new branch. ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository",children:"Branch management"})," is an important part of the Git workflow. After some time, your list of branches will grow, so it's a good idea to delete merged or stale branches."]}),"\n",(0,n.jsxs)(t.p,{children:["To streamline branch management, you can automatically delete head branches after pull requests are merged in your repository. To set this up, check out ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches",children:"how to automatically delete branches"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In addition, you can allow or disallow auto-merge for pull requests in your repository. To set this up for your project, check out ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository",children:"managing automerge for PRs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"draft-prs",children:"Draft PRs"}),"\n",(0,n.jsxs)(t.p,{children:["You can set it up so that a new pull request can be optionally created as a draft PR or a standard PR. To learn how to set this up, check out ",(0,n.jsx)(t.a,{href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/",children:"introducing draft pull requests"}),". Draft pull requests can't be merged and code owners aren't automatically notified to review them. However, you can collaborate with other team members in GitHub when using this feature. We recommended using draft pull requests for your project, but this isn't a requirement."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If any of the above features aren't available to you, your account might need to be upgraded. For an overview of your options, check out ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/get-started/learning-about-github/githubs-products",children:"GitHub's products"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var o=r(6540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);