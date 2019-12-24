import {api} from '../api/api'
export default {
    postScore : async (req,res,next)=>{
        try{
            const Sport = req.params.Sport
            const Day = req.params.Day
            const response = await api.get(`/api/getScore/${Sport}/${Day}`)
            req.session.searchTemp = response.data
            res.send(response.data)
        }catch(e){
            
        }
        
    },
    getFillterdScore : async (req,res,next) =>{
        var returnArr = req.session.searchTemp
        delete req.session.searchTemp
        res.send(returnArr)
    }
    
}