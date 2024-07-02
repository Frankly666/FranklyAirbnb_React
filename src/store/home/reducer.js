import * as actionTypes from './constants';

const defaultState = {
  discountInfo: {},
  hotRecommendInfo: {},
  longforInfo: {},
  highScoreInfo: {},
  goodPriceInfo: {},
  plusInfo: {}
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DISCOUNT:
      return { ...state, discountInfo: action.discountInfo }
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommendInfo: action.hotRecommendInfo }
    case actionTypes.CHANGE_LONGFOR:
      return { ...state, longforInfo: action.longforInfo }
    case actionTypes.CHANGE_HIGHSCORE:
      return { ...state, highScoreInfo: action.highScoreInfo }
    case actionTypes.CHANGE_GOODPRICE:
      return { ...state, goodPriceInfo: action.goodPriceInfo }
    case actionTypes.CHANGE_PLUS:
      return { ...state, plusInfo: action.plusInfo }
    default:
      return state;
  }
}

export default reducer
