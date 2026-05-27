import { useState } from "react";
import "./App.css";
import UserProfile from "./components/user/UserProfile";

function App() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center max-w-5xl mx-auto px-10 py-5 text-sm">
        <UserProfile/>
      </div>
    </>
  );
}

export default App;
