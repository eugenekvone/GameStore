import {instance} from './api'

export const catalogAPI = {
    getGenre() {
        return instance.get<Array<string>>(`genre/`)
            .then(response => {
                return response.data
            })
    },
    getPlatform() {
        return instance.get<Array<string>>(`platform/`)
            .then(response => {
                return response.data
            })
    },
    getPlayers() {
        return instance.get<Array<string>>(`players/`)
            .then(response => {
                return response.data
            })
    }
}
