import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    title: String,
    news_url: String,
    media : [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PostMedia'
    }],
    
})

var Category = mongoose.model('Category', categorySchema);

export default Category;