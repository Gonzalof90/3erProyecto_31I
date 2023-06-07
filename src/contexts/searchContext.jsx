import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext("");

export const SearchProvider = ({ children }) => {
  const [inputValueHeader, setInputValueHeader] = useState("");
  const [keywordGlobal, setKeywordGlobal] = useState("");

  const handleChangeValueHeader = ({ target }) => {
    setInputValueHeader(target.value);
  };

  const handleSearchValue = (redirectHook) => {
    setKeywordGlobal(inputValueHeader);
    if (location.pathname !== "/Admin") {
      redirectHook(`/Products`);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        keywordGlobal,
        handleSearchValue,
        setKeywordGlobal,
        inputValueHeader,
        handleChangeValueHeader,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};