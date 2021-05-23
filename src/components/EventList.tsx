import "./EventList.css";
import React, { FormEvent, useEffect, useState } from "react";
import { Event, Images } from "../model/Event";
import { fetchAllEvents, fetchOneImage } from "../service/events-service";
import EventInfo from "./EventInfo";
import Header from "./Header";

// interface Props {
//   onSubmit(): string;
// }

function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setKeyword("");
  }

  useEffect(() => {
    fetchAllEvents(keyword).then((data) => {
      setEvents(data);
    });
  }, [keyword]);

  return (
    <div className="EventsList">
      <form>
        <input
          type="text"
          placeholder="Search by keyword..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" onClick={() => handleSubmit}>
          Reset
        </button>
      </form>
      <h2>All Events</h2>
      {events !== undefined ? (
        <ol>
          {events.map((event, i) => (
            <li onClick={() => setSelectedEvent(events[i])} key={i}>
              <img src={event.images[0].url} />
              {event.name}
            </li>
          ))}
        </ol>
      ) : (
        <p>No matches..</p>
      )}
      <div className="selectedEvent">
        {selectedEvent !== null && <EventInfo event={selectedEvent} />}
      </div>
    </div>
  );
}
export default EventsList;
