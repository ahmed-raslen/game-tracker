import { useState } from 'react'
function Game_card({ name, status, rating, onStatusChange, onDelete }) {
  return (
    <div className="game-card">
      <h2>{name}</h2>
      <p>rating: {rating}</p>
      {rating >= 9 && <span className="badge"> Highly rated</span>}
      <div>
        <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
          <option value="playing">Playing</option>
          <option value="completed">Completed</option>
          <option value="wishlist">Wishlist</option>
          <option value="dropped">Dropped</option>
        </select>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Game_card