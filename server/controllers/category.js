import express from 'express';
import mongoose from 'mongoose';

import Category from '../models/category.js';
import Parent from '../models/postMessage.js';


const router = express.Router();

export const getCategories = async (req, res) => { 
    try {
        const category = await Category.find();
                
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCategory = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Category.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    const { id } = req.params;

    console.log("pareent id", id)
    const newParent = await Parent.findById(id);
    const { title ,news_url } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const newPostMessage = new Category({ title, news_url})

    try {
        await newParent.category.push(newPostMessage);
        newPostMessage.media = newParent;
        await newPostMessage.save();
        await newParent.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const {title, news_url } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = { title, news_url, _id: id };

    await Category.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Category.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;