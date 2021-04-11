import styled from "styled-components";
import { useContext, useState } from "react";
import { GamesContext } from '../../context/GamesContext';
import Button from 'react-bootstrap/Button';

export default function Game({ game }) {
    const { addToFavorite } = useContext(GamesContext);
    const [isFavorite, setIsFavorite] = useState(false);

    const FavoriteSvg = styled.svg`
     color: ${isFavorite ? 'grey' : 'white'};
    `;
    const Game = styled.div`
    display: grid;    
    grid-template-columns: 1fr 8fr 2fr;
    justify-items: center;
    align-items: stretch;    
    background-color: #35342f;
    margin-bottom: .5rem;     
    
    `;
    const Data = styled.div`
    border-left: solid 4px #14805e;
    padding-left: .3rem;
    text-align: left;    
    color: #35342f;    
    font-size: .7rem;
    font-weight: 600;    
    `;
    const Info1 = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;    
    background-color: #9a9687;
    color: #35342f;    
    font-size: .7rem;
    font-weight: 600;
    border-bottom: solid 1px #5e5d59;
    `;
    const Info2 = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    border: solid 1px #9a9687;    
    
    `;
    const Info3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5rem;    
    background-color: #9a9687;
    color: #35342f;  
    width: 100%;  
    font-size: .7rem;
    font-weight: 600;
    border-bottom: solid 1px #5e5d59; 
    `;
    const Team = styled.div`
     text-transform: uppercase;
     font-size: .7rem;
     font-weight: 600;   
    `;
    const Score = styled.div`       
    font-size: .8rem;
    background-color: #fcc721;
    color: #35342f;
    font-weight: 700;
    padding: 0.3rem .8rem;    
    `;
    const Status = styled.div`
    border: solid 1px white;
    padding: .5rem;
    margin-right: 1rem; 
    color: #35342f;   
    `;

    const FavoriteButton = styled(Button)`
    background-color: #14805e;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    `;

    function getDate() {
        const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})(T)([0-9]{2}):([0-9]{2})/g;

        let date = regex.exec(game.utcDate);
        let ampm = date[5] >= 12 ? "PM" : "AM";
        let hours = ((date[5] + 11) % 12 + 1);
        let minutes = date[6];
        let strTime = `${hours}:${minutes} ${ampm} `
        let strDate = `${date[3]}.${date[2]}.${date[1]} `
        console.log(date);
        return { strTime: strTime, strDate: strDate, }
    }

    return (
        <Game>
            <Info1>
                <Data><span>{getDate().strDate}</span><span>{getDate().strTime}</span></Data>
            </Info1>
            <Info2>
                <Team>{game.homeTeam.name}</Team>
                <Score>{game.score.fullTime.awayTeam} : {game.score.fullTime.homeTeam}</Score>
                <Team>{game.awayTeam.name}</Team>
            </Info2>
            <Info3>
                <Status>{game.status}</Status>
                <FavoriteButton onClick={() => {
                    addToFavorite(game);
                    setIsFavorite(!isFavorite)
                }}
                    className="rounded-circle" variant="secondary" size="sm">
                    {/* <svg style={{color: isFavorite? 'grey' : 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="button-icon bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 
                        2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg> */}
                    <FavoriteSvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="button-icon bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 
                        2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </FavoriteSvg>
                </FavoriteButton>
            </Info3>
        </Game >
    )
}