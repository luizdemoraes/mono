import React, { useState, useEffect, useMemo } from "react";

import { mono } from "../../utils";
import GlobalStyles from "../../styled";
import ColorInput from "../ColorInput";
import Palette from "../Palette";
import Header from "../Header";
import * as S from "./styled";

export default function App() {
  const COLORS_AMOUNT = 10;
  const DEFAULT_COLOR = "#ff4567";

  const [color, setColor] = useState(DEFAULT_COLOR);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const { tints, tones, shades, mixed } = useMemo(() => {
    return {
      tints: mono.tints(color, COLORS_AMOUNT),
      tones: mono.tones(color, COLORS_AMOUNT),
      shades: mono.shades(color, COLORS_AMOUNT),
      mixed: mono.mixed(color, COLORS_AMOUNT)
    };
  }, [color]);

  useEffect(() => {
    if (showCopyNotification)
      setTimeout(() => setShowCopyNotification(false), 2500);
  }, [showCopyNotification]);

  return (
    <>
      <GlobalStyles />
      <Header>
        <ColorInput
          currentColor={color}
          onColorChange={color => setColor(color)}
        />
      </Header>
      <S.Palettes>
        <Palette
          title="Tints"
          colors={tints}
          onCopy={() => setShowCopyNotification(true)}
        />
        <Palette
          title="Tones"
          colors={tones}
          onCopy={() => setShowCopyNotification(true)}
        />
        <Palette
          title="Shades"
          colors={shades}
          onCopy={() => setShowCopyNotification(true)}
        />
        <Palette
          title="Mixed"
          colors={mixed}
          onCopy={() => setShowCopyNotification(true)}
        />
      </S.Palettes>
      <S.Notification show={showCopyNotification}>
        Copied to clipboard
      </S.Notification>
    </>
  );
}
