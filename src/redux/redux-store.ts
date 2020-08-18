import {applyMiddleware, combineReducers, compose, createStore, Action} from 'redux'
import productsReducer from './reducers/products-reducer'
import slideReducer from './reducers/slide-reducer'
import itemReducer from './reducers/item-reducer'
import catalogReducer from './reducers/catalog-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './reducers/app-reducer'

let reducers = combineReducers({
    products: productsReducer,
    slide: slideReducer,
    item: itemReducer,
    catalog: catalogReducer,
    form: formReducer,
    app: appReducer,
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store

export default store