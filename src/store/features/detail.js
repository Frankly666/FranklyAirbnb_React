import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfos: {}
  },
  reducers: {
    changeDetailInfosAction(state, { payload }) {
      state.detailInfos = payload
    }
  }
})

export const { changeDetailInfosAction } = detailSlice.actions
export default detailSlice.reducer
