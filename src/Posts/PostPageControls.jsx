import React from 'react';
// Import useDispatch so that actions can be dispatched to redux.
import { useDispatch } from 'react-redux';
// Import the action that I defined that will be dispatched to redux.
import fetchPosts from '../Actions/FetchPosts';
import addNewPost from '../Actions/AddNewPost';
// Import our global button control that we use everywhere in the app.
// Alternatively, we could just style all buttons on the website
// in a global css file. But global css files end up polluting the 
// css global namespace and it is then harder to ignore those global
// styled if we need to.
import Button from '../UI/Button';

const PostPageControls = () => {
    // Grab the dispatch using React's new Hooks API.
    const dispatch = useDispatch();

    const onAddNewClick = () => {
        let title = window.prompt('Enter title');
        let body = window.prompt('Enter body');

        dispatch(addNewPost(title, body));
    }

    // A simple div is rendered so that the button will be on its own block.
    // Alternatively, we could extend the Button component to accept the
    // style property so we could send in any type of style we wanted. It
    // would then be added to the styling it already has.

    // The button has a click event that will generate an action by calling
    // fetchPosts and then dispatch it to the redux reducer which will fetch
    // posts from the API and put them into the store.
    return (
        <div>
            <Button onClick={() => dispatch(fetchPosts())}>
                Refresh Posts
            </Button>
            <Button onClick={onAddNewClick}>
                Add New
            </Button>
        </div>
    );
}

export default PostPageControls;