import React, { createContext } from "react";
import { useJwt } from "react-jwt";

export const TokenContext = createContext();

export function TokenContextProvider({ children }) {
  const { decodedToken } = useJwt(localStorage.token);

  return (
    <TokenContext.Provider value={[decodedToken]}>
      {children}
    </TokenContext.Provider>
  );
}
