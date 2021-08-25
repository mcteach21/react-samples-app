import React from 'react';
import './tictoe.css';


class Square extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {value: props.value, id: 'sq'+props.name, click: props.click};
  }
  render() {
    return (
      <button className="square" id={this.state.id} onClick={this.state.click}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  title = 'Next Move : ';
  lastMove = 'X';
  itsOver = false;
  moves = [];

  constructor(props) {
      super(props);
      this.initMoves();
  }
  onItemClick(i) {
      if(this.itsOver)
          return;

      document.getElementById('status').innerHTML=this.title+ ' '+this.lastMove;
      this.lastMove = this.lastMove=='X'?'O':'X';
      this.moves[i]=this.lastMove;

      document.getElementById('sq'+i).innerHTML=this.lastMove;


      this.itsOver=this.checkMoves();
      if(this.itsOver){
          document.getElementById('status').innerHTML='The winner is : '+i+'!';
      }
  }

  renderSquare(i) {
    return <Square value={'-'} name={i} click={()=>this.onItemClick(i)} />;
  }
  initMoves(){
      for (let i = 0; i < 9; i++)
          this.moves.push(null);
  }
  checkMoves(){
      return (this.moves[0]!=null && this.moves[0]==this.moves[1] && this.moves[1]==this.moves[2])
          || (this.moves[3]!=null && this.moves[3]==this.moves[4] && this.moves[4]==this.moves[5])
          || (this.moves[6]!=null && this.moves[6]==this.moves[7] && this.moves[7]==this.moves[8])
          || (this.moves[4]!=null && this.moves[0]==this.moves[4] && this.moves[4]==this.moves[8])
          || (this.moves[4]!=null && this.moves[2]==this.moves[4] && this.moves[4]==this.moves[6])
          || (this.moves[3]!=null && this.moves[0]==this.moves[3] && this.moves[3]==this.moves[6])
          || (this.moves[4]!=null && this.moves[1]==this.moves[4] && this.moves[4]==this.moves[7])
          || (this.moves[5]!=null && this.moves[2]==this.moves[5] && this.moves[5]==this.moves[8]);

      //TODO : simplify!
  }
  createBoard() {
      let n=0;

      let contents = [];
      contents.push(<div className="status" id="status">{this.title+ ' '+this.lastMove}</div>);
      for (let i = 0; i < 3; i++) {
          contents.push(<div className="board-row">{this.renderSquare(n++)}{this.renderSquare(n++)}{this.renderSquare(n++)}</div>);
      }
      return contents;
  }
  render() {
     // return (
     //   <div>
     //       {this.createBoard()}
     //   </div>
     // );
      const e = React.createElement;
      return e('div', {}, this.createBoard());
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