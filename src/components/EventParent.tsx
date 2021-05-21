import React, { useState } from "react";
import EventInfo from "./EventInfo";
import EventsList from "./EventList";
import Header from "./Header";
import { Event } from "../model/Event";

function EventParent() {
  return (
    <div className="EventParent">
      <EventsList />
    </div>
  );
}
export default EventParent;
