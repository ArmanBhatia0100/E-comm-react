import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';

import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <ItemContainer />
    </div>
  );
}
