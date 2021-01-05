import "./App.css";
import Users from "./components/Users";

import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Users />
        </header>
      </Provider>
    </div>
  );
}

export default App;
