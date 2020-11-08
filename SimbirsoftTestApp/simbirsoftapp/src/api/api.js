import * as axios from 'axios'

const instance = axios.create({
    // apiKey: '4871037cc261e7c663059c7f6fbc025d',
})

export const weatherAPI = {
    getWeather(coords) {
        console.log(coords);
        return instance.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=4871037cc261e7c663059c7f6fbc025d`)
            .then(res => {
                console.log(res.data);
                let payload = {
                    zip: res.data.id,
                    longitude: res.data.coord.lon,
                    latitude: res.data.coord.lat,
                    cityName: res.data.name,
                    visibility: res.data.visibility,
                    weather: {
                        ...res.data.weather[0],
                    },
                    main: {
                        ...res.data.main,
                    },
                    wind: {
                        ...res.data.wind,
                    }
                }
                return payload
            })
    }
}

// Проверку на разрешение на Геолокацию.
// Preloader