import React, { useEffect } from 'react';
import styles from './comment_item.module.css';

const CommentItem = ({ id, comment }) => {
    return (
        <li key={id} className={styles.container}>
            <p className={styles.author}>{comment.authorDisplayName}</p>
            <p className={styles.text}>{comment.textOriginal}</p>
            <span className={styles.like}>👍</span>
            <span className={styles.likeCount}>{comment.likeCount}</span>
        </li>
    );
};

export default CommentItem;
