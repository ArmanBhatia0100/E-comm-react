import './Header.scss';
import SearchBar from '../searchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { allAction } from '../../store/store';

export default function Header() {
  const cartBadge = useSelector((state) => state.allSlice.cartItems);
  const modalToggleDispatch = useDispatch();
  return (
    <header className="header">
      <h2>E-commerce</h2>
      <SearchBar />
      <div className="cartBtn_container">
        <button
          type="button"
          className="cartBtn"
          onClick={() => {
            modalToggleDispatch(allAction.modalOpen());
          }}>
          {cartBadge} Cart
        </button>
      </div>
    </header>
  );
}
