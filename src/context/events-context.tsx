import {createContext, ReactNode, useState} from 'react';
import {Event} from '../model/Event';

interface EventContextValue{
    events: Event[];
    addEvent: (event:Event) => void;
    removeEvent: (index:number) => void;
}

const defaultValue: EventContextValue = {
    events: [],
    addEvent: () => {},
    removeEvent: () => {}
  }
  export const EventContext = createContext(defaultValue);

  export function EventContextProvider({ children }: { children: ReactNode }) {
    const [ events, setEvents ] = useState<Event[]>([]);

    function addEvent(event: Event):void{
        setEvents(prev => [...prev, event]);
    }

    function removeEvent(index:number):void{
        setEvents(prevEvents => [
            ...prevEvents.slice(0, index),
            ...prevEvents.slice(index + 1)
        ]);
    }

    return(
        <EventContext.Provider value={{events, addEvent, removeEvent}}>
            {children}
        </EventContext.Provider>
    )
  }