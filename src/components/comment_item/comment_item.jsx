import React from 'react';
import styles from './comment_item.module.css';

const CommentItem = ({ id, comment }) => {
    return (
        <li key={id}>
            <p>{comment.authorDisplayName}</p>
            <p>{comment.textOriginal}</p>
            <span>👍</span>
            <span>{comment.likeCount}</span>
        </li>
    );
};

export default CommentItem;
