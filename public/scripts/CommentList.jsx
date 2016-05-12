import React, {
  PropTypes,
} from 'react';

import Comment from './Comment.jsx';

const propTypes = {
  data: PropTypes.array,
};

function CommentList({ data }) {
  return (
    <div className="commentList">
      {
        data.map(comment =>
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        )
      }
    </div>
  );
}

CommentList.propTypes = propTypes;

export default CommentList;
