import React from 'react';

import styles from './Header.module.scss';

const Arrow = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 0.75L5.5 5.25L10 0.75" stroke="#6C6D6F" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Donations</h1>
      <div className={styles.Header__Search}>
        <div className={styles.Header__InputWrapper}>
          <span  className={styles.Header__Icon}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#6C6D6F" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.7499 15.7499L12.4874 12.4874" stroke="#6C6D6F" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <input placeholder={'Search'} type="search" autoFocus />
        </div>
        <div className={styles.Header__SelectWrapper}>
          <select placeholder={'All statuses'}>
            <option>All statuses</option>
            <option>option 1</option>
            <option>option 2</option>
          </select>
          <span className={styles.Header__SelectArrow}>
            <Arrow />
          </span>
        </div>
      </div>
    </header>
  )
};

export default Header;
