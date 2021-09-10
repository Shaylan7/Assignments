import React, { useState } from 'react';
import Search from './Search.jsx';
import DatePicker from './DatePicker.jsx'

export default function Events() {


    const tame = { eventName: "Tame Impala", date: '09-10-2021', category: 'music', maxAttendees: 500, price: 80, id: "1", description: "words" };
    const bumbershoot = { eventName: "Bumbershoot", date: '09-17-2021', category: 'music', maxAttendees: 800, price: 100, id: "2", description: "words" };
    const fair = { eventName: "Washington State Fair", date: '09-20-2021', category: 'family', maxAttendees: 400, price: 40, id: "3", description: "words" };

    const [events, setEvents] = useState([tame, bumbershoot, fair]);
    const [eventName, setEventName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('')
    const [deleteId, setdeleteId] = useState('');
    const [description, setDescription] = useState('');
    const [maxAttendees, setMaxAttendees] = useState('')



    //clears form 
    const clearForm = () => {
        setEventName('');
        setId('');
        setPrice('');
        setDate('');
        setCategory('')
        setDescription('')
        setMaxAttendees('')
    }

    // adds an event 
    const onSubmit = e => {
        e.preventDefault();
        const newEvent = {
            id: id, eventName: eventName, price: price,
            date: date, category: category, description: description, maxAttendees: maxAttendees
        };
        setEvents([...events, newEvent]);
        clearForm()
    };


    // deletes an event     
    const deleteEvent = (deleteId) => {
        const newEvents = events.filter(i => i.id !== deleteId)
        setEvents(newEvents)
    };

    const handleDeleteButtonClick = e => {
        e.preventDefault();
        deleteEvent(deleteId)

    }

    const showEvents = (searchedEvents) =>{
        return searchedEvents
    }

    return (
        <div>
            <section className="event-management">
                <h2>Event Management</h2>
                <div>
                    <h3>All Events</h3>
                    <ul id="events-list">
                        {/* Display all Events here */}
                        {events.map((element, i) => {
                            return (<li key={element.id}>Name: {element.eventName}
                                Price: ${element.price} Date: {element.date}
                                Description: {element.description} maxAttendees: {element.maxAttendees}</li>)
                        })}
                    </ul>

                    <h3>Add Event</h3>
                    <form id="add-event" action="#" onSubmit={onSubmit}>
                        <fieldset>
                            <label>Name</label>
                            <input
                                type="text"
                                id="add-event-name"
                                placeholder="Virtual corgi meetup"
                                value={eventName} onChange={(e) => setEventName(e.target.value)} />

                            <label>Price</label>
                            <input type="text"
                                id="add-event-price"
                                placeholder="$0"
                                value={price} onChange={(e) => setPrice(e.target.value)} />

                            <label>Date</label>
                            <input type="text"
                                id="add-event-date"
                                placeholder="01-01-1999"
                                value={date} onChange={(e) => setDate(e.target.value)} />
                            <DatePicker handleDate={(newDate) => setDate(newDate)} />

                            {/* when "date" button is selected. Calendar will pop out and the date selected will become the stored date */}
                            <label>ID</label>
                            <input type="text"
                                id="add-event-date"
                                value={id} onChange={(e) => setId(e.target.value)} />

                            <label>Category</label>
                            <input type="text"
                                id="add-category-date"
                                value={category} onChange={(e) => setCategory(e.target.value)} />

                            <label>Description</label>
                            <input type="text"
                                id="add-event-description"
                                value={description} onChange={(e) => setDescription(e.target.value)} />

                            <label>Max Attendees</label>
                            <input type="text"
                                id="add-event-attendees"
                                value={maxAttendees} onChange={(e) => setMaxAttendees(e.target.value)} />


                        </fieldset>
                        {/* Add more form fields here */}
                        <input type="submit" />
                    </form>
                </div>
            </section>

            <div>
                <h3>Delete Event</h3>
                <form id="delete-event" action="#" onSubmit={handleDeleteButtonClick}>
                    <fieldset>
                        <label>Event ID</label>
                        <input type="number" min="1" id="delete-event-id" value={deleteId} onChange={(e) => setdeleteId(e.target.value)} />
                    </fieldset>
                    <input type="submit" />
                </form>
            </div>
            <Search showSearchedEvents={showEvents}/>

        </div>
    )
}