
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
|   |       |---ArticleCard (props:article details)
|   |
|   |---SingleArticlePage
|   |   |---ArticleCard(props:articleId, state: articleData, commentsData, loading, error)
|   |   |   |---CommentCard (props:comment details)
|   |   |   |---PostCommentsComponent (context:username state: newComment, loading, error)
|   |   |
|   |   |---RelatedArticlesSidebar (state:relatedArticles, loading, error)
|   |
|   |---TopicsPage
|   |   |---TopicsList (state:topicsData, loading, error)
|   |   |---TopicCard (props:topic details)
|   |   |       |---ArticlesList (props:topic state:articlesData, loading, error, pagination, filters)
|   |   |       |---ArticleCard (props:article details)
|   |   |
|   |   |---PostTopicComponent (context:username state:newTopic, loading, error)
|   |
|   |---UsersPage
|   |   |---UsersList (state:usersData, loading, error)
|   |       |---UserCard(props:user details)
|   |        
|   |---UserProfilePage (props:username)
|   |   |---UserCard(state:usersData, loading, error)
|   |   |---ArticlesList (props:username state:articlesData, loading, error, pagination, filters)
|   |       |---ArticleCard (props:article details)
|
|------------------Future-------------------
|
|---Homepage
|   |---(Top 3) ArticlesList (state:articlesData, loading, error, pagination)
|   |       |---ArticleCard (props:article details)
|   |
|   |---(Top 3) TopicsList (state:topicsData, loading, error)
|   |   |---TopicCard (props:topic details)
|   |
|   |---(Top 3) CommentsList (state:commentsData, loading, error, pagination)
|       |---CommentCard (state:comment details)
