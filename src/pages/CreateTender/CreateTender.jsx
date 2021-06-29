import React from 'react'
import s from './CreateTender.module.css'
import {CreateTenderForm} from "@components/Form";
import {APP_TEXT} from "@components/i18n";

const CreateTender = ({contractorId, createTender}) => {
  const onSubmit = ({name, budget, description}) => {
    createTender(name, budget, description, contractorId)
  }

  return (
    <div className="container">
      <div className={s.title}>{APP_TEXT.createTender.title}</div>

      <CreateTenderForm onSubmit={onSubmit}/>
    </div>
  )
}

export default CreateTender
