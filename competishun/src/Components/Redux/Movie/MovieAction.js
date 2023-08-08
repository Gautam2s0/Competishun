import {
    MOVIE_GET_REQUEST,
    MOVIE_GET_SUCCESS,
    MOVIE_GET_FAILED} from "./MovieActionType";
import axios from "axios"



const MovieGetRequest=()=>{
    return{
        type:MOVIE_GET_REQUEST
    }
}
const MovieGetFailed=()=>{
    return{
        type:MOVIE_GET_FAILED
    }
}
const MovieGetSuccess=(payload)=>{
    return{
        type:MOVIE_GET_SUCCESS,
        payload:payload
    }
}

export const GetMovie=(url)=>(dispatch)=>{

    dispatch(MovieGetRequest())
    axios.get(url).then((res)=>{
        dispatch(MovieGetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(MovieGetFailed())
    })
    

}