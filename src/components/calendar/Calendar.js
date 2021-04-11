import { Pagination } from "react-bootstrap";
import { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { GamesContext } from "../../context/GamesContext";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Row from 'react-bootstrap/Row'

export default function CalendarComponent() {

    let { updateDate, date, prevDay, nextDay, loading} = useContext(GamesContext);

    console.log(date);
    let inpDate = useRef(null);

    return (
        <Container>
            <Row className="justify-content-end">
                <Pagination>
                    <Pagination.Prev disabled={loading} onClick={() => prevDay()}></Pagination.Prev>
                    <input ref={inpDate} type="date" onInput={() => updateDate(inpDate.current.value)}
                        value={date.format('YYYY-MM-DD')}></input>
                    <Pagination.Next disabled={loading}  onClick={() => nextDay()}></Pagination.Next>
                </Pagination>
            </Row>
        </Container>

    )
}