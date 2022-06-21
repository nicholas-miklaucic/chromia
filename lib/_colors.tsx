import { hsluvToHex, hsluvToRgb, rgbToHsluv } from "hsluv";

export function rgbToRgbf(rgb256: [number, number, number]) {
  const [r, g, b] = rgb256;
  return [r / 255.0, g / 255.0, b / 255.0] as [number, number, number];
}

export function rgbfToRgb(rgbf: [number, number, number]) {
  const [r, g, b] = rgbf;
  return [r * 255.0, g * 255.0, b * 255.0] as [number, number, number];
}

export function rgb256ToHsluv(rgb256: [number, number, number]) {
  return rgbToHsluv(rgbToRgbf(rgb256)) as [number, number, number];
}

export function hsluvToRgb256(hsluv: [number, number, number]) {
  return rgbfToRgb(hsluvToRgb(hsluv)) as [number, number, number];
}

export function isDark(rgb256: [number, number, number]) {
  const [_h, _s, l] = rgb256ToHsluv(rgb256);
  return l <= 50;
}

export function rgbToHex(rgb256: [number, number, number]) {
  return hsluvToHex(rgb256ToHsluv(rgb256));
}
