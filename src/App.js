import React, { Fragment } from 'react';
import PostsPage from './Posts/PostsPage';
import Example from './Example';

// App is the traditional entry point to a react app.
// Normally, routing would be done here.
// In this case, it just renders the PostsPage.
const App = () => 
    <Fragment>
        <PostsPage />
        <Example />
    </Fragment>

export default App;