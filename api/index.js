const express = require("express");
const app = express();
const cntlr = require("./controller");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({message:"Hello me"});
})
router.post("/cost",cntlr.cost);
router.post("/member",cntlr.member);
router.post("/member/meal/#id",cntlr.updateMemberMeal);
router.post("/member/amount/#id",cntlr.updateMemberAmount);
module.exports = router;
