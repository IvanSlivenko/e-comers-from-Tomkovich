import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { BASE_URL} from '../../utils/constans'
import { shuffle } from "../../utils/common";
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'

export const getProductsCustome = createAsyncThunk(
    'products/getProductsCustome',
    async (_,thunkAPI) =>{
        try{
          const res = await axios(`${CustomeApyDate}/products`)
          return res.data;
          
           
        } catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const productsSliceCustome = createSlice({
    name: 'productsCustome',
    initialState:{
        // list:[],
        list: CustomeApyDate,
        filtered:[],
        related:[],
        isLoading: false
    },
    reducers:{
        filterByPrice: (state, {payload}) =>{  
          state.filtered = state.list.filter(({ price })=> price < payload )   
        },

        getRelatedProducts: (state, { payload }) => {           
            
            const list = state.list.filter(({ category: { id } }) => id === payload);
            state.related = shuffle(list);
          },

    },
    extraReducers: (builder) => {
        builder.addCase(getProductsCustome.pending,(state) =>{
            state.isLoading = true;
        });
        builder.addCase(getProductsCustome.fulfilled,(state, {payload}) =>{
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProductsCustome.rejected,(state) =>{
            state.isLoading = false;
        });
    }

});

export const { filterByPrice, getRelatedProducts } = productsSliceCustome.actions;
export default productsSliceCustome.reducer;