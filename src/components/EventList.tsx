import "./EventList.css";
import React, { FormEvent, useEffect, useState } from "react";
import { Event } from "../model/Event";
import { fetchAllEvents, fetchByClassification, fetchByLocation } from "../service/events-service";
import EventInfo from "./EventInfo";
import { Link } from "react-router-dom";

function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [keyword, setKeyword] = useState("");
  const [place, setPlace] = useState("");
  const [classification, setClassification] = useState("");
  const [option, setOption] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setKeyword("");
    setPlace("");
    setClassification("");
  }

  useEffect(() => {
    fetchAllEvents(keyword).then((data) => {
      setEvents(data);
    });
  }, [keyword]);

  useEffect(() => {
    fetchByLocation(place).then((data) => {
      setEvents(data);
    });
  }, [place]);

  useEffect(() => {
    fetchByClassification(classification).then((data) => {
      setEvents(data);
    });
  }, [classification]);

  console.log(option);

  return (
    <div className="EventsList">
      <form>
        {option === "keyword" ? 
          <input
            type="text"
            placeholder="Search by keyword..."
            onChange={(e) => setKeyword(e.target.value)}
          />
         :
         ( option === "state-initials" ? 
          <input
            type="text"
            placeholder="Search by state..."
            onChange={(e) => setPlace(e.target.value)}
          />
         : 
          <input
            type="text"
            placeholder="Search by event type/genre..."
            onChange={(e) => setClassification(e.target.value)}
          />
        )}
        <select onChange={(e) => setOption(e.target.value)}>
          <option value="keyword">Keyword</option>
          <option value="state-initials">
            State Initials
          </option>
          <option value="classification">Event Type</option>
        </select>
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
      <Link to="/favorites" id="bucketLink">Go to BucketList</Link>
      <div className="selectedEvent">
        {selectedEvent !== null && <EventInfo event={selectedEvent} />}
      </div>
    </div>
  );
}
export default EventsList;
