import hyRequest from "./index"

export function getHomeDiscount() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommend() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongFor() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}

export function getHomeHighScore() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeGoodPrice() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomePlus() {
  return hyRequest.get({
    url: "/home/plus"
  })
}
