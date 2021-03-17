import Game from "../game/Game";
import { useContext, useEffect } from "react";
import { GamesContext } from '../../context/GamesContext';
import { CardColumns, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';


export default function GamesList() {

    const { arr, fetchGames, date } = useContext(GamesContext);

    useEffect(() => {
        fetchGames()
            .catch((error) => console.log(error.message))
    }, [date]);

    return (
        <Container>
            <Row>
                <h4>List of games:</h4>
            </Row>
            <CardColumns>
                {arr.length > 0 ?
                    arr.map((item, index) => {
                        console.log(arr);
                        return <Game key={index} game={item} />
                    }) : <p>"нет матчей"</p>

                }


            </CardColumns>
        </Container>
    )
}