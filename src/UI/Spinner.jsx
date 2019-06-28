import React from 'react';
import styled from 'styled-components';

// The spinner simply shows a styled div with either the message that was sent in
// or a default message.
const Spinner = ({ text }) =>
    <InlineDiv>{text ? text : 'Please wait...'}</InlineDiv>;

export default Spinner;

// Use styled-components to create a uniquely styled div which can be used as a component.
const InlineDiv = styled.div`
    display: inline-block;
`;