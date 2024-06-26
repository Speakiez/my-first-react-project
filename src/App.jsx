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

function Board({ xIsNext, tiles, onPlay }) {
    const winner = calculateWinner(tiles);
    let currentStatus;

    const handleClick = (index) => {
        if (tiles[index] || calculateWinner(tiles)) return;

        const nextTiles = tiles.slice();
        if (xIsNext) {
            nextTiles[index] = "X";
        } else {
            nextTiles[index] = "O";
        }
        
        onPlay(nextTiles);
    }

    if (winner) {
        currentStatus = "Winner: " + winner;
    } else {
        currentStatus = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>  
            <div className="status">{ currentStatus }</div>
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
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentTiles = history[currentMove];

    function handlePlay(nextTiles) {
        const nextHistory = ([...history.slice(0, currentMove + 1), nextTiles]);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo (nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((tiles, move) => {
        let description;

        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} tiles={currentTiles} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
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
