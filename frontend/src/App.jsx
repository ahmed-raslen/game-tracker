import { useState, useEffect } from 'react'
import Game_card from './Game_card.jsx'
import AddGameForm from './AddGameForm'
import Login from './Login'
import Signup from './Signup'
import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [showSignup, setShowSignup] = useState(false)
  const [games, setGames] = useState([])

  useEffect(() => {
    if (!token) return

    fetch('http://127.0.0.1:8000/api/games/', {
      headers: { 'Authorization': `Token ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [token])

  function addGame(name) {
    fetch('http://127.0.0.1:8000/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
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
      headers: { 'Authorization': `Token ${token}` },
    }).then(() => {
      setGames(games.filter((game) => game.id !== id))
    })
  }

  function updateStatus(id, newStatus) {
    fetch(`http://127.0.0.1:8000/api/games/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((updatedGame) => {
        setGames(games.map((game) => (game.id === id ? updatedGame : game)))
      })
  }

  function handleLogin(newToken) {
    setToken(newToken)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setToken(null)
    setGames([])
  }

  if (!token) {
    return (
      <div>
        {showSignup ? (
          <Signup onLogin={handleLogin} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        <p className="auth-switch">
          {showSignup ? "Already have an account? " : "No account yet? "}
          <button onClick={() => setShowSignup(!showSignup)}>
            {showSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1>Game Tracker</h1>
      <div className="top-bar">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
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