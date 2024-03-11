import express from "express";
import { isAdmin, requireSignIn } from './../middlewares/authmiddleware.js'
import { CreateCategoryController, categoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controller/categoryController.js";
const router = express.Router()

//routes
//create category
router.post('/create-category', requireSignIn, isAdmin, CreateCategoryController)

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

//getAll category
router.get('/get-category', categoryController)

//single-category
router.get('/single-category/:slug', singleCategoryController)

//delte category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router