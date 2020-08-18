import {catalogAPI} from '../../api/catalog-api'
import {reset} from 'redux-form'
import {AppStateType, BaseThunkType, InferActionsType} from '../redux-store'

let State = {
    genre: [] as Array<string>,
    platform: [] as Array<string>,
    players: [] as Array<string>,
    price: ['По возростанию цены', 'По убыванию цены'],
    catalog: ['Популярные', 'Рекомендации', 'Скидки']
}

const catalogReducer = (state = State, action: ActionsTypes): CatalogStateType => {
    switch (action.type) {
        case 'SET_GENRE': {
            return {...state, genre: action.genre}
        }
        case 'SET_PLATFORM': {
            return {...state, platform: action.platform}
        }
        case 'SET_PLAYERS': {
            return {...state, players: action.players}
        }
        default:
            return state
    }
}

export const actions = {
    setGenre: (genre: typeof State.genre) => ({type: 'SET_GENRE', genre} as const),
    setPlatform: (platform: typeof State.genre) => ({type: 'SET_PLATFORM', platform} as const),
    setPlayers: (players: typeof State.players) => ({type: 'SET_PLAYERS', players} as const),
}

export const requestGenre = (): ThunkType => async (dispatch) => {
    let data = await catalogAPI.getGenre()
    dispatch(actions.setGenre(data))
}

export const requestPlatform = (): ThunkType => async (dispatch) => {
    let data = await catalogAPI.getPlatform()
    dispatch(actions.setPlatform(data))
}

export const requestPlayers = (): ThunkType => async (dispatch) => {
    let data = await catalogAPI.getPlayers()
    dispatch(actions.setPlayers(data))
}

export const resetCatalogForm = () => async (dispatch: any) => {
    dispatch(reset('edit-catalog'))
}

export const getGenre = (state: AppStateType) => state.catalog.genre
export const getPlatform = (state: AppStateType) => state.catalog.platform
export const getPlayers = (state: AppStateType) => state.catalog.players
export const getCatalog = (state: AppStateType) => state.catalog.catalog
export const getPrice = (state: AppStateType) => state.catalog.price

export default catalogReducer

export type CatalogStateType = typeof State
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsType<typeof actions>