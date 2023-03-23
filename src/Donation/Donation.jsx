import React from 'react';

import styles from './Donation.module.scss';

const Donation = () => {
  return (
    <section className={styles.Donation}>
      <div className={styles.Donation__AmountWrapper}>
        <div className={styles.Donation__AmountBlock}>
          <h5 className={styles.Donation__Title}>Donation</h5>
          <div>$20.60 USD<span>≈ €17.92 EUR</span></div>

        </div>
        <div className={styles.Donation__IdBlock}>
          <h5 className={styles.Donation__Title}>ID</h5>
          <div>TYNY694Y
            <span>
              svg
            </span>
          </div>

        </div>
      </div>
        
        <div className={styles.Donation__InfoWrapper}>
          <div>
            <div className={styles.Donation__Label}>Status</div>
            <div className={styles.Donation__Status}>Succeeded</div>
          </div>
          <div>
            <div className={styles.Donation__Label}>Supporter</div>
            <a href='' _target='blank'>Charlotte Ann</a>
          </div>
          <div>
            <div className={styles.Donation__Label}>Campaign</div>
            <a href='' _target='blank'>Heart walk</a>
          </div>
        </div>
    </section>
  )
};

export default Donation;
