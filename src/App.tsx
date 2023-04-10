import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import SaveStudent from "./pages/SaveStudent";
import GetStudent from "./pages/GetStudent";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";

function App() {
  // Browse router is used to connect to the browser.
  // Routes is the parent component for all Route components.
  // Route is used to navigate to every page and has 2 props path and element.
  // In the index route, Index is exactly matched to the parent component url.
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login/>}/>
          <Route path={"dashboard"} element={<SharedLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path={"save"} element={<SaveStudent/>}/>
            <Route path={"get"} element={<GetStudent/>}/>
            <Route path={"update"} element={<UpdateStudent/>}/>
            <Route path={"delete"} element={<DeleteStudent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
