import {instance} from './api'
import {SlideType} from '../redux/reducers/slide-reducer'

export const slideAPI = {
    getDiscountSlide() {
        return instance.get<Array<SlideType>>(`items?discount_ne=0&_sort=discount&_order=desc&_page=1&_limit=1`,)
            .then(response => {
                return response.data[0]
            })
    },
    getPopularSlide() {
        return instance.get<Array<SlideType>>(`items?_sort=views&_order=desc&_page=1&_limit=1`,)
            .then(response => {
                return response.data[0]
            })
    },
    getRecommendedSlide() {
        return instance.get<Array<SlideType>>(`items?_sort=rating&_order=desc&_page=1&_limit=1`,)
            .then(response => {
                return response.data[0]
            })
    },
    getNewSlide() {
        return instance.get<Array<SlideType>>(`items?_sort=date&_order=desc&_page=1&_limit=1`,)
            .then(response => {
                return response.data[0]
            })
    }
}
