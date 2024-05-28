import { configureStore } from '@reduxjs/toolkit';
import addVehicleSlice from '../features/addVehicle';
import getVehiclesSlice from '../features/getVehicles';

export const store = configureStore({
    reducer:{
        getVehicles: getVehiclesSlice,
        addVehicle: addVehicleSlice
    }
})