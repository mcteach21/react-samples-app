import React from "react";
import Board from "./components/board.js";


class Memory extends React.Component {

    handleClick = (e) => {
        console.log(e.target.value);
    }

    render() {
        return(
            <div>
                <h2>Memory Game!</h2>
                <Board dimemsion="6" click={(e)=>this.handleClick} />
            </div>
        );
    }

}

export default Memory;