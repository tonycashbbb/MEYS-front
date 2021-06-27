import React from 'react'
import s from "./Contracts.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContractsItems from "./ContractsItems/ContractsItems";

const Contracts = () => {
  return (
    <section className={s.contracts}>
      <div className="container">
        <SectionHeader
          suptitle={"Nasz Serwis to"}
          title={"Wlasciwe przetargi"}
        />
        <ContractsItems/>

      </div>
    </section>
  )
}

export default Contracts