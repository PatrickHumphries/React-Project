import React, { useState } from "react";
import EventInfo from "./EventInfo";
import EventsList from "./EventList";

function EventParent() {
  return (
    <div className="EventParent">
      <EventsList />
    </div>
  );
}
export default EventParent;
