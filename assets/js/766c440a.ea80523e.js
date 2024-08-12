"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[653],{9288:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(5893),t=i(1151);const s={sidebar_position:4,description:"Learn how to customize the look and feel of your Flutter news application."},r="Theming",l={id:"flutter_development/theming",title:"Theming",description:"Learn how to customize the look and feel of your Flutter news application.",source:"@site/docs/flutter_development/theming.md",sourceDirName:"flutter_development",slug:"/flutter_development/theming",permalink:"/news_toolkit/flutter_development/theming",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/theming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to customize the look and feel of your Flutter news application."},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/news_toolkit/flutter_development/testing"},next:{title:"Analytics",permalink:"/news_toolkit/flutter_development/analytics"}},d={},c=[{value:"Splash Screen",id:"splash-screen",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"App Launcher Icon",id:"app-launcher-icon",level:2},{value:"App Logo",id:"app-logo",level:2},{value:"App Colors",id:"app-colors",level:2},{value:"Theme Colors",id:"theme-colors",level:3},{value:"In-line Colors",id:"in-line-colors",level:3},{value:"Typography",id:"typography",level:2},{value:"Fonts",id:"fonts",level:3},{value:"Additional Customization",id:"additional-customization",level:3},{value:"Text Style Visualization",id:"text-style-visualization",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"theming",children:"Theming"})}),"\n",(0,o.jsx)(n.h2,{id:"splash-screen",children:"Splash Screen"}),"\n",(0,o.jsxs)(n.p,{children:["Flutter's ",(0,o.jsx)(n.a,{href:"https://docs.flutter.dev/development/ui/advanced/splash-screen",children:"Adding a Splash Screen to Your Mobile App"})," documentation provides the most up-to-date and in-depth guidance on customizing the splash screen in your mobile app."]}),"\n",(0,o.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(n.p,{children:["Within the ",(0,o.jsx)(n.code,{children:"android/app/src/main/res"})," folder, replace ",(0,o.jsx)(n.code,{children:"launch_image.png"})," inside the"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"mipmap-mdpi"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"mipmap-hdpi"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"mipmap-xhdpi"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"mipmap-xxhdpi"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["folders with the image asset you want featured on your Android splash screen. The ",(0,o.jsx)(n.code,{children:"launch_image.png"})," you provide inside the ",(0,o.jsx)(n.code,{children:"mipmap"})," folders should have an appropriate size for that folder."]}),"\n",(0,o.jsxs)(n.p,{children:["The background color of your splash screen can be changed by editing the hex code value with ",(0,o.jsx)(n.code,{children:'name="splash_background"'})," in ",(0,o.jsx)(n.code,{children:"android/app/src/main/res/values/colors.xml"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,o.jsx)(n.p,{children:"You should configure your iOS splash screen using an Xcode storyboard. To begin, add your splash screen image assets named"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"LaunchImage.png"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"LaunchImage@2x.png"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"LaunchImage@3x.png"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["with sizes corresponding to the filename inside the ",(0,o.jsx)(n.code,{children:"ios/Runner/Assets.xcassets/LaunchImage.imageset"})," folder."]}),"\n",(0,o.jsxs)(n.p,{children:["Open your project's ",(0,o.jsx)(n.code,{children:"ios"})," folder in Xcode and open ",(0,o.jsx)(n.code,{children:"Runner/LaunchScreen.storyboard"})," in the editor. Specify your desired splash screen image and background by selecting those elements and editing their properties in the Xcode inspectors window. Feel free to further edit the splash screen properties in the Xcode inspectors window to customize the exact look of your splash screen."]}),"\n",(0,o.jsx)(n.h2,{id:"app-launcher-icon",children:"App Launcher Icon"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"https://pub.dev/packages/flutter_launcher_icons",children:"Flutter Launcher Icons"})," package to streamline adding your new app launcher icon."]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you may want to manually update your app's launcher icon. Flutter's documentation contains information on how to accomplish this for both ",(0,o.jsx)(n.a,{href:"https://docs.flutter.dev/deployment/ios#add-an-app-icon",children:"iOS"})," and ",(0,o.jsx)(n.a,{href:"https://docs.flutter.dev/deployment/android#adding-a-launcher-icon",children:"Android"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"app-logo",children:"App Logo"}),"\n",(0,o.jsx)(n.p,{children:"App logo image assets are displayed at both the top of the feed view and at the top of the app navigation drawer. To replace these with your custom assets, replace the following files:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"packages/app_ui/assets/images/logo_dark.png"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"packages/app_ui/assets/images/logo_light.png"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Change the dimensions specified in the ",(0,o.jsx)(n.code,{children:"AppLogo"})," widget (",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/widgets/app_logo.dart"}),") to match your new image dimensions."]}),"\n",(0,o.jsx)(n.h2,{id:"app-colors",children:"App Colors"}),"\n",(0,o.jsxs)(n.p,{children:["The colors used throughout your app are specified in the ",(0,o.jsx)(n.code,{children:"app_colors.dart"})," file found in ",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/colors"}),". Add custom colors to this file and reference them as an attribute of the ",(0,o.jsx)(n.code,{children:"AppColors"})," class inside your app (e.g. ",(0,o.jsx)(n.code,{children:"AppColors.orange"}),"). The role of colors within your app can be specified as either theme information or as an inline color."]}),"\n",(0,o.jsx)(n.h3,{id:"theme-colors",children:"Theme Colors"}),"\n",(0,o.jsxs)(n.p,{children:["Some colors are assigned to themes, which allow colors to be shared throughout your app based on their intended role in the user interface. For additional information on specifying theme colors, reference the Flutter ",(0,o.jsx)(n.a,{href:"https://docs.flutter.dev/cookbook/design/themes",children:"Use Themes to Share Colors and Font Styles"})," cookbook."]}),"\n",(0,o.jsxs)(n.p,{children:["App themes are laid out in the ",(0,o.jsx)(n.code,{children:"app_theme.dart"})," file inside the ",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/theme"})," folder. For example, the widget-specific theme ",(0,o.jsx)(n.code,{children:"_appBarTheme"})," allow you to specify the colors and theme information for your ",(0,o.jsx)(n.a,{href:"https://api.flutter.dev/flutter/material/AppBar-class.html",children:"AppBar"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"in-line-colors",children:"In-line Colors"}),"\n",(0,o.jsx)(n.p,{children:"Not all of your desired color assignments can be specified by changing the app's theme data. You may want to use a color only on certain instances of a widget or specify colors with more granularity than the theme information supports. There are several existing inline color specifications in your app:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Specifying Button Colors"})}),"\n",(0,o.jsxs)(n.p,{children:["The colors of an app button are specified by the named constructors laid out in ",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/widgets/app_button.dart"}),". To specify new button colors, create a new color constructor. For example, to create an orange app button create the constructor"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"const AppButton.orange({\n  Key? key,\n  VoidCallback? onPressed,\n  double? elevation,\n  TextStyle? textStyle,\n  required Widget child,\n}) : this._(\n        key: key,\n        onPressed: onPressed,\n        buttonColor: AppColors.orange,\n        child: child,\n        foregroundColor: AppColors.white,\n        elevation: elevation,\n        textStyle: textStyle,\n     );\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can then call the new ",(0,o.jsx)(n.code,{children:"AppButton.orange"})," constructor in your app wherever you want to add an orange button, or replace an existing constructor call such as ",(0,o.jsx)(n.code,{children:"AppButton.redWine"})," with your new constructor to update the button color."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Specifying TabBar Colors"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"TabBarTheme"})," specified in ",(0,o.jsx)(n.code,{children:"app_theme.dart"})," does not provide a ",(0,o.jsx)(n.code,{children:"backgroundColor"})," property. To specify a specific color for the ",(0,o.jsx)(n.code,{children:"CategoriesTabBar"})," rendered below the ",(0,o.jsx)(n.code,{children:"AppBar"}),", edit ",(0,o.jsx)(n.code,{children:"CategoriesTabBar"}),"'s ",(0,o.jsx)(n.code,{children:"build()"})," method inside ",(0,o.jsx)(n.code,{children:"lib/categories/widgets/categories_tab_bar.dart"})," to place the ",(0,o.jsx)(n.code,{children:"TabBar"})," widget inside a ",(0,o.jsx)(n.code,{children:"ColoredBox"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"return ColoredBox(\n  color: AppColors.orange,\n  child: TabBar(\n    controller: controller,\n    isScrollable: true,\n    tabs: tabs,\n  ),\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Other widgets with in-line specified colors include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"PostContentPremiumCategory"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"SlideshowCategory"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"PostContentCategory"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"MagicLinkPromptSubtitle"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ManageSubscriptionView"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"AppTextField"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ArticleIntroduction"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"typography",children:"Typography"}),"\n",(0,o.jsx)(n.h3,{id:"fonts",children:"Fonts"}),"\n",(0,o.jsxs)(n.p,{children:["For general details regarding font customization, reference Flutter's ",(0,o.jsx)(n.a,{href:"https://docs.flutter.dev/cookbook/design/fonts",children:"Use a Custom Font"})," documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["To change the fonts used in your app, first add your font assets inside ",(0,o.jsx)(n.code,{children:"packages/app_ui/assets/fonts"}),", then list the added fonts under the ",(0,o.jsx)(n.code,{children:"fonts"})," section of ",(0,o.jsx)(n.code,{children:"packages/app_ui/pubspec.yaml"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can specify which fonts you want used in different elements of your app in the ",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/typography/app_text_styles.dart"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["You can specify the fonts used in your app by changing the ",(0,o.jsx)(n.code,{children:"fontFamily"})," value at the following locations inside the ",(0,o.jsx)(n.code,{children:"app_text_styles.dart"})," file to match the name of your desired font family:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"UITextStyle._baseTextStyle"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifies the default font used in UI elements."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ContentTextStyle._baseTextStyle"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifies the default font used in news content."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"button"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifies the font used in buttons."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"caption"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifies the font used in your caption text."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"overline"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifies the font used in overline text elements such as category labels."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"labelSmall"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Specifies the font used in label text (",(0,o.jsx)(n.em,{children:"not referenced in the template out-of-the-box"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"additional-customization",children:"Additional Customization"}),"\n",(0,o.jsxs)(n.p,{children:["To customize your app's typography further, you can add and edit various ",(0,o.jsx)(n.code,{children:"TextStyle"})," values, such as ",(0,o.jsx)(n.code,{children:"fontWeight"}),", ",(0,o.jsx)(n.code,{children:"fontSize"}),", and others in the ",(0,o.jsx)(n.code,{children:"packages/app_ui/lib/src/typography/app_text_styles.dart"})," file.\nThe correspondence between selected ",(0,o.jsx)(n.code,{children:"TextStyles"})," and visual elements in the app is illustrated below."]}),"\n",(0,o.jsxs)(n.p,{children:["For styling text contained in ",(0,o.jsx)(n.code,{children:"HtmlBlocks"}),", you can edit the ",(0,o.jsx)(n.code,{children:"style"})," map in ",(0,o.jsx)(n.code,{children:"packages/news_blocks_ui/lib/src/html.dart"})," to associate HTML selectors with the ",(0,o.jsx)(n.code,{children:"TextStyle"})," you want to be utilized when the HTML is rendered."]}),"\n",(0,o.jsx)(n.h3,{id:"text-style-visualization",children:"Text Style Visualization"}),"\n",(0,o.jsx)("img",{src:"https://user-images.githubusercontent.com/61138206/191820826-7ef6c873-94ee-49e8-bcd6-25e35421c055.png"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(7294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);