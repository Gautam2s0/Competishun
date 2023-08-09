import {
    MOVIE_GET_REQUEST,
    MOVIE_GET_SUCCESS,
    MOVIE_GET_FAILED,
    MOVIE_ADD_FAVORITE_REQUEST,
    MOVIE_ADD_FAVORITE_SUCCESS,
    MOVIE_ADD_FAVORITE_FAILED,
    MOVIE_ADD_WATCHLIST_REQUEST,
    MOVIE_ADD_WATCHLIST_SUCCESS,
    MOVIE_ADD_WATCHLIST_FAILED,
    MOVIE_SEARCH_REQUEST,
    MOVIE_SEARCH_SUCCESS,
    MOVIE_SEARCH_FAILED
} from "./MovieActionType";
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

// serch movies

const MovieSearchRequest=()=>{
    return{
        type:MOVIE_SEARCH_REQUEST
    }
}
const MovieSearchFailed=()=>{
    return{
        type:MOVIE_SEARCH_FAILED
    }
}
const MovieSerachSuccess=(payload)=>{
    return{
        type:MOVIE_SEARCH_SUCCESS,
        payload:payload
    }
}

// FAVORITE
const MovieAddFavRequest=()=>{
    return{
        type:MOVIE_ADD_FAVORITE_REQUEST
    }
}
const MovieAddFavFailed=()=>{
    return{
        type:MOVIE_ADD_FAVORITE_FAILED
    }
}
const MovieAddFavSuccess=(payload)=>{
    return{
        type:MOVIE_ADD_FAVORITE_SUCCESS,
        payload:payload
    }
}

// Watchlist
const MovieAddWatRequest=()=>{
    return{
        type:MOVIE_ADD_WATCHLIST_REQUEST
    }
}
const MovieAddWatFailed=()=>{
    return{
        type:MOVIE_ADD_WATCHLIST_FAILED
    }
}
const MovieAddWatSuccess=(payload)=>{
    return{
        type:MOVIE_ADD_WATCHLIST_SUCCESS,
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

export const AddFavMovie=(movie)=>(dispatch)=>{
    // dispatch(MovieGetRequest())
    dispatch(MovieAddFavSuccess(movie))
    // dispatch(MovieGetFailed())
}
export const AddWatMovie=(movie)=>(dispatch)=>{
    // dispatch(MovieGetRequest())
    dispatch(MovieAddWatSuccess(movie))
    // dispatch(MovieGetFailed())
}

export const SearchMovie=(query="thor")=>(dispatch)=>{
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=0f6364113f82983e5594bc6194faf192&query=${query}`
    dispatch(MovieSearchRequest())
    axios.get(url).then((res)=>{
        dispatch(MovieSerachSuccess(res.data))
        console.log("res",res.data)
    })
    .catch((err)=>{
        dispatch(MovieSearchFailed())
    })
    console.log(url)
    

}