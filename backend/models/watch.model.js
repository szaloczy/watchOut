import mongoose from "mongoose";

const watchSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true // this will automatically create a timestamp when the product is created or updated
});

const Watch = mongoose.model('Watch', watchSchema);

export default Watch;