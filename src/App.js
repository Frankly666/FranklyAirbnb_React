import { Provider } from "react-redux"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { useRoutes } from "react-router-dom"

import store from "./store"
import routes from "./router"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        {useRoutes(routes)}
        <AppFooter/>
      </div>
    </Provider>
  );
}

export default App;
