import type { ResponsiveValue } from "@chakra-ui/react";

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ResponsiveColumnCount = ResponsiveValue<Cols>;

export interface ResponsiveWidthNumbers {
  base?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  "2xl"?: Cols;
}
export interface ResponsiveWidthValues {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
}
