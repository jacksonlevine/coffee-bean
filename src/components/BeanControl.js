import { Component } from "react";


class BeanControl extends Component
{
  constructor()
  {
    super();
    this.state = {
      pageVisible: "viewall",
      bags: []
    }
  }

  changeState = () => (property) => (newValue) => {
    this.setState(
      {
        [property]: newValue
      }
    );
  }

  render()
  {
    return (
      <div className="bagList">
            {this.state.bags.map(
                (bag, index) =>
                    <BagEntry
                        name = {bag.name}
                        origin = {bag.origin}
                        price = {bag.price}
                        roast = {bag.roast}
                        key = {index}/>
            )}
      </div>
    );
  }
}