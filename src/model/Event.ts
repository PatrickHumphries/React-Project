export interface EventResponse {
    _embedded: Embedded;
}

export interface Embedded {
    events: Event[];
}

export interface Event {
    name: string;
}