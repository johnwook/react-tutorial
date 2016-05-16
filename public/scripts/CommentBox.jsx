import React, {
  Component,
  PropTypes,
} from 'react';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

const tempComments = [
  {
    id: 1388534400000,
    author: 'Pete Hunt',
    text: 'Hey there!',
  },
  {
    id: 1420070400000,
    author: 'Paul O’Shannessy',
    text: 'React is *great*!',
  },
  {
    id: 1458637037232,
    author: 'ahoeu',
    text: 'aoehuaoeu',
  },
];

const propTypes = {
  url: PropTypes.string,
  pollInterval: PropTypes.number,
};

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  componentDidMount() {
    this.loadCommentsFromServer();
  }
  loadCommentsFromServer() {
    this.setState({ data: tempComments });
  }
  handleCommentSubmit(comment) {
    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

CommentBox.propTypes = propTypes;

export default CommentBox;
