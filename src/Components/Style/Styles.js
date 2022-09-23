import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeadBack from "../Imagens/Grupo de máscara 2.png";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
    }
`;

//Header.js
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  height: 845px;
  background-image: url(${HeadBack});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 45%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Li = styled.li`
  width: 30%;
  text-align: center;
  &:hover {
    border: solid;
    cursor: pointer;
    background-color: #eeebaa;
  }
`;

export const Divi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const H2 = styled.h2`
  font-size: 70px;
  font-weight: 700;
`;

//Main.js
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30px;
`;

export const HH = styled.h1`
  font-size: 30px;
`;

export const Traco = styled.div`
  width: 80px;
  border: solid;
`;

export const Tracos = styled.div`
  width: 80px;
  border: solid;
  position: relative;
  top: 45px;
`;

export const Divs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 50px;
`;

export const Divis = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00000029;
`;

export const Img = styled.img`
  width: 350px;
  height: 290px;
`;

export const P = styled.p`
  font-size: 22px;
  position: relative;
  top: 50px;
`;

export const DivS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 100px;
`;

export const ImgC = styled.img`
  width: 50%;
  height: 600px;
`;
export const DiV = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PP = styled.p`
  width: 70%;
  font-size: 22px;
  text-align: justify;
`;
