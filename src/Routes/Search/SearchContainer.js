import SearchPresenter from "./SearchPresenter";
import React from "react";
import {moviesApi} from "api";
import { tvApi } from "../../api";

export default class SearchContainer extends React.Component{
    state={
        movieResults:null,
        tvResults:null,
        searchTerm:"",//검색할 키워드 
        loading:false,
        error:null
    }
  
    handleSubmit=(event)=>{
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm!==""){
            this.searchByTerm();
        }
    }

    updateTerm = (event) =>{
        const { 
            target:{value}
        } = event;
       this.setState({
           searchTerm:value
       })
    }
    searchByTerm=async()=>{
        const {searchTerm} = this.state;
        this.setState({
            loading:true
        });
        try{
            const {
                data:{results:movieResults}
            }=await moviesApi.search(searchTerm);
            const {
                data:{results:tvResults}
            }=await tvApi.search(searchTerm);
            this.setState({
                movieResults,//movieResults:movieResults 이거랑 같은 문법 (변수명이 똑같기 때문에 가능한 문법)
                tvResults
            })
          
        }catch{
            this.setState({
                error:"Can't find results"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }
    render(){
        const {movieResults,tvResults,searchTerm,loading,error}=this.state;//스테이트에 있는 값들을 비구조화 할당으로 변수에 넣어 준다 . 
        
       
        return(
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        )
    }
}