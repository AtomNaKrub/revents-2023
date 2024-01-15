import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[]
  selectedEvent: (event: AppEvent) => void
  deleteEvent: (event: string) => void
}

export default function EventList({events, selectedEvent, deleteEvent}: Props) {
  return (
    <>
      {events.map(event => (
        <EventListItem 
        key={event.id} 
        event={event} 
        selectEvent={selectedEvent} 
        deleteEvent={deleteEvent}
        />
      ))}
    </>
  )
}