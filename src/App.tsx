import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import EventInfo from "./components/EventInfo";
import EventsList from "./components/EventList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <EventsList />
    </div>
  );
}

export default App;
