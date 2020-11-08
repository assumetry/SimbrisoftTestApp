import { browserAPI } from '../../api/browserAPI'
import { weatherAPI } from '../../api/api'
import { togglePreloader } from '../actions/actions'
import { setWeather } from '../actions/actions'


export const getWeather = () => (dispatch) => {

    browserAPI.getGeolocation()
        .then((coords) => {
            dispatch(togglePreloader())
            weatherAPI.getWeather(coords).then(payload => {
                // console.log(payload);
                dispatch(setWeather(payload))
            }).finally(() => {
                dispatch(togglePreloader())
            })
        })
        .catch((error) => {
            // console.log(error.message);
            dispatch({ type: 'ERROR' })
        })
}
