"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const getUserData = createAsyncThunk('user/getUser' ,async function (){
    try {
        const Authorization = Cookies.get('accessKey');
        console.log(Authorization);
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/user/profile/get`,
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
        console.log('success');
        return data.result.data;
    } catch (error) {
        console.log(error);
        console.log('error');
        return false;
    }
});

const initialState = {
    newUser:null,
    isAdmin:"false",
    userData:null
};
const user = createSlice({
    name:'user',
    initialState,

    reducers:{
        setNewUser:function(state , action){
            console.log(action.payload);
            state.newUser = action.payload;
        },
        setUserRole:function(state , action){
            state.isAdmin = action.payload;
        }
    },

    extraReducers:function(builder){
        builder.addCase(getUserData.fulfilled , function(state , action){
            console.log(action.payload);
            if(action.payload == false){
                state.userData = null;
            }else{
                state.userData = action.payload;
            }
        })
    }
});

const userReducer = user.reducer;
export const {setNewUser , setUserRole} =user.actions;
export default userReducer;