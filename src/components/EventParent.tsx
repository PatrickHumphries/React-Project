import React, { useState } from "react";
import EventInfo from "./EventInfo";
import EventsList from "./EventList";
import Header from "./Header";
import { Event } from "../model/Event";

function EventParent() {
  const [matchingEvents, setMatchingEvents] = useState<Event[]>([]);
  return (
    <div className="EventParent">
      <EventsList onSubmit={() => setMatchingEvents(matchingEvents)}/>
    </div>
  );
}
export default EventParent;
