import { Component } from "react";

class BagEntry extends Component
{
  onClickDetails = () => {
    this.props.handle()("pageVisible")("details");
  }

  render() {
    return (
      <div className="bagEntry">
        <h3>{this.props.name}</h3>
        <h3>{this.props.origin}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.roast}</h3>
        <button onClick={this.props.handle} ></button>
      </div>
    );
  }
}

export default BagEntry;