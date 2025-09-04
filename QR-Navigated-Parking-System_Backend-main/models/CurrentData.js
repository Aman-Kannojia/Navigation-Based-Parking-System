import mongoose from "mongoose";

const CurrentSchema = new mongoose.Schema({
    CarNumber:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    Contact:{
        type:Number,
        require:true,
        match: /^(\+\d{1,3})?[-\s.]?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/
    },

    InTime:{
        type:Date,
        default:Date.now(),
        require:true,
    },

    SlotId:{
        type:String,
        required:true,
    }
})

export const CurrentData = mongoose.model("CurrentData", CurrentSchema);
