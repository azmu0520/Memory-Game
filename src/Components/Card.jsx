import "./Card.css";
import back from "../Images/back.png";
import { useEffect, useState } from "react";
import { useCardContext } from "../context/card";
export default function Card({ src, matched }) {
  const [{ checked }, dispatch] = useCardContext();
  const [flip, setFlip] = useState(false);
  const handleClick = () => {
    dispatch({ type: "setCheck", payload: src });
    setFlip(true);
  };

  useEffect(() => {
    if (checked.length == 2) {
      if (checked[0] !== checked[1]) {
        setTimeout(() => {
          setFlip(false);
        }, 700);
      } else {
        dispatch({ type: "match", payload: checked[0] });
      }
      dispatch({ type: "clear" });
    }
  }, [src, checked, dispatch]);
  return (
    <div className="card" onClick={handleClick}>
      <div className={flip || matched ? "flipped" : ""}>
        <img src={src} alt="card front" className="front" />
        <img src={back} alt="card back" className="back" />
      </div>
    </div>
  );
}
