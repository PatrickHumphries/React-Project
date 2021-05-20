export interface EventResponse {
    _embedded: Embedded;
}

export interface Embedded {
    events: Event[];
}

export interface Event {
    name: string;
    images: Images[];
    priceRanges: PriceRanges[];
    _embedded: Embedded2;
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
}

export interface Country {
    name: string;
}

export interface City {
    name: string
}

export interface PriceRanges {
    currency: string;
    min: number;
    max: number;
}

