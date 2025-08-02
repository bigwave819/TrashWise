import mongoose from "mongoose"

const classificationSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    materialType: { 
        type: String, 
        required: true 
    }, // e.g. 'Plastic', 'Paper'
    biodegradable: { 
        type: Boolean, 
        required: true 
    },
});

const Classification = mongoose.model("Classification", classificationSchema);

export default Classification;