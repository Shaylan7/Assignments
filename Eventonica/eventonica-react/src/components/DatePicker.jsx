import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function DatePicker(props) {
    const [date, setDate] = useState(''); 

    const onDateChange = (newDate) => {
        // let date = new Date(newDate);
        // console.log(date)
        // let formattedDate = date.toLocaleDateString() 
        // ^ this is changing the data correctly however can't get month error 
        
        setDate(newDate);
        props.handleDate(newDate); 
        console.log(newDate);
    }

    return (
        <Calendar
            onChange={onDateChange}
            value={date}
            showNeighboringMonth={false}
            locale={"en-US"}
            format={"dd-MM-yyyy"}
        />
    );
}