import React from 'react';
import ReactDOM from 'react-dom';
import './tictoe.css';


class Square extends React.Component {

  isChecked = true;

  constructor(props){
  	super(props);
  	this.state = {value: props.value};
  }	


  display(value){
  	//console.log('clicked : '+value);
  	//document.getElementById('status').innerHTML='clicked : '+value;

  	this.setState({value: this.isChecked?'O':'X'});
    this.isChecked = !this.isChecked;
  }	
  render() {
    return (
      <button className="square" onClick={() => this.display(this.props.value)}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

  lastMove = 'X';

  renderSquare(i) {
    return <Square value={'-'} name={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class TicToe extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <span id="status"></span>	
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default TicToe;

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );