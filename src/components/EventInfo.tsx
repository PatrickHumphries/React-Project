import { Event } from "../model/Event";
import "./EventInfo.css";

interface Props {
  event: Event;
}

function EventInfo({ event }: Props) {
  const country = event._embedded.venues[0].country.name;
  const city = event._embedded.venues[0].city.name;
  return (
    <div className="EventInfo">
      <h1>{event.name}</h1>
      <section>
        <img src={event.images[0].url} />
      </section>
      <span>
        {city}, {country}
      </span>
    </div>
  );
}

export default EventInfo;
