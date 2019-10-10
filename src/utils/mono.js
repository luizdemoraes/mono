import { mix, tint, shade, desaturate } from "polished";

export default {
  tints(color, amount) {
    return [...Array(amount)].map((_, idx) => tint(0.1 * idx, color));
  },
  shades(color, amount) {
    return [...Array(amount)].map((_, idx) => shade(0.1 * idx, color));
  },
  tones(color, amount) {
    return [...Array(amount)].map((_, idx) => desaturate(0.1 * idx, color));
  },
  mixed(color, amount) {
    const tints = this.tints(color, amount);
    const shades = this.shades(color, amount);

    return [...Array(amount)].map((_, idx) =>
      mix(0.1, tints[idx], shades[idx])
    );
  },
  isValidHex(hex) {
    const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gim;
    return pattern.test(hex);
  }
};
