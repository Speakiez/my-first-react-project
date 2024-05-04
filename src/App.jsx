import { useState } from "react";

function Tile() {
    const [value, setValue] = useState(null);

    const handleClick = event => setValue("X")

    return (
        <button 
            className="board-tile"
            onClick={handleClick}
        >
            {value}    
        </button>
    )
}

function Board() {
    return (
        <>  
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
        </>
    );
}

function App() {
    return (
        <>
           <Board />
        </>
    );
}

export default App
