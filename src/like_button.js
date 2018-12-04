/**
|--------------------------------------------------
  Title: Starter Code 
  Author: Fred Siika
  Description: This code defines a React componenet called `LikeButton`.
|--------------------------------------------------
*/
'use strict'
const e = React.createElement;
const domContainer = document.querySelector('#like_button_container');

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

ReactDOM.render(e(LikeButton), domContainer);