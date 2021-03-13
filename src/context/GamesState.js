import { useState } from "react";
import { GamesContext } from "./GamesContext";

export default function ServerState(props) {
    
    const [gamesState, setGamesState] = useState({date:"", arr: []});

    let body = new URLSearchParams({
        dateFrom: gamesState.date,
        dateTo: gamesState.date,        
    })

    async function fetchGames() {
        let info = await fetch("https://api.football-data.org/v2/matches?" + body, {
            headers: { 'X-Auth-Token': 'f10ff1326d7448988b2fe886ea6db31e' }
        });
        if (!info.ok) {
            throw new Error(info.status);
        }
        let result = await info.json();
        console.log(result);
        setGamesState({date: gamesState.date, arr: result.matches});
    }

    function updateDate(newDate){
        setGamesState({date: newDate, arr: gamesState.arr});
    }

    

    async function getGame(id) {
        let info = await fetch("http://f0464737.xsph.ru.xsph.ru/notes/add_note.php", {
            method: "POST",
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: "id=" + id
        });
        if (!info.ok) {
            throw new Error(info.status)
        }
        let result = await info.json();         
        
    }    
    return (
        <GamesContext.Provider value={{
            fetchGames: fetchGames,
            getGame: getGame,
            updateDate: updateDate,            
            date:  gamesState.date,
            arr:  gamesState.arr            
        }}>
            {props.children}
        </GamesContext.Provider>
    )

}



