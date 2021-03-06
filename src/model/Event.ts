
export interface EventResponse {
    _embedded: Embedded;
}

export interface Embedded {
    events: Event[];
}

export interface Event {
    name: string;
    url: string;
    images: Images[];
    priceRanges: PriceRanges[];
    _embedded: Embedded2;
    classification: Classification[];
}

export interface Images {
    ratio: string;
    url: string;
    width: number;
    height: number;
}

export interface Embedded2 {
    venues: Venue[];
}

export interface Venue {
    country: Country; 
    city: City;
    state: State;
    upcomingEvents: UpcomingEvents;
}

export interface Country {
    name: string;
}

export interface City {
    name: string
}

export interface State {
    stateCode: string
}

export interface PriceRanges {
    currency: string;
    min: number;
    max: number;
}

export interface UpcomingEvents{
    _total: number;
}

export interface Classification{
    genre: Genre;
    subGenre: SubGenre;
    segment: Segment;
}

export interface Genre{
    name: string;
}

export interface SubGenre{
    name: string;
}
export interface Segment{
    name: string;
}