import { Component } from "react";

class BagDetails extends Component
{
  render() {
    return (
      <div className="bagDetails">
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default BagDetails;