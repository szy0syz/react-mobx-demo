import React from "react";

import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["七星瓢虫"],
    addBug: bug => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length
    }
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
