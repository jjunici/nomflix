import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Home from "Routes/Home";
import Tv from "Routes/Tv";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";

export default ()=>(
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tv"  component={Tv}/>
            <Route path="/search"  component={Search}/>
            <Route path="/movie/:id" component={Detail}/>
            <Route path="/show/:id" component={Detail}/>
            <Redirect from="*" to="/"/>{/*path 에 매칭 되는 url 요청이 존재 하지 않는 경우 자동적으로 "/" 경로로 리다이렉트 시켜준다 */}
        </Switch>{/* 한번에 하나의 라우트만 Render 해주는 역할*/}
    </Router>
);