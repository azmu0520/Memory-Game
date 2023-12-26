const Header = () => {
  const handleNewGame = () => {};
  return (
    <>
      <h1 className="header">Test Your Memory 🧠</h1>
      <button style={{ margin: "20px 0" }} onClick={handleNewGame}>
        New Game
      </button>
      <div>
        <p className="turns">Turns: /15</p>
      </div>
    </>
  );
};

export default Header;
