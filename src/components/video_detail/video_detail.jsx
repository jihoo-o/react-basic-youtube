import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ videoId }) => {
    return (
        <div className={styles.container}>
            <div className={styles.iframeWrapper}>
                <iframe
                    className={styles.iframe}
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoDetail;
