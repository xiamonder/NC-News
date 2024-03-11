
App (context: user)
|------------------MVP-------------------
|
|---Navbar (context:user)
|
|---Content
|   |
|   |---ArticlesPage (Initial Homepage)
|   |   |---TopicsSidebar (state:topicsData, loading, error)
|   |   |---ArticlesList (state:articlesData, loading, error, pagination, filters)
|   |       |---ArticleComponent (props:article details)
|   |
|   |---ArticleDetailPage
|   |   |---ArticleDetail(props:articleId, state: articleData, commentsData, loading, error)
|   |   |   |---CommentComponent (props:comment details)
|   |   |   |---PostCommentsComponent (context:username state: newComment, loading, error)
|   |   |
|   |   |---RelatedArticlesSidebar (state:relatedArticles, loading, error)
|   |
|   |---TopicsPage
|   |   |---TopicsList (state:topicsData, loading, error)
|   |   |---TopicComponent (props:topic details)
|   |   |       |---ArticlesList (props:topic state:articlesData, loading, error, pagination, filters)
|   |   |       |---ArticleComponent (props:article details)
|   |   |
|   |   |---PostTopicComponent (context:username state:newTopic, loading, error)
|   |
|   |---UsersPage
|   |   |---UsersList (state:usersData, loading, error)
|   |       |---UserComponent(props:user details)
|   |        
|   |---UserProfilePage (props:username)
|   |   |---UserComponent(state:usersData, loading, error)
|   |   |---ArticlesList (props:username state:articlesData, loading, error, pagination, filters)
|   |       |---ArticleComponent (props:article details)
|
|------------------Future-------------------
|
|---Homepage
|   |---(Top 3) ArticlesList (state:articlesData, loading, error, pagination)
|   |       |---ArticleComponent (props:article details)
|   |
|   |---(Top 3) TopicsList (state:topicsData, loading, error)
|   |   |---TopicComponent (props:topic details)
|   |
|   |---(Top 3) CommentsList (state:commentsData, loading, error, pagination)
|       |---CommentComponent (state:comment details)
