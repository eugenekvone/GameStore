import {instance} from './api'
import {UsersType} from '../redux/reducers/item-reducer'

export const usersAPI = {
    getUsers() {
        return instance.get<UsersType>(`users/`)
            .then(response => {
                return response.data
            })
    }
}
