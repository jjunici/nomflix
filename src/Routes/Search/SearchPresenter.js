import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({movieResults,tvResults,loading,error,searchTerm,handleSubmit}) => null;

SearchPresenter.propTypes={
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    error:PropTypes.string,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
}//props들의 기본 자료형을 지정해줌 

export default SearchPresenter;