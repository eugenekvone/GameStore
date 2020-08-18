import React from 'react'
import {CheckboxRadioType, createField} from '../FormsColnrols/FormsControls'
import {WrappedFieldProps} from 'redux-form'

type PropsType = {
    name: string,
    index: number,
    numb: number,
    title: string,
    checked?: boolean,
    component: React.FC<WrappedFieldProps & CheckboxRadioType>
}

const Checkbox: React.FC<PropsType> = ({
                                           name,
                                           index,
                                           numb,
                                           title,
                                           checked,
                                           component
                                       }) => {
    return (
        <div className='checkbox-wrap'>
            {createField(
                '',
                name,
                component,
                {
                    type: 'checkbox',
                    id: 'checkbox-id-' + numb + '-' + index,
                    className: 'checkbox-none',
                    numb: numb,
                    index: index,
                    title: title,
                    checked: checked,
                })
            }
        </div>
    )
}

export default Checkbox