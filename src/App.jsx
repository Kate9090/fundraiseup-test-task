import Header from './Header/Header';

import styles from './App.module.scss';
import Menu from './Menu/Menu';
import Donation from './Donation/Donation';
import Settings from './Settings/Settings';

const App = () => {
  return (
    <div className={styles.App}>
      <main>
        <Header />
        <div className={styles.App__Wrapper}>
          <div className={styles.App__Content}>
            <Donation />
            <Settings />
          </div>
          <div className={styles.App__Menu}> 
            <Menu />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
