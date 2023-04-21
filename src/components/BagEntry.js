import { Component } from "react";

class BagEntry extends Component
{
  onClickDetails = () => {
    this.props.handle()("idVisible")(this.props.id);
    this.props.handle()("pageVisible")("details");
  };
  onClickEdit = () => {
    this.props.handle()("idVisible")(this.props.id);
    this.props.handle()("pageVisible")("updateform");
  };

  outerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightblue"
  };

  innerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  pStyle = {
    margin: "0",
    padding: "0"
  };

  render() {
    return (
      <div className="bagEntry" style = {this.outerStyle}>
        <div style = {this.innerStyle}>
          <h2>{this.props.name}:</h2>
          <p style = {this.pStyle}>Price per lb: {this.props.price} </p>
          <p style = {this.pStyle}>{this.props.roast} </p>
          <p style = {this.pStyle}>Pounds left: {this.props.poundsLeft}</p>
        </div>
        <div style = {this.innerStyle}>
          <button onClick={this.onClickDetails}>View Details/Sell</button>
          <button onClick={this.onClickEdit}>Edit</button>
        </div>
      </div>
    );
  }
}

export default BagEntry;