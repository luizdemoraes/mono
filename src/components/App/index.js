import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "../../assets/react-toastify-classes.css";
import GlobalStyles from "../../styled";
import Palettes from "../Palettes";
import Header from "../Header";
import * as S from "./styled";

const DEFAULT_COLOR = "#ff4567";

export default function App() {
  const [color, setColor] = useState(DEFAULT_COLOR);

  toast.configure({
    toastClassName: "custom-rt-toast",
    progressClassName: "custom-rt-progressbar"
  });

  function handleCopy(color) {
    toast(`MONO: "${color}" copied!`);
  }

  return (
    <>
      <GlobalStyles />
      <Header currentColor={color} onColorChange={color => setColor(color)} />
      <S.Main>
        <Palettes currentColor={color} onCopy={handleCopy} />
      </S.Main>
    </>
  );
}
