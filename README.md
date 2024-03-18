## PROJECT TITLE
NC News


## DESCRIPTION 
The NC News Frontend is a dynamic, responsive web application designed to provide users with an engaging platform to explore, read, and interact with news articles. Built using React and leveraging the NC News API for backend data management, this application offers a seamless browsing experience, allowing users to comment, vote on articles and comments, and navigate through different topics effortlessly.


## FUTURE DEVELOPMENT
Further styling to improve user experience as well as the added functionality to post new articles is in development. Potentially looking into a password system for user login but as the intention of the project is an open demo, this may restrict usage for testers.


## LIVE WEBSITE
Please find a live version of this project here:  
[https://acldiamondnews.netlify.app/](https://acldiamondnews.netlify.app/)  


## FEATURES  
Features include: 

-**Articles**: Users can browse articles with optional filtering features such as topic, author, and order. Articles are further organised with pagination. 
-**Single Article Pages**: Detailed views of articles are available for each article, displaying comprehensive information including associated comments and related articles.
-**User-Based Interactions**: The application supports interactions based on user status. Features like posting comments, voting on content, and deleting comments are conditional on user login status and ownership. Users cannot vote on their content and can only delete their comments, ensuring a fair and engaging environment.
-**Persistent User Sessions**: The ability to log in and out with session persistence across reloads is implemented, allowing users to maintain their status and interact with content appropriately.
-**Dedicated User Pages**: Each user has a personalized page showcasing their articles and comments. If a user is not logged in, they are provided with a list of available accounts to log in as. 
-**Responsive Design**: A mobile-first approach ensures the application is accessible on various devices and screen sizes.

For a full list of features, please reference: [NC-News-API/endpoints.json](endpoints.json)


## INSTALLATION INSTRUCTIONS

**Cloning the Repository:**
`git clone https://github.com/xiamonder/NC-News-API`

**Installing Dependencies:**
`npm install`

**Run The Development Server:**
`npm run dev`


## NC NEWS API
This frontend relies on the NC NEWS API. For further details on this API, please view here [https://github.com/xiamonder/NC-News-API](https://github.com/xiamonder/NC-News-API)


## SYSTEM REQUIREMENTS
- **Node.js**: This project requires Node.js version 16.0.0 or higher.  


## PACKAGES 
-**axios**: Utilized for making HTTP requests to the NC News API, facilitating the retrieval and posting of articles, comments, and user interactions.
-**react**: A JavaScript library for building user interfaces, enabling the dynamic rendering of components based on state and props.
-**react-dom**: Provides DOM-specific methods necessary for a web application, allowing React to interact with the browser's DOM.
-**react-router-dom**: Manages navigation within the application, enabling the creation of a single-page application with page transitions without reloads.
-**vite**: A modern frontend build tool that provides a fast development environment and bundles code for production, leveraging modern JavaScript features for optimized builds.
-**tailwindcss, autoprefixer, and postcss**: A utility-first CSS framework and its necessary PostCSS plugins for creating responsive designs with a mobile-first approach, streamlining the styling process.


## CONTRIBUTING
This project is not currently open to direct contributions although suggestions for improved functionality/additional features are welcome! Please feel free to clone/fork this project and make use of it for your own testing/learning!


## AUTHORS AND ACKNOWLEDGMENTS 
This project was created as part of the Northcoders Software Development bootcamp. All of the tutors were incredibly helpful in the learning journey and their feedback whilst building this project was invaluable.


## SUPPORT 
For more help or information, please submit issues [here](https://github.com/xiamonder/NC-News/issues).
