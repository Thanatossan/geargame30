export default {
    login : async (req,res,next) =>{
       try{
           if(req.body.permission){
             req.session.authUser = { username: req.body.username}
             res.json(req.body.username)
           }else{
             res.end()
           }            
        }catch(e){
          res.send(e.message)
        }
   },

   logout : async (req,res,next) => {
       delete req.session.authUser
       res.end()
   },

   authenCheck : async (req,res,next)=>{
     if(req.session.authUser !== undefined) res.json({login : true})
     else res.json({login : false})
   }
}