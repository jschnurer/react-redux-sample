import React, { Fragment } from 'react';

export default class Example extends React.Component {
    state = {
        popupVisible: false,
    }

    onToggleModal = () => {
        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    render() {
        return <Fragment>
            <h1>This is an example</h1>
            <button onClick={this.onToggleModal}>
                Toggle Modal
            </button>
            { this.state.popupVisible &&
                <div>
                    <input type="text" />
                    <button>Do nothing</button>
                </div>
            }
        </Fragment>;
    }
}