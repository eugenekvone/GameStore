import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Slide from './Slide'
import {requestDiscountSlide} from '../../../redux/reducers/slide-reducer'
import {getDiscountSlide} from '../../../redux/selectors/slide-selectors'
import {NavLink} from 'react-router-dom'
import {AppStateType} from '../../../redux/redux-store'


const DiscountSlideContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    useEffect(() => {
        props.getDiscountSlide()
    }, [])

    return (
        <NavLink to={'/item/' + props.slide.id} key={props.slide.id}>
            <Slide slide={props.slide} discount/>
        </NavLink>
    )

}

let mapStateToProps = (state: AppStateType) => {
    return {
        slide: getDiscountSlide(state),
    }
}

export default compose(connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {requestDiscountSlide, getDiscountSlide: requestDiscountSlide}))(DiscountSlideContainer)

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getDiscountSlide: () => void
    requestDiscountSlide: () => void
}