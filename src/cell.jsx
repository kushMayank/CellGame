import React, { Component } from "react";
class Cell extends Component {
    state = {};
    render() {
        const { cellvalue, index, handleclick } = this.props;
        let img = cellvalue.img;
        return (
            <div>
                {cellvalue.open ? (
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "1rem",
                            margin: "3px"
                        }}
                    >
                        <img src={img} height="120px" width="120px" />
                    </div>
                ) : cellvalue.present ? (
                    <div
                        style={{
                            backgroundColor: "lightgrey",
                            borderRadius: "1rem",
                            height: "120px",
                            width: "120px",
                            margin: "3px"
                        }}
                    >
                        {" "}
                    </div>
                ) : (
                            <div
                                style={{
                                    backgroundColor: "lightblue",
                                    borderRadius: "1rem",
                                    height: "120px",
                                    width: "120px",
                                    margin: "3px"
                                }}
                                onClick={() => handleclick(index)}
                            >
                                {" "}
                            </div>
                        )}
            </div>
        );
    }
}

export default Cell;
