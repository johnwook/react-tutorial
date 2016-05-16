import React, {
  Component,
  PropTypes,
} from 'react';
import marked from 'marked';

const propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
};

class Comment extends Component {
  constructor(props) {
    super(props);

    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
