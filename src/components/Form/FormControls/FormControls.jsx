import React from "react"
import s from './FormControls.module.css'

const FormControls = ({meta, children}) => {
  const error = meta.submitFailed && meta.error

  return (
    <div className={s.formControl + (error ? ' ' + s.error : "")}>
      {children}
      {/*{error ? <div className={s.errorMessage}>{meta.error}</div> : null}*/}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  return <FormControls meta={meta}>
    <input {...input} {...props}/>
  </FormControls>
}

export const Textarea = ({input, meta, ...props}) => {
  return <FormControls meta={meta}>
    <textarea {...input} {...props}/>
  </FormControls>
}
