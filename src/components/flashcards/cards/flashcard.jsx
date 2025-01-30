import react from "react";
import "./flashcard.css";


const Flashcard = ({id, title}) => {

  return (
    <div className="flashcard ">      
        <div className="Recipe" id= {id}></div>
          <div className="Recipe__title">{title}</div>
    </div>
  );
};

export default Flashcard;
