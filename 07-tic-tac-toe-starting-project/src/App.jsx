import Player from "./components/Player/Player";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="player 1" symbol="x" />
            <Player name="player 2" symbol="O" />
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
