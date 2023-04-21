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

  render() {
    return (
      <div className="bagEntry">
        <h3>{this.props.name}</h3>
        <h3>{this.props.origin}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.roast}</h3>
        <h3>{this.props.poundsLeft}</h3>
        <button onClick={this.onClickDetails}>View Details</button>
        <button onClick={this.onClickEdit}>Edit</button>
      </div>
    );
  }
}

export default BagEntry;