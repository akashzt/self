const express=require('express');
const patient=require('../model/patient');

//save patient
exports.addPatient = async(req,res)=>{
    try{
        await patient.create(req.body).then(async (data)=>{
            res.json({status:201,data:data,msg:"Successfully Signed Up"});
        }).catch((err)=>{
            res.json({status:501,msg:"not Signed Up"})
        })
    }
    catch({err}){
        console.log("Error in add Patient", err);
    }
}

//update patient
exports.updatePatient = async(req,res)=>{
    try{

        await patient.findOne({where:{patient_id:req.params.id}}).then(async (data)=>{
           console.log("hooo")
            if(req.body.name){
                data.name=req.body.name;
            }
            if(req.body.age){
                data.age=req.body.age;
            }
            if(req.body.mobile_no){
                data.mobile_no=req.body.mobile_no;
            }
            data.update_date=Date.now();
            data.update_by='Akash';
            return data.save();
        }).then(async (result)=>{
            res.json({status:201,data:result,msg:"Successfully update"});
        }).catch((err)=>{
            res.json({status:501,msg:"not update"})
        })
    }
    catch({err}){
        console.log("Error in update Patient", err);
    }
}

//delete patient
exports.deletePatient = async(req,res)=>{
    try{
        await patient.destroy({where:{patient_id:req.params.id}}).then(async (data)=>{
            res.json({status:201,data:data,msg:"Successfully Signed Up"});
        }).catch((err)=>{
            res.json({status:501,msg:"not Signed Up"})
        })
    }
    catch({err}){
        console.log("Error in add Patient", err);
    }
}


//save patient
exports.showAllPatient = async(req,res)=>{
    try{

        await patient.findAll().then(async (data)=>{
            res.json({status:201,data:data,msg:"All data"});
        }).catch((err)=>{
            res.json({status:501,msg:"not Signed Up"})
        })
    }
    catch({err}){
        console.log("Error in show Patient", err);
    }
}
