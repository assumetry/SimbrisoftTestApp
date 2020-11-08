export const browserAPI = {
    getGeolocation() {
        let latitude;
        let longitude;

        let getCoords = new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log(latitude + ' ' + longitude);

                resolve({ latitude, longitude })
            }, () => {
                var reason = new Error('didnt get coordinates');
                reject(reason); // reject
            })
        })

        return getCoords
    }
}

