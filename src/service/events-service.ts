import {Event, EventResponse, Images, Venue} from "../model/Event";

export const apiKey = process.env.REACT_APP_EVENTS_API_KEY || ''

export function fetchAllEvents(keyword: string): Promise<Event[]> {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events?keyword=${keyword}&apikey=${apiKey}`)
    .then(res => res.json())
    // The type of data must be the interface for the outermost JSON
    .then((data: EventResponse) => {
      return data._embedded?.events;
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

  
  export function fetchEventDetails(id: number): Promise<Venue> {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${apiKey}`)
    .then(res => res.json())
    // The type of data must be the interface for the outermost JSON
    .then((data: Venue) => {
      return data;
    });
  }  

  export function fetchByLocation(place: string): Promise<Event[]> {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events?stateCode=${place}&apikey=${apiKey}`)
      .then(res => res.json())
      // The type of data must be the interface for the outermost JSON
      .then((data: EventResponse) => {
        return data._embedded?.events;
      });
    }

    export function fetchByClassification(classification: string): Promise<Event[]> {
      console.log(classification);
      return fetch(`https://app.ticketmaster.com/discovery/v2/events?classificationName=${classification}&apikey=${apiKey}`)
        .then(res => res.json())
        // The type of data must be the interface for the outermost JSON
        .then((data: EventResponse) => {
          return data._embedded?.events;
        });
      }
