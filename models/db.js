import mongoose from "mongoose";

const MenuSchema=new mongoose.Schema({
    title:String,
    description:String
})
const Menu=mongoose.model("menu",MenuSchema)

const ItemsSchema=new mongoose.Schema({
    menu_id:{type: mongoose.Schema.Types.ObjectId, ref:'menu'},
    item:String,
    description:String,
    price:String
})

const Item=mongoose.model("items",ItemsSchema)
export {Menu,Item}
