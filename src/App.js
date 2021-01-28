import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Index/Contact/Contact";
import "./components/Index/index.css";
import Welcome from "./components/Index/Welcome/Welcome";

const checkForMobile = () => window.innerWidth < 450;

const App = () => {
  const [isMobile, setIsMobile] = useState(checkForMobile());
  const autoSetMobile = () => setIsMobile(checkForMobile());

  useEffect(() => {
    window.addEventListener("resize", autoSetMobile);
    return () => window.removeEventListener("resize", autoSetMobile);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={(props) => <Welcome mobile={isMobile} {...props} />}
          />
        </Switch>
      </BrowserRouter>
      <Contact mobile={isMobile} />
    </div>
  );
};

export default App