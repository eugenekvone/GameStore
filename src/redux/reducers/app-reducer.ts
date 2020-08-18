import {InferActionsType} from '../redux-store'

let State = {
    initialized: false,
}

const appReducer = (state = State, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(true)
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer

export type StateType = typeof State
type ActionsType = InferActionsType<typeof actions>