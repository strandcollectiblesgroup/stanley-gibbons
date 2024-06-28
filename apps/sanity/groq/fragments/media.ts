export const defaultImageFragment = `
  image {
    _key,
    _type,
    alt,
    asset -> {
      _ref,
      _type,
      url,
      assetId,
      size,
      metadata {
        dimensions {
          height,
          width
        }
      }
    }
  }
`

export const defaultVideoFragment = `
  ${defaultImageFragment},
  video
`

export const featuredMediaFragment = `
  featuredMedia[] {
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
