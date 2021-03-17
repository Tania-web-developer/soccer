import Game from "../game/Game";
import { useContext, useEffect } from "react";
import { GamesContext } from '../../context/GamesContext';
import { CardColumns, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

export default function FavoriteGames() {
    const { favoriteArr, addToFavorite } = useContext(GamesContext);
    
    return (
        <Container>
            <Row>
                <h4>List of games:</h4>
            </Row>
            <CardColumns>                
                    {favoriteArr.map((item, index) => {                       
                        return <Game key={index} game={item}/>
                    })}
                
            </CardColumns>
        </Container>
    )
}