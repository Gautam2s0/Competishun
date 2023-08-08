import {CAL_GET_REQUEST,CAL_GET_SUCCESS,CAL_GET_FAILED} from "./CalActionType";
import axios from "axios"



const CalGetRequest=()=>{
    return{
        type:CAL_GET_REQUEST
    }
}
const CalGetFailed=(payload)=>{
    return{
        type:CAL_GET_FAILED,
        payload
        
    }
}
const CalGetSuccess=(payload)=>{
    return{
        type:CAL_GET_SUCCESS,
        payload:payload
    }
}

export const GetCalRecipes=(query=116)=>(dispatch)=>{
   
    let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
     console.log("url",url)
    dispatch(CalGetRequest())
    axios.get(url).then((res)=>{
        dispatch(CalGetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(CalGetFailed(err.message))
    })
    

}