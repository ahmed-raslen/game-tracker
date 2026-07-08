import { useState, useEffect } from 'react'
import Game_card from './Game_card.jsx'
import AddGameForm from './AddGameForm'
import './App.css'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  function addGame(name) {
    fetch('http://127.0.0.1:8000/api/games/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, status: 'playing', rating: null }),
    })
      .then((response) => response.json())
      .then((newGame) => {
        setGames([...games, newGame])
      })
  }
  function deleteGame(id) {
    fetch(`http://127.0.0.1:8000/api/games/${id}/`, {
      method: 'DELETE',
    }).then(() => {
      setGames(games.filter((game) => game.id !== id))
    })
  }
  function updateStatus(id, newStatus) {
    fetch(`http://127.0.0.1:8000/api/games/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((updatedGame) => {
        setGames(games.map((game) => (game.id === id ? updatedGame : game)))
      })
  }

  function toggleStatus(id, currentStatus) {
    const newStatus = currentStatus === "playing" ? "completed" : "playing"

    fetch(`http://127.0.0.1:8000/api/games/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((updatedGame) => {
        setGames(games.map((game) => (game.id === id ? updatedGame : game)))
      })
  }

return (
  <div>
    <h1>Game Tracker</h1>
    <AddGameForm onAddGame={addGame} />
    <div className="game-grid">
      {games.length === 0 ? (
        <p>No games to display</p>
      ) : (
        games.map((game) => (
          <Game_card
            key={game.id}
            name={game.name}
            rating={game.rating}
            status={game.status}
            onStatusChange={(newStatus) => updateStatus(game.id, newStatus)}
            onDelete={() => deleteGame(game.id)}
          />
        ))
      )}
    </div>
  </div>
)
}

export default App