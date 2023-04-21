import { Component } from "react";

class BagEntry extends Component
{
  onClickDetails = () => {
    this.props.handle()("pageVisible")("details");
    this.props.handle()("idVisible")(this.props.key);
  }

  render() {
    return (
      <div className="bagEntry">
        <h3>{this.props.name}</h3>
        <h3>{this.props.origin}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.roast}</h3>
        <button onClick={this.onClickDetails} >View Details</button>
      </div>
    );
  }
}

export default BagEntry;