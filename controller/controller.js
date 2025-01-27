import Main from "../models/main.js"
import { Menu,Item } from "../models/db.js"
import menuValidationSchema from "../requests/menu.js"
import itemValidationSchema from "../requests/menu.js"
Main()
export default class userRequests{
    async addMenu(req,res)
    {
        try{
            const{title,description}=req.body
            console.log(req.body)
            const {value,error}=await menuValidationSchema.validate(req.body)
            if(error)
            {
                console.log(error)
                res.status(422).json({status:false,message:"Validation Error",data:[]})
                return
            }
            const data=await Menu.create({
                title,
                description
            })

           res.status(200).json({status:true,message:"Menu Added",data:data})
        }
        catch(error)
        {
            console.log(error)
            res.status(500).json({status:false,message:"Internal server Error",data:[]})
        }
    }

    async getMenu(req,res)
    {
        try{
            const data=await Menu.find()
            res.status(200).json({status:true,message:"data found",data:data})
        }
        catch(error)
        {
            res.status(500).json({status:false,message:"Cant find Data"})
        }
    }
    async addItem(req,res)
    {
        try
        {
            
            const {id,item,description,price}=req.body
            const {value,error}=itemValidationSchema.validate(item,description,price)
            if(error)
            {
                res.staus(422).json({status:false,message:"Validation Error",data:[]})
            }
            const data=await Item.create({
                menu_id:id,
                item,
                description,
                price
            })
            res.status(200).json({status:true,message:"Item Added",data:data})
        }
        catch
        {
            res.status(500).json({status:false,message:"Internal server Error",data:[]})
        }
    }
    async getItem(req,res)
    {
        try{
            const data = await Item.find().populate('menu_id', 'title');
            res.status(200).json({status:true,message:"data found",data:data})
        }
        catch(error)
        {
            res.status(500).json({status:false,message:"Cant find Data"})
        }
    }
}