import "./EventList.css";
import React, { useEffect, useState } from "react";
import { Event, Images } from "../model/Event";
import { fetchAllEvents, fetchOneImage } from "../service/events-service";
import EventInfo from "./EventInfo";



function EventsList()  {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event|null>(null);
  // const [selectedId, setSelectedId] = useState("1");

  useEffect(() => {
    fetchAllEvents("Detroit").then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <div className="EventsList">
      <h2>All Events</h2>
      <ol>
        {events.map((event, i) => (
          <li onClick={() => setSelectedEvent(events[i])}key={i}>
            <img src={event.images[0].url} />
            {event.name}
          </li>
        ))}
      </ol>
      {selectedEvent !== null && <EventInfo event={selectedEvent} />}
    </div>
  );
}
export default EventsList;
