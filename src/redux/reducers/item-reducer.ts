import {itemsAPI} from '../../api/items-api'
import avatar from '../../img/avatar.svg'
import btn__basket_icon from '../../img/btn__basket_icon.svg'
import {AppStateType, InferActionsType, BaseThunkType} from '../redux-store'
import {Dispatch} from 'redux'
import {usersAPI} from '../../api/users-api'

let State = {
    item: {
        avatar: avatar,
        info: {} as Array<string>,
        id: 0,
        img: '',
        logo_icon: '',
        logo_text: '',
        title: '',
        price: 0,
        discount: 0,
        lang: '',
        platform: [] as Array<string>,
        type: [] as Array<string>,
        date: '',
        dev: '',
        os: '',
        spu: '',
        ram: '',
        graph: '',
        hd: '',
        players: '',
        views: 0,
        rating: 0,
        slider_img: [] as Array<string>,
        comments: [
            {
                id: 1,
                userId: 1,
                date: '',
                comment: ''
            }
        ],
    },
    elements: {
        btn__basket_icon: btn__basket_icon
    },
    users: [
        {
            id: 1,
            name: '',
            avatar: avatar,
        }
    ],
}


const productsReducer = (state = State, action: ActionsTypes): ItemStateType => {
    switch (action.type) {
        case 'SET_ITEM': {
            return {...state, item: action.item}
        }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        default:
            return state
    }
}

export const actions = {
    setItem: (item: ItemType) => ({type: 'SET_ITEM', item} as const),
    setUsers: (users: typeof State.users) => ({type: 'SET_USERS', users} as const),
}

export const requestItem = (itemId: number): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await itemsAPI.getItem(itemId)
    dispatch(actions.setItem(data))
}

export const requestUsers = (): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await usersAPI.getUsers()
    dispatch(actions.setUsers(data))
}

export const getItem = (state: AppStateType) => state.item.item
export const getItemElements = (state: AppStateType) => state.item.elements
export const getUsers = (state: AppStateType) => state.item.users

export default productsReducer

export type ItemStateType = typeof State
export type ItemType = typeof State.item
export type UsersType = typeof State.users
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsType<typeof actions>