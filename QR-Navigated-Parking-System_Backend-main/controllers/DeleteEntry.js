import {History} from "../models/History.js";
import {CurrentData} from "../models/CurrentData.js";
import {Parking} from "../models/Parking.js";

export const DeleteEntry = async(req, res) => {
    try {
        const {CarNumber} = req.body;
        const existingUser = await CurrentData.findOne({CarNumber}).limit(1);
        console.log("exist ",existingUser);
        const Contact = existingUser.Contact;
        const SlotId = existingUser.SlotId;

        if (existingUser) {

            const response = await History.create({CarNumber, Contact, SlotId});
            const UserId = existingUser._id;
            console.log(UserId);
            const statusSlot = existingUser.SlotId;
            const getSlot = await Parking.findOne({slotid:statusSlot});
            console.log(getSlot);
            getSlot.status = false;
            await getSlot.save();
            

            await CurrentData.findByIdAndDelete(UserId);

            res.status(200)
            .json({
                success: true,
                message: "User Deleted Successfully",
                deletedEntry: existingUser
            });
        } 
        else {
            return res.status(500).json({
                success: false,
                message: `Car Number: ${CarNumber} does not exist`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Error While Deleting User",
            message: error.message,
        });
    }
}