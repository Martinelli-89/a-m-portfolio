import React, {useState, useEffect} from "react";
import "./ProjectCard.scss";

const Card = ({project, imgSource, cardId, keyLastCardFlipped, toggleKeyLastCardFlipped}) => {

  const [flip, toggleFlip] = useState(false);


  useEffect(() => {

    if(keyLastCardFlipped != cardId) {
      toggleFlip(false);
    }

  }, [keyLastCardFlipped]);

  const handleFlip = () => {

   if(keyLastCardFlipped == undefined) {
      toggleFlip(!flip);
      toggleKeyLastCardFlipped(cardId);
   } else if(keyLastCardFlipped == cardId) {
        toggleFlip(!flip);
        toggleKeyLastCardFlipped(undefined);
   } else {
        toggleFlip(!flip);
        toggleKeyLastCardFlipped(cardId);
   }

  }


  return (
    <div className="projectCard">
      <button
          className={flip ? 'card is-flipped' : 'card'}
          onClick={() => handleFlip()}
        >
        <div className="card__face card__face--front">
        </div>
        <div  className="card__face card__face--back">
        {imgSource==="/Images/"? <h3>.this</h3> : <img src={imgSource}></img>}
        {project ? <p>{project}</p> : ""}
        </div>
        </button>
    </div>
    )
}

export default Card;