import Watch from '../models/watch.model.js'
import mongoose from "mongoose";

export const getWatches = async (req, res) => {
    try {
        const watches = await Watch.find({});
        res.status(200).json({success:true, data: watches});
    } catch (error) {
        console.log("error in fetching watches:", error.message);
        res.status(500).json({success:false, msg: "Server Error"});
    }
}

export const createWatch = async (req, res) => {
    const watch = req.body;

    if(!watch.name || !watch.price || !watch.image){
        return res.status(400).json({success:false, msg: "Please provide all fields"});
    }

    const newWatch = new Watch(watch);

    try{
        await newWatch.save();
        res.status(201).json({success:true, data: newWatch});
    } catch(error){
        console.error("Error in create watch:", error.message);
        res.status(500).json({success:false, msg:"Server Error"});
    }
}

export const updateWatch = async (req, res) => {
    const {id} = req.params;

    const watch = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, msg:"Invalid Watch Id"});
    }
    
    try {
        const updatedWatch = await Watch.findByIdAndUpdate(id, watch, {new:true});
        res.status(200).json({success:true, data:updatedWatch});
    } catch (error) {
        console.log("Error in updating watch", error.message);
        res.status(500).json({success: false, msg: "Server Error"});
    }
}

export const deleteWatch = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, msg:"Invalid Watch Id"});
    }
    
    try {
        await Watch.findByIdAndDelete(id);
        res.status(200).json({success:true, msg:"Watch deleted"});
    } catch (error) {
        console.log("Error in delteing product", error.message);
        res.status(500).json({success:false, msg:"Server Error"});
    }
    
}