import Game_card from './Game_card.jsx'
function App() {
  return (
    <div>
      <h1>Game Tracker</h1>
      <Game_card name="Elden Ring" status="Playing" rating={5} />
      <Game_card name="The Witcher 3" status="Completed" rating={5} />
      <Game_card name="Cyberpunk 2077" status="On Hold" rating={4} />
    </div>
  )
}
export default App