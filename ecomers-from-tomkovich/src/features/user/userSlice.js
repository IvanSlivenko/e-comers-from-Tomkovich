import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { BASE_URL} from '../../utils/constans'

// export const getCategories = createAsyncThunk(
//     'categories/getCategories',
//     async (_,thunkAPI) =>{
//         try{
//           const res = await axios(`${BASE_URL}/categories`)
//           return res.data; 
//         } catch(err){
//             console.log(err);
//             return thunkAPI.rejectWithValue(err)
            
//         }
//     }
// );

const userClice = createSlice({
    name: 'user',
    initialState:{
        currentUser:[],
        cart:[],
        isLoading: false
    },
    reducers:{
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({ id }) => id === payload.id)        

            if (found) {
                newCart = newCart.map((item)=>{
                    return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity+1} 
                    : item;
                })
            }
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getCategories.pending,(state) =>{
    //         state.isLoading = true;
    //     });
    //     builder.addCase(getCategories.fulfilled,(state, {payload}) =>{
    //         state.list = payload;
    //         state.isLoading = false;
    //     });
    //     builder.addCase(getCategories.rejected,(state) =>{
    //         state.isLoading = false;
    
            
    //     });
    // }

});

export default userClice.reducer;