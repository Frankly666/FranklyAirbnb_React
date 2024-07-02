import { configureStore } from "@reduxjs/toolkit"
import { reducer as homeReducer } from "./home";
import { reducer as entireReducer } from "./entire"
import detailReducer from "./features/detail"
import mainReducer from "./features/main"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store
