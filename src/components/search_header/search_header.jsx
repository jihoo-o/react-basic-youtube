import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onLogoClick, onSearch }) => {
    const inputRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <form className={styles.searchHeader} onSubmit={handleSearch}>
            <div
                className={styles.logo}
                onClick={() => {
                    onLogoClick();
                }}
            >
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <div className={styles.search}>
                <input
                    ref={inputRef}
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
