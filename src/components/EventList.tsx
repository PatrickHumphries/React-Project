import {useEffect, useState} from 'react';
import {Event} from '../model/Event';
import {fetchAllEvents} from '../service/events-service';

function EventsList(){
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetchAllEvents().then(data => {
            setEvents(data);
        });
    }, []);

    return(
        <div className="EventsList">
            <h2>All Events</h2>
            <ol>
                {events.map((event, i) => 
                      <li key={i}>{event.name}</li>
                    )}
            </ol>
        </div>
    )
}
export default EventsList;