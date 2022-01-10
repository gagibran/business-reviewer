import { LeafletEvent } from "leaflet";

interface LeafletRaw {
    name: string
}

interface LeafletLocation {
    raw: LeafletRaw,
    x: number,
    y: number
}

interface LeafletClickEvent {
    push: Function
}

interface LeafletEventsEvent {
    click: LeafletClickEvent
}

interface LeafletMarkerEvent {
    _events: LeafletEventsEvent
}

export default interface LeafletLocationEvent extends LeafletEvent {
    location: LeafletLocation,
    marker: LeafletMarkerEvent
}
