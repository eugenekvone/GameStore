import React from 'react'
import styles from './FormsControls.module.scss'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form'
import classes from '../../Catalog/Catalog.module.scss'
import cn from 'classnames'
import sorting__btn_icon from '../../../img/arrow-1.svg'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

type InputType = {
    child?: React.FC
}

export type CheckboxRadioType = {
    numb: number,
    index: number,
    title: string,
    child?: React.FC
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps & InputType> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const radioInput: React.FC<WrappedFieldProps & CheckboxRadioType> = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
            <label htmlFor={'radio-id-' + props.numb + '-' + props.index} className="radio-label">
                <div className="radio"></div>
                <p className="text-12">{props.title}</p>
            </label>
        </FormControl>
    )
}

export const radioInput_sorting: React.FC<WrappedFieldProps & CheckboxRadioType> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} />
        <label htmlFor={'radio-id-' + props.numb + '-' + props.index} className="radio-label">
            <div className={classes.sorting__btn}>
                <p className={cn(classes.sorting__btn_text, 'text-12')}>{props.title}</p>
                <img src={sorting__btn_icon} alt="sorting__btn_icon"
                     className={cn(classes.sorting__btn_icon, 'radio_sorting')}/>
            </div>
        </label>
    </FormControl>
}

export const checkboxInput_sorting: React.FC<WrappedFieldProps & CheckboxRadioType> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} />
        <label htmlFor={'checkbox-id-' + props.numb + '-' + props.index} className="checkbox-label">
            <div className={classes.sorting__btn}>
                <p className={cn(classes.sorting__btn_text, 'text-12 checkbox_sorting-text-1')}>{props.title[0]}</p>
                <p className={cn(classes.sorting__btn_text, 'text-12 checkbox_sorting-text-2')}>{props.title[1]}</p>
                <img src={sorting__btn_icon} alt="sorting__btn_icon"
                     className={cn(classes.sorting__btn_icon, 'checkbox_sorting')}/>
            </div>
        </label>
    </FormControl>
}

export const checkboxInput: React.FC<WrappedFieldProps & CheckboxRadioType> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} />
        <label htmlFor={'checkbox-id-' + props.numb + '-' + props.index} className="checkbox-label">
            <div className="checkbox"></div>
            <p className="text-12">{props.title}</p>
        </label>
    </FormControl>
}

export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    component: React.FC<WrappedFieldProps & CheckboxRadioType>,
    props = {}) {
    return <Field placeholder={placeholder} name={name} component={component} {...props}/>
}

export type GetStringKeys<T> = Extract<keyof T, string>