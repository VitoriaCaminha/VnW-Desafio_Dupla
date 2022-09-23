import React from "react";
import * as S from "./Style/Styles.js";

const Header = () => {
  return (
    <S.Head>
      <S.Div>
        <S.H1>RC</S.H1>
        <S.Nav>
          <S.Ul>
            <S.Li>ABOUT</S.Li>
            <S.Li>RECIPES</S.Li>
            <S.Li>SUBSCRIBE</S.Li>
          </S.Ul>
        </S.Nav>
      </S.Div>

      <S.Divi>
        <S.H2>RECIPES</S.H2>
      </S.Divi>
    </S.Head>
  );
};
export default Header;
