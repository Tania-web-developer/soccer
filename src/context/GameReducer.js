export default function reducer(state, action) {
    switch (action.type) {
        case 'SHOW_LOADING':
            return {
                date: state.date,
                arr: state.arr,
                favoriteArr: state.favoriteArr,
                loading: true,
            }
        case 'UPDATE_DATE':
            return {
                date: action.payload,
                arr: state.arr,
                favoriteArr: state.favoriteArr,
                loading: state.loading,
            }
        case 'FETCH':
            return {
                date: state.date,
                arr: action.payload,
                favoriteArr: state.favoriteArr,
                loading: false,
            }
        case 'ADD_TO_FAVORITE':
            return {
                date: state.date,
                arr: state.arr,
                favoriteArr: [...state.favoriteArr, action.payload],
                loading: state.loading,
            }
        default:
            return state;
    }
}
