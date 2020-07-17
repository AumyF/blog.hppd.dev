export const hsl = (
  ...[hue, saturation, lightness]: [number, number, number]
) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;

export const hsla = (
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number
) => `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
