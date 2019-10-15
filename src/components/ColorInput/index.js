import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { isValidHex } from "../../utils";
import useDebounce from "../../hooks";
import * as S from "./styled";

ColorInput.propTypes = {
  currentColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
};

export default function ColorInput({ currentColor, onColorChange }) {
  const [value, setValue] = useState(currentColor);
  const debouncedValue = useDebounce(value, 350);

  useEffect(() => {
    if (debouncedValue)
      isValidHex(debouncedValue) && onColorChange(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <S.Wrapper>
      <S.Input
        autoFocus
        type="text"
        value={value}
        maxLength={7}
        spellCheck={false}
        aria-label="Hex Color"
        onChange={e => setValue(e.target.value)}
      />
      <S.PickedColor currentColor={currentColor} />
    </S.Wrapper>
  );
}
