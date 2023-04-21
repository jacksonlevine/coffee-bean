import { Component } from "react";
import PropTypes from 'prop-types';

class BagDetails extends Component
{
  onClickBack = () => {
    this.props.handle()("pageVisible")("viewall");
  };
  onClickSell = () => {
    this.props.addOrUpdateBag(
      {
        name: this.props.bag.name,
        origin: this.props.bag.origin,
        price: this.props.bag.price,
        roast: this.props.bag.roast,
        poundsLeft: Math.max(this.props.bag.poundsLeft-1, 0),
        id: this.props.bag.id
      }
    );
  };

  render() {
    return (
      <div className="bagDetails">
        <h2>Name: {this.props.bag.name}</h2>
        <h2>Origin: {this.props.bag.origin}</h2>
        <h2>Price: {this.props.bag.price}</h2>
        <h2>Roast: {this.props.bag.roast}</h2>
        <h2>Pounds left: {this.props.bag.poundsLeft}</h2>
        <button onClick={this.onClickBack}>Back to main list</button>
        <button onClick={this.onClickSell}>Sell a pound of this</button>
      </div>
    );
  }
}

BagDetails.propTypes = {
  bag: PropTypes.object.isRequired,
  handle: PropTypes.func.isRequired,
  addOrUpdateBag: PropTypes.func.isRequired
};

export default BagDetails;