import express from 'express';
const CurrentRouter = express.Router();
import {CreateEntry} from '../controllers/CreateEntry.js';
import { CheckAvailability } from '../controllers/CreateEntry.js';
import {DeleteEntry} from '../controllers/DeleteEntry.js';

CurrentRouter.post("/CreateEntry",CreateEntry);
CurrentRouter.get("/CheckAvailability",CheckAvailability);
CurrentRouter.delete("/DeleteEntry",DeleteEntry);
export default CurrentRouter;