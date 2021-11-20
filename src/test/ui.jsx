import React, { useState } from 'react';
import styles from './ui.module.css';

const Ui = (props) => {
    const selectedVideo = useState(null);

    return (
        <div
            className={`${styles.container} ${
                selectedVideo ? styles.nowrap : styles.wrap
            }`}
        >
            <div className={styles.selected}>
                <section className={styles.videoDetail}>
                    <div className={styles.iframeArea}>
                        <div className={styles.iframeWrapper}>
                            <iframe
                                src="https://www.youtube.com/embed/WbA74l8gH7s?autoplay=1&origin=http://example.com"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                </section>
                <section className={styles.videoComment}>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                        <li>f</li>
                        <li>g</li>
                        <li>h</li>
                        <li>i</li>
                        <li>j</li>
                        <li>k</li>
                        <li>l</li>
                        <li>m</li>
                        <li>n</li>
                        <li>o</li>
                        <li>p</li>
                        <li>q</li>
                    </ul>
                </section>
            </div>
            <section className={styles.videoList}>
                <ul>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Ui;
