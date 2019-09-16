import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "api";


export default class extends React.Component{
    state={
        nowPlaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true
    };
    async componentDidMount(){
        try{
            const {
                data:{results:nowPlaying}
            }=await moviesApi.nowPlaying();
            const {
                data:{results:upcoming}
            }=await moviesApi.upcoming();
            const {
                data:{results:popular}
            }=await moviesApi.popular();
         
            this.setState({
                nowPlaying,//nowPlaying:noPlaying 이거랑 같은 문법 (변수명이 똑같기 때문에 가능한 문법)
                upcoming,
                popular
            })
         
            
        }catch{
            this.setState({
                error:"Can't find Movies information."
            })
        }finally{
            //성공하던 실패하던 무조건 마지막에 실행할 코드를 넣는곳 
            this.setState({
                loading:false,

            })
        }
    }//컴포넌트 라이프사이클 api 
    render(){
        const {nowPlaying,upcoming,popular,error,loading}=this.state;//스테이트에 있는 값들을 비구조화 할당으로 변수에 넣어 준다 . 
       
        return(
        
        <HomePresenter 
            nowPlaying={nowPlaying} 
            upcoming={upcoming} 
            popular={popular}
            error={error}
            loading={loading}
        />
        );
    }
}