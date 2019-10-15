import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";
import Logo from "../Logo";
import ColorInput from "../ColorInput";
import githubIcon from "../../assets/github-icon.svg";

Header.propTypes = {
  currentColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
};

export default function Header({ currentColor, onColorChange }) {
  return (
    <S.Wrapper>
      <Logo />
      <ColorInput currentColor={currentColor} onColorChange={onColorChange} />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/luizdemoraes/mono"
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
