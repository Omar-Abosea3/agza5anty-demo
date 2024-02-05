"useClient"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import Cookies from "js-cookie";



export const getUserCartData = createAsyncThunk('getusercart/getUserCart' ,async function (){
    try {
        const Authorization = Cookies.get('accessKey');
        console.log(Authorization);
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/get`,
            headers:{
                Authorization,
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'get',
                params:{}
            }
        });
        console.log('success');
        console.log(data);
        return data.result.data;
    } catch (error) {
        console.log(error);
        console.log('error');
        return false;
    }
});

const userCartSlice = createSlice({
    name:'getusercart',
    initialState:{
        cartItems:null,
        numOfCartItems:0,
        totalCartPrice:0,
        currency_id:''
    },

    extraReducers:function(builder){
        builder.addCase(getUserCartData.fulfilled , function(state , action){
            console.log(action.payload);
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            const totalCartPrice = localStorage.getItem('totalCartPrice');
            if(action.payload == false){
                state.cartItems=cartItems?cartItems:null;
                state.numOfCartItems=cartItems?cartItems.length:0;
                state.totalCartPrice=totalCartPrice?parseInt(totalCartPrice):0;
                state.currency_id = !cartItems || !cartItems.length?'EGP':cartItems[0].currency_id[1];
                // state.currency_id = 'EGP';
            }else{
                state.cartItems=action.payload.lines;
                state.numOfCartItems=action.payload.lines.length;
                state.totalCartPrice=action.payload.total_amount;
                state.currency_id = action.payload.currency_id[1];
            }
        })

        builder.addCase(getUserCartData.pending , function(state){
            console.log('pending');
        }) 
    }
});

export default userCartSlice.reducer;
