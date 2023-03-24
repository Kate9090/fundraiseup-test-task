import React, { useState } from 'react';

import cx from 'classnames';

import styles from './Behavior.module.scss';

const Arrow = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 0.75L5.5 5.25L10 0.75" stroke="#6C6D6F" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const Behavior = () => {
  const [border, setBorder] = useState(2);
  const [radius, setRadius] = useState(15);

  const handleChangeRadius = (e) => {
    setRadius(Math.trunc(e.target.value));
  }

  const handleChangeBorder = (e) => {
    setBorder(Math.trunc(e.target.value));
  }
  return (
    <>
      <form>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Designation</label>
          <div className={styles.Behavior__SelectWrapper}>
            <select className={cx(styles.Behavior__Select, styles.Behavior__Wide)}>
              <option>Match Checkout Setting</option>
            </select>
            <span className={styles.Behavior__SelectArrow}>
              <Arrow />
            </span>
          </div>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Goal</label>
          <div className={styles.Behavior__Row}>
            <div className={styles.Behavior__InputWrapper}>
              <span  className={styles.Behavior__Icon}>
                $
              </span>
              <input value={'10.00'} className={styles.Behavior__Amount}/>
            </div>
            
            <div className={cx(styles.Behavior__SelectWrapper, styles['Behavior__SelectWrapper--currency'])}>
              <select className={styles.Behavior__Select}>
                <option>USD</option>
              </select>
              <span className={styles.Behavior__SelectArrow}>
                <Arrow />
              </span>
            </div>
          </div>
        </div>
          
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Default Amount</label>
          <div className={styles.Behavior__Column}>
            <div className={cx(styles.Behavior__Row, styles.Behavior__WithBottom)}>
              <input type="radio" id="contactChoice1"
                name="contact" value="email" />
              <label for="contactChoice1" className={styles.Behavior__RadioLabel}>
                Match Checkout Setting
              </label>
            </div>

            <div className={cx(styles.Behavior__Row, styles.Behavior__WithBottom)}>
              <input type="radio" id="contactChoice2"
                name="contact" value="phone" />
              <label for="contactChoice2" className={styles.Behavior__RadioLabel}>Customize</label>
            </div>

            <div className={styles.Behavior__Row}>
              <input type="checkbox"
                name="contact" value="phone" />
              <label className={styles.Behavior__CheckboxLabel}>Allow donor to change default currency</label>
            </div>
          </div>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Border size</label>
          <div className={styles.Behavior__SliderWrapper}>
            <input type="range" id="volume1" name="volume"
                  min="-1" max="4" value={border} onChange={e => handleChangeBorder(e)} />
            <label for="volume1">{border}px</label>
          </div>
        </div>
        <div className={styles.Behavior__InputGroup}>
          <label className={styles.Behavior__Label}>Border radius</label>
          <div className={styles.Behavior__SliderWrapper}>
            <input type="range" id="volume2" name="volume2"
                  min="0" max="25" value={radius} onChange={e => handleChangeRadius(e)} />
            <label for="volume2">{radius}px</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default Behavior;
