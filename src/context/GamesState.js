import { useReducer } from "react";
import { GamesContext } from "./GamesContext";
import moment from 'moment';
import reducer from "./GameReducer";
import axios from 'axios';

export default function ServerState(props) {

    const [gamesState, gamesDispach] = useReducer(reducer, {
        date: new moment(),
        arr: [], favoriteArr: [], loading: false
    });
    // const [gamesState, setGamesState] = useState({date: new moment(), arr: [],favoriteArr: []});    

    // let body = new URLSearchParams({ // класс принимает обьект превращает его в get строчку
    //     dateFrom: gamesState.date.format('YYYY-MM-DD'),
    //     dateTo: gamesState.date.format('YYYY-MM-DD'),
    // })
    async function fetchGames() {
        gamesDispach({ type: 'SHOW_LOADING' });
        let request = await axios.get("https://api.football-data.org/v2/matches",
            {
                params: {
                    dateFrom: gamesState.date.format('YYYY-MM-DD'),
                    dateTo: gamesState.date.format('YYYY-MM-DD'),
                },
                headers: { 'X-Auth-Token': 'f10ff1326d7448988b2fe886ea6db31e' },
            });
        if (!request.status === 200) {
            throw new Error(request.statusText);
        }
        let result = request.data;// ответ сервера 
        gamesDispach({ type: 'FETCH', payload: result.matches });
    }

    function updateDate(newDateStr) {
        let newDate = new moment(newDateStr);
        gamesDispach({ type: 'UPDATE_DATE', payload: newDate });
    }

    function nextDay() {
        let newDate = gamesState.date.clone().add(1, 'days');
        gamesDispach({ type: 'UPDATE_DATE', payload: newDate });
    }

    function prevDay() {
        let newDate = gamesState.date.clone().subtract(1, 'days');
        gamesDispach({ type: 'UPDATE_DATE', payload: newDate });
    }


    // date.clone().subtract(1,'days').format('YYYY-MM-DD')
    function addToFavorite(elem) {
        gamesDispach({ type: 'ADD_TO_FAVORITE', payload: elem });

    }


    return (
        <GamesContext.Provider value={{
            fetchGames,            
            updateDate,
            addToFavorite,
            nextDay,
            prevDay,
            date: gamesState.date,
            arr: gamesState.arr,
            favoriteArr: gamesState.favoriteArr,
            loading: gamesState.loading,
        }}>
            {props.children}
        </GamesContext.Provider>
    )

}



