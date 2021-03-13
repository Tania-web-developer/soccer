import Game from "../game/Game";
import { useContext, useEffect } from "react";
import { GamesContext } from '../../context/GamesContext'
import { CardColumns, Container } from "react-bootstrap";

export default function GamesList() {

    const { arr, fetchGames } = useContext(GamesContext);
    console.log(arr);

    useEffect(() => {
        fetchGames()
            .catch((error) => console.log(error.message))
    }, []);

    return (
        <Container>
            <h4>List of games:</h4>
            <CardColumns>                                
                {arr.map((item, index) => {
                    console.log(item);
                    return <Game key={index} game={item} />
                })}
            </CardColumns>
        </Container>
    )
}