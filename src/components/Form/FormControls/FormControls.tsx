import React, {FC, ReactElement} from "react"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

import s from './FormControls.module.scss'

type ControlsProps = {
  meta: WrappedFieldMetaProps
  children: ReactElement
}

const FormControls: FC<ControlsProps> = ({
                                           meta,
                                           children
                                         }) => {
  const error = meta.submitFailed && meta.error

  return (
    <div className={s.formControl + (error ? ' ' + s.error : "")}>
      {children}
    </div>
  )
}

export const Input: FC<WrappedFieldProps> = ({
                                               input,
                                               meta,
                                               ...props
                                             }) => {
  return <FormControls meta={meta}>
    <input {...input} {...props}/>
  </FormControls>
}

export const Textarea: FC<WrappedFieldProps> = ({
                                                  input,
                                                  meta,
                                                  ...props
                                                }) => {
  return <FormControls meta={meta}>
    <textarea {...input} {...props}/>
  </FormControls>
}
