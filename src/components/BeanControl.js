import { Component } from "react";
import BagList from "./BagList";
import BagDetails from "./BagDetails";
import React from "react";


class BeanControl extends Component
{
  constructor()
  {
    super();
    this.state = {
      pageVisible: "viewall",
      bags: [
        {
          name: "test2",
          origin: "Lithuania",
          price: "4.50 per pound",
          roast: "dark",
          id: 1,
        } //seed remove this later
      ],
      idVisible: 0
    }
  }

  changeState = () => (property) => (newValue) => {
    this.setState(
      {
        [property]: newValue
      }
    );
  };

  render()
  {
    let mainElement = null;

    switch(this.state.pageVisible){
    case "viewall": 
        mainElement = 
        <BagList bags = {this.state.bags}
                 handle = {this.changeState}/>; break;

    case "details": 
        const thisBag = this.state.bags.filter(
                                         bag => bag.id === this.state.idVisible)[0];
        mainElement = 
        <BagDetails bag = {thisBag}
                    handle = {this.changeState}/>; break;
    }

    return (
      <React.Fragment>
        {mainElement}
      </React.Fragment>
    );
  }
}

export default BeanControl;