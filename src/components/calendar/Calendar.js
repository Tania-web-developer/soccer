import { Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { GamesContext } from "../../context/GamesContext";

export default function Calendar() {
    let {updateDate} = useContext(GamesContext)
    let inpDate = useRef(null)
    return (
        <Container>
            <input type="date" ref={inpDate}></input>
            <Button onClick={()=>updateDate(inpDate.current.value)}>add new date</Button>
        </Container>

    )
}