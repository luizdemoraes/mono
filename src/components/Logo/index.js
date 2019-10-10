import React from "react";

import logo from "../../assets/logo.svg";
import * as S from "./styled";

export default function Logo() {
  return (
    <S.Link href="/">
      <img src={logo} alt="MONO" />
    </S.Link>
  );
}
