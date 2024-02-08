const mongoose=require("mongoose")
const fitnessSchema=new mongoose.Schema(
    {
        name:String,
        water:String,
        calories:String,
        exercise:String,
        sleep:String,
        condition:String
    }
)
module.exports=mongoose.model("fitness",fitnessSchema)
