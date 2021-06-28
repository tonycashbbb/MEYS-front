import React from 'react'
import s from './CreateTender.module.css'
import {CreateTenderForm} from "@components/Form";

const CreateTender = ({contractorId, createTender}) => {
  const onSubmit = ({name, budget, description}) => {
    createTender(name, budget, description, contractorId)
  }

  return (
    <div className="container">
      <div className={s.title}>
        To create a tender fill the form out
      </div>

      <CreateTenderForm onSubmit={onSubmit}/>
    </div>
  )
}

export default CreateTender
