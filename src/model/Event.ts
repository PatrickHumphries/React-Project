export interface EventResponse {
    _embedded: Embedded;
}

export interface Embedded {
    events: Event[];
}

export interface Event {
    name: string;
    images: Images[];
}

export interface Images {
    ratio: string;
    url: string;
    width: number;
    height: number;
    
}

