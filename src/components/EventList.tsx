import "./EventList.css";
import React, { FormEvent, useEffect, useState } from "react";
import { Event, Images } from "../model/Event";
import { fetchAllEvents, fetchOneImage } from "../service/events-service";
import EventInfo from "./EventInfo";
import Header from "./Header";

interface Props{
    onSubmit(keyword:string): void;
}

function EventsList({onSubmit}:Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  function handleSubmit(e:FormEvent){
    e.preventDefault();
    setKeyword("");
}

  useEffect(() => {
    fetchAllEvents(keyword).then((data) => {
      setEvents(data);
    });
  }, []);
  

  return (
    <div className="EventsList">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by keyword..."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <button type="submit">
          Search
        </button>
      </form>
      <h2>All Events</h2>
      <ol>
        {events.map((event, i) => (
          <li onClick={() => setSelectedEvent(events[i])} key={i}>
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
