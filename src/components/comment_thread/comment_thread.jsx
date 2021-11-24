import React, { useEffect, useRef } from 'react';
import CommentItem from '../comment_item/comment_item';
import styles from './comment_thread.module.css';

const CommentThread = ({ comments }) => {
    const commentListRef = useRef();

    useEffect(() => {
        commentListRef.current.scrollTo(0, 0);
    }, [comments]);

    return (
        <ul ref={commentListRef} className={styles.commentList}>
            {Object.keys(comments).map((key) => {
                return (
                    <CommentItem key={key} id={key} comment={comments[key]} />
                );
            })}
        </ul>
    );
};

export default CommentThread;
