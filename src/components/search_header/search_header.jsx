import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
    return (
        <form className={styles.searchHeader}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <div className={styles.search}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="검색"
                />
                <button className={styles.searchBtn} type="submit">
                    <img src="/images/search.png" alt="" />
                </button>
            </div>
        </form>
    );
};

export default SearchHeader;
