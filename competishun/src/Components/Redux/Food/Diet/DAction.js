import {DIET_GET_REQUEST,DIET_GET_SUCCESS,DIET_GET_FAILED} from "./DiActionTypes";
import axios from "axios"



const DietGetRequest=()=>{
    return{
        type:DIET_GET_REQUEST
    }
}
const DietGetFailed=()=>{
    return{
        type:DIET_GET_FAILED
    }
}
const DietGetSuccess=(payload)=>{
    return{
        type:DIET_GET_SUCCESS,
        payload:payload
    }
}

export const GetDietRecipes=(query='No oil added')=>(dispatch)=>{
   
    let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
     
    dispatch(DietGetRequest())
    axios.get(url).then((res)=>{
        dispatch(DietGetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(DietGetFailed())
    })
    

}