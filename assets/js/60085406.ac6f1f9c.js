"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[34],{4642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),s=n(1151);const i={sidebar_position:3,description:"Learn how to write and run tests in your application."},r="Testing",a={id:"flutter_development/testing",title:"Testing",description:"Learn how to write and run tests in your application.",source:"@site/docs/flutter_development/testing.md",sourceDirName:"flutter_development",slug:"/flutter_development/testing",permalink:"/news_toolkit/flutter_development/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/testing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn how to write and run tests in your application."},sidebar:"tutorialSidebar",previous:{title:"Working with translations",permalink:"/news_toolkit/flutter_development/translations"},next:{title:"Theming",permalink:"/news_toolkit/flutter_development/theming"}},c={},l=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Widget tests",id:"widget-tests",level:2},{value:"Bloc tests",id:"bloc-tests",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(t.p,{children:["Flutter News Toolkit applications come with 100% test coverage out of the box. Tests are located in a parallel file structure relative to your source code, residing in a ",(0,o.jsx)(t.code,{children:"test"})," directory that mirrors the source code ",(0,o.jsx)(t.code,{children:"lib"})," directory. Tests are automatically run on your app using ",(0,o.jsx)(t.a,{href:"https://github.com/VeryGoodOpenSource/very_good_workflows",children:"Very Good Workflows"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Changes made to your source code, such as ",(0,o.jsx)(t.a,{href:"/project_configuration/ads#remove-ads",children:"removing advertisements"}),", might reduce test coverage or cause existing tests to fail. We recommend maintaining 100% test coverage within your application to support stability and scalability, but your application functionality won't be compromised if you forgo 100% test coverage."]}),"\n",(0,o.jsxs)(t.p,{children:["To support 100% test coverage in your application, ensure that your tests capture any changes you make to the app behavior. For example, if you implement a new widget, ",(0,o.jsx)(t.code,{children:"your_widget.dart"}),", create a corresponding ",(0,o.jsx)(t.code,{children:"your_widget_test.dart"})," file that properly tests the new widget's behavior."]}),"\n",(0,o.jsxs)(t.p,{children:["Your Flutter app's test suite contains ",(0,o.jsx)(t.a,{href:"https://docs.flutter.dev/testing",children:"bloc, unit, and widget tests"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The Flutter community offers ",(0,o.jsx)(t.a,{href:"https://verygood.ventures/blog/flutter-testing-resources",children:"excellent testing resources"})," to guide you in developing effective tests for your application."]})}),"\n",(0,o.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,o.jsx)(t.p,{children:"Unit tests evaluate a single method, function, or class within your codebase. You should test that your unit behaves appropriately under all conditions under which it might be executed."}),"\n",(0,o.jsxs)(t.p,{children:["For example, ",(0,o.jsx)(t.code,{children:"news_repository_test.dart"})," tests whether the ",(0,o.jsx)(t.code,{children:"NewsRepository"})," class can be instantiated, handle error cases correctly, and correctly execute its behavior under both success and error conditions."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Flutter's ",(0,o.jsx)(t.a,{href:"https://docs.flutter.dev/cookbook/testing/unit/introduction",children:"Introduction to unit testing"})," recipe provides further information on unit testing."]})}),"\n",(0,o.jsx)(t.h2,{id:"widget-tests",children:"Widget tests"}),"\n",(0,o.jsx)(t.p,{children:"Widget tests verify that a single widget behaves correctly within the Flutter framework using a testing environment that enables UI interactions and behaviors."}),"\n",(0,o.jsxs)(t.p,{children:["For example the following test from ",(0,o.jsx)(t.code,{children:"bottom_nav_bar_test.dart"})," checks that the proper behavior is executed when the user interacts with the ",(0,o.jsx)(t.code,{children:"BottomNavBar"})," widget:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"testWidgets('calls onTap when navigation bar item is tapped', (tester) async {\n    final completer = Completer<void>();\n\n    await tester.pumpApp(\n        Scaffold(\n        body: Container(),\n        bottomNavigationBar: BottomNavBar(\n            currentIndex: 0,\n            onTap: (value) => completer.complete(),\n        ),\n        ),\n    );\n    await tester.ensureVisible(find.byType(BottomNavigationBar));\n    await tester.tap(find.byIcon(Icons.home_outlined));\n    expect(completer.isCompleted, isTrue);\n});\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Flutter's ",(0,o.jsx)(t.a,{href:"https://docs.flutter.dev/cookbook/testing/widget/introduction",children:"Introduction to widget testing"})," recipe provides further information on widget testing."]})}),"\n",(0,o.jsx)(t.h2,{id:"bloc-tests",children:"Bloc tests"}),"\n",(0,o.jsxs)(t.p,{children:["Bloc tests verify that your app's ",(0,o.jsx)(t.a,{href:"https://bloclibrary.dev",children:"bloc state management library"})," behaves as expected under a variety of conditions."]}),"\n",(0,o.jsxs)(t.p,{children:["A bloc test sets up the test's initial conditions, instantiates the block, and tests whether the bloc behaves as expected. The following test from ",(0,o.jsx)(t.code,{children:"analytics_bloc_test.dart"})," checks whether the ",(0,o.jsx)(t.code,{children:"AnalyticsBloc"})," responds appropriately to user authentication:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"blocTest<AnalyticsBloc, AnalyticsState>(\n    'calls AnalyticsRepository.setUserId '\n    'with user id when user is authenticated',\n    setUp: () => when(() => userRepository.user)\n        .thenAnswer((_) => Stream.value(user)),\n    build: () => AnalyticsBloc(\n        analyticsRepository: analyticsRepository,\n        userRepository: userRepository,\n    ),\n    verify: (_) {\n        verify(() => analyticsRepository.setUserId(user.id)).called(1);\n    },\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"The test above verifies that a mocked repository is called correctly. Depending on what bloc behavior you are testing, bloc tests can also verify that an error is thrown or that the bloc's state is correct."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://bloclibrary.dev/#/testing",children:"bloc library testing documentation"})," provides a thorough introduction to testing blocs."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);