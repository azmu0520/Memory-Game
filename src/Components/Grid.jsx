import Card from "./Card";
import "./Grid.css";
import { useCardContext } from "../context/card";
import { useState } from "react";

export default function Grid() {
  const [{ images }] = useCardContext();
  const [data, setData] = useState(images);

  return (
    <div className="card_grid">
      {data.map(({ src, matched, id }) => (
        <div key={id}>
          <Card src={src} matched={matched} />
        </div>
      ))}
    </div>
  );
}
