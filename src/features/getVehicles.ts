import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVehicles } from "../services/vehicleApi";
import { IVehicle } from "../Interfaces/vehicle";

const initialState = {
    vehicles: [] as IVehicle[],
    isLoading: false,
    error: '' as string,
    isError: false
}

export const fetchVehicles = createAsyncThunk('fetchVehicles', async () => {
    try {
        const response = await getVehicles();
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
});

const fetchVehicleSlice = createSlice({
    name: 'fetchVehicles',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase(fetchVehicles.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchVehicles.fulfilled, (state, action) => {
            state.vehicles = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
        .addCase (fetchVehicles.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message as string;
        })
    }
})

export default fetchVehicleSlice.reducer;