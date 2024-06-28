import type { ResponsiveValue, ResponsiveObject } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import type * as CSS from "csstype";
import { spacing } from "../../theme/spacing";
import type {
  ResponsiveWidthNumbers,
  ResponsiveWidthValues,
} from "../../script/general/grid-utils";

interface FlexGridProps {
  children: React.ReactNode;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection>;
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
  alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
  rowGap?: ResponsiveValue<CSS.Property.RowGap<string | number>>;
  columnGap?: ResponsiveValue<CSS.Property.ColumnGap<string | number>>;
}

export const FlexGrid: React.FC<FlexGridProps> = ({
  children,
  flexDirection,
  flexWrap = "wrap",
  justifyContent,
  alignItems,
  alignContent,
  rowGap,
  columnGap,
}) => {
  return (
    <Flex
      alignContent={alignContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      mx={spacing.negativeHalfGridGap}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </Flex>
  );
};
interface FlexGridColumnProps {
  children: React.ReactNode;
  colSpan?: ResponsiveWidthNumbers;
  order?: ResponsiveValue<number>;
}

export const FlexGridColumn: React.FC<FlexGridColumnProps> = ({
  children,
  colSpan,
  order,
}) => {
  function setWidths(set: ResponsiveWidthNumbers): ResponsiveWidthValues {
    let calculatedWidths: ResponsiveWidthValues = {};
    Object.entries(set).forEach(([key, value]) => {
      calculatedWidths = {
        ...calculatedWidths,
        [key]: `${((100 / 12) * value).toFixed(2)}%`,
      };
    });
    return calculatedWidths;
  }

  const width = colSpan ? setWidths(colSpan) : "100%";

  return (
    <Box
      flexGrow={0}
      flexShrink={0}
      order={order}
      paddingX={spacing.halfGridGap}
      width={width as ResponsiveObject<string>}
    >
      {children}
    </Box>
  );
};
