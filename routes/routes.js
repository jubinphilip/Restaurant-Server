import express from 'express'
import userRequests from "../controller/controller.js";
const router=express.Router()

const userRequest=new userRequests()

router.route('/add-menu').post(userRequest.addMenu)
router.route('/get-menu').get(userRequest.getMenu)
router.route('/add-item').post(userRequest.addItem)
router.route('/get-item').get(userRequest.getItem)

export default router
