"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[94],{6674:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(4848),n=o(8453);const r={sidebar_position:3,description:"Learn how to configure social login with Facebook and Twitter."},a="Authentication setup",s={id:"project_configuration/social_authentication",title:"Authentication setup",description:"Learn how to configure social login with Facebook and Twitter.",source:"@site/docs/project_configuration/social_authentication.md",sourceDirName:"project_configuration",slug:"/project_configuration/social_authentication",permalink:"/news_toolkit/project_configuration/social_authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/social_authentication.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn how to configure social login with Facebook and Twitter."},sidebar:"tutorialSidebar",previous:{title:"Firebase setup",permalink:"/news_toolkit/project_configuration/firebase"},next:{title:"Ads setup or removal",permalink:"/news_toolkit/project_configuration/ads"}},l={},c=[{value:"Email",id:"email",level:2},{value:"Firebase configuration",id:"firebase-configuration",level:3},{value:"Google",id:"google",level:2},{value:"Firebase configuration",id:"firebase-configuration-1",level:3},{value:"Apple",id:"apple",level:2},{value:"Firebase configuration",id:"firebase-configuration-2",level:3},{value:"Complete the setup",id:"complete-the-setup",level:3},{value:"Facebook",id:"facebook",level:2},{value:"Create an app",id:"create-an-app",level:3},{value:"Firebase configuration",id:"firebase-configuration-3",level:3},{value:"Complete the setup",id:"complete-the-setup-1",level:3},{value:"Twitter",id:"twitter",level:2},{value:"Create an app",id:"create-an-app-1",level:3},{value:"Enable elevated access",id:"enable-elevated-access",level:3},{value:"Firebase configuration",id:"firebase-configuration-4",level:3},{value:"Complete the setup",id:"complete-the-setup-2",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authentication-setup",children:"Authentication setup"})}),"\n",(0,i.jsx)(t.p,{children:"The Flutter News Toolkit comes pre-configured to support authentication using passwordless email, Google login, Apple ID, and social authentication using Facebook and Twitter login. To set this up for your news app, use the following instructions for each Firebase project and app."}),"\n",(0,i.jsx)(t.h2,{id:"email",children:"Email"}),"\n",(0,i.jsx)(t.p,{children:"The news toolkit supports passwordless login. This means a deep link is sent to the user's email address, that when clicked will open your app and log the user in."}),"\n",(0,i.jsx)(t.h3,{id:"firebase-configuration",children:"Firebase configuration"}),"\n",(0,i.jsxs)(t.p,{children:["In your Firebase Console, go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Authentication -> Sign-in-method -> Add new provider -> Email/Password"})," to set up your email authentication method. The toolkit currently supports a passwordless login flow, ",(0,i.jsx)(t.strong,{children:"so be sure to enable this setting as well"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Passwordless authentication with an email link requires additional configuration steps. Please follow the steps for ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/ios/email-link-auth?authuser=0",children:"authentication on Apple platforms"})," and ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/android/email-link-auth?authuser=0",children:"authentication on Android"})," configurations."]})}),"\n",(0,i.jsxs)(t.p,{children:["Once the email authentication method is set up, go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Engage -> Dynamic links"}),'. Set up a new dynamic link URL prefix (for example, yourApplicationName.page.link) with a dynamic link URL of "/email_login".']}),"\n",(0,i.jsxs)(t.p,{children:["Once the dynamic link is set up, replace the placeholder value for ",(0,i.jsx)(t.strong,{children:"FLAVOR_DEEP_LINK_DOMAIN"})," inside the ",(0,i.jsx)(t.code,{children:"launch.json"})," file with the ",(0,i.jsx)(t.strong,{children:"dynamic link URL prefix"})," you just created. This enviroment variable will be used inside ",(0,i.jsx)(t.code,{children:"firebase_authentication_client.dart"})," to generate the dynamic link URL that will be sent to the user."]}),"\n",(0,i.jsxs)(t.p,{children:["In addition, replace the placeholder value for every ",(0,i.jsx)(t.strong,{children:"FLAVOR_DEEP_LINK_DOMAIN"})," key within your ",(0,i.jsx)(t.code,{children:"project.pbxproj"})," file with the dynamic link URL prefix you just created."]}),"\n",(0,i.jsx)(t.h2,{id:"google",children:"Google"}),"\n",(0,i.jsx)(t.h3,{id:"firebase-configuration-1",children:"Firebase configuration"}),"\n",(0,i.jsxs)(t.p,{children:["In your Firebase Console, go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Authentication -> Sign-in-method -> Add new provider -> Google"})," to set up your Google authentication method. Add your (Google) web ID and web client secret under the ",(0,i.jsx)(t.strong,{children:"Web SDK Configuration"})," dropdown menu. You can find your web client ID for existing projects by selecting your project and OAuth 2.0 entry on the ",(0,i.jsx)(t.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Google API Console"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"apple",children:"Apple"}),"\n",(0,i.jsx)(t.h3,{id:"firebase-configuration-2",children:"Firebase configuration"}),"\n",(0,i.jsxs)(t.p,{children:["In your Firebase Console, go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Authentication -> Sign-in-method -> Add new provider -> Apple"})," to set up your Apple authentication method. Enable this in your app by following the additional configuration steps for ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/ios/apple?authuser=0",children:"Apple authentication"})," and ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/android/apple?authuser=0",children:"Apple authentication on Android"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"complete-the-setup",children:"Complete the setup"}),"\n",(0,i.jsxs)(t.p,{children:["To complete setup, add this authorization callback URL to your app configuration in the Apple Developer Console. Additional steps might be needed to verify ownership of this web domain to Apple. To learn more, check out the ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/?authuser=0",children:"Firebase authentication"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"facebook",children:"Facebook"}),"\n",(0,i.jsx)(t.h3,{id:"create-an-app",children:"Create an app"}),"\n",(0,i.jsxs)(t.p,{children:["Log in or create an account in the ",(0,i.jsx)(t.a,{href:"https://developers.facebook.com/apps/",children:"Facebook Developer Portal"})," to get started. Once logged in, create a new app to support your development project. In the same portal, enable the Facebook Login product (",(0,i.jsx)(t.strong,{children:"Products -> Facebook Login"}),"). Next, go to ",(0,i.jsx)(t.strong,{children:"Roles -> Roles"})," and add your developer team so the team can customize the app configuration for Android and iOS. Finally, go to ",(0,i.jsx)(t.strong,{children:"Settings -> Advanced"})," and enable ",(0,i.jsx)(t.strong,{children:"App authentication, native or desktop app?"})]}),"\n",(0,i.jsx)(t.h3,{id:"firebase-configuration-3",children:"Firebase configuration"}),"\n",(0,i.jsxs)(t.p,{children:["After setting up your ",(0,i.jsx)(t.a,{href:"https://flutter.github.io/news_toolkit/project_configuration/firebase",children:"Firebase project"}),", go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Authentication -> Sign-in-method -> Add new provider -> Facebook"})," to set up your Facebook authentication method. Fill in the app ID and secret from the created Facebook app."]}),"\n",(0,i.jsx)(t.h3,{id:"complete-the-setup-1",children:"Complete the setup"}),"\n",(0,i.jsxs)(t.p,{children:["To complete your setup, add the OAuth redirect URI listed in your ",(0,i.jsx)(t.strong,{children:"Firebase Authentication Sign-in Method"})," to your Facebook app configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["In addition, replace the placeholder value for every ",(0,i.jsx)(t.strong,{children:"FACEBOOK_APP_ID"})," , ",(0,i.jsx)(t.strong,{children:"FACEBOOK_CLIENT_TOKEN"})," and ",(0,i.jsx)(t.strong,{children:"FACEBOOK_DISPLAY_NAME"})," keys within your ",(0,i.jsx)(t.code,{children:"project.pbxproj"})," file with their corresponding values."]}),"\n",(0,i.jsxs)(t.p,{children:["For additional details, check out the ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/?authuser=0",children:"Firebase authentication"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"twitter",children:"Twitter"}),"\n",(0,i.jsx)(t.h3,{id:"create-an-app-1",children:"Create an app"}),"\n",(0,i.jsxs)(t.p,{children:["Log in or create an account in the ",(0,i.jsx)(t.a,{href:"https://developer.twitter.com/",children:"Twitter Developer Portal"}),'. Once logged in, create both a project and an app to enable Twitter authentication in your news app. Enable OAuth 2.0 authentication by setting "yourapp://" as the callback URI and "Native app" as the type of the app. If possible, add your full team as developers of the Twitter app, so everyone has access to the app\'s ID and secret.']}),"\n",(0,i.jsx)(t.h3,{id:"enable-elevated-access",children:"Enable elevated access"}),"\n",(0,i.jsxs)(t.p,{children:["Within ",(0,i.jsx)(t.a,{href:"https://developer.twitter.com/en/portal/products",children:"Twitter products"}),', be sure to enable Twitter API v2 with "Elevated" access. Twitter needs this for authentication to work.']}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'You might need to fill out a form to apply for "Elevated" access.'})}),"\n",(0,i.jsx)(t.h3,{id:"firebase-configuration-4",children:"Firebase configuration"}),"\n",(0,i.jsxs)(t.p,{children:["After setting up your ",(0,i.jsx)(t.a,{href:"https://flutter.github.io/news_toolkit/project_configuration/firebase",children:"Firebase project"}),", go to ",(0,i.jsx)(t.strong,{children:"Firebase -> Authentication -> Sign-in-method -> Add new provider -> Twitter"})," to set up your Twitter authentication method. Fill in the app ID and secret from the created Twitter app."]}),"\n",(0,i.jsx)(t.h3,{id:"complete-the-setup-2",children:"Complete the setup"}),"\n",(0,i.jsxs)(t.p,{children:["To complete your setup, add the OAuth redirect URI listed in your ",(0,i.jsx)(t.strong,{children:"Firebase Authentication Sign-in Method"})," to your Twitter app configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["In addition, replace the placeholder values for ",(0,i.jsx)(t.strong,{children:"TWITTER_API_KEY"})," and ",(0,i.jsx)(t.strong,{children:"TWITTER_API_SECRET"})," inside the ",(0,i.jsx)(t.code,{children:"launch.json"})," file. You must also replace the placeholder value for every ",(0,i.jsx)(t.strong,{children:"TWITTER_REDIRECT_URI_SCHEME"})," key within your ",(0,i.jsx)(t.code,{children:"project.pbxproj"})," file with their corresponding values."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, check out the ",(0,i.jsx)(t.a,{href:"https://firebase.google.com/docs/auth/?authuser=0",children:"Firebase authentication"})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var i=o(6540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);