import type { VariantOptionFilter } from "@shopify/hydrogen-react/storefront-api-types";

export interface VariantObject {
  name: string;
  value: string | undefined;
}

export interface ParamsObject {
  [key: string]: string;
}

export const convertVariantToUrlParams = (variants: VariantOptionFilter[]) => {
  let params: string = "?";
  variants.forEach(({ name, value }) => {
    params += `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  });
  return params;
};
