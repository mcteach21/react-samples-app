import React from "react";
import Memory from "../memory";

class Board extends React.Component {
    // title = 'Next Move : ';
    // lastMove = 'X';
    // itsOver = false;

    boxes = [];
    constructor(props) {
        super(props);

        this.state={dimension : props.dimemsion, click: props.click};
        this.message='';

        this.init();
    }
    init(){
        let total_boxes = parseInt(this.state.dimension)*parseInt(this.dimension);
        for (let i = 0; i < total_boxes; i++)
            this.boxes.push(null);
    }

    // renderSquare(i) {
    //     //return <Square value={'-'} name={i} click={()=>this.onItemClick(i)} />;
    //     return <button className="box" onClick={()=>this.onItemClick(i)}>Box {i}</button>;
    // }
    renderLine(i) {
        let content = [];
        for (let j = 0; j < parseInt(this.state.dimension); j++)
            content.push(<button className="box" onClick={this.state.click}>{i}x{j}</button>)
        return content;
    }
    create() {
        let n=0;
        let contents = [];

        contents.push(<div className="status" id="status">{this.message}</div>);
        for (let i = 0; i < parseInt(this.state.dimension); i++)
            contents.push(<div className="board-row">{this.renderLine(i)}</div>);
        return contents;
    }
    render() {
        // return (
        //   <div>
        //       {this.createBoard()}
        //   </div>
        // );
        const e = React.createElement;
        return e('div', {}, this.create());
    }

    // onItemClick(i) {
    //     alert('ok');
    //
    //     // if(this.itsOver || this.moves[i]!=null)
    //     //     return;
    //     //
    //     // document.getElementById('status').innerHTML=this.title+ ' '+this.lastMove;
    //     // this.lastMove = this.lastMove=='X'?'O':'X';
    //     // this.moves[i]=this.lastMove;
    //     //
    //     // document.getElementById('sq'+i).innerHTML=this.lastMove;
    //     // document.getElementById('sq'+i).style.color = this.lastMove==='X'?'blue':'crimson';
    //     //
    //     // this.itsOver=this.checkMoves();
    //     // if(this.itsOver){
    //     //     document.getElementById('status').innerHTML='Game Over!'; //The winner is : '+i+'!';
    //     // }
    // }



    // checkMoves(){
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ];
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (this.moves[a] && this.moves[a] === this.moves[b] && this.moves[a] === this.moves[c]) {
    //
    //             document.getElementById('sq'+a).classList.add("red-border");
    //             document.getElementById('sq'+b).classList.add("red-border");
    //             document.getElementById('sq'+c).classList.add("red-border");
    //
    //             return true;
    //         }
    //     }
    //     return false;
    //
    // }


}
export default Board;