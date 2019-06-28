import React from 'react';
import styled from 'styled-components';

const Post = ({userId, id, title, body}) => 
    <PostContainer>
        <PostTitle>{title}</PostTitle>
        <PostBody>{body}</PostBody>
    </PostContainer>

export default Post;

const PostContainer = styled.div`
    margin: 1em;
    padding: .5em;
    background: #F7F1CF;
`;

const PostTitle = styled.h3`
    margin: 0 0 .25em 0;
    font-variant: small-caps;
`;

const PostBody = styled.div`
    font-size: .95em;
    font-family: Georgia, "Times New Roman", serif;
`;