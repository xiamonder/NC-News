
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
|   |       |---ArticleCard (props:articleData context:User)
|   |           |--Votes (props:author context:user)
|   |
|   |---SingleArticlePage
|   |   |---ArticleCard(props:articleId, state: articleData, commentsData, loading, error)
|   |   |   |---CommentsList (props:articleId state:)
|   |   |   |   |---CommentCard (props:comment details context:user)
|   |   |   |       |--Votes (props:author context:user)
|   |   |   |       |--DeleteComment (props:commentId)
|   |   |   |
|   |   |   |---PosCommentsComponent (context:username state: newComment, loading, error)
|   |   |
|   |   |---RelatedArticlesSidebar (state:relatedArticles, loading, error)
|   |       |---ArticlesList (state:articlesData, loading, error)
|   |           |---ArticleCard (props:articleData)
|   |
|   |---TopicsPage
|   |   |---TopicsList (state:topicsData, loading, error)
|   |   |---TopicCard (props:topic details)
|   |   |   |---ArticlesList (props:topic state:articlesData, loading, error, pagination, filters)
|   |   |        |---ArticleCard (props:article details)
|   |   |            |--Votes (props:author context:user)
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
|   |   |   |---ArticleCard (props:article details)
|   |   |   |---CommentsList (props:articleId state:)
|   |   |   |   |---CommentCard (props:comment details context:user)
|   |   |   |       |--Votes (props:author context:user)
|   |   |   |       |--DeleteComment (props:commentId)
|   |   |--UsersList (context:user)
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
