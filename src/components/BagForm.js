import { useState } from "react";
import PropTypes from 'prop-types';

function BagForm(props) {
  const [name, setName] = useState(props.name || "");
  const [origin, setOrigin] = useState(props.origin || "");
  const [price, setPrice] = useState(props.price || "");
  const [roast, setRoast] = useState(props.roast || "");
  const [poundsLeft, setPoundsLeft] = useState(props.poundsLeft || 130);

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrUpdateBag(
      {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        poundsLeft: poundsLeft,
        id: props.id
      }
    );
    props.handle()("pageVisible")("viewall");
  };

  const handleCancel = () => {
    props.handle()("pageVisible")("viewall");
  };

  return (
    <form onSubmit={handleSubmit} style={styles}>
      <label>
        Enter coffee name:
        <input 
            type="text" 
            value={name}
            onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Enter origin:
        <input 
            type="text" 
            value={origin}
            onChange={event => setOrigin(event.target.value)}
        />
      </label>
      <label>
        Enter coffee price per pound:
        <input 
            type="text" 
            value={price}
            onChange={event => setPrice(event.target.value)}
        />
      </label>
      <label>
        Enter coffee's roast (light, medium or dark):
        <input 
            type="text" 
            value={roast}
            onChange={event => setRoast(event.target.value)}
        />
      </label>
      <label>
        Enter pounds of this coffee in stock:
        <input 
            type="text" 
            value={poundsLeft}
            onChange={event => setPoundsLeft(event.target.value)}
        />
      </label>
      <button type="submit">Click to submit!</button>
      <button onClick={handleCancel}>Cancel bag creation</button>
    </form>
  )
}

BagForm.propTypes = {
  addOrUpdateBag: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  poundsLeft: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default BagForm;