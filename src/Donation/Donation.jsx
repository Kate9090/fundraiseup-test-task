import React from 'react';

import styles from './Donation.scss';

const Donation = () => {
  return (
    <section className={styles.Donation}>
      <div>
        <h5 className>Donation</h5>
        <div className={styles.Donation__InfoWrapper}>
          <div>Status</div>
          <div>Supporter</div>
          <div>Campaign</div>
        </div>
      </div>
    </section>
  )
};

export default Donation;
