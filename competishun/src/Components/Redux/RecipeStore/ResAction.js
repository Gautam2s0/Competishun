import {RES_GET_REQUEST,RES_GET_SUCCESS,RES_GET_FAILED} from "./ResActionType";
import axios from "axios"



const ResGetRequest=()=>{
    return{
        type:RES_GET_REQUEST
    }
}
const ResGetFailed=()=>{
    return{
        type:RES_GET_FAILED
    }
}
const ResGetSuccess=(payload)=>{
    return{
        type:RES_GET_SUCCESS,
        payload:payload
    }
}

export const GetRecipes=(query='indian')=>(dispatch)=>{
   
    let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
     console.log("url",url)
    dispatch(ResGetRequest())
    axios.get(url).then((res)=>{
        dispatch(ResGetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(ResGetFailed())
    })
    

}