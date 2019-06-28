// This is the initial state for the reducer.
// The properties are initialized to their defaults.
const INITIAL_STATE = {
    posts: [],
    fetchingPosts: false,
};

// The reducer will be called when an action is dispatched to it.
// It will receive the current state and the action that was dispatched.
function PostReducer(state = INITIAL_STATE, action) {

    // Every action has a type. Based on its type, something different will happen.
    // The reducer should not do anything complicated. It shouldn't fetch from APIs,
    // or do anything more complex than calculating a result from the input given
    // to it in the action.

    switch(action.type) {
        case 'FETCH_POSTS_BEGIN':
            // When this action is dispatched it tells the reducer that a lookup
            // is in progress in the action. The state will be updated to show
            // that a fetch is happening.
            return Object.assign({}, state, {
                fetchingPosts: true,
            });
        case 'FETCH_POSTS_SUCCESS':
            // When this action is dispatched it tells the reducer that a lookup
            // has succeeded and includes the data that was fetched. The state is
            // updated to show it is no longer fetching and also to store the posts.
            return Object.assign({}, state, {
                fetchingPosts: false,
                posts: action.posts,
            });
        case 'FETCH_POSTS_FAILURE':
            // When this action is dispatched it tells the reducer that a lookup
            // has failed. The state is updated to show it is no longer fetching and
            // also to store the error message.
            return Object.assign({}, state, {
                fetchingPosts: false,
                fetchError: action.fetchError,
            });
        default:
            return state;
    }
}

export default PostReducer;