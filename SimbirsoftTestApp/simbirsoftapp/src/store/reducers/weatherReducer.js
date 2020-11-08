let inithialState = {
    zip: 2122265,
    longitude: null,
    latitude: null,
    cityName: null,
    visibility: null,
    weather: {},
    main: {},
    wind: {},
    userTime: {},
    hasCoords: false,
    isLoading: false,
};

let weatherReducer = (state = inithialState, action) => {
    switch (action.type) {
        case ('SET_WEATHER_INFO'): {
            // console.log(action);
            return {
                ...state,
                zip: action.zip,
                longitude: action.longitude,
                latitude: action.latitude,
                cityName: action.cityName,
                visibility: action.visibility,
                weather: { ...action.weather },
                main: { ...action.main },
                wind: { ...action.wind },
                hasCoords: true
            }
        }
        case ('SET_TIME'): {
            // console.log(action);
            return {
                ...state,
                userTime: action.time
            }
        }
        case ('TOGGLE_PRELOADER'): {
            // console.log(action);
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        }
        case ('ERROR'): {
            // console.log(action);
            return {
                ...state,
                hasCoords: false
            }
        }
        default:
            return state
    }
}

export default weatherReducer;