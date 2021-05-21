import React, { useState } from "react";
import "./App.css";
import EventInfo from "./components/EventInfo";
import EventsList from "./components/EventList";
import EventParent from "./components/EventParent";
import Header from "./components/Header";

function App() {
  return(
  <div className='App'>
      <EventParent/>
  </div>
  )
}
export default App;
