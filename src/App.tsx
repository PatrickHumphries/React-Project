import React, { useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import EventInfo from "./components/EventInfo";
import EventsList from "./components/EventList";
import Header from "./components/Header";

function App() {
  const [matchingEvents, setMatchingEvents] = useState<Event[]>([]);
  return (
    <div className="App">
      <Header onSubmit={() => setMatchingEvents(matchingEvents)}/>
      <EventsList />
    </div>
  );
}

export default App;
