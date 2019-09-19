import React, { Component } from "react";
import Cell from "./cell";

class Grid extends Component {
    state = {
        cellvalue: [
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-courtesy-clipart-funny-animation-4-1000.png",
                present: false,
                name: "bat.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-animated-dancing-turkey-clipart-download-1096.png",
                present: false,
                name: "chicken.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-courtesy-clipart-funny-animation-4-1000.png",
                present: false,
                name: "bat.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-you-re-welcome-clip-art-free-939.png",
                present: false,
                name: "bee.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-cute-cartoon-animals-pictures-314.png",
                present: false,
                name: "penguine.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-animated-dancing-turkey-clipart-download-1096.png",
                present: false,
                name: "chicken.png",
                open: false
            },
            {
                img: "http://pluspng.com/img-png/free-funny-animated-png-hd--426.png",
                present: false,
                name: "squerel.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-you-re-welcome-clip-art-free-939.png",
                present: false,
                name: "bee.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-cow-cartoon-funny-cute-dancing-isolated-644.png",
                present: false,
                name: "cow.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-year-of-the-monkey-clipart-tree-png-13-600.jpg",
                present: false,
                name: "monkey.jpg",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-funny-cartoon-cows-700.png",
                present: false,
                name: "owl.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-cow-cartoon-funny-cute-dancing-isolated-644.png",
                present: false,
                name: "cow.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-cute-cartoon-animals-pictures-314.png",
                present: false,
                name: "penguine.png",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-year-of-the-monkey-clipart-tree-png-13-600.jpg",
                present: false,
                name: "monkey.jpg",
                open: false
            },
            {
                img:
                    "http://pluspng.com/img-png/free-funny-animated-png-hd-funny-cartoon-cows-700.png",
                present: false,
                name: "owl.png",
                open: false
            },
            {
                img: "http://pluspng.com/img-png/free-funny-animated-png-hd--426.png",
                present: false,
                name: "squerel.png",
                open: false
            }
        ],
        open1: -1,
        open2: -1,
        count: 0,
        reset: []
    };
    handleclick = ind => {
        if (this.state.open2 === -1) {
            let cellvalue = [...this.state.cellvalue];
            cellvalue[ind].open = true;
            if (this.state.open1 != -1) this.state.open2 = ind;
            if (this.state.open1 === -1) this.state.open1 = ind;
            if (this.state.open1 != -1 && this.state.open2 != -1) {
                let result = setTimeout(
                    () => this.doCellsMatching(this.state.open1, this.state.open2),
                    1000
                );
            }
            this.setState({ cellvalue });
        }
    };
    doCellsMatching = (op1, op2) => {
        if (this.state.cellvalue[op1].name === this.state.cellvalue[op2].name) {
            this.state.cellvalue[op1].present = true;
            this.state.cellvalue[op2].present = true;
            this.state.count += 1;
        }
        this.state.cellvalue[op1].open = false;
        this.state.cellvalue[op2].open = false;
        this.setState({ open1: -1, open2: -1 });
    };
    handleReset = () => {
        this.setState({
            open1: -1,
            open2: -1,
            count: 0
        });
        let obj = this.state.cellvalue.map(element => {
            element.present = false;
            return element
        });

        this.setState({ cellvalue: obj });
    };
    intialisereset = () => {
        if (this.state.reset.length === 0) {
            // let cellvalue = JSON.parse(JSON.stringify(this.state.cellvalue));
            // this.state.reset = [...cellvalue];
            this.state.reset = [...this.state.cellvalue];
        }
    };
    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex" }} className="container">
                    {this.intialisereset()}
                    <h3>{this.state.count === 8 ? "Game Over" : ""}</h3>
                    <div className="row">
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[0]}
                            index={0}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[1]}
                            index={1}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[2]}
                            index={2}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[3]}
                            index={3}
                        ></Cell>
                    </div>
                    <div className="row">
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[4]}
                            index={4}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[5]}
                            index={5}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[6]}
                            index={6}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[7]}
                            index={7}
                        ></Cell>
                    </div>
                    <div className="row">
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[8]}
                            index={8}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[9]}
                            index={9}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[10]}
                            index={10}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[11]}
                            index={11}
                        ></Cell>
                    </div>
                    <div className="row">
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[12]}
                            index={12}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[13]}
                            index={13}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[14]}
                            index={14}
                        ></Cell>
                        <Cell
                            handleclick={this.handleclick}
                            cellvalue={this.state.cellvalue[15]}
                            index={15}
                        ></Cell>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => this.handleReset()}>
                    {this.state.count === 8 ? "New Game" : "Reset"}
                </button>
            </React.Fragment>
        );
    }
}

export default Grid;
