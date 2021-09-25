import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
})

export const tinkerAPI = {

    getSearchId() {
        return instance.get(`search`)
            .then(response => response.data)

    },

    getTicket(searchId) {
        return instance.get(`tickets?searchId=${searchId}`)
    }


}
