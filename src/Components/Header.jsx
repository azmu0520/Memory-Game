import { useEffect } from "react";
import { useCardContext } from "../context/card";

const Header = () => {
  const [{ count }] = useCardContext();
  useEffect(() => {
    if (count == 30) {
      window.location.reload();
    }
  }, [count]);
  return (
    <>
      <h1 className="header">Test Your Memory 🧠</h1>
      <button
        style={{ margin: "20px 0" }}
        onClick={() => window.location.reload()}
      >
        New Game
      </button>
      <div>
        <p className="turns">Turns: {parseInt(count / 2)}/15</p>
      </div>
    </>
  );
};

export default Header;
