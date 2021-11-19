import React from 'react';
import CommentItem from '../comment_item/comment_item';
import styles from './comment_thread.module.css';

const CommentThread = ({ comments }) => {
    return (
        <ul className={styles.commentList}>
            {Object.keys(comments).map((key) => {
                return (
                    <CommentItem key={key} id={key} comment={comments[key]} />
                );
            })}
        </ul>
    );
};

export default CommentThread;
