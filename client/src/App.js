import React from 'react';
import Router from "./Components/Router";
import UserProvider from "../src/Utils/userProvider"



function App() {

  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>

    </div>
  );
}

export default App;
