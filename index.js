import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import router from './routes/routes.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',router)
app.listen(process.env.PORT,()=>
{
    console.log("server running")
})
