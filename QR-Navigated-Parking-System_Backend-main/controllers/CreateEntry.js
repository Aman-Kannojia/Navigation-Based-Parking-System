import {CurrentData} from "../models/CurrentData.js";
import {Parking} from "../models/Parking.js";


export const CheckAvailability = async(req,res) => {
    try {
        const availability = await Parking.find({status:false}).limit(1);
        console.log(availability);

        if(availability){
            res.status(200)
            .json({
                Slotid:availability[0].slotid,
                success:true,
                data:"Slot Found",
            })
        }
        else{
            res.status(500)
            .json({
                success:false,
                data:"Slot Not Found"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Error While Checking Slot Availability",
            message:error.message,
        })
    }
}

export const CreateEntry = async(req,res) => {
    try {
        const getSlot = await Parking.findOne({ status: false });
        const {CarNumber,Contact, SlotId = getSlot.slotid} = req.body;

        if(getSlot){
            getSlot.status = true;
            await getSlot.save();
            res.status(200)
            .json({
                success: true,
                data: getSlot,
                message: `Slot-${getSlot.slotid} assigned successfully, To reach the alloted Slot No. Please Follow the same direction: ${getSlot.directions}`,
            });
            
            const response = await CurrentData.create({CarNumber,Contact,SlotId});
        }
        else {
            res.status(500).json({
                success: false,
                message: "No available slot found"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Error While Creating User Entry",
            message:error.message,
        })
    }
}