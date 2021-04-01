import { useState, useReducer } from "react";
import { GamesContext } from "./GamesContext";
import moment from 'moment';
import reducer from "./GameReducer";


export default function ServerState(props) {

    const [gamesState, gamesDispach] = useReducer(reducer,{ date: new moment(), arr: [], favoriteArr: [] });

    // const [gamesState, setGamesState] = useState({date: new moment(), arr: [],favoriteArr: []});    

    let body = new URLSearchParams({
        dateFrom: gamesState.date.format('YYYY-MM-DD'),
        dateTo: gamesState.date.format('YYYY-MM-DD'),
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
        gamesDispach({type:'FETCH', payload: result.matches});
    }

    function updateDate(newDateStr) {
        let newDate = new moment(newDateStr);
        gamesDispach({type:'UPDATE_DATE', payload: newDate});
    }

    function nextDay() {
        let newDate = gamesState.date.clone().add(1, 'days');
        gamesDispach({type:'UPDATE_DATE', payload: newDate});
    }

    function prevDay() {
        let newDate = gamesState.date.clone().subtract(1, 'days');
        gamesDispach({type:'UPDATE_DATE', payload: newDate});
    }


    // date.clone().subtract(1,'days').format('YYYY-MM-DD')


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

    function addToFavorite(elem) {
        gamesDispach({type:'ADD_TO_FAVORITE', payload: elem});

    }


    return (
        <GamesContext.Provider value={{
            fetchGames: fetchGames,
            getGame: getGame,
            updateDate: updateDate,
            addToFavorite: addToFavorite,
            nextDay: nextDay,
            prevDay: prevDay,
            date: gamesState.date,
            arr: gamesState.arr,
            favoriteArr: gamesState.favoriteArr
        }}>
            {props.children}
        </GamesContext.Provider>
    )

}



