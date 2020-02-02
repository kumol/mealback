const mongoose = require("mongoose");
var Cost = require("./../models/cost");
var Member = require('./../models/member');
var Rate = require("./../models/rate");
// module.exports.cost=(req,res,next)=>{
//     console.log(req.body);
//     const cost =new Cost({
//         cost:req.body.cost,
//         number:2,
//     })
//     console.log(cost);
//     console.log("Idon't know");
//     res.status(200).json("Done");
// }
module.exports.member = (req,res,next)=>{
    var member = new Member();
    member.name = req.body.name;
    member.amount = req.body.amount;
    member.totalMeal = req.body.totalMeal;
    member.save().then((err)=>{
        res.status(200).json({message:"Success"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({message:"there was an err while saving data"});
    })
}
module.exports.updateMemberMeal=(req,res,next)=>{
    var id= req.params.id;
    Member.update({_id:id},{tMeal:req.body.tMeal}).then((err)=>{
        res.status(200).json({message:"Success"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({message:"there was an err while updating"});
    });
}
module.exports.updateMemberAmount=(req,res,next)=>{
    var id = req.params.id;
    Member.update({_id:id},{amount:req.body.amount}).then((err)=>{
        res.status(200).json({message:"Success"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({message:"there was an err while updating"});
    });
}
module.exports.addmeal=(req,res,next)=>{

}
module.exports.cost = (req,res,next)=>{
    var cost = new Cost();
    var rate = new Rate();
    Cost.find().then((result)=>{
        length = result.length;
        cost.number = length+1;
        cost.totalCost = req.body.cost;
        cost.cost=req.body.cost;
        if(length>0){
            // cost.totalCost += result[length].totalCost;
            // console.log(totalCost);
            for(var i = 0 ;i<length;i++){
                cost.totalCost += result[i].cost;
            }
        }else{
            cost.totalCost += req.body.cost ;
        }
        rate.totalCost = cost.totalCost;
        console.log(rate);
        cost.save().then((result)=>{
            res.status(200).json("Success");
        }).catch((err)=>{
            //console.log(err);
            res.status(500).json({message:"there was an err while cost sending data"});
        })
    }).catch((err)=>{
        res.status(500).json({message:"there was an err while cost updating"});
    })
}

module.exports.rateCalculation = (req,res,next)=>{
    Member.find({}).then((member)=>{
        res.status(200).json({member:member});
    }).catch((err)=>{
        res.status(404).json({error:err});
    })
}