import React, {Component} from 'react';
import EventListItem from './EventListItem';


export default class EventList extends Component {
    render() {
        const {events, onEventOpen, deleteEvents} = this.props;
        return (
            <div>
                <h1>Event List</h1>
                {events.map(event => (
                    <EventListItem key={event.id} event={event} deleteEvent={deleteEvents} onEventOpen={onEventOpen}/>
                ))}
            </div>
        )
    }
}

