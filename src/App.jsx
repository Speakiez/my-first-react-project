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
    const [xIsNext, setXIsNext] = useState(true);
    const [tiles, setTiles] = useState(Array(9).fill(null));

    const handleClick = (index) => {
        if (tiles[index] || calculateWinner(tiles)) return;

        const nextTiles = tiles.slice();
        if (xIsNext) {
            nextTiles[index] = "X";
        } else {
            nextTiles[index] = "O";
        }
        setTiles(nextTiles);
        setXIsNext(!xIsNext);
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

function calculateWinner(tiles) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            tiles[a] && 
            tiles[a] === tiles[b] && 
            tiles[a] === tiles[c]
        ) {
            return tiles[a];
        }
    }

    return null;
}

export default App
