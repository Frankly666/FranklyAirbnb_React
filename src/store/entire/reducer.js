import * as actionTypes from "./constants"

const defaultState = {
  houseList: [],
  totalCount: 0,
  currentPage: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOUSE_LIST:
      return { ...state, houseList: action.houseList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    default:
      return state
  }
}

export default reducer
