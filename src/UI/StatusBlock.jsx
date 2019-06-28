import React from 'react';
import styled from 'styled-components';

// The passed props will be deconstructed to pull out only the children
// and status properties ignoring anything else that was sent.
// It will then be rendered inside the container div.
// The ContainerDiv is given the status in order to change its style.
const StatusBlock = ({children, status}) => <ContainerDiv status={status}>{children}</ContainerDiv>

export default StatusBlock;

const ContainerDiv = styled.div`
    padding: .5em;
    margin: 1em;
    background-color: ${props => getBgColor(props.status)};
    color: ${props => getColor(props.status)};
    border: 1px ${props => getColor(props.status)} solid;
`;

const getBgColor = (status) => {
    switch(status.toLowerCase()) {
        case "error": return "#FCC";
        case "info": return "#CCF";
        case "warning": return "#FFC";
        case "success": return "#CFC";
        default: return "#FFF";
    }
}

const getColor = (status) => {
    switch(status.toLowerCase()) {
        case "error": return "#811";
        case "info": return "#118";
        case "warning": return "#881";
        case "success": return "#181";
        default: return "#000";
    }
}