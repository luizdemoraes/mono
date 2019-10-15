import React from "react";
import PropTypes from "prop-types";
import copy from "clipboard-copy";

import * as S from "./styled";

Palette.propTypes = {
  variation: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCopy: PropTypes.func
};

Palette.defaultProps = {
  onCopy: () => {}
};

export default function Palette({ variation, colors, onCopy }) {
  function handleClick(color) {
    copy(color)
      .then(() => {
        onCopy(color);
        console.info(`MONO: '${color}' copied to clipboard.`);
      })
      .catch(reason => {
        console.error(`MONO: ${reason}`);
      });
  }

  return (
    <S.Box>
      <S.Title>{variation}</S.Title>
      <S.MotionList>
        {colors.map(color => (
          <S.MotionListItem key={Math.random()}>
            <S.Color
              type="button"
              color={color}
              onClick={() => handleClick(color)}
              title={`Copy '${color}' to clipboard`}
              aria-label={`Copy "${color}" to clipboard`}
            />
          </S.MotionListItem>
        ))}
      </S.MotionList>
    </S.Box>
  );
}
