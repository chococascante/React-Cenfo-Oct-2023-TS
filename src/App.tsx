import React from "react";
import { HomePage } from "./components/pages/HomePage";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Counter } from "./components/organisms/Counter";
import { Users } from "./components/pages/Users";
import { CounterContextProvider } from "./contexts/CounterContext";
import { UsersContextProvider } from "./contexts/UsersContext";

function App() {
  return (
    <Provider store={store}>
      <UsersContextProvider>
        <CounterContextProvider>
          <main className="App">
            {/* <HomePage /> */}
            <Counter />
            <Users />
          </main>
        </CounterContextProvider>
      </UsersContextProvider>
    </Provider>
  );
}

export default App;
