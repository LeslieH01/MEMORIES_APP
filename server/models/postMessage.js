import mongoose from "mongoose";

/** create a mongoose schema */
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: { String },
    selectedFile: String,
    likeCount: {
        typr: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})