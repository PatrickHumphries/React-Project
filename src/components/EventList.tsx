import {useEffect, useState} from 'react';
import {Event, Images} from '../model/Event';
import {fetchAllEvents, fetchOneImage} from '../service/events-service';

function EventsList(){
    const [events, setEvents] = useState<Event[]>([]);
    const [image, setImage] = useState<Images | null>(null);
    // const [selectedId, setSelectedId] = useState("1");

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
                      <li key={i}><img src={event.images[0].url}/>{event.name}</li>
                    )}
            </ol>
        </div>
    )
}
export default EventsList;