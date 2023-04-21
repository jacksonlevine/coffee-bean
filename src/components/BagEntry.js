import { Component } from "react";
import PropTypes from 'prop-types';

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
  onClickDelete = () => {
    this.props.handle()("idVisible")(this.props.id);
    this.props.handle()("pageVisible")("confirmdelete");
  };

  outerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: this.props.dispIndex % 2 === 0 ? "lightblue" : "yellow"
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
          <h2>{this.props.name}!</h2>
          <p style = {this.pStyle}>Price per lb: {this.props.price} </p>
          <p style = {this.pStyle}>Roast style: {this.props.roast} </p>
          <p style = {this.pStyle}>Pounds left: {this.props.poundsLeft}</p>
        </div>
        <div style = {this.innerStyle}>
          <button onClick={this.onClickDetails}>View Details/Sell</button>
          <button onClick={this.onClickEdit}>Edit</button>
          <button onClick={this.onClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

BagEntry.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  poundsLeft: PropTypes.number.isRequired,
  id: PropTypes.number
};

export default BagEntry;