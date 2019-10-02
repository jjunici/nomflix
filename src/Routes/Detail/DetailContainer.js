import DetailPresenter from "./DetailPresenter";
import React from "react";
import { moviesApi, tvApi } from "../../api";

export default class DetailContainer extends React.Component{
    constructor(props){
        super(props);
        const {
            location:{pathname}
        }=props;
        this.state={
            result:null,
            error:null,
            loading:true,
            isMovie:pathname.includes("/movie/"),
            youtube:true,
            companies:false,
            countries:false

           
        }
    }
    tabsChange = (event) =>{
        const {
            target:
            {
                innerText:value
            }
        } = event;//비구조화 할당 

        if(value==="Youtube"){
            this.setState({
                youtube:true,
                companies:false,
                countries:false
            });
        }else if(value==="Production Companies"){
            this.setState({
                youtube:false,
                companies:true,
                countries:false
            });
            
        }else if(value==="Production Countries"){
            this.setState({
                youtube:false,
                companies:false,
                countries:true
            });
        }
    };
    async componentDidMount(){
        const {
            match:{
                params:{id}
            },
            history:{push},
         
        } = this.props;
        const {isMovie}=this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            return push("/");
            
        }
        let result=null;

        try{
            if(isMovie){
                ({data:result}=await moviesApi.movieDetail(parsedId));
            }else{
                ({data:result}=await tvApi.showDetail(parsedId));
            }
      
        }catch{
            this.setState({
                error:"Can't find anything."
            })
        }finally{
            this.setState({
                loading:false,
                result
            })
        }
        

    }
    render(){
        const {result,error,loading,youtube,companies,countries}=this.state;
  
        return(
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
                youtube={youtube}
                companies={companies}
                countries={countries}
                tabsChange={this.tabsChange}
            />
        )
    }
}