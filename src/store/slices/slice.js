import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getStaffThunk,
    getCostThunk,
    getParkThunk,
    getCameraThunk,
    getUserInforThunk,
    getCardListThunk,
} from '../action/action';


const slice = createSlice({
    name: 'slice',
    initialState: {
        staffList: [],
        parkList: [],
        costList: [],
        cameraList: [],
        cardList: [],
        profile: null,
    },
    reducers: {
        clearSlice: (state) => {
            state.staffList = [];
            state.parkList = [];
            state.costList = [];
            state.cameraList = [];
            state.cardList = [];
            state.profile = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getStaffThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.staffList = payload
                }
            }
        );
        builder.addCase(
            getCameraThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.cameraList = payload
                }
            }
        );
        builder.addCase(
            getCostThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.costList = payload
                }
            }
        );
        builder.addCase(
            getParkThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.parkList = payload
                }
            }
        );
        builder.addCase(
            getUserInforThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.profile = payload.record
                }
            }
        );
        builder.addCase(
            getCardListThunk.fulfilled,
            (state, { payload }) => {
                if (payload) {
                    state.cardList = payload
                }
            }
        );
    },
});
export const { clearSlice } = slice.actions;
export default slice;