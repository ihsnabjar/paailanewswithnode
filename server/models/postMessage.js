import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    name: String,
    image_url: String,
    type: String,
    category : [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMedia', postSchema);

export default PostMessage;