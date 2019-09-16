import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
const Container = styled.div`
    padding:0px 20px;
`;

const HomePresenter = ({nowPlaying,popular,upcoming,loading,error}) => 
loading ? ( 
    <Loader/>
) : (
    <Container>
        {nowPlaying && nowPlaying.length >0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie=><span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
        {upcoming && upcoming.length >0 && (
            <Section title="upcoming Movies">
                {upcoming.map(movie=><span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
        {popular && popular.length >0 && (
            <Section title="Popular Movies">
                {popular.map(movie=><span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
        {error && <Message color="#e74c3c;" text={error}/>}
    </Container>
);

HomePresenter.propTypes={
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    Message:PropTypes.string
}//props들의 기본 자료형을 지정해줌 

export default HomePresenter;