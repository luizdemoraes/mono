import React from "react";

import * as S from "./styled";
import Logo from "../Logo";
import githubIcon from "../../assets/github-icon.svg";

export default function Header({ children }) {
  return (
    <S.Wrapper>
      <Logo />
      {children}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/luizdemoraes.dev/mono"
      >
        <img
          src={githubIcon}
          alt="See MONO on Github"
          style={{ width: "24px", height: "24px" }}
        />
      </a>
    </S.Wrapper>
  );
}
