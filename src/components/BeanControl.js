import { Component } from "react";
import BagList from "./BagList";
import BagDetails from "./BagDetails";


class BeanControl extends Component
{
  constructor()
  {
    super();
    this.state = {
      pageVisible: "viewall",
      bags: [],
      idVisible: 0
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
    let mainElement = null;

    switch(this.state.pageVisible){
    case "viewall": 
        mainElement = 
        <BagList bags = {this.state.bags}
                handle = {this.changeState}/>; break;

    case "details": 
        const thisBag = this.state.bags.filter(
                                         bag => bag.key === this.state.idVisible)[0];
        mainElement = 
        <BagDetails bag = {thisBag}/>; break;
    }

    return (
      {mainElement}
    );
  }
}