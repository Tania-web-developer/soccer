import Game from "../game/Game";
import styled from "styled-components";
import { useContext } from "react";
import { GamesContext } from '../../context/GamesContext';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

export default function FavoriteGames() {
    const GameList = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 100%;   
    color: #fffeff;   ;   
    text-align: center;
    margin: 1rem auto;
    `;

    const { favoriteArr } = useContext(GamesContext);
    
    return (
        <Container>
            <Row>
                <h4>List of favorite games:</h4>
            </Row>
            <GameList>                
                    {favoriteArr.map((item, index) => {                       
                        return <Game key={index} game={item}/>
                    })}                
            </GameList>
        </Container>
    )
}