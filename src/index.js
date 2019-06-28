import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the things we need from Redux.
import { combineReducers, createStore, applyMiddleware } from 'redux';
// Import the Provider from react-redux so redux can be provided to the react app.
import { Provider } from 'react-redux';
// Also import thunk for async actions.
import thunk from 'redux-thunk';

// Import our reducers. In this case there is only one.
import PostReducer from './Reducers/PostReducer';

const store = createStore(
    // Build an object that will hold the states for our reducers.
    combineReducers({
        postStore: PostReducer,
    }),
    // Apply the thunk middleware for async actions.
    applyMiddleware(thunk),
);

// Render the react app. This is the absolute 0-level starting point for a React app.
// A Provider is rendered to provide redux to everything later.
// Then the App component is rendered.
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
