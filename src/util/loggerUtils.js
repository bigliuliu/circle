/**
 * Created by spark on 7/5/17.
 */
export const logger = (tag, message) => {
  if (typeof message === 'object') {
    console.log(tag + ':' + JSON.stringify(message))
  } else {
    console.log(tag + ':' + message)
  }
}
