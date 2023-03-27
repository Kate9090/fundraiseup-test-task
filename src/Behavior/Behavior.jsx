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
  const [checked, setCheck] = useState(true);

  const handleChangeRadius = (e) => {
    setRadius(Math.trunc(e.target.value));
  }

  const handleChangeBorder = (e) => {
    setBorder(Math.trunc(e.target.value));
  }

  const handleChangeCheck = () => {
    setCheck(prev => !prev);
  }

  return (
    <form className={styles.Behavior__Form}>
      <fieldset className={styles.Behavior__InputGroup}>
        <label for="setting" className={styles.Behavior__Label}>Designation</label>
        <div className={styles.Behavior__SelectWrapper}>
          <select id="setting" className={cx(styles.Behavior__Select, styles.Behavior__Wide)}>
            <option>Match Checkout Setting</option>
          </select>
          <span className={styles.Behavior__SelectArrow}>
            <Arrow />
          </span>
        </div>
      </fieldset>
      <fieldset className={styles.Behavior__InputGroup}>
        <label for="currency" className={styles.Behavior__Label}>Goal</label>
        <div className={cx(styles.Behavior__Row, styles.Behavior__Goal)}>
          <div className={styles.Behavior__InputWrapper}>
            <span  className={styles.Behavior__Icon}>
              $
            </span>
            <input type="text" id="currency" defaultValue={'10.00'} className={styles.Behavior__Amount}/>
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
      </fieldset>
        
      <fieldset className={styles.Behavior__InputGroup}>
        <label className={styles.Behavior__Label}>Default Amount</label>
        <div className={styles.Behavior__Column}>
          <div className={cx(styles.Behavior__Row, styles.Behavior__WithBottom)}>
            <input type="radio" id="choice1"
              name="choice" value="Checkout" />
            <label for="choice1" className={styles.Behavior__RadioLabel}>
              Match Checkout Setting
            </label>
          </div>

          <div className={cx(styles.Behavior__Row, styles.Behavior__WithBottom)}>
            <input type="radio" id="choice2" defaultChecked={true}
              name="choice" value="Customize" />
            <label for="choice2" className={styles.Behavior__RadioLabel}>Customize</label>
          </div>

          <div className={styles.Behavior__Row}>
            <input type="checkbox" checked={checked} onChange={handleChangeCheck}
              name="Allow" value="Allow" id="allow" />
            <label className={styles.Behavior__CheckboxLabel} for="allow">Allow donor to change default currency</label>
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.Behavior__InputGroup}>
        <label for="border" className={styles.Behavior__Label}>Border size</label>
        <div className={styles.Behavior__SliderWrapper}>
          <input type="range" id="border" name="volume"
                min="-1" max="3.6" value={border} onChange={e => handleChangeBorder(e)} />
          <label className={styles.Behavior__RangeValue}>{border}px</label>
        </div>
      </fieldset>
      <fieldset className={styles.Behavior__InputGroup}>
        <label for="radius" className={styles.Behavior__Label}>Border radius</label>
        <div className={styles.Behavior__SliderWrapper}>
          <input type="range" id="radius" name="volume2"
                min="0" max="23" value={radius} onChange={e => handleChangeRadius(e)} 
                className={styles.Behavior__InputRange} />
          <label className={styles.Behavior__RangeValue}>{radius}px</label>
        </div>
      </fieldset>
    </form>
  )
}

export default Behavior;
