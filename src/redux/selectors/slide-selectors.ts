import {AppStateType} from '../redux-store'

export const getDiscountSlide = (state: AppStateType) => {
    return state.slide.discountSlide
}

export const getPopularSlide = (state: AppStateType) => {
    return state.slide.popularSlide
}

export const getRecommendedSlide = (state: AppStateType) => {
    return state.slide.recommendedSlide
}

export const getNewSlide = (state: AppStateType) => {
    return state.slide.newSlide
}

export const getSlideElements = (state: AppStateType) => {
    return state.slide.elements
}