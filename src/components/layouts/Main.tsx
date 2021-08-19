import React from "react";
import { Route } from "wouter";
import { About } from "../pages/About";
import { Articles } from "../pages/Articles";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Footer } from "../presentational/Footer";
import { Landing } from "../presentational/Landing";
import { Navbar } from "../presentational/Navbar";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Route path="/">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/articles">
        <Articles />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
};
