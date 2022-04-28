import { connect } from 'mongoose'
import {MONGO_DB_URI} from "./config";

export const connectDB = async () => {
    try {
        await connect(MONGO_DB_URI, { useNewUrlParser: true })
    } catch (error) {
        console.error(error);
    }
}
