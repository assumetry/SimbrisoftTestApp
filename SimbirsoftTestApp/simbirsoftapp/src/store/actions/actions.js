export const setUserTime = (time) => ({ type: 'SET_TIME', time, })
export const togglePreloader = () => ({ type: 'TOGGLE_PRELOADER' })

export const setWeather = (payload) => ({
    type: 'SET_WEATHER_INFO',
    zip: payload.zip,
    longitude: payload.longitude,
    latitude: payload.latitude,
    cityName: payload.cityName,
    visibility: payload.visibility,
    weather: { ...payload.weather },
    main: { ...payload.main },
    wind: { ...payload.wind },
    hasCoords: true,
})