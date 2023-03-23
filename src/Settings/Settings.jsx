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
    content: <> Ups, there is no content here for tab Appearance</>,
  },
  {
    id: 2,
    name: 'Custom Fields',
    content: <> Ups, there is no content here for tab Custom Fields</>,
  },
  {
    id: 3,
    name: 'Questions',
    content: <> Ups, there is no content here for tab Questions</>,
  },
  {
    name: 'URL Control',
    content: <> Ups, there is no content here for tab URL Control</>,
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
        <button>Save changes</button>
        <button>Cancel</button>
      </div>
    </section>
  )
};

export default Settings;
