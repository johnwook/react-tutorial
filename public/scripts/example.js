import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './CommentBox.jsx';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
