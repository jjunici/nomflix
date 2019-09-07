import React,{Component} from 'react';
import Router from 'Components/Router';
import GlobalStyles from "Components/GlobalStyles";
class  App extends Component {
  render (){
    return (
      
      <>
      <Router/>
      <GlobalStyles/>{/* 모든 styled-components 에 전역적으로 적용되는 스타일 */}
      </>
    )

  }
}

export default App;
