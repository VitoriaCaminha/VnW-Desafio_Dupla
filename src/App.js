import React from "react";
import * as S from "./Components/Style/Styles";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";

const App = () => {
  return (
    <div>
      <S.GlobalStyle />
      <Header />
      <Main />
    </div>
  );
};

export default App;
