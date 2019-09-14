import TVPresenter from "./TVPresenter";
import React from "react";
import {tvApi} from "api";
export default class TvContainer extends React.Component{
    state={
        topRated:null,
        popular:null,
        airingToday:null,
        loading:true,
        error:null
    }
    async componentDidMount(){
        try{
            const {
                data:{results:topRated}
            }=await tvApi.topRated();
            const {
                data:{results:popular}
            }=await tvApi.popular();
            const {
                data:{results:airingToday}
            }=await tvApi.airingToday();
            this.setState({
                topRated,//topRated:topRated 이거랑 같은 문법 (변수명이 똑같기 때문에 가능한 문법)
                popular,
                airingToday
            })

        }catch{
            this.setState({
                error:"Can't find TV information."
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }
    render(){
        const {topRated,popular,airingToday,loading,error}=this.state;//스테이트에 있는 값들을 비구조화 할당으로 변수에 넣어 준다 . 
     
        return(
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}

            />
        );
    }
};
