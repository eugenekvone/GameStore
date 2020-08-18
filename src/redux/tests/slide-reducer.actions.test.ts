import slideReducer, {actions,SlideStateType} from '../reducers/slide-reducer'

let state: SlideStateType

beforeEach(() => {
    state = {
        discountSlide: slide,
        popularSlide: slide,
        recommendedSlide: slide,
        newSlide: slide,
        elements: elements
    }
})

const slide = {
    id: 0,
    slide: '',
    price: 0,
    discount: 0,
    rating: 0,
    date: '',
    views: ''
}

const elements = {
    new__img: '',
    popular__img: ''
}

test('setDiscountSlideTest', () => {
    const newState = slideReducer(state, actions.setDiscountSlide(slide))
    expect(newState.discountSlide)
})

test('setPopularSlideTest', () => {
    const newState = slideReducer(state, actions.setPopularSlide(slide))
    expect(newState.popularSlide)
})

test('setRecommendedSlideTest', () => {
    const newState = slideReducer(state, actions.setRecommendedSlide(slide))
    expect(newState.recommendedSlide)
})

test('setNewSlideTest', () => {
    const newState = slideReducer(state, actions.setNewSlide(slide))
    expect(newState.newSlide)
})