import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Slide from './Slide'
import {requestPopularSlide} from '../../../redux/reducers/slide-reducer'
import {getPopularSlide, getSlideElements} from '../../../redux/selectors/slide-selectors'
import {NavLink} from 'react-router-dom'
import {AppStateType} from '../../../redux/redux-store'


const PopularSlideContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    useEffect(() => {
        props.getPopularSlide()
    }, [])

    return (
        <NavLink to={'/item/' + props.slide.id} key={props.slide.id}>
            <Slide slide={props.slide}
                   popular={true}
                   elements={props.elements}/>
        </NavLink>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        slide: getPopularSlide(state),
        elements: getSlideElements(state),
    }
}

export default compose(connect(mapStateToProps,
    {requestPopularSlide, getPopularSlide: requestPopularSlide}))(PopularSlideContainer)

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getPopularSlide: () => void
}