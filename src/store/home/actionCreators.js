import * as actionTypes from "./constants";
import { getHomeDiscount, getHomeHotRecommend, getHomeLongFor, getHomeHighScore, getHomeGoodPrice, getHomePlus } from "@/services/home"

const changeDiscountAction = (res) => ({
  type: actionTypes.CHANGE_DISCOUNT,
  discountInfo: res
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommendInfo: res
})

const changeLongForAction = (res) => ({
  type: actionTypes.CHANGE_LONGFOR,
  longforInfo: res
})

const changeHighScoreAction = (res) => ({
  type: actionTypes.CHANGE_HIGHSCORE,
  highScoreInfo: res
})

const changeGoodPriceAction = (res) => ({
  type: actionTypes.CHANGE_GOODPRICE,
  goodPriceInfo: res
})

const changePlusAction = (res) => ({
  type: actionTypes.CHANGE_PLUS,
  plusInfo: res
})



// 异步action
export const fetchHomeDiscountAction = () => {
  return dispath => {
    getHomeDiscount().then(res => {
      dispath(changeDiscountAction(res))
    })
  }
}

export const fetchHomeHotRecommendAction = () => {
  return dispath => {
    getHomeHotRecommend().then(res => {
      dispath(changeHotRecommendAction(res))
    })
  }
}

export const fetchHomeLongForAction = () => {
  return dispatch => {
    getHomeLongFor().then(res => {
      dispatch(changeLongForAction(res))
    })
  }
}

export const fetchHomeHighScoreAction = () => {
  return dispatch => {
    getHomeHighScore().then(res => {
      dispatch(changeHighScoreAction(res))
    })
  }
}

export const fetchHomeGoodPriceAction = () => {
  return dispatch => {
    getHomeGoodPrice().then(res => {
      dispatch(changeGoodPriceAction(res))
    })
  }
}

export const fetchHomePlusAction = () => {
  return dispatch => {
    getHomePlus().then(res => {
      dispatch(changePlusAction(res))
    })
  }
}
