import { useState } from 'react';
import './Board.css'

function Board(){
      const [currentUser, setCurrentUser] = useState("X");
      // const [value, setValue] = useState("");
      const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);

      function changeValue(index){
            setSquares( currentSquares => {
                  currentSquares[index] = currentUser;
                  console.log(currentSquares)
                  return [...currentSquares];
            });
            setCurrentUser(currentUser === "X" ? "O" : "X");
            console.log(currentUser)
      }

      return(
            <div className="board">
                  <div className="row">
                        <div className="square" onClick={() => changeValue(0)}>{squares[0]}</div>
                        <div className="square" onClick={() => changeValue(1)}>{squares[1]}</div>
                        <div className="square"></div>
                  </div>
                  <div className="row">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                  </div>
                  <div className="row">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                  </div>
            </div>
      )
}

export default Board;