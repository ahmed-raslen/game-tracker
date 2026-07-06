import { useState} from 'react'
function AddGameForm({ onAddGame}) {
    const [newGameName, setNewGameName] = useState("")
    function handleSubmite(e){
        e.preventDefault()
        onAddGame(newGameName)
        setNewGameName("")
        }
        return(
            <form onSubmit={handleSubmite}>
            <input
                type="text"
                value={newGameName}
                onChange={(e) => setNewGameName(e.target.value)}
                placeholder="Enter game name"/>
            <button type="submit">Add Game</button>
        </form>
        )
    
}export default AddGameForm