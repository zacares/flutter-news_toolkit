"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[275],{2502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(5893),o=n(1151);const a={sidebar_position:2,description:"Learn how to connect your news server to a custom data source."},s="Connecting your data source",i={id:"server_development/connecting_your_data_source",title:"Connecting your data source",description:"Learn how to connect your news server to a custom data source.",source:"@site/docs/server_development/connecting_your_data_source.md",sourceDirName:"server_development",slug:"/server_development/connecting_your_data_source",permalink:"/news_toolkit/server_development/connecting_your_data_source",draft:!1,unlisted:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/server_development/connecting_your_data_source.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to connect your news server to a custom data source."},sidebar:"tutorialSidebar",previous:{title:"Running the API",permalink:"/news_toolkit/server_development/running_the_api"},next:{title:"Testing",permalink:"/news_toolkit/server_development/testing"}},c={},d=[{value:"Creating a new data source",id:"creating-a-new-data-source",level:2},{value:"Implementing your data source",id:"implementing-your-data-source",level:2},{value:"Injecting your data source",id:"injecting-your-data-source",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"connecting-your-data-source",children:"Connecting your data source"}),"\n",(0,r.jsxs)(t.p,{children:["The template's ",(0,r.jsx)(t.a,{href:"https://dartfrog.vgv.dev",children:"Dart Frog"})," API acts as an intermediary between your CMS and the client application, organizing your content into the ",(0,r.jsx)(t.a,{href:"/server_development/blocks",children:"blocks"})," that form the basis of content organization within the app."]}),"\n",(0,r.jsxs)(t.p,{children:["If you don't intend to write custom code to support the necessary block-organized endpoints from your CMS, you should create and deploy an API that uses the ",(0,r.jsx)(t.code,{children:"NewsDataSource"})," interface to collect and transform data."]}),"\n",(0,r.jsxs)(t.p,{children:["Your implementation of the ",(0,r.jsx)(t.code,{children:"NewsDataSource"})," is called by the route handlers laid out in the ",(0,r.jsx)(t.code,{children:"api/routes"})," directory. The data source then requests data from your CMS and organizes it into the block-based data expected by the client before returning it to the route handler to be served to your client application. For more information about the structure and capabilities of the Dart Frog server that uses your data source, consult the ",(0,r.jsx)(t.a,{href:"https://dartfrog.vgv.dev/docs/category/basics",children:"Dart Frog documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NewsDataSource"})," class (",(0,r.jsx)(t.code,{children:"api/lib/src/data/news_data_source.dart"}),") provides an interface that your data source must implement. Feel free to remove methods that provide data that you don't intend to use in the client app, or to add methods to provide data for functionality that you intend on adding to your app."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-new-data-source",children:"Creating a new data source"}),"\n",(0,r.jsxs)(t.p,{children:["Begin by defining a new class that implements ",(0,r.jsx)(t.code,{children:"NewsDataSource"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"class YourCustomDataSource implements NewsDataSource\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your data source should have a means of interacting with your CMS as a field such as an ",(0,r.jsx)(t.a,{href:"https://pub.dev/packages/http",children:"HTTP"})," or ",(0,r.jsx)(t.a,{href:"https://pub.dev/packages/dio",children:"Dio"})," client, and you might want to create separate named constructors if you have different CMS URLs for different flavors, such as ",(0,r.jsx)(t.code,{children:"development"})," and ",(0,r.jsx)(t.code,{children:"production"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"implementing-your-data-source",children:"Implementing your data source"}),"\n",(0,r.jsxs)(t.p,{children:["After creating your data source class, implement the methods defined in ",(0,r.jsx)(t.code,{children:"NewsDataSource"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"/// {@template news_data_source}\n/// An interface for a news content data source.\n/// {@endtemplate}\nabstract class NewsDataSource {\n  /// {@macro news_data_source}\n  const NewsDataSource();\n\n  /// Returns a news [Article] for the provided article [id].\n  ///\n  /// In addition, the contents can be paginated by supplying\n  /// [limit] and [offset].\n  ///\n  /// * [limit] - The number of content blocks to return.\n  /// * [offset] - The (zero-based) offset of the first item\n  /// in the collection to return.\n  Future<Article?> getArticle({\n    required String id,\n\tint limit = 20,\n\tint offset = 0,\n  });\n  /// Returns a list of current popular topics.\n  Future<List<String>> getPopularTopics();\n  /// Returns a list of current relevant topics\n  /// based on the provided [term].\n  Future<List<String>> getRelevantTopics({required String term});\n  /// Returns a list of current popular article blocks.\n  Future<List<NewsBlock>> getPopularArticles();\n  /// Returns a list of relevant article blocks\n  /// based on the provided [term].\n  Future<List<NewsBlock>> getRelevantArticles({required String term});\n  /// Returns [RelatedArticles] for the provided article [id].\n  ///\n  /// In addition, the contents can be paginated by supplying\n  /// [limit] and [offset].\n  ///\n  /// * [limit] - The number of content blocks to return.\n  /// * [offset] - The (zero-based) offset of the first item\n  /// in the collection to return.\n  Future<RelatedArticles> getRelatedArticles({\n\trequired String id,\n\tint limit = 20,\n\tint offset = 0,\n  });\n  /// Returns a news [Feed] for the provided [category].\n  /// By default [Category.top] is used.\n  ///\n  /// In addition, the feed can be paginated by supplying\n  /// [limit] and [offset].\n  ///\n  /// * [limit] - The number of results to return.\n  /// * [offset] - The (zero-based) offset of the first item\n  /// in the collection to return.\n  Future<Feed> getFeed({\n\tCategory category = Category.top,\n\tint limit = 20,\n\tint offset = 0,\n  });\n\n  /// Returns a list of all available news categories.\n  Future<List<Category>> getCategories();\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For example, an implementation of ",(0,r.jsx)(t.code,{children:"getArticle()"})," might look like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"@override\nFuture<Article?> getArticle({\n  required String id,\n  int limit = 20,\n  int offset = 0,\n  bool preview = false,\n}) async {\n  final uri = Uri.parse('$YOUR_CMS_BASE_URL/posts/$id');\n  final response = await httpClient.get(uri);\n  if (response.statusCode != HttpStatus.ok) {\n    throw YourAppApiFailureException(\n      body: response.body,\n      statusCode: response.statusCode,\n    );\n  }\n  final responseJson = response.jsonMap();\n  if (responseJson.isNotFound) return null;\n  final post = Post.fromJson(responseJson);\n  final article = post.toArticle();\n  return article;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The above example references a class not included in the template, ",(0,r.jsx)(t.code,{children:"Post"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"class Post {\n  const Post({\n    required this.id,\n    required this.date,\n    required this.link,\n    required this.title,\n    required this.content,\n    required this.author,\n    required this.image,\n    required this.category,\n  });\n\n  final int id;\n  final DateTime date;\n  final String link;\n  final String title;\n  final String content;\n  final Author author;\n  final String image;\n  final PostCategory category;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Since your CMS presumably doesn't respond with data in the block-based format used by the ",(0,r.jsx)(t.code,{children:"Article"})," class, you might want to define classes like ",(0,r.jsx)(t.code,{children:"Post"})," that mirror the data types and formats that your CMS returns."]}),"\n",(0,r.jsxs)(t.p,{children:["You can use a package like ",(0,r.jsx)(t.a,{href:"https://pub.dev/packages/json_serializable",children:"json_serializable"})," to generate code to create a ",(0,r.jsx)(t.code,{children:"Post"})," object from the JSON returned from your CMS (see ",(0,r.jsx)(t.a,{href:"https://docs.flutter.dev/development/data-and-backend/json",children:"JSON and serialization - Flutter Documentation"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["You can then ",(0,r.jsx)(t.a,{href:"https://dart.dev/guides/language/extension-methods",children:"add an extension method"})," such as ",(0,r.jsx)(t.code,{children:"toArticle()"})," on your ",(0,r.jsx)(t.code,{children:"Post"})," class that uses the relevant data from the ",(0,r.jsx)(t.code,{children:"Post"})," object and to create and return an ",(0,r.jsx)(t.code,{children:"Article"})," object that is served to your client app."]}),"\n",(0,r.jsxs)(t.p,{children:["This structure of ",(0,r.jsx)(t.code,{children:"JSON -> Intermediary Object -> API Model"})," can be repeated when implementing any data source method, which receives data from your CMS that differs from what the method is expected to return."]}),"\n",(0,r.jsx)(t.h2,{id:"injecting-your-data-source",children:"Injecting your data source"}),"\n",(0,r.jsxs)(t.p,{children:["After creating your data source, inject it into your API route handler through the ",(0,r.jsx)(t.a,{href:"https://dartfrog.vgv.dev/docs/basics/dependency-injection",children:"Dart Frog middleware"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"First, instantiate your data source:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"final yourCustomDataSource = YourCustomDataSource();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, inject it through the middleware as a ",(0,r.jsx)(t.code,{children:"NewsDataSource"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"handler.use(provider<NewsDataSource>((_) => yourCustomDataSource));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["As the template already contains a ",(0,r.jsx)(t.code,{children:"NewsDataSource"})," dependency injection, you can simply instantiate your data source and then replace ",(0,r.jsx)(t.code,{children:"inMemoryNewsDataSource"})," with ",(0,r.jsx)(t.code,{children:"yourCustomDataSource"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);