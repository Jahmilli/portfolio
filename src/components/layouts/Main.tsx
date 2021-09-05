import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Footer } from "../presentational/Footer";
import { Landing } from "../presentational/Landing";
import { Navbar } from "../presentational/Navbar";

export const Main = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
            <Footer />
          </Route>
          <Route exact path="/projects">
            <Projects />
            <Footer />
          </Route>
          {/* <Route exact path="/articles">
            <Articles />
            <Footer />
          </Route> */}
          {/* <Route exact path="/contact">
            <Contact />
            <Footer />
          </Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
};
