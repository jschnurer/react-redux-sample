// Import Fragment as well as React so that multiple components can be
// rendered alongside each other. This is required because every react
// component must return a single root component (in this case Fragment).
// Fragment does not render anything so it is more useful than wrapping
// everything in a div and polluting the DOM.
import React, { Fragment } from 'react';

// Import the components used for rendering the parts of the page.
import PostPageHeader from './PostPageHeader';
import PostPageControls from './PostPageControls';
import PostList from './PostList';

const PostPage = () => {
    // There is no real reason to split the PostPageHeader into its own component.
    // I could have just as easily rendered an h1 here instead.
    // The same goes for the other components. They're just split into their
    // own to illustrate the possibility.
    // In fact, all of the functionality of the whole app could just be put into
    // the App component but then it'd be really messy.
    return (
        <Fragment>
            <PostPageHeader />
            <PostPageControls />
            <PostList />
        </Fragment>
    )
}

export default PostPage;