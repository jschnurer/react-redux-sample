// This is technically an ActionCreator, not an action. It is a function that returns an action.

export default function fetchPosts() {
    // Normally this action creator would have to return a plain object. However,
    // redux-thunk allows the action to return a function rather than an object,
    // unlocking new possibilities.
    return function (dispatch) {
        // Immediately dispatch another action to the reducer telling it
        // that a fetch has begun. This will update the state for us.
        dispatch({
            type: 'FETCH_POSTS_BEGIN',
        });

        // Because redux-thunk lets us return a promise instead of a simple object,
        // we can execute a fetch against a remote API and return it like so.
        // If you'd like to see the fetch fail, try replacing the fetch url with this:
        // "https://asdffasdfj8439fj34asdf.com/apithatdoesntexist"

        // The variable process.env.REACT_APP_POSTS_API_URL is defined in the .env file.
        return fetch(process.env.REACT_APP_POSTS_API_URL)
            .then(response => {
                if(!response.ok) {
                    // The lookup failed for whatever reason.
                    // A failure action is dispatched to the reducer
                    // which includes the error message.
                    dispatch({
                        type: 'FETCH_POSTS_FAILURE',
                        fetchError: `Fetching the posts failed: ${response.statusText}`,
                    });
                } else {
                    return response.json();
                }
            }).then(json => {
                // The lookup succeeded!
                // A success action is dispatched to the reducer
                // with the posts that were returned.
                dispatch({
                    type: 'FETCH_POSTS_SUCCESS',
                    posts: json,
                });
            }).catch(err => {
                // No response from remote machine. Maybe a 404 or maybe
                // the request was blocked.
                dispatch({
                    type: 'FETCH_POSTS_FAILURE',
                    fetchError: `Fetching the posts failed: ${err}`,
                })
            });
    }
}