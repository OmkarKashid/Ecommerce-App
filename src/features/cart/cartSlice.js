import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalCost: 0,
  totalItems: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.products.find(
          (product) => product.product.id === action.payload.product.id
        ) === undefined
      ) {
        state.products.push(action.payload);
        cartSlice.caseReducers.updateTotalItems(state);
        let cost = action.payload.price * action.payload.count;
        cartSlice.caseReducers.updateTotalCost(state, cost);
      }
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.product.id === action.payload.productId
      );

      if (productToRemove !== undefined) {
        state.products = state.products.filter(
          (product) => product.product.id !== action.payload.productId
        );
        cartSlice.caseReducers.updateTotalItems(state);
        let cost = productToRemove.price * productToRemove.count;
        cartSlice.caseReducers.updateTotalCost(state, -cost);
      }
    },
    increaseProductCount: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].product.id === action.payload.productId) {
          state.products[i].count += 1;
          cartSlice.caseReducers.updateTotalItems(state);
          let cost = state.products[i].price;
          cartSlice.caseReducers.updateTotalCost(state, cost);
          break;
        }
      }
    },
    decreaseProductCount: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].product.id === action.payload.productId) {
          if (state.products[i].count > 1) {
            state.products[i].count -= 1;
            cartSlice.caseReducers.updateTotalItems(state);
            let cost = state.products[i].price;
            cartSlice.caseReducers.updateTotalCost(state, -cost);
            break;
          }
          break;
        }
      }
    },
    updateTotalItems: (state) => {
      let newTotalItems = 0;
      state.products.forEach((product) => {
        newTotalItems += product.count;
      });
      state.totalItems = newTotalItems;
    },
    updateTotalCost: (state, cost) => {
      state.totalCost += cost;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  increaseProductCount,
  decreaseProductCount
} = cartSlice.actions;

export default cartSlice.reducer;
