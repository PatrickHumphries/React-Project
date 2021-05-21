import { Event } from "../model/Event";

interface Props {
    event: Event;
}

function EventInfo({event}: Props) {
 const country = event._embedded.venues[0].country.name;
 const city = event._embedded.venues[0].city.name;
 console.log(country);
 console.log(city);
  return (
    <div className="EventInfo">
        <h1>{event.name}</h1>
      <section>
        <li>
          <img src={event.images[0].url} />
        </li>
      </section>
      <ul>
        <li>{city}, {country}</li>
      </ul>
    </div>
  );
}

export default EventInfo;
