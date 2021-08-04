class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }

    addAvailableTickets(name,price){
        return this.availableTickets.push(name + price) 
    }
    // allTickets(){
    //     return this.availableTickets
    // }
} 

class TicketType{
   constructor(name, price){
    this.name = name; 
    this.price = price; 
   }
}

const eventObj1 = new Event('KLOS Golden Gala','An evening with hollywood vampires');
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray); 

for (let anEvent of eventArray){
    let li = document.createElement('li');
    text = document.createTextNode(`${anEvent['name']} - ${anEvent['description']}`);
    li.appendChild(text);
    document.getElementById('event').appendChild(li);
    console.log(anEvent) 
}