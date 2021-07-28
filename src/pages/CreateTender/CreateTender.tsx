import React, {FC} from 'react'

import {CreateTenderForm, Success} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './CreateTender.module.scss'

type Props = {
  contractorId: number,
  createTender: (name: string, budget: number, description: string, contractorId: number) => void,
  formValue: any,
  isSuccess: boolean
}

const CreateTender: FC<Props> = ({
                        contractorId,
                        createTender,
                        formValue,
                        isSuccess
                      }) => {
  // @ts-ignore
  const onSubmit = ({name, budget, description}) => {
    createTender(name, budget, description, contractorId)
  }

  if (isSuccess) {
    return <Success text={APP_TEXT.success.createTender}/>
  }

  return (
    <div className="container">
      <div className={s.title}>{APP_TEXT.createTender.title}</div>
      {/*@ts-ignore*/}
      <CreateTenderForm onSubmit={onSubmit} formValue={formValue}/>
    </div>
  )
}

export default CreateTender
