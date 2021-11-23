import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import CommentThread from './components/comment_thread/comment_thread';

const App = ({ youtubeFetch }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState({}); //

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };

    useEffect(async () => {
        if (!selectedVideo) return;
        const result = await youtubeFetch //
            .videoComment(selectedVideo); //
        const updated = {};
        result.forEach((item) => {
            const snippet = item.snippet.topLevelComment.snippet;
            updated[item.id] = {
                authorDisplayName: snippet.authorDisplayName,
                textOriginal: snippet.textOriginal,
                likeCount: snippet.likeCount,
            };
        });
        setComments(updated);
    }, [youtubeFetch, selectedVideo]);

    return (
        <div
            className={`${styles.container} ${
                selectedVideo ? styles.nowrap : styles.wrap
            }`}
        >
            <div className={styles.containerFlex}>
                {selectedVideo && (
                    <div className={styles.selected}>
                        <section className={styles.videoDetail}>
                            <div className={styles.iframeArea}>
                                <div className={styles.iframeWrapper}>
                                    <VideoDetail videoId={selectedVideo} />
                                </div>
                            </div>
                        </section>
                        <section className={styles.videoComment}>
                            <CommentThread comments={comments} />
                        </section>
                    </div>
                )}
                <section className={styles.videoList}>
                    <VideoList
                        youtubeFetch={youtubeFetch}
                        onVideoClick={selectVideo}
                        displayType={selectedVideo ? 'nowrap' : 'wrap'}
                    />
                </section>
            </div>
        </div>
    );
};

export default App;
