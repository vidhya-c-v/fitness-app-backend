const express=require("express")
const fitnessModel=require("../models/fitnessModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let covid=new fitnessModel(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})




module.exports=router