// Componente de quadrado (Square) -> Ele cria o quadrado e insere o valor correspondente ao ser clicado
export function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
