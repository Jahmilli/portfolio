import React from "react";
import { About } from "../pages/About";
import { Articles } from "../pages/Articles";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Footer } from "../presentational/Footer";
import { Landing } from "../presentational/Landing";
import { Navbar } from "../presentational/Navbar";
import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";


export const Main = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Landing />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
};
