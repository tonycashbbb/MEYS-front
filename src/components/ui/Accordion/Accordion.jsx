import React, {useRef, useState} from 'react';
import Chevron from "./Chevron";

const Accordion = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");

  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setRotate(active === "active" ? "accordion__icon" : "accordion__icon rotate");
    setHeight(active === "active" ? "0px" : `${accordionContent.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${rotate}`} width={10} fill={"#777"}/>
      </div>

      <div className="accordion__content" style={{height: `${height}`}} ref={accordionContent}>
        <div className="accordion__text">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;


