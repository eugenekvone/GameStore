import {slideAPI} from '../../api/slide-api'
import new__img from '../../img/new__img.svg'
import popular__img from '../../img/popular__img.svg'
import {BaseThunkType, InferActionsType} from '../redux-store'

let State = {
    discountSlide: {} as SlideType,
    popularSlide: {} as SlideType,
    recommendedSlide: {} as SlideType,
    newSlide: {} as SlideType,
    elements: {
        new__img: new__img,
        popular__img: popular__img,
    },
}

const SlideReducer = (state = State, action: ActionsTypes): SlideStateType => {
    switch (action.type) {
        case 'SET_DISCOUNT_SLIDE': {
            return {...state, discountSlide: action.slide}
        }
        case 'SET_POPULAR_SLIDE': {
            return {...state, popularSlide: action.slide}
        }
        case 'SET_RECOMMENDED_SLIDE': {
            return {...state, recommendedSlide: action.slide}
        }
        case 'SET_NEW_SLIDE': {
            return {...state, newSlide: action.slide}
        }
        default:
            return state
    }
}

export const actions = {
    setDiscountSlide: (slide: typeof State.discountSlide) => ({type: 'SET_DISCOUNT_SLIDE', slide} as const),
    setPopularSlide: (slide: typeof State.popularSlide) => ({type: 'SET_POPULAR_SLIDE', slide} as const),
    setRecommendedSlide: (slide: typeof State.recommendedSlide) => ({type: 'SET_RECOMMENDED_SLIDE', slide} as const),
    setNewSlide: (slide: typeof State.newSlide) => ({type: 'SET_NEW_SLIDE', slide} as const),
}

export const requestDiscountSlide = (): ThunkType => {
    return async (dispatch) => {
        let data = await slideAPI.getDiscountSlide()
        dispatch(actions.setDiscountSlide(data))
    }
}
export const requestPopularSlide = (): ThunkType => {
    return async (dispatch) => {
        let data = await slideAPI.getPopularSlide()
        dispatch(actions.setPopularSlide(data))
    }
}
export const requestRecommendedSlide = (): ThunkType => {
    return async (dispatch) => {
        let data = await slideAPI.getRecommendedSlide()
        dispatch(actions.setRecommendedSlide(data))
    }
}
export const requestNewSlide = (): ThunkType => {
    return async (dispatch) => {
        let data = await slideAPI.getNewSlide()
        dispatch(actions.setNewSlide(data))
    }
}

export default SlideReducer

export type SlideType = {
    id: number,
    slide: string,
    price: number,
    discount: number,
    rating: number,
    date: string,
    views: string
}
export type SlideStateType = typeof State
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
