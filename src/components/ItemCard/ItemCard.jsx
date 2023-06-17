import './ItemCard.scss';
import { useDispatch } from 'react-redux';
import { allAction } from './../../store/store';

export default function ItemCard({ itemData }) {
  const addToCartDispatch = useDispatch();
  return (
    <div className="itemCard">
      <h4>{itemData.name}</h4>
      <h4>Price: {itemData.price}</h4>
      {/* Click handler */}
      <button
        type="button"
        className="addToCartBtn"
        onClick={() => {
          addToCartDispatch(allAction.addToCart(itemData));
        }}>
        Add to Cart
      </button>
    </div>
  );
}
