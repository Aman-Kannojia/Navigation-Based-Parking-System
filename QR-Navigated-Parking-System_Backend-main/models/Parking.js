import mongoose from "mongoose";

const ParkingSchema = new mongoose.Schema({
    slotid:{
        type:String,
        required:true,
        unique:true,
    },

    directions:{
        type:String,
        required:true,
    },

    status:{
        type:Boolean,
        default:false
    }
})

export const Parking = mongoose.model("Parking", ParkingSchema);