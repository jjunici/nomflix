import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"e5e89b3d4d31d695ef3ea26d6449f8ac",
        language:"en-US"
    }
});


export const moviesApi={
    nowPlaying:()=>api.get("movie/now_playing"),//메서드 (객체의 속성값이 함수인 경우를 메서드라고 한다 ))
    upcoming:()=>api.get("movie/upcoming"),
    popular:()=>api.get("movie/popular")
}

export const tvApi={
    topRated:()=>api.get("tv/top_rated"),
    popular:()=>api.get("tv/popular"),
    airingToday:()=>api.get("tv/airing_today")
}