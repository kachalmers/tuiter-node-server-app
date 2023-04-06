import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    time: {type: Date, default: Date.now},
}, {collection: 'tuits'});

export default schema;