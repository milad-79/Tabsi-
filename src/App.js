import React from "react";
import DownApp from "./components/downloed-app";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <div className="font-vazmir">
      <Header/>
      <DownApp/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
