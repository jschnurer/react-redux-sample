import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// Import our ui components that are for global use.
import Spinner from '../UI/Spinner';
import StatusBlock from '../UI/StatusBlock';

// Import the Post component to render individual posts.
import Post from './Post';

// The PostList will receive no properties from a parent so the () are empty.
// It will instead pull the data from redux.
const PostList = () => {
    // Use the new React Hooks to grab the state from Redux.
    const { posts, fetchingPosts, fetchError } = useSelector(state => state.postStore);

    // If a fetch is currently happening, this component will render a "please wait" ui.
    if(fetchingPosts) {
        return <Spinner />;
    }

    // If a fetch failed, this component will render the error.
    if(fetchError) {
        return <StatusBlock status={"error"}>{fetchError}</StatusBlock>;
    }

    // If there are no posts to show, render a message stating such.
    if(!posts.length) {
        return <StatusBlock status={"info"}>No posts found. Please refresh the list.</StatusBlock>;
    }

    // If a fetch isn't happening yet and there is no error, the posts will be shown.
    return (
        <Fragment>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </Fragment>
    );
}

export default PostList;