import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  cartData : [],
  cartItems: [],
  numberOfItemsInCart : 0
}

export const setCartDataState = createAsyncThunk(
  "names/addWithThunk",
  async (_, thunkAPI) => {
    return thunkAPI.getState().shop.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
  extraReducers : {
    [setCartDataState.pending]:(state) => {
      state.shopItems = [];
    },
    [setCartDataState.fulfilled]: (state, action) => {
      console.log(action.payload);
     
      state.cartData = action.payload;
    },
    [setCartDataState.rejected]: (state,action) => {
      // console.log(action)
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
// export const {  } = cartSlice.actions

export default cartSlice.reducer