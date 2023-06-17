// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const allSlice = createSlice({
  name: 'search',
  initialState: {
    showModal: false,
    cartItems: 0,
    items: [],
    searchedItem: '',
    totalAmount: 0
  },
  reducers: {
    search(state, action) {
      state.searchedItem = action.payload;
    },
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalAmount = action.payload.price + state.totalAmount;
      state.cartItems = state.items.length;
    },
    modalOpen(state) {
      state.showModal = true;
    },
    modalClose(state) {
      state.showModal = false;
    }
  }
});

export const allAction = allSlice.actions;
const store = configureStore({ reducer: { allSlice: allSlice.reducer } });

// const shopReducer = (
//   // Update cart value, coming from ItemCard, Add the cart Item into the item array
//   state = { showModal: false, cartItems: 0, items: [] },
//   action
// ) => {
//   if (action.type === 'search') {
//     return {
//       items: state.items,
//       cartItems: state.items.length,
//       searchedItem: action.searchedItem
//     };
//   } else if (action.type === 'addToCart') {
//     return {
//       items: state.items.concat(action.cartItem),
//       cartItems: state.items.length,
//       searchedItem: action.searchedItem,
//       showModal: state.showModal
//     };
//   } else if (action.type === 'modal-open') {
//     return {
//       items: state.items,
//       cartItems: state.items.length,
//       searchedItem: action.searchedItem,
//       showModal: true
//     };
//   } else if (action.type === 'modal-close') {
//     return {
//       items: state.items,
//       cartItems: state.items.length,
//       searchedItem: action.searchedItem,
//       showModal: false
//     };
//   } else {
//     return state;
//   }
// };

// const store = createStore(shopReducer);
export default store;
