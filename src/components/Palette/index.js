import React from "react";
import copy from "clipboard-copy";

import * as S from "./styled";

export default function Palette({ title, colors, onCopy }) {
  function handleClick(color) {
    copy(color).then(() => {
      onCopy(color);
      console.info(`MONO: '${color}' copied to clipboard.`);
    });
  }

  return (
    <S.Box>
      <S.Title>{title}</S.Title>
      <S.List>
        {colors.map(color => (
          <S.Item
            key={Math.random()}
            color={color}
            onClick={() => handleClick(color)}
            title={`Copy '${color}' to clipboard`}
          />
        ))}
      </S.List>
    </S.Box>
  );
}
