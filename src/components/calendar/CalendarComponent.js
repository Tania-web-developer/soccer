import { Button, Pagination } from "react-bootstrap";
import { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { GamesContext } from "../../context/GamesContext";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export default function CalendarComponent() {

    let { updateDate, date } = useContext(GamesContext)

    let inpDate = useRef(null);

    return (
        <Container>
            <Pagination>
                <Pagination.Prev>
                    <input ref={inpDate} type="date" ></input>
                    <Button onClick={() => updateDate(inpDate.current.value)}>add new date</Button>
                    </Pagination.Prev>
            </Pagination>
            
        </Container>

    )
}