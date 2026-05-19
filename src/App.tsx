import { StrictMode, useState } from "react";
import Layout from "./components/Layout";
import { NarxContext, UserContext } from "./context/userContect";

function App() {
  const [username] = useState("Iskooo");
  const [narx] = useState("$15");
  return (
    <StrictMode>
      <UserContext.Provider value={username}>
        <NarxContext.Provider value={narx}>
          <Layout />
        </NarxContext.Provider> 
      </UserContext.Provider>
    </StrictMode>
  )
}

export default App;