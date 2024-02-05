"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


export const getUserWishlistData = createAsyncThunk('getwishlist/getWishlist' , async function(){
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/product/favorite/get`,
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
        console.log(data);
        if(data.result.status == 'error'){
            return false;
        }
        return data.result.data;
    } catch (error) {
        console.log(error);
        return false;
    }
});

const userWishlistSlice = createSlice({
    name:'getwishlist',
    initialState:{
        wishlistItems:null,
        numOfWishlistItems:0
    },
    extraReducers:function(builder){
        builder.addCase(getUserWishlistData.fulfilled , function(state , action){
            if(action.payload == false){
                state.wishlistItems = null ;
                state.numOfWishlistItems = 0 ;
            }else{
                state.wishlistItems = action.payload;
                state.numOfWishlistItems = action.payload.length;
            }
        })
    }
});

export default userWishlistSlice.reducer;