import React, { useState } from 'react';

import Behavior from '../Behavior/Behavior';
import cx from 'classnames';

import styles from './Settings.module.scss';

const TABS = [
  {
    id: 0,
    name: 'Behavior',
    content: <Behavior />,
  },
  {
    id: 1,
    name: 'Appearance',
    content: <section className={styles.Section}> Ups, there is no content here for tab Appearance</section>,
  },
  {
    id: 2,
    name: 'Custom Fields',
    content: <section className={styles.Section}> Ups, there is no content here for tab Custom Fields</section>,
  },
  {
    id: 3,
    name: 'Questions',
    content: <section className={styles.Section}> Ups, there is no content here for tab Questions</section>,
  },
  {
    name: 'URL Control',
    content: <section className={styles.Section}> Ups, there is no content here for tab URL Control</section>,
  },
];


const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabContent = (tab) => {
    return TABS.find(tabObj => tabObj.id === tab)?.content;
  }

  return (
    <section className={styles.Settings}>
      <ul className={styles.Settings__Tabs}>
        {TABS?.map(li => (
          <li key={li.name} className={cx(li.id === activeTab && styles['Settings__Tab--active'], styles.Settings__Tab)}>
            <button onClick={() => setActiveTab(li.id)}>{li.name}</button>
          </li>
      ))}
      </ul>
      
      {getTabContent(activeTab)}

      <div className={styles.Settings__Actions}>
        <button type="submit" className={cx(styles.Settings__Button, styles['Settings__Button--save'])}>Save changes</button>
        <button type="reset" className={styles.Settings__Button}>Cancel</button>
      </div>
    </section>
  )
};

export default Settings;
