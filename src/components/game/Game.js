import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { GamesContext } from '../../context/GamesContext';

export default function Game({game}) {

    const { addToFavorite } = useContext(GamesContext);

    const GameName = styled.div`
        display: flex;        
        justify-content: center;
        align-items: center;
        background-color: #14805e;
        width: 100%;
        padding: .5rem;
        height: 4rem; 
        color: white;
        margin-bottom: 1rem;
        font-size: 1rem;
        text-align: center;
    `;

    function getDate() {
        const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})(T)([0-9]{2}):([0-9]{2})/g;

        let date = regex.exec(game.utcDate);
        let ampm = date[5] >= 12 ? "PM" : "AM";
        let hours = ((date[5] + 11) % 12 + 1);
        let minutes = date[6];
        let strTime = `0${hours}:${minutes}${ampm} ${date[3]}.${date[2]}.${date[1]}`
        console.log(date);
        return strTime;
    }

    return (

        <Card align="center" text="warning" bg="dark" style={{ width: '100%', border: "solid 1px #14805e" }}>
            <Card.Header>
                <div>{getDate()}</div>

                <div>{game.score.fullTime.awayTeam} : {game.score.fullTime.homeTeam}</div>
            </Card.Header>
            <Card.Body>
                <Card.Title >
                    <GameName>{game.homeTeam.name}</GameName>
                    <GameName>{game.awayTeam.name}</GameName>
                </Card.Title>
                <Card.Text>
                    {game.status}
                </Card.Text>
                <Button onClick={() => addToFavorite(game)}    className="rounded-circle" variant="secondary" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </Button>
            </Card.Body>
        </Card >




    )
}