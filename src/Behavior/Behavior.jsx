import React from 'react';

import styles from './Behavior.module.scss';

const Behavior = () => {
  return (
    <>
      <form>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Designation</label>
          <select>
            <option>Match Checkout Setting</option>
          </select>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Goal</label>
          <div className={styles.Behavior__Row}>
            <input value={'10.00'} className={styles.Behavior__Amount}/>
            <select>
              <option>USD</option>
            </select>
          </div>
          
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Default Amount</label>
          <div className={styles.Behavior__Column}>
            <div className={styles.Behavior__Row}>
              <input type="radio" id="contactChoice1"
                name="contact" value="email" />
              <label for="contactChoice1">Match Checkout Setting</label>
            </div>

            <div className={styles.Behavior__Row}>
              <input type="radio" id="contactChoice2"
                name="contact" value="phone" />
              <label for="contactChoice2">Customize</label>
            </div>
            <div className={styles.Behavior__Row}>
              <input type="checkbox"
                name="contact" value="phone" />
              <label>Allow donor to change default currency</label>
            </div>
          </div>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Border size</label>
          <div>
            <input type="range" id="volume1" name="volume"
                  min="0" max="25" value="15" />
            <label for="volume1">2px</label>
          </div>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Border radius</label>
          <div>
            <input type="range" id="volume2" name="volume2"
                  min="0" max="25" />
            <label for="volume2">15px</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default Behavior;
