import logo from "./logo.svg";
import { createContext, useState } from "react";
import "./App.css";
import Tasks from "./components/tasks";
import tasksData from "./data/tasks.json";

export const Context = createContext({
  lists: {},
  setLists: () => {},
});

function App() {
  const [lists, setLists] = useState(tasksData);

  return (
    <Context.Provider
      value={{
        lists,
        setLists,
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To-Do List</h1>
        </header>
        <Tasks />
      </div>
    </Context.Provider>
  );
}

export default App;
