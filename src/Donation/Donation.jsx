import React from 'react';

import styles from './Donation.module.scss';

const Dollar = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.75V17.25" stroke="#009FFD" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.75 3.75H7.125C6.42881 3.75 5.76113 4.02656 5.26884 4.51884C4.77656 5.01113 4.5 5.67881 4.5 6.375C4.5 7.07119 4.77656 7.73887 5.26884 8.23116C5.76113 8.72344 6.42881 9 7.125 9H10.875C11.5712 9 12.2389 9.27656 12.7312 9.76884C13.2234 10.2611 13.5 10.9288 13.5 11.625C13.5 12.3212 13.2234 12.9889 12.7312 13.4812C12.2389 13.9734 11.5712 14.25 10.875 14.25H4.5" stroke="#009FFD" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const Copy = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z" stroke="#6C6D6F" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75" stroke="#6C6D6F" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckFilled = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" r="9" fill="#2EB670"/>
  <path d="M13.5 6.375L7.3125 12.5625L4.5 9.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

const Donation = () => {
  return (
    <section className={styles.Donation}>
      <div className={styles.Donation__AmountWrapper}>
        <div className={styles.Donation__AmountBlock}>
          <h2 className={styles.Donation__SubTitle}>
            <span className={styles.Donation__Currency}><Dollar /></span>
            Donation
          </h2>
          <div className={styles.Donation__Amount}>
            $20.60 USD
            <span className={styles.Donation__AmountInOtherCurrecy}>≈ €17.92 EUR</span>
          </div>

        </div>
        <div className={styles.Donation__IdBlock}>
          <div className={styles.Donation__Id}>ID</div>
          <div className={styles.Donation__IdValue}>
            TYNY694Y
            <button type="button">
              <span>
              <Copy />
              </span>
            </button>
          </div>

        </div>
      </div>
        
        <div className={styles.Donation__InfoWrapper}>
          <div className={styles.Donation__InfoColumn}>
            <div className={styles.Donation__Label}>Status</div>
            <div className={styles.Donation__Status}>
              <span>
                <CheckFilled />
              </span>
              Succeeded
            </div>
          </div>
          <div className={styles.Donation__InfoColumn}>
            <div className={styles.Donation__Label}>Supporter</div>
            <a href='' _target='blank'>Charlotte Ann</a>
          </div>
          <div className={styles.Donation__InfoColumn}>
            <div className={styles.Donation__Label}>Campaign</div>
            <a href='' _target='blank'>Heart walk</a>
          </div>
        </div>
    </section>
  )
};

export default Donation;
