import { Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { GamesContext } from "../../context/GamesContext";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarComponent() {
    
    let { updateDate } = useContext(GamesContext)
    
    let inpDate = useRef(null);

    return (
        <Container>
            <input ref={inpDate} type="date"></input>
            
            <Button onClick={() => updateDate(inpDate.current.value)}>add new date</Button>
        </Container>

    )
}