import mongoose from "mongoose";

const dbConnect = async () => {
    // if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL).then(
            () => {
                console.log("connected");
                return true
            }
        )
    } catch (err) {
        // throw new Error("Error connecting to Mongoose", err);
        console.log(("Error connecting to Mongoose", err));
        return false;
    }
    return false;
}

export default dbConnect;