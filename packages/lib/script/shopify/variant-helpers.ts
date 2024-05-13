export interface VariantObject {
  name: string;
  value: string | undefined;
}

export interface ParamsObject {
  [key: string]: string;
}

export const convertVariantToUrlParams = (variants: VariantObject[]) => {
  let params: string = "?";

  variants.forEach(({ name, value }) => {
    params += `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  });

  return params;
};

export const convertUrlParamsToVariants = (params: ParamsObject[]) => {
  const variants: VariantObject[] = [];
  console.log(params);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      variants.push({ name: key, value: params[key] });
    }
  }

  return variants;
};

function convertObject(originalObject: {
  [key: string]: string;
}): { name: string; value: string }[] {
  const convertedArray: { name: string; value: string }[] = [];

  for (const key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      convertedArray.push({ name: key, value: originalObject[key] });
    }
  }

  return convertedArray;
}

// &Second=Default%20Title
