

export interface IVehicle {
    id?: string,
    license: string,
    type: string,
    ownerName: string,
    ownerPhone: string,
    status: "In" | "Out",
    ownerAddress: string,
    entryTime: Date | null | string,
    exitTime: Date | null | string,
    parkingCharge: number
}