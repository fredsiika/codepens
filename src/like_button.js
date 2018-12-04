/**
|--------------------------------------------------
  Title: Starter Code 
  Author: Fred Siika
  Description: This code defines a React componenet called `LikeButton`.
|--------------------------------------------------
*/
'use strict'
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return '🙌🏼 Awesome! Thanks for Liking This';
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            '👍🏽's
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);