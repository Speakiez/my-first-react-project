import { useState } from "react"

function Tile({ value, onTileClick }) {
    return (
        <button 
            className="board-tile"
            onClick={onTileClick}
        >
            {value}
        </button>
    )
}

function Board() {
    const [tiles, setTiles] = useState(Array(9).fill(null));

    const handleClick = (index) => {
        const nextTiles = tiles.slice();
        nextTiles[index] = "X";
        setTiles(nextTiles);
    }

    return (
        <>  
            <div className="board-row">
                <Tile value={tiles[0]} onTileClick={() => handleClick(0)} />
                <Tile value={tiles[1]} onTileClick={() => handleClick(1)} />
                <Tile value={tiles[2]} onTileClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Tile value={tiles[3]} onTileClick={() => handleClick(3)} />
                <Tile value={tiles[4]} onTileClick={() => handleClick(4)} />
                <Tile value={tiles[5]} onTileClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Tile value={tiles[6]} onTileClick={() => handleClick(6)} />
                <Tile value={tiles[7]} onTileClick={() => handleClick(7)} />
                <Tile value={tiles[8]} onTileClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function App() {
    return (
        <>
           <Board />
        </>
    )
}

export default App
