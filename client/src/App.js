import React from "react";
import Authorization from "./components/Authorization";
import './override.css'
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <>
    <UserProvider>
      <Authorization></Authorization>
    </UserProvider>
    </>
  );
}

export default App;