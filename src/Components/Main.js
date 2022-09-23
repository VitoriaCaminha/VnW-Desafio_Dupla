import React from "react";
import * as S from "./Style/Styles.js";
import Bolo from "./Imagens/bolo.png";
import Pizza from "./Imagens/pizza.png";
import Vitamina from "./Imagens/vitamina.png";
import Colher from "./Imagens/colher.png";

const Main = () => {
  return (
    <S.Section>
      <S.HH>LASTED RECIPES</S.HH>
      <S.Traco></S.Traco>
      <S.Divs>
        <S.Divis>
          <figure>
            <S.Img src={Bolo} alt="Bolo" />
          </figure>
          <S.Tracos></S.Tracos>
          <S.P>Red Velvet Cake</S.P>
        </S.Divis>

        <S.Divis>
          <figure>
            <S.Img src={Pizza} alt="Pizza" />
          </figure>
          <S.Tracos></S.Tracos>
          <S.P>Margherita Pizza</S.P>
        </S.Divis>

        <S.Divis>
          <figure>
            <S.Img src={Vitamina} alt="Vitamina" />
          </figure>
          <S.Tracos></S.Tracos>
          <S.P>Peanut Smoothie</S.P>
        </S.Divis>
      </S.Divs>

      <S.DivS>
        <S.ImgC src={Colher} alt="Colher" />
        <S.DiV>
          <h2>ABOUT</h2>
          <S.Traco></S.Traco>

          <S.PP>
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </S.PP>
        </S.DiV>
      </S.DivS>
    </S.Section>
  );
};
export default Main;
