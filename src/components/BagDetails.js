import { Component } from "react";

class BagDetails extends Component
{
  onClickBack = () => {
    this.props.handle()("pageVisible")("viewall");
  };

  render() {
    return (
      <div className="bagDetails">
        <h2>Name: {this.props.bag.name}</h2>
        <h2>Origin: {this.props.bag.origin}</h2>
        <h2>Price: {this.props.bag.price}</h2>
        <h2>Roast: {this.props.bag.roast}</h2>
        <button onClick={this.onClickBack}>Back to main list</button>
      </div>
    );
  }
}

export default BagDetails;