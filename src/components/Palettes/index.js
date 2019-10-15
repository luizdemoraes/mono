import React, { useMemo } from "react";
import PropTypes from "prop-types";

import * as S from "./styled";
import Palette from "../Palette";
import { tints, tones, shades, mixed } from "../../utils";

Palettes.propTypes = {
  currentColor: PropTypes.string.isRequired
};

export default function Palettes({ currentColor, onCopy }) {
  const colors = useMemo(
    () => ({
      tints: tints(currentColor, 10),
      tones: tones(currentColor, 10),
      shades: shades(currentColor, 10),
      mixed: mixed(currentColor, 10)
    }),
    [currentColor]
  );

  return (
    <S.List>
      <S.ListItem>
        <Palette variation="tints" colors={colors.tints} onCopy={onCopy} />
      </S.ListItem>
      <S.ListItem>
        <Palette variation="tones" colors={colors.tones} onCopy={onCopy} />
      </S.ListItem>
      <S.ListItem>
        <Palette variation="shades" colors={colors.shades} onCopy={onCopy} />
      </S.ListItem>
      <S.ListItem>
        <Palette variation="mixed" colors={colors.mixed} onCopy={onCopy} />
      </S.ListItem>
    </S.List>
  );
}
