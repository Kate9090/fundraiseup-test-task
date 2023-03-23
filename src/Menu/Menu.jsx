import React from 'react';

import styles from './Menu.scss';

const Menu = () => {
  return (
    <ul className={styles.Menu}>
      <li>
        <button>
          <div className>&</div>
          Change amount
        </button>
      </li>
      <li>
        <button>
          <div className>&</div>
          Change payment method
        </button>
      </li>
      <li>
        <button>
          <div className>&</div>
          Change date
        </button>
      </li>
      <li>
        <button>
          <div className>&</div>
          Cancel recurring
        </button>
      </li>
    </ul>
  )
};

export default Menu;
