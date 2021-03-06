import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    position: relative;
    padding:50px;

`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size:cover;
    filter: blur(3px);
    opacity:0.5;
    z-index:0;

`;

const Content = styled.div`
    display:flex;
    width:100%;
    position:relative;
    z-index:1;
    height:100%;
`;

const Cover = styled.div`
    width:30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size:cover;
    height:100%;
    border-radius:5px;
`;

const Data = styled.div`
    position:relative;
    width:70%;
    margin-left:10px;

`;

const Title = styled.h3`
    font-size:32px;
    margin-bottom:10px;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span``; 

const Divider = styled.span`
    margin:0 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height: 1.5;
    width:50%;
`;
const VideoRink = styled.a`
    display:block;
    color:rgba(255,255,255,0.8);
    font-size:16px;
    margin:10px;
`

const ProductionCompanies = styled.ul`
  width:75%;
  overflow:auto;
  white-space:nowrap;
  margin:20px 0;
  background-color:rgba(255,255,255,0.3);
  border-radius:5px;
  & > h2 {
    font-size: 14px;
    margin: 12px;
  }
`;
const Production = styled.li`
    display:inline-block;
    margin:20px;    
`;

const ProductionLogo = styled.img`
    width:100px;
    
`;

const Countries = styled.span`
    display:inline-block;
    background-color:rgba(0,0,0,0.5);
    text-align:center;
    font-size:16px;
    color:rgba(255,255,255,0.8);
    padding:10px;
    border-radius:5px;
    margin:3px;
`;
const Tabs = styled.ul`
    display:flex;
    margin-top 10px;

    
`;
const TabsItems = styled.li`
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    font-size: 14px;
    color: white;
    cursor: pointer;
    border-bottom: none;
    padding: 10px;
    transition: transform 0.3s ease-in-out 0s;

`;


const TabsResult = styled.div`
    width:100%;
    box-sizing:border-box;
    padding:30px 0px;
`;


const DetailPresenter = ({result,loading,error,youtube,companies,countries,tabsChange}) => 
    loading ? (
        <Loader /> 
    ) : (
    <Container>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
            <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")}/>
            <Data>
                <Title>
                    {result.title 
                         ? result.title
                         : result.original_name}
                </Title>
                <ItemContainer>
                   <Item>
                    {result.release_date 
                         ? result.release_date.substring(0,4)
                         : result.first_air_date.substring(0,4)}
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                    {result.runtime
                         ? result.runtime
                         : result.episode_run_time[0]} min
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                        {result.genres && result.genres.map((genre,index)=> 
                            index === result.genres.length - 1 ? genre.name : `${genre.name} /`
                        )}
                    </Item>
                </ItemContainer>
                <Overview>{result.overview}</Overview>
                <Tabs>
                    <TabsItems onClick={tabsChange}>Youtube</TabsItems>
                    <TabsItems onClick={tabsChange}>Production Companies</TabsItems>
                    <TabsItems onClick={tabsChange}>Production Countries</TabsItems>
                </Tabs>
         
                <TabsResult>
                    

                        {youtube &&
                        ( result.videos.results.length > 0 ? (
                                result.videos.results.map((video,index)=>
                                    <VideoRink key={index} target="_blank" href={`https://www.youtube.com/watch?v=${video.key}`}>
                                        {video.name}
                                    </VideoRink>
                                )
                            ) : (
                                <span>트레일러 영상이 존재 하지 않습니다.</span>
                        ))}
                        {companies && 
                        ( result.production_companies && result.production_companies.length > 0 && (
                            <ProductionCompanies>
                                <h2>Production Companies</h2>
                                {result.production_companies.map(company => (
                                    <Production key={company.id}>
                                        {company.logo_path ? (
                                            <ProductionLogo 
                                                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                                
                                            />
                                        ) : (
                                            company.name
                                        )}
                                    </Production>
                                ))}
                            </ProductionCompanies>
                        ))}
                        {countries && 
                        ( result.production_countries && result.production_countries.length > 0 && (
                                result.production_countries.map((country,index) => (
                                    <Countries key={index}>
                                        {country.name}
                                    </Countries>
                                ))
                                
                            )
                        )}
                </TabsResult>
            </Data>
            
        </Content>

    </Container>

    )


DetailPresenter.propTypes={
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,//반드시 값이 들어와야 하는 prop는 isRequired 해준다 
    error:PropTypes.string
}//props들의 기본 자료형을 지정해줌 

export default DetailPresenter;