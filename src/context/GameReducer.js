export default function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_DATE':
            return {
                date: action.payload,
                arr: state.arr,
                favoriteArr: state.favoriteArr
            }
        case 'FETCH':
            return {
                date: state.date,
                arr: action.payload,
                favoriteArr: state.favoriteArr
            }
        case 'ADD_TO_FAVORITE':
            return {
                date: state.date,
                arr: state.arr,
                favoriteArr: [...state.favoriteArr, action.payload]
            }
        default:
            return state;
    }
}
