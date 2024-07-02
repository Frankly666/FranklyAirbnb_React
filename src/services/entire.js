import hyRequest from "./index"

export function getEntireList(offset = 0, size = 20) {
  return hyRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}
