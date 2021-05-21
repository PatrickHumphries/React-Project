import "./EventList.css";
import React, { FormEvent, useEffect, useState } from "react";
import { Event, Images } from "../model/Event";
import { fetchAllEvents, fetchOneImage } from "../service/events-service";
import EventInfo from "./EventInfo";
import Header from "./Header";

function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [keyword, setKeyword] = useState("");
// function filterEvents(events:Event[]){
//     for (let event of events)
//     if (event.name.includes(keyword)){
//         events.push(event);
//     }
// }

//   function handleSubmit(e:FormEvent){
//     e.preventDefault();
//     onSubmit(keyword)
//         for (let event of events)
//         if (event.name.includes(keyword)){
//             events.push(event);
//         }
//     setKeyword("");
// }

  useEffect(() => {
    fetchAllEvents(keyword).then((data) => {
      setEvents(data);
    });
  }, []);
  

  return (
    <div className="EventsList">
      <form >
        <input
          type="text"
          placeholder="Search by keyword..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">
          Search
        </button>
      </form>
      <h2>All Events</h2>
      {keyword === "" ? 
      <ol>
        {events.map((event, i) => (
          <li onClick={() => setSelectedEvent(events[i])} key={i}>
            <img src={event.images[0].url} />
            {event.name} 
          </li>
        ))}
      </ol>
       :<ol>
        {events.map((event, i) => (
            <li key={i}>
              <img src={event.images[0].url} />
              {event.name} 
            </li>
          ))}
        </ol>}
      {selectedEvent !== null && <EventInfo event={selectedEvent} />}
    </div>
  );
}
export default EventsList;
