import React from "react";
import { Home } from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authenication } from "./routes/authenication/authenication.component";

const Shop = () => {
  return <h1>Hello I am Shopt</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authenication />} />
      </Route>
    </Routes>
  );
};

export default App;
