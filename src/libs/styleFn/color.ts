export const hsl = (
  ...[hue, saturation, lightness]: [number, number, number]
) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;
