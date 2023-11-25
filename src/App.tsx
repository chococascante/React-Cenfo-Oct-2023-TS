import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { CounterContextProvider } from "./contexts/CounterContext";
import { UsersContextProvider } from "./contexts/UsersContext";
import { MainRouter } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <UsersContextProvider>
        <CounterContextProvider>
          <main className="App">
            <MainRouter />
          </main>
        </CounterContextProvider>
      </UsersContextProvider>
    </Provider>
  );
}

export default App;
