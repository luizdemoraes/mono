import { mix, tint, shade, desaturate } from "polished";

function tints(color, amount) {
  return [...Array(amount)].map((_, idx) => tint(0.1 * idx, color));
}

function shades(color, amount) {
  return [...Array(amount)].map((_, idx) => shade(0.1 * idx, color));
}

function tones(color, amount) {
  return [...Array(amount)].map((_, idx) => desaturate(0.1 * idx, color));
}

function mixed(color, amount) {
  const tintsArray = tints(color, amount);
  const shadesArray = shades(color, amount);

  return [...Array(amount)].map((_, idx) =>
    mix(0.1, tintsArray[idx], shadesArray[idx])
  );
}

function isValidHex(hex) {
  const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gim;
  return pattern.test(hex);
}

export { tints, tones, shades, mixed, isValidHex };
