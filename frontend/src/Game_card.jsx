function Game_card({ name, status , rating}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>status: {status}</p>
            <p>rating: {rating}</p>
        </div>
    );
}
export default Game_card