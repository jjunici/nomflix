import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
    padding:0px 20px;
`;
const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;
const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;

`;

const SearchPresenter = ({movieResults,tvResults,loading,error,searchTerm,handleSubmit,updateTerm}) => 
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows ...." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? (
              <Loader />
         ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster 
                 key={movie.id}
                 id={movie.id} 
                 imageUrl={movie.poster_path}
                 title={movie.original_title} 
                 rating={movie.vote_average}
                 isMovie={true}
                 year={movie.release_date}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
                <Poster 
                   key={show.id}
                   id={show.id} 
                   imageUrl={show.poster_path}
                   title={show.original_name} 
                   rating={show.vote_average}
                   isMovie={true}
                   year={show.first_air_date}
               />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c;" text={error}/>}
    {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (<Message text="Nothing found" color="#95a5a6"/>) }
    </Container>

SearchPresenter.propTypes={
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    error:PropTypes.string,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
    
}//props들의 기본 자료형을 지정해줌 

export default SearchPresenter;