import { useContext } from "react";
import "./Favorites.css";
import { EventContext } from "../context/events-context";
import { Link } from "react-router-dom";

function Favorites() {
  const {events, removeEvent} = useContext(EventContext);

  return (
  
    <div className="Favorites">
    <Link to="/" id="link">Home</Link>
      <ol>
        {events.map((event, i) => (
          <li key={i}>
            <img src={event.images[0].url} />
            {event.name}
            <button onClick={() => removeEvent(i)}>Remove from Bucketlist</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Favorites;
