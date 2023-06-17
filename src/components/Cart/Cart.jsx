import './Cart.scss';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allAction } from '../../store/store';
import { createPortal } from 'react-dom';

export default function Cart() {
  const modalState = useSelector((state) => state.allSlice.showModal);
  const cartItems = useSelector((state) => state.allSlice.items);
  const totalAmount = useSelector((state) => state.allSlice.totalAmount);

  const modalStateDispatch = useDispatch();
  return (
    <Fragment>
      {createPortal(
        <div>
          {modalState ? (
            <div className="overlay">
              <div className="modal">
                <button
                  className="exitBtn"
                  type="button"
                  onClick={() => {
                    modalStateDispatch(allAction.modalClose());
                  }}>
                  X
                </button>
                <div className="cartItems">
                  {cartItems.map((item) => {
                    console.log(item);

                    return (
                      <div
                        key={Math.random()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          margin: '0.5rem 0'
                        }}>
                        <div>Name: {item.name}</div>
                        <div style={{ margin: ' 0 1rem' }}>
                          Price: {item.price}
                        </div>
                        <div>Qty: 0</div>
                      </div>
                    );
                  })}
                </div>
                <div className="checkoutBtn_container">
                  <span>Total amount ${totalAmount}</span>
                  <button type="button">Checkout</button>
                </div>
              </div>
            </div>
          ) : null}
        </div>,
        document.querySelector('#modal')
      )}
    </Fragment>
  );
}
