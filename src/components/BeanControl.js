import { Component } from "react";
import BagList from "./BagList";
import BagDetails from "./BagDetails";
import React from "react";
import BagForm from "./BagForm";

class BeanControl extends Component
{
  constructor()
  {
    super();
    this.state = {
      pageVisible: "viewall",
      bags: [
        {
          name: "Smoky Delight",
          origin: "Lithuania",
          price: "4.50",
          roast: "Dark",
          id: 0,
          poundsLeft: 130.0
        }
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

  addOrUpdateBag = (bag) => {
    if(this.state.bags.filter(b=>b.id===bag.id).length === 0)
    {
      this.changeState()("bags")(
        [...this.state.bags, 
        {
          ...bag,
          id: this.state.bags.length
        }]
      );
    } else {
      this.changeState()("bags")(
        [
          {
            ...bag,
            id: bag.id
          },
          ...this.state.bags.filter(b=> b.id !== bag.id), 
        ]
      );
    }
  };

  render()
  {
    let mainElement = null;

    switch(this.state.pageVisible){
    case "viewall": default:
        mainElement = 
        <BagList bags = {this.state.bags}
                 handle = {this.changeState}/>; break;

    case "details": 
        {const thisBag = this.state.bags.filter(
                                         bag => bag.id === this.state.idVisible)
                                         [0];
        mainElement = 
        <BagDetails bag = {thisBag}
                    handle = {this.changeState}
                    addOrUpdateBag = {this.addOrUpdateBag}/>; break;}
    case "form":
         mainElement = 
         <BagForm addOrUpdateBag = {this.addOrUpdateBag}
                  handle = {this.changeState}/>; break;
    case "updateform":
         {const thisBag = this.state.bags.filter(
                                          bag => bag.id === this.state.idVisible)
                                          [0];
         mainElement = 
         <BagForm addOrUpdateBag = {this.addOrUpdateBag}
                  handle = {this.changeState}
                  name = {thisBag.name}
                  origin = {thisBag.origin}
                  price = {thisBag.price}
                  roast = {thisBag.roast}
                  poundsLeft = {thisBag.poundsLeft}
                  id = {thisBag.id}/>; break;}
    }

    return (
      <React.Fragment>
        {mainElement}
      </React.Fragment>
    );
  }
}

export default BeanControl;