import User from "../model/User.js";

//Middleware to check if the user is authenticated
export const protect = async(req, res, next )=>{
    const {userId} = req.auth;
    if(!userId){
        return res.status(401).json({error: "Unauthorized"});
    }else{
        const user = await User.findById(userId);
        if(!user){
            return res.status(401).json({error: "Unauthorized"});
        }
        req.user = user;
        next();
    }       
    }


    export default protect;