import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IVehicle } from "../Interfaces/vehicle";
import { addVehicle } from "../services/vehicleApi";

const initialState = {
    vehicle: {} as IVehicle,
    isLoading: false,
    error: '' as string,
    isError: false
}

export const postVehicle = createAsyncThunk('postVehicle', async ( vehicle: IVehicle) => {
    try {
        const response = await addVehicle(vehicle);
        return response;
    } catch(err) {
        console.log(err);
        throw err;
    }
});

const postVehicleSlice = createSlice({
    name: 'postVehicle',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postVehicle.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(postVehicle.fulfilled, (state, action) => {
            state.vehicle = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
        .addCase(postVehicle.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message as string;
        })
    }
})

export default postVehicleSlice.reducer;