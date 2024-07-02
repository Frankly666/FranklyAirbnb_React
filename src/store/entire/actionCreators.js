import { getEntireList } from "@/services/entire"
import * as actionTypes from "./constants"

export const changeHouseListAction = (res) => ({
  type: actionTypes.CHANGE_HOUSE_LIST,
  houseList: res
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})


export const fetchEntireListAction = (page = 0) => {
  return async (dispatch, getState) => {
    const offset = page * 20
    const res = await getEntireList(offset)
    dispatch(changeHouseListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeCurrentPageAction(page))
  }
}
