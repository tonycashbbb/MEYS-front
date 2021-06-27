import React from 'react'
import s from './Description.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";

const Description = () => {
  const descriptionData = [
    {id: 1, title: "Title 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,\n" +
        "                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta\n" +
        "                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?"},
    {id: 2, title: "Title 2", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,\n" +
        "                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta\n" +
        "                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?"},
    {id: 3, title: "Title 3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,\n" +
        "                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta\n" +
        "                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?"},
    {id: 4, title: "Title 4", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,\n" +
        "                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta\n" +
        "                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?"},
    {id: 5, title: "Title 5", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,\n" +
        "                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta\n" +
        "                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?"}
  ]
  let descriptionElements = descriptionData
    .map(({ id, title, text}) => {
      return (
        <li className={s.descr__item} key={id}>
          <div className={s.title}>{title}</div>
          <div>{text}</div>
        </li>
      )
    })

  return (
    <section className={s.description}>
      <div className="container">
        <SectionHeader
          suptitle={"Co to jest"}
          title={"MEYS?"}
        />
        <div className={s.description__inner}>
          <div className={s.image}>
            <img src="https://placehold.it/300x400" alt=""/>
          </div>
          <ul className={s.descr}>
            {descriptionElements}
          </ul>
        </div>
      </div>
    </section>

    // <View descriptionElements={descriptionElements}/>
  )
}


// const View = (props) => {
//   const {descriptionElements} = props;
//
//   return (
//     <section className={s.description}>
//       <div className="container">
//         <SectionHeader
//           suptitle={"Co to jest"}
//           title={"MEYS?"}
//         />
//         <div className={s.description__inner}>
//           <div className={s.image}>
//             <img src="https://placehold.it/300x400" alt=""/>
//           </div>
//           <ul className={s.descr}>
//             {descriptionElements}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

export default Description