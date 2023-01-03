import Rarity from "./rarity";

enum AppColor {
  background = "#201a19",
  onBackground = "#ede0dd",

  primary = "#ffb4a8",
  onPrimary = "#690000",

  primarySurface = "#930201",
  onPrimarySurface = "#ffdad4",

  secondary = "#fabd00",
  onSecondary = "#3f2e00",

  secondarySurface = "#5b4300",
  onSecondarySurface = "#ffdf9d",

  surface = "#201a19",
  onSurface = "#ede0dd",

  surfaceVariant = "#534341",
  outline = "#a08c89",
}

export enum RarityColor {
  common = "#56351e",
  uncommon = "#f3ca40",
  rare = "#297045",
  veryRare = "#772d8b",
  ultraRare = "#be0e2e",
}

export function getRarityColor(rarity: Rarity) {
  switch (rarity) {
    case Rarity.common:
      return RarityColor.common;
    case Rarity.uncommon:
      return RarityColor.uncommon;
    case Rarity.rare:
      return RarityColor.rare;
    case Rarity.veryRare:
      return RarityColor.veryRare;
    case Rarity.ultraRare:
      return RarityColor.ultraRare;
  }
}

export default AppColor;
