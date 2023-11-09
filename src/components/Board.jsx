import { useState } from 'react';
import './Board.css'

let gameEnd = false;
let noOfClicks = 0;

function Board(){
      const [currentUser, setCurrentUser] = useState("X");
      const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);

      let status = calculateWinner();

      function calculateWinner(){
            const lines = [
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]
            ];

            for(let i=0; i<lines.length; i++){
                  let [a,b,c] = lines[i];
                  
                  if(squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])){
                        gameEnd = true;
                        return "Winner is : " + squares[a];
                  }
            }
            if(noOfClicks === 9){
                  gameEnd = true;
                  noOfClicks = 0;
                  return "No Winner";
            } else{
                  return "Next chance: " + currentUser;
            }
      }


      function changeValue(index){
            noOfClicks += 1;
            if(gameEnd){
                  setSquares([null, null, null, null, null, null, null, null, null]);
                  gameEnd = false;
            } else{
                  setSquares( currentSquares => {
                        currentSquares[index] = currentUser;
                        return [...currentSquares];
                  });
            }
            setCurrentUser(currentUser === "X" ? "O" : "X");
      }


      return(
            <div className='game'>
                  <div className="winner">{status}</div>
                  <div className="board">
                        <div className="row">
                              <div className="square" onClick={() => changeValue(0)}>{squares[0]}</div>
                              <div className="square" onClick={() => changeValue(1)}>{squares[1]}</div>
                              <div className="square" onClick={() => changeValue(2)}>{squares[2]}</div>
                        </div>
                        <div className="row">
                              <div className="square" onClick={() => changeValue(3)}>{squares[3]}</div>
                              <div className="square" onClick={() => changeValue(4)}>{squares[4]}</div>
                              <div className="square" onClick={() => changeValue(5)}>{squares[5]}</div>
                        </div>
                        <div className="row">
                              <div className="square" onClick={() => changeValue(6)}>{squares[6]}</div>
                              <div className="square" onClick={() => changeValue(7)}>{squares[7]}</div>
                              <div className="square" onClick={() => changeValue(8)}>{squares[8]}</div>
                        </div>
                  </div>
            </div>
      )
}

export default Board;