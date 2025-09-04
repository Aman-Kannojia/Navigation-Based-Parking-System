import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
    CarNumber:{
        type: String,
        required: true,
    },

    Contact:{
        type:Number,
        required:true,
    },

    InTime:{
        type:Date,
        default:Date.now(),
        require:true,
    },

    OutTime:{
        type:Date,
        default:Date.now(),
        require:true,
    },


    SlotId:{
        type:String,
        require:true,
    },
})

export const History = mongoose.model("History", HistorySchema);
