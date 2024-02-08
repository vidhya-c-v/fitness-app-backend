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
router.get("/view",async(req,res)=>{
    let data=await fitnessModel.find()
    
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await fitnessModel.find(input)
    res.json(data)
})



module.exports=router