export const IMMUTABLE_EXAMPLE = 'IMMUTABLE_EXAMPLE'
export function immutableActionCreator(data) {
  return {
    type: IMMUTABLE_EXAMPLE,
    data: data
  }
}
