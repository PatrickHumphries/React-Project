import { Event } from "../model/Event";
import "./EventInfo.css";

interface Props {
  event: Event;
}

function EventInfo({ event }: Props) {
  const country = event._embedded.venues[0].country.name;
  const state = event._embedded.venues[0].state.stateCode;
  const city = event._embedded.venues[0].city.name;
  const linkUrl = event.url;
  const minPrice = event.priceRanges[0].min;
  const maxPrice = event.priceRanges[0].max;
  const currency = event.priceRanges[0].currency;
  const upcomingEvents = event._embedded.venues[0].upcomingEvents._total;
  return (
    <div className="EventInfo">
      <h1>{event.name}</h1>
      <section>
        <img src={event.images[0].url} />
      </section>
      <p>
        {city}, {state}, {country}.
      </p>
      <p>
      <a href={linkUrl}><h1>Ticketmaster Website</h1></a>
      </p>
      <p>
        Price Range:{minPrice}-{maxPrice} {currency}
      </p>
      <p>
        Upcoming Events:{upcomingEvents}
      </p>
    </div>
  );
}

export default EventInfo;
