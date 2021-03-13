import styled from "styled-components"
import Card from 'react-bootstrap/Card'

export default function Game({ game }) {
    const CardGame = styled.div`
        border: solid 1px black;
        width: 500px;
    `;

    return (
        
            <Card border="dark" style={{ width: '100%' }}>                
                <Card.Header>
                   <div>{game.utcDate}</div> 
                   <div>{game.score.fullTime.awayTeam} : {game.score.fullTime.homeTeam}</div>             
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        awayTeam: <h2>{game.awayTeam.name}</h2>
                        homeTeam: <h2>{game.homeTeam.name}</h2> 
                    </Card.Title>
                    <Card.Text>
                       {game.status}
                    </Card.Text>
                </Card.Body>
            </Card>     

        

    )
}