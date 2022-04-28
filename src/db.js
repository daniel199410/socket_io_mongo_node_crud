import { connect } from 'mongoose'
import {MONGO_DB_URI} from "./config";

export const connectDB = async () => {
    try {
        console.log(MONGO_DB_URI)
        await connect(MONGO_DB_URI)
    } catch (error) {
        console.error(error);
    }
}
