import Card from "./Card";
import "./Grid.css";
import { useCardContext } from "../context/card";

export default function Grid() {
  const [{ images }, dispatch] = useCardContext();

  return (
    <div className="card_grid">
      {images.map(({ src, matched }, i) => (
        <div key={i} onClick={() => dispatch({ type: "setCount" })}>
          <Card src={src} matched={matched} />
        </div>
      ))}
    </div>
  );
}
