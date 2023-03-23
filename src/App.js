import Header from './Header/Header';

import styles from './App.scss';
import Menu from './Menu/Menu';
import Donation from './Donation/Donation';
import Settings from './Settings/Settings';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Menu />
      <Donation />
      <Settings />
    </div>
  );
}

export default App;
