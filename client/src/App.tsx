import {LoginForm} from "./components/LoginForm";
import { MenuPlan } from "components/MenuPlan";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "Navigation";

function App() {
  return (
      <BrowerRouter>
        <Routes>
          <Route path="/" exact component={LoginForm}></Route>
          <Route path="/menuplan" exact component={MenuPlan}></Route>
        </Routes>
      </BrowerRouter>ß
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