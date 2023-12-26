import "./Card.css";
import back from "../Images/back.png";
import { useCallback, useState } from "react";
import { useCardContext } from "../context/card";
export default function Card({ src, matched }) {
  const [{ checked }, dispatch] = useCardContext();
  const [flip, setFlip] = useState(matched);
  const handleClick = () => {
    dispatch({ type: "setCheck", payload: src });
    setFlip(true);
    if (checked.length == 1) {
      if (checked[0] == src) {
        dispatch({ type: "match", payload: src });
        setFlip(matched);
      } else {
        dispatch({ type: "clear" });
      }
      // setFlip(false);
    }
    console.log(flip, "flip");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={flip ? "flipped" : ""}>
        <img src={src} alt="card front" className="front" />
        <img src={back} alt="card back" className="back" />
      </div>
    </div>
  );
}
