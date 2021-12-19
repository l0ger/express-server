const defaultErrorHandler = (error,req,res,next)=>{
    res.status(500).json({success:false,error:error,data:[]});
}

module.exports = {
    defaultErrorHandler
}