import { Component } from "react";
import BagList from "./BagList";


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
    let mainElement = null;

    switch(this.state.pageVisible){
      case "viewall": mainElement = 
      <BagList bags = {this.state.bags}/>; 
      break;
    }

    return (
      {mainElement}
    );
  }
}