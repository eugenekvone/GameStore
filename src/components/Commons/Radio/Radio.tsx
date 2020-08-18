import React from 'react'
import {CheckboxRadioType, createField} from '../FormsColnrols/FormsControls'
import {WrappedFieldProps} from 'redux-form'

type PropsType = {
    title: string,
    index: number,
    numb: string,
    name: string,
    value: string,
    component: React.FC<WrappedFieldProps & CheckboxRadioType>
}

const Radio: React.FC<PropsType> = ({title, index, numb, name, value, component}) => {
    return (
        <div className='radio-wrap'>
            {createField(
                '',
                name,
                component,
                {
                    type: 'radio',
                    id: 'radio-id-' + numb + '-' + index,
                    className: 'radio-none',
                    numb: numb,
                    index: index,
                    title: title,
                    value: value
                })
            }
        </div>
    )
}

export default Radio