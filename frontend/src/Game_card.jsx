import { useState } from 'react'
function Game_card({ name , rating}) {
    const [status, setStatus] = useState("playing");
    function toggleStatus() {
        if (status ==="playing") {
            setStatus("completed")
        } else {
            setStatus("playing")
        }
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>status: {status}</p>
            <p>rating: {rating}</p>
            {rating >= 9 && <p>Highly rated game</p>}
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
}
export default Game_card