import Game from "../game/Game";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { GamesContext } from '../../context/GamesContext';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'


export default function GamesList() {

    const { arr, fetchGames, date, loading } = useContext(GamesContext);
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

    const Root = styled(Container)`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 100%;   
    color: #fffeff;    
    margin: 1rem auto;
    `;
    const Header = styled.h1`    
    font-size: 1rem;      
    `;

    useEffect(() => {
        fetchGames()
            .catch((error) => console.log(error.message))
    }, [date]);

    return (
        <Root>
            <Row className="justify-content-start">
                <Header>List of games:</Header>
            </Row>
            
            {loading ? <Spinner animation="border" variant="warning" />
                : <GameList>
                    {arr.length > 0 ?
                        arr.map((item, index) => {
                            console.log(arr);
                            return <Game key={index} game={item} />
                        }) : <p>"нет матчей"</p>

                    }
                </GameList>}
        </Root>
    )
}

