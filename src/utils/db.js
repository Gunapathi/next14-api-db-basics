import mongoose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL).then(
            () => console.log("connected")
        )
    } catch (err) {
        throw new Error("Error connecting to Mongoose", err);
    }
}

export default dbConnect;