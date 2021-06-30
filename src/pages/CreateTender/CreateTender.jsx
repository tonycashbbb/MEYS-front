import React from 'react'

import {CreateTenderForm} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './CreateTender.module.css'

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
