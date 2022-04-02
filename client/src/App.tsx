import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from "Navigation";
import {LoginForm} from "./components/LoginForm";
import { MenuPlan } from "components/MenuPlan";

function App() : JSX.Element {
  return (
        <Routes>

          <Route path="/"  element={<LoginForm/>}></Route>
          <Route path="/menuplan" element={<MenuPlan/>}></Route>
        </Routes>
  );
}

export default App;


// <button type="button" onClick={() => {
//         fetch('/api/data')
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//         });
//       }}>get data</button>