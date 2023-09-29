import mongoose from "mongoose";
import { envs } from "../../config/envs";

const conn = mongoose.createConnection(envs.MONGO_URI);
