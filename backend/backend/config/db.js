import mongoose from "mongoose";


// In db.js, update to add error handling
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://greatstack:Pk5669456@cluster0.pqpnxxs.mongodb.net/food-del');
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1); // Exit process with failure
    }
};