import React from "react";
import { useObserver } from "mobx-react";

import StoreProvider, { StoreContext } from "./store";

const BugsList = () => {
  const store = React.useContext(StoreContext);

  //* 决定是否监视值变化
  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        store.addBug(bug);
        setBug("");
      }}
    >
      <input
        type="text"
        value={bug}
        onChange={e => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const BugsHeader = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>)
}

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

export default App;
