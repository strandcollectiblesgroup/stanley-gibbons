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
`

export const defaultVideoFragment = `
  ${defaultImageFragment},
  video
`

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
`
