import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDebounce } from "../../utils";
import * as S from "./styled";
import { mono } from "../../utils";

ColorInput.propTypes = {
  currentColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
};

ColorInput.defaultProps = {
  currentColor: "#ddd",
  onColorChange: () => {}
};

export default function ColorInput({ currentColor, onColorChange }) {
  const [value, setValue] = useState(currentColor);
  const debouncedValue = useDebounce(value, 350);

  useEffect(() => {
    if (debouncedValue)
      mono.isValidHex(debouncedValue) && onColorChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        autoFocus
        spellCheck={false}
        maxLength={7}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <S.ColorPicker color={currentColor} />
    </S.Wrapper>
  );
}
