import {api} from '../api/api'

export default {
     login : async (req,res,next) =>{
        try{
            req.session.authUser = { username: req.body.username }
            res.send("OK")
         }catch(e){
           res.send(e.message)
         }
       
    }
}