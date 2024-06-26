import {slugFragment} from './general'
export const linkExternalFragment = `
  newWindow,
  url
`

export const linkInternalFragment = `
  reference -> {
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
`

export const defaultButtonQuery = `
  _type,
  buttonStyle,
  label,
  link[] {
    _key,
    _type,
    _type == "linkInternal" => {
      ${linkInternalFragment}
    },
    _type == "linkExternal" => {
      ${linkExternalFragment}
    },
  }
`
