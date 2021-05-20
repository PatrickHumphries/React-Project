import {Event, EventResponse, Images} from "../model/Event";

export const apiKey = process.env.REACT_APP_EVENTS_API_KEY || ''

export function fetchAllEvents(): Promise<Event[]> {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events/?apikey=${apiKey}`)
    .then(res => res.json())
    // The type of data must be the interface for the outermost JSON
    .then((data: EventResponse) => {
      return data._embedded.events;
    });
  }

  export function fetchOneImage(id:number): Promise<Images> {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}/images/?apikey=${apiKey}`)
    .then(res => res.json())
    // The type of data must be the interface for the outermost JSON
    .then((data: Images) => {
      return data;
    });
  }

