import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Slide from './Slide'
import {requestRecommendedSlide} from '../../../redux/reducers/slide-reducer'
import {getRecommendedSlide} from '../../../redux/selectors/slide-selectors'
import {NavLink} from 'react-router-dom'
import {AppStateType} from '../../../redux/redux-store'

const RecommendedSlideContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    useEffect(() => {
        props.getRecommendedSlide()
    }, [])

    return (
        <NavLink to={'/item/' + props.slide.id} key={props.slide.id}>
            <Slide slide={props.slide} recommended={true}/>
        </NavLink>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        slide: getRecommendedSlide(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getRecommendedSlide: () => void
    requestRecommendedSlide: () => void
}

export default compose(connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {requestRecommendedSlide, getRecommendedSlide: requestRecommendedSlide}))(RecommendedSlideContainer)