import React from 'react';
import styled from 'styled-components';

const Button = ({children, onClick}) => 
    <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
    border: 1px #333 solid;
    background-color: #EEE;
    padding: .25em;
    font-variant: small-caps;
`;