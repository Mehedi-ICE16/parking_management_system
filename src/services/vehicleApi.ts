import axios from "axios";
import { IVehicle } from "../Interfaces/vehicle";

const client = axios.create({
    baseURL: "http://localhost:3000"
});

export const addVehicle = async (data: IVehicle) => {
    try {
        const response = await client.post("/vehicles", data);
        return response.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export const getVehicles = async () => {
    try {
        const response = await client.get("/vehicles");
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}