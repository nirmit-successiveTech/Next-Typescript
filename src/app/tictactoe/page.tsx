"use client";

import { Board,Winner,Player } from "@/types";
import React, { useState } from "react";

const TicTac: React.FC = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Winner>(null);

  const patterns: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkBoard = (newBoard: Board): Winner => {
    for (const p of patterns) {
      const [a, b, c] = p;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a] as Player;
      }
    }
    if (!newBoard.includes(null)) {
      return "Draw";
    }

    return null;
  };

  const handleClick = (index: number): void => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;

    const result = checkBoard(newBoard);
 

    if (result) {
           setBoard(newBoard);
      setWinner(result);
    } else {
           setBoard(newBoard);
      setPlayer("O");
      setTimeout(() => aiMove(newBoard), 500);
    }
  };

  const aiMove = (currentBoard: Board): void => {
    if (winner) return;
    const emptyIndices: number[] = [];
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] == null) emptyIndices.push(i);
    }
    if (emptyIndices.length === 0) return;
    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)]; // random number regenerated
   const newBoard = [...currentBoard]; 
    newBoard[randomIndex] = "O";

    const result = checkBoard(newBoard);
    setBoard(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setPlayer("X");
    }
  };

  const restart = (): void => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPlayer("X");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "10px",
          justifyContent: "center",
          paddingTop:'150px',
          marginBottom: "20px",
        }}
      >
        {board.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "60px",
              fontSize: "24px",
              fontWeight: "bold",
              border: "2px solid #333",
              borderRadius:"5px",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {winner ? (
          winner === "Draw" ? (
            <p>It is a draw!</p>
          ) : (
            <p>Winner: {winner}</p>
          )
        ) : (
          <p>Current Player: {player}</p>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={restart}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TicTac;