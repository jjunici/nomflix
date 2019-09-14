import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({result,loading,error}) => null;

DetailPresenter.propTypes={
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    error:PropTypes.string
}//props들의 기본 자료형을 지정해줌 

export default DetailPresenter;