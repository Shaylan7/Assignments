import React, {useState} from 'react';

export default function Events(){


    const tame = { name: "Tame Impala", date: '09-10-2021', size: 500, price: 80, id:"1" };
    const bumbershoot = { name: "Bumbershoot", date: '09-17-2021', size: 800, price: 100, id: "2" };
    const fair = { name: "Washington State Fair", date: '09-20-2021', size: 400, price: 40, id: "3"};

    const [events, setEvents] = useState([tame, bumbershoot, fair]);




    const onSubmit = e => {
        e.preventDefault();
        const newUser = {id: id, name: name, email: email};
        setUsers([...users, newUser]);
        clearForm()
      };

return (
<div>
<section className="event-management">
          <h2>Event Management</h2>
          <div>
            <h3>All Events</h3>
            <ul id="events-list">
              {/* Display all Events here */}
              {events.map((element, i) => { return (<li key={element.id}>Name: {element.name} 
              Price: ${element.price} Date: {element.date}</li>)})}
            </ul>
  
            <h3>Add Event</h3>
            <form id="add-event" action="#" onSubmit={onSubmit}>
              <fieldset>
                <label>Name</label>
                <input
                  type="text"
                  id="add-event-name"
                  placeholder="Virtual corgi meetup"
                value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Price</label> 
                <input type="text" 
                id="add-event-price" 
                placeholder="$0" 
                value={price} onChange={(e) => setPrice(e.target.value)}/>

                <label>Date</label> 
                <input type="text" 
                id="add-event-date" 
                placeholder="01-01-1999" 
                value={date} onChange={(e) => setDate(e.target.value)}/>
         
              </fieldset>
              {/* Add more form fields here */}
              <input type="submit" />
            </form>
          </div>
        </section>
  
      <div>
        <h3>Delete Event</h3>
        <form id="delete-event" action="#">
          <fieldset>
            <label>Event ID</label>
            <input type="number" min="1" id="delete-event-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
  
      <aside className="search-toolbar">
        <div>
          <h3>Find Events</h3>
          <form id="search" action="#">
            <fieldset>
              <label htmlFor="date-search">Date</label>
              <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
            </fieldset>
            <fieldset>
              <label htmlFor="category-search">Category</label>
              <input type="text" id="category-search" />
            </fieldset>
  
            <input type="submit" value="Search" />
          </form>
        </div>
      </aside>
      </div> 
)
} 