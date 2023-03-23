import Header from './Header/Header';

import styles from './App.scss';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
