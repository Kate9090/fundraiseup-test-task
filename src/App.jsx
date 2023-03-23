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
        <Menu />
        <Donation />
        <Settings />
      </main>
      
    </div>
  );
}

export default App;
