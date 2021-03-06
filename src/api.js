import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"e5e89b3d4d31d695ef3ea26d6449f8ac",
        language:"ko-KR"
    }
});


export const moviesApi={
    nowPlaying:()=>api.get("movie/now_playing"),//메서드 (객체의 속성값이 함수인 경우를 메서드라고 한다 ))
    upcoming:()=>api.get("movie/upcoming"),
    popular:()=>api.get("movie/popular"),
    movieDetail:(id)=>api.get(`movie/${id}`,{
        params:{
           append_to_response:"videos"
        }
    }),
    search:(term)=>api.get("search/movie",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}

export const tvApi={
    topRated:()=>api.get("tv/top_rated"),
    popular:()=>api.get("tv/popular"),
    airingToday:()=>api.get("tv/airing_today"),
    showDetail:(id)=>api.get(`tv/${id}`,{
        params:{
            append_to_response:"videos"
        }
    }),
    search:(term)=>api.get("search/tv",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}