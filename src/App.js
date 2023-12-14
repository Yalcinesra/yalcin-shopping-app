import { Provider } from "react-redux"
import AppRouter from "./router/AppRouter"
import {store} from "./app/store"

const App = () => {
  return (
    <div> <Provider store={store}>
    <AppRouter />
  </Provider></div>
  )
}

export default App