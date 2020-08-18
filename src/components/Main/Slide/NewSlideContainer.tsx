import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Slide from './Slide'
import {requestNewSlide} from '../../../redux/reducers/slide-reducer'
import {getNewSlide, getSlideElements} from '../../../redux/selectors/slide-selectors'
import {NavLink} from 'react-router-dom'
import {AppStateType} from '../../../redux/redux-store'


const NewSlideContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    useEffect(() => {
        props.getNewSlide()
    }, [])

    return (
        <NavLink to={'/item/' + props.slide.id} key={props.slide.id}>
            <Slide slide={props.slide}
                   elements={props.elements}
                   fresh={true}/>
        </NavLink>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        slide: getNewSlide(state),
        elements: getSlideElements(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getNewSlide: () => void
    requestNewSlide: () => void
}

export default compose(connect(mapStateToProps,
    {requestNewSlide, getNewSlide: requestNewSlide}))(NewSlideContainer)