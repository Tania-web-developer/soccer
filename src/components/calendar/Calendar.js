import { Button, Pagination } from "react-bootstrap";
import { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { GamesContext } from "../../context/GamesContext";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export default function CalendarComponent() {

    let { updateDate, date, prevDay, nextDay } = useContext(GamesContext); 
       
    console.log(date);
    let inpDate = useRef(null);

    return (
        <Container>
            <Pagination>
                <Pagination.Prev onClick={() => prevDay()}></Pagination.Prev>
                    <input ref={inpDate} type="date" onInput={() => updateDate(inpDate.current.value)} 
                    value={date.format('YYYY-MM-DD')}></input>                    
                <Pagination.Next onClick={() => nextDay()}></Pagination.Next>
            </Pagination>            
        </Container>

    )
}