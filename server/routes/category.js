import express from 'express';

import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.js';

const router = express.Router();

// router.get('/', getCategories);
router.post('/:id', createCategory);
router.get('/:id', getCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);


export default router;