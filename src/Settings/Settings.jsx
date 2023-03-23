import React, { useState } from 'react';

import Behavior from '../Behavior/Behavior';
import Tab from '../Tab/Tab';

import styles from './Settings.scss';

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
      <>
        <ul>
          {TABS?.map(li => (
            <li key={li.name}>
              <button onClick={() => setActiveTab(li.id)}>{li.name}</button>
            </li>
        ))}
        </ul>
        
        {getTabContent(activeTab)}
      </>
  )
};

export default Settings;
