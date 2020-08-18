import {instance} from './api'
import {ItemType} from '../redux/reducers/item-reducer'

export const itemsAPI = {
    getItem(itemId: number) {
        return instance.get<ItemType>(`items/${itemId}`)
            .then(response => {
                return response.data
            })
    }
}
