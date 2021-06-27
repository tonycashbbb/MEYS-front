import React from 'react'
import s from "./ContractsItems.module.css";
import ContractsItem from "./ContractsItem/ContractsItem";

const ContractsItems = () => {
  return (
    <div className={s.row}>
      <ContractsItem
        title={"Szukaj po miastach"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consectetur consequatur dicta\n" +
        "          dolores ex, explicabo\n" +
        "          fugiat hic illum incidunt inventore iure laboriosam quidem quisquam repellat saepe totam, vitae\n" +
        "          voluptatum!"}
      />
      <ContractsItem
        title={"Szukaj po branzach"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consectetur consequatur dicta\n" +
        "          dolores ex, explicabo\n" +
        "          fugiat hic illum incidunt inventore iure laboriosam quidem quisquam repellat saepe totam, vitae\n" +
        "          voluptatum!"}
      />
      <ContractsItem
        title={"Zrob wlasny tender"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consectetur consequatur dicta\n" +
        "          dolores ex, explicabo\n" +
        "          fugiat hic illum incidunt inventore iure laboriosam quidem quisquam repellat saepe totam, vitae\n" +
        "          voluptatum!"}
      />
      <ContractsItem
        title={"Wypelnij inny tender"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consectetur consequatur dicta\n" +
        "          dolores ex, explicabo\n" +
        "          fugiat hic illum incidunt inventore iure laboriosam quidem quisquam repellat saepe totam, vitae\n" +
        "          voluptatum!"}
      />
    </div>
  )
}

export default ContractsItems