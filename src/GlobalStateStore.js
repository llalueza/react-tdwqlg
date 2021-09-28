import React, { createContext, useReducer } from 'react';
import GlobalStateReducer from './GlobalStateReducer';

const initialState = {
  searchQuery: '',
  searchTags: [],

  posts: [],
  error: null,
};

const GlobalStateStore = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalStateReducer, initialState);
  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const GlobalStateContext = createContext(initialState);
export default GlobalStateStore;
