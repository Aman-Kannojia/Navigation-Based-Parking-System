import dbConnect from "./config/database.js";
import 'dotenv/config'
import { Parking } from "./models/Parking.js";
import parking from './parking.json' assert{type:"json"}

const initSlots = async()=>{
    try {
        await dbConnect(process.env.DATABASE_URL);
        await Parking.deleteMany()
        await Parking.create(parking);
        console.log('slots initialized');
        process.exit(0)

    } catch (error) {
        console.log(error);
    }
}

initSlots();