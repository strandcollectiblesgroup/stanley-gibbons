
export const slugFragment = `
  slug {
    current
  }
`;

export const defaultImageFragment = `
  image {
    _key,
    _type,
    alt,
    asset -> {
      _ref,
      _type,
      url
    }
  }
`;

export const defaultVideoFragment = `
  ${defaultImageFragment},
  video
`;

export const featuredMediaFragment = `
  featuredMedia[0] {
    _key,
    _type,
    _type == "defaultImage" => {
      ${defaultImageFragment}
    },
    _type == "defaultVideo" => {
      ${defaultVideoFragment}
    }
  }
`;

export const linkExternalFragment = `
  newWindow,
  url
`;

export const linkInternalFragment = `
  ...reference-> {
    _id,
    _type,
    _type == "product" => {
      store {
        ${slugFragment}
      }
    },
    _type != "product" => {
      ${slugFragment}
    },
  }
`;

export const defaultButtonQuery = `
  _type,
  buttonStyle,
  label,
  link[0] {
    _key,
    _type,
    _type == "linkInternal" => {
      ${linkInternalFragment}
    },
    _type == "linkExternal" => {
      ${linkExternalFragment}
    },
  }
`;

export const portableTextFragment = `
  body[]{
    _key,
    _type,
    children[]{
      _key,
      _type,
      marks,
      text
    },
    markDefs,
    style
  }
`;

export const mediaAndTextModuleQuery = `
  title,
  ${portableTextFragment},
  cta {
    ${defaultButtonQuery}
  },
  media {
    ${featuredMediaFragment}
  }
`;
