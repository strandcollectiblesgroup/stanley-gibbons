import type { ResponsiveValue } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { spacing } from "../../theme/spacing";
import type { ResponsiveColumnCount } from "../../script/general/grid-utils";

interface GridWrapperProps {
  children: React.ReactNode;
  rowGap?: ResponsiveValue<number | string>;
  columnGap?: ResponsiveValue<number | string>;
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
  children,
  rowGap = spacing.gridGap,
  columnGap = spacing.gridGap,
}) => {
  return (
    <Grid
      columnGap={columnGap}
      rowGap={rowGap}
      templateColumns="repeat(12, 1fr)"
      templateRows="auto"
      width="100%"
    >
      {children}
    </Grid>
  );
};

interface GridColumnProps {
  children: React.ReactNode;
  colSpan?: ResponsiveColumnCount;
  colStart?: ResponsiveColumnCount;
  colEnd?: ResponsiveColumnCount;
  style?: React.CSSProperties;
}

export const GridColumn: React.FC<GridColumnProps> = ({
  children,
  colSpan,
  colStart,
  colEnd,
}) => {
  return (
    <GridItem colEnd={colEnd} colSpan={colSpan} colStart={colStart}>
      {children}
    </GridItem>
  );
};
