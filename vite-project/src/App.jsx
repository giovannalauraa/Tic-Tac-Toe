// Feito por: Giovanna Laura Cravo e Silva -- Prontuário: BP3039391

// Importar useState e estilos
import { useState } from 'react';
// importando o componente Board, que retorna o quadro do jogo da velha
import { Board }  from './components/Board'
import './App.css';

// Componente principal do jogo (Game)
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Lidar com a jogada atual 
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Função para saltar para uma jogada anterior
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Mapear o histórico de jogadas para botões
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir para a jogada #' + move;
    } else {
      description = 'Ir para o começo do jogo';
    }
    return (
      <li key={move}>
        <button className="volta-tempo" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // Retorno do jogo na tela
  return (
    <div className="game">
      <div className="titulo-caixa">
        <h2 className="titulo">Jogo da Velha do Mário</h2>
      </div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

