import Counter from "./my_components/Counter";
import Team from "./my_components/Team";

function App() {
  return (
    <div className="App">
      <Counter />
      <div id="game">
        <Team teamName="Eric's Awesome Sports Team" />
        <Team teamName="Chanda's Awesome Sports Team" />
      </div>
    </div>
  );
}

export default App;
