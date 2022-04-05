import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./components/pages/Notes";
import SettingsPage from "./components/pages/Settings/index";


function App() {

 return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoApp/>}></Route>
          <Route path="/settings" element={<SettingsPage/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
