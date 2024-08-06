import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductState = {
  product: [],
};

export const ProductSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
  },
});
export default ProductSlice.reducer;
export const { getProduct } = ProductSlice.actions;
