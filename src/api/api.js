import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
})

export const tinkerAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getSearchId(userId) {
        return instance.get(`search`)
            .then(response => response.data)
    },

}