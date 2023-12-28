import Header from "./Components/Header";
import "./App.css";
import Grid from "./Components/Grid";

const App = () => {
  //  Shuffle the cards
  // const shuffleCards = () => {
  //   const shuffledCards = [...cardImages, ...cardImages]
  //     .sort(() => Math.random() - 0.5)
  //     .map((card) => ({ ...card, id: Math.random() }));

  //   setCards(shuffledCards);
  //   setTurns(0);
  // };

  // // Call the shuffle card function at first render
  // useEffect(() => {
  //   shuffleCards();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
};

export default App;
