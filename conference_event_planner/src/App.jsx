import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import GettingStarted from "./components/GettingStarted";
import ConferenceEvent from "./components/ConferenceEvent";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigation = useSelector((state) => state.navigation.isLandingPage);
  return (
    <>
      <div className={`${navigation ? "main-background" : ""} `}>
        <div className={`${navigation ? "bg-brownColor" : ""} isolate `}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<GettingStarted />} />
                <Route path="/ConferenceEvent" element={<ConferenceEvent />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
