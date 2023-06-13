import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error : null,
  shopItems : []
}

const url = "https://fakestoreapi.com/products";

export const getData = createAsyncThunk('cart/getItems', async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue("Error fetching items. Please check your internet connection.");
    }
  });

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    filterItems : (state, action) => {
      state.shopItems = state.data
      if(action.payload !== "All"){
        state.shopItems = state.shopItems.filter(item => {
          return item.category === action.payload
        })
      }
    },
  },
  extraReducers : {
    [getData.pending]:(state) => {
      state.shopItems = [];
      state.error = null;
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
      state.shopItems = state.data;
    },
    [getData.rejected]: (state,action) => {
      // console.log(action)
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterItems } = shopSlice.actions

export default shopSlice.reducer