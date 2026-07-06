import Game_card from './Game_card.jsx'
const games= [
  {id: 1, name: "Elden Ring", rating: 9},
  {id: 2, name: "The Witcher 3", rating: 7.5},
  {id: 3, name: "Cyberpunk 2077", rating: 9},
  {id: 4, name: "Horizon Zero Dawn", rating: 8.5}
]

function App() {
  return (
    <div>
      <h1>Game Tracker</h1>
      {games.length === 0 ? (<p>No games to display</p>) : (games.map((game)=>(
        <Game_card key={game.id} name={game.name} rating={game.rating} />)))
        }
    </div>
  )
}
export default App