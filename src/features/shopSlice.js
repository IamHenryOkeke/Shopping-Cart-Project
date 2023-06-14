import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error : null,
  shopItems : [],
  cartItems : [],
  numberOfItemsInCart : 0,
  total : 0,
  itemStatus : false
}

const url = "https://fakestoreapi.com/products";

const checkCart = (item, array) =>{
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === item.id) {
            return false;
        }
    }
    return true;
}

export const getData = createAsyncThunk('cart/getItems', async (_, thunkAPI) => {
    try {
      const response = await axios(url);
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
    increaseAmount : (state, action) => {
      const id = action.payload;
      const result = state.cartItems.find((item)=> {
        return item.id === id
      });
      result.amount += 1;
    },

    decreaseAmount : (state, action) => {
      const id = action.payload;
      const result = state.cartItems.find((item)=> {
        return item.id === id
      });
      if(result.amount !== 0){
        result.amount -= 1;
      }
    },

    filterItems : (state, action) => {
      state.shopItems = state.data
      if(action.payload !== "All"){
        state.shopItems = state.shopItems.filter(item => {
          return item.category === action.payload
        })
      }
    },

    addItemToCart : (state, action) => {
      const id = action.payload
      // console.log(id)
      const result = state.data.find((item)=> {
         return item.id === id
      });
      if(checkCart(result, state.cartItems)){
        result.amount = 1;
        state.cartItems.push(result);
        // state.itemStatus = true;
        state.numberOfItemsInCart = state.cartItems.length;
        alert("Added item to your cart");
      }else{
        alert("Item already in your cart")
      }
      
    },

    removeItemFromCart : (state, action) => {
      const id = action.payload
      state.cartItems = state.cartItems.filter(item => {
        return item.id != id
      });
      state.numberOfItemsInCart = state.cartItems.length;

    },

    calculateTotal : (state) => {
      state.total = 0
      for (let i = 0; i < state.cartItems.length; i++) {
        state.total += (state.cartItems[i].price * state.cartItems[i].amount);
      }
    }
    
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
export const { increaseAmount, decreaseAmount, filterItems, addItemToCart, calculateTotal, removeItemFromCart } = shopSlice.actions

export default shopSlice.reducer