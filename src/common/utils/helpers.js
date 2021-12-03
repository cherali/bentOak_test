export const _deleteKey = (obj, ...dkeys) => Object.keys(obj).reduce((object, key) => {
  if (!dkeys.includes(key)) {
    object[key] = obj[key]
  }
  return object
}, {})