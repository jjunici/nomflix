import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
    padding: 0px 20px;
`;
const TVPresenter = ({topRated,popular,airingToday,loading,error}) => 
loading ? (
    <Loader/>
) : (
    <Container>
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated Show">
                {topRated.map(show => (
                    <Poster 
                        key={show.id}
                        id={show.id} 
                        imageUrl={show.poster_path}
                        title={show.name} 
                        rating={show.vote_average}
                        year={show.first_air_date}
                    />
                ))}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
        {popular && popular.length > 0 && (
            <Section title="Popular Shows">
                {popular.map(show => (
                <Poster 
                    key={show.id}
                    id={show.id} 
                    imageUrl={show.poster_path}
                    title={show.name} 
                    rating={show.vote_average}
                    year={show.first_air_date}
                />
            ))}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
        {airingToday && airingToday.length > 0 && (
            <Section title="Airing Shows">
                {airingToday.map(show => (  
                    <Poster 
                        key={show.id}
                        id={show.id} 
                        imageUrl={show.poster_path}
                        title={show.name} 
                        rating={show.vote_average}
                        year={show.first_air_date}
                    />
                ))}
            </Section>
        )}{/* <Section></Section>은 조건이 아닌 component 이기 때문에 항상 true 로 인식 */}
         {error && <Message color="#e74c3c;" text={error}/>}
    </Container>
);

TVPresenter.propTypes={
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    error:PropTypes.string
}//props들의 기본 자료형을 지정해줌 

export default TVPresenter;